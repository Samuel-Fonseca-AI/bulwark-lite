# Bulwark Lite 1.17.0 (0650067)

A static build of Bulwark Webmail: the same mail, calendar, contacts and files
client, without the Node.js server. Upload this folder to any static host and
point it at your Stalwart (or other JMAP) server.

Built for mount path: / (site root)
Locales included: ar, ca, cs, da, de, en, es, et, fa, fr, he, hu, it, ja, ko, lv, mn, nb, nl, pl, pt, ro, ru, sk, tr, uk, zh, zh-TW

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
   Optional keys: `demoMode`, `jmapServers`, `jmapServerAutoPickByDomain`, the login logo/company/link keys and `loginShow*` toggles (same names as the Docker env vars, camelCased).
3. Allow the browser to talk to the mail server (CORS). In Stalwart:

   ```toml
   [http]
   permissive-cors = true
   ```

   or an equivalent reverse-proxy rule that allows your Lite origin with the
   `Authorization` and `Content-Type` headers on `/.well-known/jmap`, `/jmap/*`,
   `/api/auth` and `/auth/token`.

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
setup wizard, plugins and sidebar apps, settings sync across devices, OAuth /
SSO login, the account security tab (app passwords, 2FA setup), ICS URL
subscriptions and CalDAV discovery, sender favicons, office (WOPI) editing,
web push notifications, the update banner, device pairing, and the
"Default apps" page (registering Lite as the mailto:/webcal: handler).

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
