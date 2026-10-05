// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

/** lastmod del mapa del sitio: la fecha `updated` de cada entrada, leída del propio fichero. */
function lastModified() {
  const out = new Map();
  for (const lang of readdirSync('src/content/entries')) {
    for (const file of readdirSync(`src/content/entries/${lang}`)) {
      const m = /^updated:\s*(\d{4}-\d{2}-\d{2})/m.exec(readFileSync(`src/content/entries/${lang}/${file}`, 'utf8'));
      if (m) out.set(`/${lang}/cuaderno/${file.replace(/\.md$/, '')}/`, m[1]);
    }
  }
  return out;
}
const LASTMOD = lastModified();

export default defineConfig({
  site: 'https://odyle.net',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && page !== 'https://odyle.net/',
      serialize: (item) => {
        const lastmod = LASTMOD.get(new URL(item.url).pathname);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
});
