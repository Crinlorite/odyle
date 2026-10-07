// Capturas de cada tipo de página, de día y de noche, en escritorio y móvil. Salen en scripts/.shots/.
// Uso: node scripts/shots.mjs [https://odyle.net]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
const base = process.argv[2] ?? 'http://localhost:4321';
const out = new URL('./.shots/', import.meta.url).pathname;
mkdirSync(out, { recursive: true });
const pages = [['portada', '/es/'], ['cuaderno', '/es/cuaderno/'], ['entrada', '/es/cuaderno/mercado-nivel-45/'], ['temas', '/es/temas/'], ['apunte', '/es/apuntes/gladiator/'], ['acerca', '/es/acerca/'], ['blacklights', '/es/blacklights/']];
const browser = await chromium.launch();
for (const [size, w, h] of [['pc', 1280, 900], ['movil', 390, 844]]) {
  for (const scheme of ['light', 'dark']) {
    const page = await browser.newPage({ viewport: { width: w, height: h }, colorScheme: scheme });
    for (const [name, path] of pages) {
      await page.goto(base + path, { waitUntil: 'load' });
      await page.waitForTimeout(500);
      await page.screenshot({ path: `${out}${name}-${size}-${scheme === 'light' ? 'dia' : 'noche'}.jpg`, type: 'jpeg', quality: 62, fullPage: true });
    }
    await page.close();
  }
}
await browser.close();
console.log('capturas en', out);
