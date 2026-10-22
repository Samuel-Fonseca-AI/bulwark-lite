interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

const LOCALES = new Set([
  "ar", "ca", "cs", "da", "de", "en", "es", "et", "fa", "fr", "he", "hu",
  "it", "ja", "ko", "lv", "mn", "nb", "nl", "pl", "pt", "ro", "ru", "sk",
  "tr", "uk", "zh", "zh-TW",
]);

const SHELLS = new Set([
  "apps", "calendar", "contacts", "files", "login", "mail", "pro", "settings",
]);

/**
 * Return the shell directory for a locale path, or null when the request is a
 * real file (config.json, _next/..., icons) that should be served as-is.
 */
function shellFor(segments: string[]): string | null {
  if (segments.length === 0) return null;
  const [locale, first, second, third] = segments;
  if (!LOCALES.has(locale)) return null;
  if (segments.length === 1) return locale;
  if (first === "auth" && second === "callback") return `${locale}/auth/callback`;
  if (first === "plugins" && second === "oauth" && third === "callback") {
    return `${locale}/plugins/oauth/callback`;
  }
  if (SHELLS.has(first)) return `${locale}/${first}`;
  return null;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return env.ASSETS.fetch(request);
    }

    const url = new URL(request.url);
    const segments = url.pathname.split("/").filter(Boolean);

    let targetPath: string | null = null;
    if (segments.length === 0) {
      targetPath = "/index.html";
    } else {
      const shell = shellFor(segments);
      if (shell) targetPath = `/${shell}/index.html`;
    }

    if (!targetPath) return env.ASSETS.fetch(request);

    const target = new URL(targetPath, url);
    target.search = url.search;
    return env.ASSETS.fetch(new Request(target.toString(), request));
  },
};
