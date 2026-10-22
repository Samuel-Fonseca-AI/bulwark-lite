# Cambios respecto al build oficial

Este repositorio redistribuye el build `bulwark-lite-<version>.zip` publicado por
[bulwarkmail/webmail](https://github.com/bulwarkmail/webmail). El contenido es el
del release, con estos cambios de despliegue:

1. **Enrutamiento**: el build oficial trae 27 idiomas x 5 superficies = 135 reglas
   en `_redirects`. Workers Static Assets admite 100 dinámicas y su detector de
   bucles rechaza destinos `index.html`. Se elimina `_redirects` del despliegue y
   `src/index.ts` sirve el shell correspondiente para deep links y rutas de
   directorio.
2. **`_headers`**: se añade `Cache-Control: no-cache` para `config.json` y
   `lite-build.json`, para que los cambios de configuración y la versión se vean
   en la siguiente carga.
3. **`config.json`**: se reemplaza por el archivo versionado en `config/config.json`
   para conservar el nombre de la app y el servidor JMAP entre actualizaciones.
4. **CSP `connect-src`**: si la variable `JMAP_ORIGIN` está definida, el workflow
   fija ese origen en el Content-Security-Policy. Si no, se conserva `*`.

No se modifica el código de la aplicación.
