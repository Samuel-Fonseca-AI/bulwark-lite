# Bulwark Lite 1.21.0 (6a0a1ca)

A static build of Bulwark Webmail: the same mail, calendar, contacts and files
client, without the Node.js server. Upload this folder to any static host and
point it at your Stalwart (or other JMAP) server.

Built for mount path: / (site root)
Locales included: ar, ca, cs, da, de, el, en, es, et, fa, fr, he, hu, it, ja, ko, lv, mn, nb, nl, nn, pl, pt, ro, ru, sk, th, tr, uk, vi, zh, zh-TW

## Three steps

1. Unzip this archive and upload the whole folder to your web host, so that
   `/index.html` and `/config.json` are served from the mount path above.
2. Edit `config.json`:
   - `jmapServerUrl`: your mail server, e.g. `https://mail.example.com`.
   - `appName`: the name shown in the tab and on the login page.
   - `allowCustomJmapEndpoint` (optional): `true` always shows a server field
     on the login page, `false` never does. Left out, the field shows only
     while `jmapServerUrl` is empty.
   - `rememberMeEnabled`: `false` never remembers a sign-in (sessions then end with the tab).
     Sign-ins are otherwise remembered; `loginShowRememberMe: true` lets people choose.
   - `noThirdPartyTraffic`: `true` keeps the browser off every built-in outside host
     (no Google Maps links on event addresses; see the third-party traffic docs).
   - `oauthRevokeOnSignOut`: `false` keeps the refresh token valid at the server on
     sign-out, so Stalwart 1.0 does not ask for consent again on the next sign-in.
   Optional keys: `demoMode`, `jmapServers`, `jmapServerAutoPickByDomain`, the login logo/company/link keys and `loginShow*` toggles (same names as the Docker env vars, camelCased).
3. Allow the browser to talk to the mail server (CORS). In Stalwart, turn on
   the `usePermissiveCors` setting of the `Http` object: in the web admin
   under **Settings > Network > HTTP > Security** ("Permissive CORS policy"),
   or with

   ```bash
   stalwart-cli update Http --field usePermissiveCors=true
   stalwart-cli create Action/ReloadSettings
   ```

   or over JMAP as an administrator: `x:Http/set` with
   `{"update": {"singleton": {"usePermissiveCors": true}}}`. It applies once
   the settings are reloaded (the `ReloadSettings` action) or Stalwart
   restarts. On the current 1.0 pre-releases `ReloadSettings` fails while the
   stock spam-filter rules are loaded, so restart Stalwart there instead.
   Stalwart 0.16 and later ignore the `[http] permissive-cors` key of the old
   TOML configuration.

   A reverse-proxy rule works too if it allows your Lite origin with the
   `Authorization` and `Content-Type` headers on `/.well-known/jmap`, `/jmap/*`,
   `/api/auth`, `/auth/token` and, for Stalwart 1.0, `/auth/register`.

## Host configuration

Deep links such as `/en/mail/thread/abc` are served by the shell at
`/en/mail/index.html`. Configure your host to fall back to it:

- Netlify / Cloudflare Pages: the shipped `_redirects` and `_headers` files do this.
- nginx: see `nginx.conf.example`.
- Caddy: see `Caddyfile.example`.
- GitHub Pages and other hosts without rewrites: `404.html` replays the link
  in the browser. It works, with one extra page load.

`_headers` also carries the recommended security headers. Adjust
`connect-src` to your JMAP server's origin if you prefer a strict policy.

## What is different from the full Bulwark Webmail

Everything that runs in the browser works: mail, threads, search, compose,
multiple accounts, calendar, contacts, files, themes, settings export/import,
password and TOTP login, demo mode, deep links.

Not available in Lite (they need the Node.js server): the admin console and
setup wizard, plugins and sidebar apps, settings sync across devices, the
account security tab (app passwords, 2FA setup), ICS URL subscriptions and
CalDAV discovery, sender favicons, office (WOPI) editing, web push
notifications, the update banner, device pairing, and the "Default apps" page
(registering Lite as the mailto:/webcal: handler).

OAuth / SSO login is not in this build. It is in Lite when Stalwart serves it
as an Application (`npm run build:lite -- --target=stalwart`, or the
`bulwark-lite-stalwart.zip` of a release): accounts whose domain signs in at an
OpenID provider are sent there, and setting the Application's
`oauthClientId` adds **Sign in with SSO**. That bundle's README explains it.

## Security notes

- No cookies and no server session. Requests to the mail server carry the
  token or credentials of the signed-in account only.
- "Remember me" keeps a Stalwart refresh token in the browser's localStorage
  (a plain token, never the password). Without "remember me" the token lives
  in sessionStorage and the session ends with the tab. Both are readable by
  any script running on your Lite origin, so serve Lite from an origin you
  control and keep the Content-Security-Policy from `_headers`.
- Servers without Stalwart's token login (`/api/auth`) fall back to Basic
  auth. "Remember me" is then hidden; the credentials stay in sessionStorage
  for the lifetime of the tab so a reload does not sign you out. The same
  fallback applies when a reverse proxy in front of Stalwart answers
  `/api/auth` without CORS headers: the login still works, but "remember me"
  then only lasts for the tab, so add the CORS rule from step 3 there too.
- Because the export contains inline scripts, `script-src` must allow
  `'unsafe-inline'`. Email HTML is still rendered sanitised in a sandboxed
  frame, exactly as in the full build.
