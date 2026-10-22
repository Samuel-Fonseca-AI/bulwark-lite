# Bulwark Lite — espejo automático en Cloudflare Workers

Espejo **no oficial** de [Bulwark Lite](https://bulwarkmail.org/docs/getting-started/lite),
el build estático de [Bulwark Webmail](https://github.com/bulwarkmail/webmail).
Un workflow de GitHub Actions descarga el asset `bulwark-lite-<version>.zip` de
cada release, verifica su SHA-256, lo descomprime, conserva la configuración local
y lo despliega en **Cloudflare Workers Static Assets**.

- **Producción:** https://bulwark-lite.samfonrojas.workers.dev
- **Upstream:** https://github.com/bulwarkmail/webmail
- **Versión desplegada:** `VERSION` / `deployed.json`

## Cómo funciona

| Rama | Contenido |
|---|---|
| `main` | Workflow, `config/`, `wrangler.jsonc`, README y avisos legales. |
| `site` | Rama huérfana rodante con el build actual. Se reemplaza en cada release. |

La rama `site` evita que el repositorio crezca ~83 MB por release. El workflow
hace force-push de una única instantánea del build; el historial de `main` queda
para la automatización y la configuración.

Cada ejecución:

1. Consulta `releases/latest` de `bulwarkmail/webmail` (o el tag indicado).
2. Compara versión y digest con `VERSION` / `deployed.json`; si no cambió, termina.
3. Descarga el ZIP y su `.sha256` con `gh release download`.
4. Verifica el checksum y, si está disponible, la atestación de build de GitHub.
5. Descomprime y valida: `lite-build.json`, archivos requeridos, ≤20,000 archivos
   y ≤25 MiB por archivo.
6. Sustituye `config.json`, elimina `_redirects` y añade las cabeceras de caché.
7. Despliega con `wrangler deploy`: assets estáticos más un shim mínimo de
   enrutamiento (`src/index.ts`) que sirve el shell correcto para deep links.
8. Hace smoke test de `/`, `/en/mail/`, un deep link, `/config.json` y
   `/lite-build.json`.
9. Si todo pasa, publica la rama `site` y actualiza `VERSION` en `main`.
10. Si el smoke test falla, ejecuta `wrangler rollback`.

## Actualizar ahora o hacer rollback

El cron corre **todos los lunes a las 06:00 UTC**. Para no esperar:

```bash
# Última release
gh workflow run sync-and-deploy.yml

# Una versión concreta (rollback o pin temporal)
gh workflow run sync-and-deploy.yml -f version=1.16.0 -f force=true

# Solo descargar y validar, sin desplegar
gh workflow run sync-and-deploy.yml -f validate_only=true

gh run watch
```

Un rollback manual es temporal: el siguiente cron volverá a la última release.
Para quedarte en una versión, desactiva el schedule o cambia el cron en
`.github/workflows/sync-and-deploy.yml`.

## Configuración de Bulwark

`config/config.json` se copia sobre el del ZIP en cada actualización. Para fijar
tu servidor Stalwart:

```json
{
  "appName": "Mi Webmail",
  "jmapServerUrl": "https://mail.example.com",
  "allowCustomJmapEndpoint": false,
  "rememberMeEnabled": true,
  "demoMode": false
}
```

- `jmapServerUrl` es el **origen** del servidor, sin `/jmap` ni `/.well-known/jmap`.
- Si lo dejas vacío y `allowCustomJmapEndpoint` es `true`, el usuario escribe el
  servidor en el login.
- `demoMode: true` deja el sitio navegable sin servidor de correo.

Después de editar `config/config.json`, ejecuta el workflow con `force=true`
(o espera al lunes).

### CORS de Stalwart

Lite corre en el navegador y habla **directamente** con Stalwart. El servidor debe
permitir el origen del Worker:

```bash
stalwart-cli update Http --field usePermissiveCors=true
stalwart-cli create Action/ReloadSettings
```

O, en el reverse proxy, permite `Authorization` y `Content-Type` en
`/.well-known/jmap`, `/jmap/*`, `/api/auth` y `/auth/token` para el origen
`https://bulwark-lite.samfonrojas.workers.dev`.

Sin CORS, el sitio carga pero el login falla.

## Cloudflare

El Worker se llama `bulwark-lite` y se publica en `workers.dev`; no toca los
Workers existentes de la cuenta.

Variables y secretos del repositorio:

| Nombre | Tipo | Valor |
|---|---|---|
| `CLOUDFLARE_ACCOUNT_ID` | Variable | `87af8ff1640832c3666e40d9ffe449ff` |
| `WORKER_URL` | Variable | `https://bulwark-lite.samfonrojas.workers.dev` |
| `JMAP_ORIGIN` | Variable (opcional) | `https://mail.example.com` para fijar el CSP |
| `CLOUDFLARE_API_TOKEN` | Secret | Token con `Workers Scripts:Edit` |

Crear el token en <https://dash.cloudflare.com/profile/api-tokens> con la plantilla
**Edit Cloudflare Workers**, limitado a la cuenta. Añadirlo como secret
`CLOUDFLARE_API_TOKEN` en **Settings → Secrets and variables → Actions**.

## Límites y decisión de enrutamiento

El build oficial trae **135 reglas dinámicas** en `_redirects` (27 idiomas × 5
superficies). Workers Static Assets admite **100**, y además su detector de bucles
rechaza los destinos que terminan en `index.html` cuando la canonicalización de
HTML está activa. Por eso el ZIP no se publica con `_redirects`: el enrutamiento
lo resuelve `src/index.ts`.

El shim solo hace tres cosas:

1. `/<locale>` y `/<locale>/` → `/<locale>/index.html`
2. `/<locale>/<surface>[/...]` → `/<locale>/<surface>/index.html`
3. Todo lo demás (`_next`, payloads RSC `.txt`, `config.json`, iconos) →
   `env.ASSETS.fetch`.

No hay backend ni estado; los archivos siguen siendo estáticos. `html_handling`
es `none` para que el shim controle las rutas, y `not_found_handling: "404-page"`
queda como red de seguridad con el `404.html` oficial.

El build actual tiene 2,133 archivos, 293 MB descomprimidos y un máximo de 2.51 MB
por archivo, dentro de los límites de Workers (20,000 archivos / 25 MiB).

## Legal

Bulwark es **AGPL-3.0**. Este espejo incluye `LICENSE`, `NOTICE`,
`MIRROR-NOTICE.md` y `CHANGES.md` con los cambios de despliegue y el enlace al
código fuente del tag exacto. No es un sitio oficial.
