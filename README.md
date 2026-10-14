# odyle.net

Cuaderno de campo de AION 2 en español: https://odyle.net. Astro estático en Cloudflare Pages. Sin anuncios y sin cookies.

**Licencias:** el código, MIT (`LICENSE`); los textos y las imágenes propias, CC BY-NC 4.0 (`LICENSE-CONTENT.md`). Los nombres y textos de AION 2 son de NCSOFT y no entran en ninguna de las dos. odyle.net no tiene relación con NCSOFT. No se usa arte, logotipos ni iconos de NCSOFT, y no se extrae nada de los archivos del juego.

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

---

## English

odyle.net is a field notebook about AION 2, written in Spanish by one player: what I verify in the game, notes on each class, patch summaries and item pages. It is a static Astro site on Cloudflare Pages, with no ads, no cookies and no tracking.

**Licenses:** the code is MIT (`LICENSE`); my texts and share images are CC BY-NC 4.0 (`LICENSE-CONTENT.md`). AION 2 names and in-game texts belong to NCSOFT and are not covered by either license. odyle.net is not affiliated with NCSOFT. The site uses no NCSOFT artwork, logos or icons, and nothing is extracted from the game client.

- Design document: `docs/superpowers/specs/2026-10-05-odyle-design.md`
- Content: `src/content/` (entries, notes and item pages, validated by `src/content.config.ts`)
- `main` deploys to production; work happens on `v1`.
- `scripts/glosario/`: pairs English and Spanish game names by reading public pages of metabot.gg, one at a time. It never touches the game or its files.

The commands above (`npm run dev`, `build`, `preview`, `overflow`, `shots`) are the whole toolchain.

---

## 한국어

odyle.net은 한 명의 플레이어가 스페인어로 작성하는 아이온2 기록 노트입니다. 게임에서 직접 확인한 내용, 클래스별 정리, 패치 요약, 아이템 정보를 다룹니다. Cloudflare Pages에서 운영하는 Astro 정적 사이트이며, 광고, 쿠키, 추적 기능이 없습니다.

**라이선스:** 코드는 MIT(`LICENSE`), 직접 작성한 글과 공유용 이미지는 CC BY-NC 4.0(`LICENSE-CONTENT.md`)입니다. 아이온2의 명칭과 게임 내 텍스트는 엔씨소프트의 소유이며 두 라이선스 모두에 포함되지 않습니다. odyle.net은 엔씨소프트와 관련이 없습니다. 엔씨소프트의 아트워크, 로고, 아이콘은 사용하지 않으며, 게임 클라이언트에서 어떠한 데이터도 추출하지 않습니다.

- 디자인 문서: `docs/superpowers/specs/2026-10-05-odyle-design.md`
- 콘텐츠: `src/content/` (`src/content.config.ts`의 스키마로 검증)
- `main` 브랜치에 푸시하면 배포되며, 작업은 `v1` 브랜치에서 합니다.
- `scripts/glosario/`: metabot.gg의 공개 페이지를 한 페이지씩 읽어 영어와 스페인어 게임 명칭을 대조합니다. 게임이나 게임 파일에는 접근하지 않습니다.

위의 명령어(`npm run dev`, `build`, `preview`, `overflow`, `shots`)가 전체 개발 도구입니다.
