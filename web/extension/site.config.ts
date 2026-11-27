const PRODUCTION_ORIGIN = process.env.OPENTUNE_WEB_ORIGIN || 'https://justshivv.github.io';
const PRODUCTION_PATH = process.env.OPENTUNE_WEB_PATH || '/Opentune/player/';

export { PRODUCTION_ORIGIN };

/** Node evaluates this file while generating the manifest, before Vite injects runtime constants. */
export function matchPatternsFor(origins: readonly string[]): string[] {
  return origins.map((origin) =>
    origin === PRODUCTION_ORIGIN
      ? `${origin}${PRODUCTION_PATH}*`
      : `${new URL(origin).protocol}//${new URL(origin).hostname}/*`,
  );
}

/** Only the NepTune player path on GitHub Pages may use the session bridge. */
export const SITE_ORIGINS = [PRODUCTION_ORIGIN, ...(process.env.OPENTUNE_STORE_BUILD === '1' ? [] : ['http://localhost:5173'])];
