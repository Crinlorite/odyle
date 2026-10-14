# Cómo se traduce odyle (inglés y coreano)

El original es el español (`src/content/<colección>/es/`). Cada traducción vive en `src/content/<colección>/en/` o `ko/` con **el mismo nombre de archivo**. Mientras una pieza no está traducida, la web la lista en ese idioma con la marca «In Spanish / 스페인어» y enlaza a la española.

## Qué se traduce y qué no

- **Se traduce:** `title` (máx. 110 caracteres), `description` (**máx. 170 caracteres**), `basis`, `where.zone` (las palabras que no son nombres del juego), `rig.*`, `changedNote`, `history[].note`, la parte descriptiva de `sources[].title` (el título original de una fuente se deja en su idioma), los `texto` de las conexiones de objetos, `categoria` y el cuerpo.
- **No se toca:** fechas, `status`, `topic`, `level`, URLs, códigos de idioma, `firstHand`, `translationKey`, `glossary`, y en objetos `en`, `es`, `grado`, `gradoEn`, `comercio`, `npc`.
- **Objetos:** `textoJuego` es el texto oficial del juego. En `en/` y `ko/` va el texto **del cliente en inglés** (`desc_en` de `steam-machine-configs/aion2/objetos/objetos.db`), y `categoria` es la categoría inglesa de esa misma base (`categoria`).

## Nombres del juego

- Los nombres de skills, objetos, zonas, mazmorras, NPC, monedas y sistemas se dejan **exactamente en inglés**, como en el original, en las dos traducciones. No se inventan traducciones.
- En coreano solo se usan estos términos oficiales coreanos: 검성 (Gladiator), 수호성 (Templar), 살성 (Assassin), 궁성 (Ranger), 마도성 (Sorcerer), 정령성 (Spiritmaster), 치유성 (Cleric), 호법성 (Chanter), 천족 (Elyos), 마족 (Asmodian), 키나 (Kina), 어비스 (Abyss), 데바니온 (Daevanion), 스티그마 (stigma), 레기온 (legion), 거래소 (el Mercado). El nombre inglés de la clase puede ir entre paréntesis la primera vez: «검성(Gladiator)».

## Apartados obligatorios de las entradas (si no están exactos, no compila)

| es | en | ko |
|---|---|---|
| `## Lo que se dice` | `## What people say` | `## 알려진 내용` |
| `## Lo que pasa` | `## What happens` | `## 실제로 일어나는 일` |
| `## Qué hacer` | `## What to do` | `## 할 일` |
| `## Cómo se va a comprobar` | `## How it will be verified` | `## 확인 방법` |

## Formato

- **Números:** `1.000` → `1,000`; `12,75` → `12.75`; `1,5 %` → `1.5%` (inglés) / `1.5%` (coreano). Kina: `200.000 Kina` → `200,000 Kina` / `200,000 키나`.
- **Fechas en el texto:** «9 de octubre de 2026» → «9 October 2026» / «2026년 10월 9일». Horas en formato de 24 h, diciendo que son hora de España cuando el original lo dice.
- **Comillas:** «» → “” en los dos idiomas.
- **Enlaces internos:** `/es/...` → `/en/...` o `/ko/...`. Los enlaces a un apartado de otra página (`#ancla`) se dejan sin ancla, porque las anclas cambian con el idioma.
- Se conservan las tablas, listas, negritas y el orden de los apartados.

## Tono

Primera persona (firma Gerlari), frases cortas y concretas, el mismo registro que el original. Ni se añade ni se quita información. Coreano: estilo 합니다, natural, como lo escribiría un jugador coreano; nada de traducción literal. Inglés: claro e internacional.

## Comprobar

`python3 scripts/check_trad.py <archivo>…` revisa longitudes, apartados y que no se cuele un enlace `/es/`. Después: `npm run og -- en/` (y `ko/`) y `npm run build`.
