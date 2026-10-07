// Comprueba que ningún tipo de página se desborda a lo ancho en un móvil de 390 px.
// Uso: node scripts/overflow.mjs [https://odyle.net]   (por defecto, la vista previa local en :4321)
import { chromium } from 'playwright';
const base = process.argv[2] ?? 'http://localhost:4321';
const paths = ['/es/', '/es/cuaderno/', '/es/cuaderno/mercado-nivel-45/', '/es/cuaderno/cuelgues-grafica-steam-machine/', '/es/cuaderno/cuelgues-sincronizacion-vertical/', '/es/cuaderno/dos-pases-temporada-1/', '/es/cuaderno/plentiful-harvest-nivel-3/', '/es/apuntes/tienda-de-pago/', '/es/apuntes/cleric/', '/es/apuntes/shugo-festival/', '/es/apuntes/monedas-materiales-y-contenidos/', '/es/temas/tienda/', '/es/temas/', '/es/temas/recoleccion/', '/es/temas/fabricacion/', '/es/apuntes/', '/es/apuntes/gladiator/', '/es/apuntes/recoleccion-y-oficios/', '/es/apuntes/sistemas-que-salen-al-subir/', '/es/apuntes/temporada-1-del-global/', '/es/apuntes/spiritmaster/', '/es/cuaderno/anticheat-ncguard/', '/es/acerca/', '/es/blacklights/', '/no-existe/'];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
let failed = 0;
for (const path of paths) {
  await page.goto(base + path, { waitUntil: 'load' });
  await page.waitForTimeout(400);
  const r = await page.evaluate(() => ({ w: document.documentElement.clientWidth, sw: document.documentElement.scrollWidth }));
  const ok = r.sw <= r.w; if (!ok) failed++;
  console.log(ok ? 'OK      ' : `DESBORDA ${r.sw}`, path);
}
await browser.close();
process.exit(failed ? 1 : 0);
