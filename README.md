# odyle.net

Cuaderno de campo de AION 2 en español. Astro estático en Cloudflare Pages.

- Diseño: `docs/superpowers/specs/2026-10-05-odyle-design.md`
- Entradas: `src/content/entries/es/*.md` (si una no cumple el esquema de `src/content.config.ts`, no compila)
- `main` = producción: un push despliega. Se trabaja en `v1` y se publica solo con visto bueno.

```
npm install
npm run dev        # desarrollo
npm run build      # compila a dist/
npm run preview    # sirve dist/ en :4321
npm run overflow   # desbordamiento a 390 px (necesita Playwright: npm i --no-save playwright)
npm run shots      # capturas de día y de noche en scripts/.shots/
```
