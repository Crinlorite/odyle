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

// Textos de la imagen por idioma (el contenido de cada idioma vive en su carpeta: es/, en/, ko/).
const T = {
  es: { seal: { comprobado: 'Comprobado', duda: 'Duda abierta', cambio: 'Cambió', apunte: 'Apunte sin comprobar', objeto: 'Objeto' },
        topic: { economia: 'Economía', recoleccion: 'Recolección', fabricacion: 'Fabricación', tienda: 'Tienda', progresion: 'Progresión', equipo: 'Equipo' },
        notes: 'Apuntes', items: 'Objetos', foot: 'Cuaderno de campo de AION 2',
        def: ['Lo que dicen las guías y lo que pasa cuando lo pruebas.', 'Cuaderno de campo de AION 2 · cliente global'],
        legion: ['BlackLights: legión elyos en español, en Nezekan', 'Legión · AION 2 global · Europa'],
        itemsIdx: ['Objetos: para qué sirven de verdad y de dónde salen', 'Objetos · AION 2 global'] },
  en: { seal: { comprobado: 'Verified', duda: 'Open question', cambio: 'Changed', apunte: 'Unverified note', objeto: 'Item' },
        topic: { economia: 'Economy', recoleccion: 'Gathering', fabricacion: 'Crafting', tienda: 'Shop', progresion: 'Progression', equipo: 'Hardware' },
        notes: 'Notes', items: 'Items', foot: 'AION 2 field notebook',
        def: ['What the guides say and what happens when you try it.', 'AION 2 field notebook · global client'],
        legion: ['BlackLights: a Spanish-speaking Elyos legion on Nezekan', 'Legion · AION 2 global · Europe'],
        itemsIdx: ['Items: what they are really for and where they come from', 'Items · AION 2 global'] },
  ko: { seal: { comprobado: '확인함', duda: '미확인', cambio: '변경됨', apunte: '미확인 메모', objeto: '아이템' },
        topic: { economia: '경제', recoleccion: '채집', fabricacion: '제작', tienda: '상점', progresion: '성장', equipo: '플레이 환경' },
        notes: '메모', items: '아이템', foot: '아이온2 플레이 기록 노트',
        def: ['가이드에 적힌 내용과, 직접 해 보면 실제로 일어나는 일.', '아이온2 플레이 기록 노트 · 글로벌 클라이언트'],
        legion: ['BlackLights: 네자칸 서버의 스페인어권 천족 레기온', '레기온 · 아이온2 글로벌 · 유럽'],
        itemsIdx: ['아이템: 실제 용도와 획득처', '아이템 · 아이온2 글로벌'] },
};
const COLOR = { comprobado: '#197a42', duda: '#c0392b', cambio: '#5f6877', apunte: '#5f6877', objeto: '#1d2b53' };

const jobs = [];
for (const lang of Object.keys(T)) {
  const t = T[lang];
  jobs.push({ lang, out: lang === 'es' ? 'default.jpg' : `${lang}/default.jpg`, title: t.def[0], seal: null, topic: t.def[1] });
  jobs.push({ lang, out: `${lang}/blacklights.jpg`, title: t.legion[0], seal: null, topic: t.legion[1] });
  jobs.push({ lang, out: `${lang}/objetos.jpg`, title: t.itemsIdx[0], seal: null, topic: t.itemsIdx[1] });
}
const dirs = (col) => readdirSync(`${root}src/content/${col}`).filter((l) => T[l]);
for (const lang of dirs('entries')) {
  for (const f of readdirSync(`${root}src/content/entries/${lang}`)) {
    const src = readFileSync(`${root}src/content/entries/${lang}/${f}`, 'utf8');
    jobs.push({ lang, out: `${lang}/${f.replace(/\.md$/, '')}.jpg`, title: field(src, 'title'), seal: field(src, 'status'), topic: T[lang].topic[field(src, 'topic')] });
  }
}
for (const lang of dirs('notes')) {
  for (const f of readdirSync(`${root}src/content/notes/${lang}`)) {
    const src = readFileSync(`${root}src/content/notes/${lang}/${f}`, 'utf8');
    jobs.push({ lang, out: `${lang}/apunte-${f.replace(/\.md$/, '')}.jpg`, title: field(src, 'title'), seal: 'apunte', topic: T[lang].notes });
  }
}
for (const lang of dirs('objetos')) {
  for (const f of readdirSync(`${root}src/content/objetos/${lang}`)) {
    const src = readFileSync(`${root}src/content/objetos/${lang}/${f}`, 'utf8');
    const en = field(src, 'en'), es = field(src, 'es');
    jobs.push({ lang, out: `${lang}/objeto-${f.replace(/\.md$/, '')}.jpg`, title: lang !== 'es' || en === es ? en : `${en} · ${es}`, seal: 'objeto', topic: T[lang].items });
  }
}
// Solo lo pedido: «npm run og -- en/» rehace las imágenes cuya ruta empieza así.
const only = process.argv[2];
const todo = only ? jobs.filter((j) => j.out.startsWith(only)) : jobs;

const html = (j) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Z;font-weight:700;src:url('${font('zilla-slab', 'zilla-slab-latin-700-normal.woff2')}')}
@font-face{font-family:C;font-weight:400;src:url('${font('courier-prime', 'courier-prime-latin-400-normal.woff2')}')}
@font-face{font-family:C;font-weight:700;src:url('${font('courier-prime', 'courier-prime-latin-700-normal.woff2')}')}
*{box-sizing:border-box}html,body{margin:0}\nh1,.topic,.seal,.ft{word-break:keep-all}
body{width:1200px;height:630px;position:relative;overflow:hidden;color:#1d2b53;background-color:#f7fafc;
 background-image:linear-gradient(#cfdfeb 2px,transparent 2px),linear-gradient(90deg,#cfdfeb 2px,transparent 2px);background-size:42px 42px}
body::before{content:'';position:absolute;top:0;bottom:0;left:104px;width:4px;background:#e0605c;opacity:.75}
.in{position:absolute;inset:0;padding:64px 80px 56px 150px;display:flex;flex-direction:column}
.logo{display:flex;align-items:center;gap:16px;font:700 62px/1 Z,serif}
.logo svg{width:112px;height:90px}
.row{display:flex;align-items:center;gap:22px;margin-top:54px;min-height:52px}
.seal{font:700 26px/1 C,monospace;letter-spacing:.08em;text-transform:uppercase;padding:10px 18px;border:4px solid currentColor;border-radius:5px;transform:rotate(-3deg)}
.topic{font:400 28px/1.2 C,monospace;color:#3b4a75}
h1{margin:26px 0 0;font:700 ${j.title.length > 62 ? 56 : 66}px/1.1 Z,'Noto Serif CJK KR',serif;text-wrap:balance}
h1 span{background:linear-gradient(transparent 62%,#b9f2c6 62%,#b9f2c6 92%,transparent 92%);-webkit-box-decoration-break:clone;box-decoration-break:clone}
.ft{margin-top:auto;font:400 26px/1 C,monospace;color:#3b4a75;display:flex;justify-content:space-between}
</style></head><body><div class="in">
<div class="logo"><svg viewBox="0 0 80 64"><defs><radialGradient id="o" cx="36%" cy="30%" r="78%"><stop offset="0" stop-color="#fff"/><stop offset=".22" stop-color="#b9f3d6"/><stop offset=".6" stop-color="#3fc48d"/><stop offset="1" stop-color="#168a62"/></radialGradient><g id="a" fill="#1d2b53"><path d="M49 30C56 15 70 8 78 6C77 20 68 31 53 36Z"/><path d="M52 38C61 30 71 27 77 27C73 37 64 43 53 43Z" opacity=".8"/><path d="M51 45C58 42 65 42 70 43C65 49 58 51 51 50Z" opacity=".6"/></g></defs><use href="#a"/><use href="#a" transform="translate(80 0) scale(-1 1)"/><circle cx="40" cy="40" r="13" fill="url(#o)"/></svg>odyle</div>
<div class="row">${j.seal ? `<span class="seal" style="color:${COLOR[j.seal]}">${T[j.lang].seal[j.seal]}</span>` : ''}<span class="topic">${esc(j.topic ?? '')}</span></div>
<h1><span>${esc(j.title)}</span></h1>
<div class="ft"><span>odyle.net</span><span>${T[j.lang].foot}</span></div>
</div></body></html>`;

const tmp = `${root}scripts/.og.html`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const j of todo) {
  writeFileSync(tmp, html(j));
  await page.goto(`file://${tmp}`); await page.evaluate(() => document.fonts.ready);
  const dest = `${root}public/og/${j.out}`;
  mkdirSync(dest.slice(0, dest.lastIndexOf('/')), { recursive: true });
  await page.screenshot({ path: dest, type: 'jpeg', quality: 86 });
  console.log('og', j.out);
}
await browser.close();
