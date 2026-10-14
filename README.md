# odyle.net

Cuaderno de campo de AION 2 en español: https://odyle.net. Astro estático en Cloudflare Pages. Sin anuncios y sin cookies.

**Licencias:** el código, MIT (`LICENSE`); los textos y las imágenes propias, CC BY-NC 4.0 (`LICENSE-CONTENT.md`). Los nombres y textos de AION 2 son de NCSOFT y no entran en ninguna de las dos. odyle.net no tiene relación con NCSOFT.

- Diseño: `docs/superpowers/specs/2026-10-05-odyle-design.md`
- Entradas: `src/content/entries/es/*.md` (si una no cumple el esquema de `src/content.config.ts`, no compila)
- `main` = producción: un push despliega. Se trabaja en `v1` y se publica solo con visto bueno.
- `scripts/glosario/`: empareja los nombres del juego en inglés y en español leyendo páginas públicas de metabot.gg, de una en una. No toca el juego ni sus archivos.

```
npm install
npm run dev        # desarrollo
npm run build      # compila a dist/
npm run preview    # sirve dist/ en :4321
npm run overflow   # desbordamiento a 390 px (necesita Playwright: npm i --no-save playwright)
npm run shots      # capturas de día y de noche en scripts/.shots/
```
