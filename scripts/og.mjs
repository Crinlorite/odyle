// Dibuja las imágenes para compartir (1200×630) en public/og/. Se lanza en local: Cloudflare no tiene navegador.
// Uso: npm run og     (necesita Playwright: npm i --no-save playwright)
// Al añadir una entrada o un apunte hay que volver a lanzarlo: la web no compila si falta su imagen.
import { chromium } from 'playwright';
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const font = (pkg, file) => `file://${root}node_modules/@fontsource/${pkg}/files/${file}`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const field = (src, key) => (new RegExp(`^${key}:\\s*(.+)$`, 'm').exec(src)?.[1] ?? '').trim().replace(/^['"]|['"]$/g, '');

const SEAL = { comprobado: ['Comprobado', '#197a42'], duda: ['Duda abierta', '#c0392b'], cambio: ['Cambió', '#5f6877'], apunte: ['Apunte sin comprobar', '#5f6877'], objeto: ['Objeto', '#1d2b53'] };
const TOPIC = { economia: 'Economía', recoleccion: 'Recolección', fabricacion: 'Fabricación', tienda: 'Tienda', progresion: 'Progresión', equipo: 'Equipo' };

const jobs = [{ out: 'default.jpg', title: 'Lo que dicen las guías y lo que pasa cuando lo pruebas.', seal: null, topic: 'Cuaderno de campo de AION 2 · cliente global' }];
jobs.push({ out: 'es/blacklights.jpg', title: 'BlackLights: legión elyos en español, en Nezekan', seal: null, topic: 'Legión · AION 2 global · Europa' });
for (const lang of readdirSync(`${root}src/content/entries`)) {
  for (const f of readdirSync(`${root}src/content/entries/${lang}`)) {
    const src = readFileSync(`${root}src/content/entries/${lang}/${f}`, 'utf8');
    jobs.push({ out: `${lang}/${f.replace(/\.md$/, '')}.jpg`, title: field(src, 'title'), seal: field(src, 'status'), topic: TOPIC[field(src, 'topic')] });
  }
}
for (const lang of readdirSync(`${root}src/content/notes`)) {
  for (const f of readdirSync(`${root}src/content/notes/${lang}`)) {
    const src = readFileSync(`${root}src/content/notes/${lang}/${f}`, 'utf8');
    jobs.push({ out: `${lang}/apunte-${f.replace(/\.md$/, '')}.jpg`, title: field(src, 'title'), seal: 'apunte', topic: 'Apuntes' });
  }
}
for (const lang of readdirSync(`${root}src/content/objetos`)) {
  for (const f of readdirSync(`${root}src/content/objetos/${lang}`)) {
    const src = readFileSync(`${root}src/content/objetos/${lang}/${f}`, 'utf8');
    const en = field(src, 'en'), es = field(src, 'es');
    jobs.push({ out: `${lang}/objeto-${f.replace(/\.md$/, '')}.jpg`, title: en === es ? en : `${en} · ${es}`, seal: 'objeto', topic: 'Objetos' });
  }
}
jobs.push({ out: 'es/objetos.jpg', title: 'Objetos: para qué sirven de verdad y de dónde salen', seal: null, topic: 'Objetos · AION 2 global' });

const html = (j) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Z;font-weight:700;src:url('${font('zilla-slab', 'zilla-slab-latin-700-normal.woff2')}')}
@font-face{font-family:C;font-weight:400;src:url('${font('courier-prime', 'courier-prime-latin-400-normal.woff2')}')}
@font-face{font-family:C;font-weight:700;src:url('${font('courier-prime', 'courier-prime-latin-700-normal.woff2')}')}
*{box-sizing:border-box}html,body{margin:0}
body{width:1200px;height:630px;position:relative;overflow:hidden;color:#1d2b53;background-color:#f7fafc;
 background-image:linear-gradient(#cfdfeb 2px,transparent 2px),linear-gradient(90deg,#cfdfeb 2px,transparent 2px);background-size:42px 42px}
body::before{content:'';position:absolute;top:0;bottom:0;left:104px;width:4px;background:#e0605c;opacity:.75}
.in{position:absolute;inset:0;padding:64px 80px 56px 150px;display:flex;flex-direction:column}
.logo{display:flex;align-items:center;gap:16px;font:700 62px/1 Z,serif}
.logo svg{width:112px;height:90px}
.row{display:flex;align-items:center;gap:22px;margin-top:54px;min-height:52px}
.seal{font:700 26px/1 C,monospace;letter-spacing:.08em;text-transform:uppercase;padding:10px 18px;border:4px solid currentColor;border-radius:5px;transform:rotate(-3deg)}
.topic{font:400 28px/1.2 C,monospace;color:#3b4a75}
h1{margin:26px 0 0;font:700 ${j.title.length > 62 ? 56 : 66}px/1.1 Z,serif;text-wrap:balance}
h1 span{background:linear-gradient(transparent 62%,#b9f2c6 62%,#b9f2c6 92%,transparent 92%);-webkit-box-decoration-break:clone;box-decoration-break:clone}
.ft{margin-top:auto;font:400 26px/1 C,monospace;color:#3b4a75;display:flex;justify-content:space-between}
</style></head><body><div class="in">
<div class="logo"><svg viewBox="0 0 80 64"><defs><radialGradient id="o" cx="36%" cy="30%" r="78%"><stop offset="0" stop-color="#fff"/><stop offset=".22" stop-color="#b9f3d6"/><stop offset=".6" stop-color="#3fc48d"/><stop offset="1" stop-color="#168a62"/></radialGradient><g id="a" fill="#1d2b53"><path d="M49 30C56 15 70 8 78 6C77 20 68 31 53 36Z"/><path d="M52 38C61 30 71 27 77 27C73 37 64 43 53 43Z" opacity=".8"/><path d="M51 45C58 42 65 42 70 43C65 49 58 51 51 50Z" opacity=".6"/></g></defs><use href="#a"/><use href="#a" transform="translate(80 0) scale(-1 1)"/><circle cx="40" cy="40" r="13" fill="url(#o)"/></svg>odyle</div>
<div class="row">${j.seal ? `<span class="seal" style="color:${SEAL[j.seal][1]}">${SEAL[j.seal][0]}</span>` : ''}<span class="topic">${esc(j.topic ?? '')}</span></div>
<h1><span>${esc(j.title)}</span></h1>
<div class="ft"><span>odyle.net</span><span>Cuaderno de campo de AION 2</span></div>
</div></body></html>`;

const tmp = `${root}scripts/.og.html`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const j of jobs) {
  writeFileSync(tmp, html(j));
  await page.goto(`file://${tmp}`); await page.evaluate(() => document.fonts.ready);
  const dest = `${root}public/og/${j.out}`;
  mkdirSync(dest.slice(0, dest.lastIndexOf('/')), { recursive: true });
  await page.screenshot({ path: dest, type: 'jpeg', quality: 86 });
  console.log('og', j.out);
}
await browser.close();
