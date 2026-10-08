// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

/** lastmod del mapa del sitio: la fecha `updated` de cada entrada, leída del propio fichero.
 *  De paso, los temas con alguna entrada: los vacíos llevan noindex y no van al mapa. */
function readEntries() {
  const lastmod = new Map();
  const temas = new Set();
  for (const lang of readdirSync('src/content/entries')) {
    for (const file of readdirSync(`src/content/entries/${lang}`)) {
      const src = readFileSync(`src/content/entries/${lang}/${file}`, 'utf8');
      const m = /^updated:\s*(\d{4}-\d{2}-\d{2})/m.exec(src);
      if (m) lastmod.set(`/${lang}/cuaderno/${file.replace(/\.md$/, '')}/`, m[1]);
      const t = /^topic:\s*(\S+)/m.exec(src);
      if (t) temas.add(`/${lang}/temas/${t[1]}/`);
    }
  }
  return { lastmod, temas };
}
const { lastmod: LASTMOD, temas: TEMAS_CON_ENTRADAS } = readEntries();
const temaVacio = (path) => /^\/[a-z]{2}\/temas\/[^/]+\/$/.test(path) && !TEMAS_CON_ENTRADAS.has(path);

export default defineConfig({
  site: 'https://odyle.net',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && page !== 'https://odyle.net/' && !temaVacio(new URL(page).pathname),
      serialize: (item) => {
        const lastmod = LASTMOD.get(new URL(item.url).pathname);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
});
