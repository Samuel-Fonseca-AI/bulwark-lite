# Cambios respecto al build oficial

Este repositorio redistribuye el build `bulwark-lite-<version>.zip` publicado por
[bulwarkmail/webmail](https://github.com/bulwarkmail/webmail). El contenido es el
del release, con estos cambios de despliegue:

1. **`_redirects`**: el build oficial trae 27 idiomas x 5 superficies = 135 reglas
   con splat. Cloudflare Workers Static Assets admite 100 reglas dinámicas. Se
   reemplazan por cinco reglas con placeholder (`:locale`), una por superficie.
2. **`_headers`**: se añade `Cache-Control: no-cache` para `config.json` y
   `lite-build.json`, para que los cambios de configuración y la versión se vean
   en la siguiente carga.
3. **`config.json`**: se reemplaza por el archivo versionado en `config/config.json`
   para conservar el nombre de la app y el servidor JMAP entre actualizaciones.
4. **CSP `connect-src`**: si la variable `JMAP_ORIGIN` está definida, el workflow
   fija ese origen en el Content-Security-Policy. Si no, se conserva `*`.

No se modifica el código de la aplicación.
