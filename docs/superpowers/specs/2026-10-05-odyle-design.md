# odyle.net — Diseño

- **Fecha:** 5-oct-2026
- **Estado:** secciones 1–4 aprobadas en conversación el 5-oct-2026; **sección 5 propuesta, pendiente de visto bueno**; documento pendiente de revisión
- **Dominio:** `odyle.net` (comprado por Cristóbal el 5-oct-2026)
- **Repositorio:** `Crinlorite/odyle` (privado; a crear con el plan)
- **Autor:** Cristóbal Ruiz (Crinlorite)

## Resumen

Cuaderno de campo de **AION 2** en español: cada entrada enfrenta **lo que dicen las guías** con **lo que pasa en el cliente global**, comprobado jugando, con fecha, zona y nivel. Firma **Gerlari**, Gladiator elyos, en tono neutro. Se hace por gusto: **sin anuncios, sin afiliados y sin cookies**.

El nombre viene del Odyle, el recurso del juego que flota en el aire y se transforma en todos los demás.

Por qué existe: en español ya hay guías de clase (IMPERIUM) y de misiones (Guslok); en inglés hay más de veinte webs con «aion2» en el nombre. Casi todo es agregado de datos coreanos escrito antes del estreno. Lo que falta es lo comprobado en el cliente global y, en español, toda la parte de economía. En la primera tarde de juego salieron dos datos que ninguna guía traía bien (se recolecta desde nivel 11; el Mercado no abre hasta nivel 45) y siete contradicciones entre guías.

---

## 1 · Qué es y cómo crece ✅ aprobado

- **Qué es:** un cuaderno de campo público. Una entrada = un hecho concreto del juego, contrastado.
- **Voz y autor:** firma Gerlari al pie; primera persona solo donde aporta («lo comprobé a nivel 11 en Verteron»), sin teatro de personaje.
- **Cómo crece:** cada dato que el autor confirma jugando se apunta primero en el cuaderno privado del centro de contenido (`content-vault/AION 2/`) y de ahí pasa a una entrada. Nada se publica sin su visto bueno.
- **Idiomas:** solo español (`/es/`) en la primera versión. La estructura queda preparada para añadir `/en/` sin mover direcciones.
- **Dinero:** ninguno. Sin anuncios, sin afiliados, sin Ko-fi en la primera versión.
- **Lo que no es:** no es una base de datos, no repite builds de clase (se enlaza a quien ya las hace bien) y no publica lo que solo se ha leído.

### Primeras entradas (material ya recogido el 5-oct-2026)

| # | Título de trabajo | Tema | Tipo |
|---|---|---|---|
| 1 | El Mercado no abre hasta nivel 45, aunque pagues la membresía | Economía | Comprobado |
| 2 | Se puede recolectar desde nivel 11 | Recolección | Comprobado |
| 3 | Los nodos no salen en el mapa hasta que gastas un punto | Recolección | Comprobado |
| 4 | Cómo repartir los puntos de recolección | Recolección | Comprobado en parte |
| 5 | Qué comprar en la tienda y qué no | Tienda | Comprobado en parte |
| 6 | El modo sin bordes solo va a la resolución del escritorio | Equipo | Comprobado |
| 7 | Cuelgues de la gráfica al usar menús en una Steam Machine | Equipo | Comprobado, causa abierta |
| 8 | ¿Cuatro huecos de estigma o seis? | Progresión | Duda abierta |
| 9 | ¿Se puede reiniciar el Daevanion? | Progresión | Duda abierta |

Las «comprobado en parte» no se publican hasta completar lo que falta por ver.

---

## 2 · Arquitectura ✅ aprobado

- **Tecnología:** Astro estático en Cloudflare Pages, conectado al repositorio. Mismo patrón que Slashreload, recortado.
- **Sin servidor en la primera versión:** ni funciones, ni base de datos, ni almacén de claves. No hay API de AION 2 que consultar.
- **Ramas:** `main` = producción (un push despliega). Se trabaja en `v1`, con vista previa de Pages por rama. A `main` solo con visto bueno.

### Páginas

| Ruta | Qué es |
|---|---|
| `/` | Redirige a `/es/` |
| `/es/` | Portada: presentación en dos líneas y las últimas entradas |
| `/es/cuaderno/` | Índice de todas las entradas, con filtro por estado |
| `/es/cuaderno/<slug>/` | Una entrada |
| `/es/temas/` | Los seis temas, con el número de entradas de cada uno |
| `/es/temas/<tema>/` | Entradas de un tema |
| `/es/acerca/` | Quién firma, cómo se comprueba, equipo de juego y aviso de no afiliación |
| `/404` | Página no encontrada |

### Estructura del repositorio

```
src/
  content.config.ts        esquema de las colecciones
  content/entries/es/*.md  entradas
  content/pages/es/*.md    páginas de texto (acerca)
  i18n/langs.ts            idiomas activos (solo 'es') y el de por defecto
  i18n/strings.ts          textos de interfaz por idioma
  lib/entries.ts           consultas: por estado, por tema, ordenación
  lib/seo.ts               datos estructurados y metadatos
  components/              Sello, Ficha, FichaEntrada, Orbe, CambioTema…
  layouts/Base.astro
  pages/[lang]/…           las rutas de la tabla
  styles/tokens.css        colores, tipos y medidas de las dos caras
public/
  capturas/                capturas del autor (WebP)
  og/es/<slug>.jpg         imágenes para compartir, generadas en local
scripts/
  og.ts                    dibuja las imágenes para compartir
  overflow.mjs             comprueba desbordamiento a 390 px
  shots.mjs                capturas de cada tipo de página, día y noche
  stale.mjs                lista entradas con más de 60 días sin revisar
tests/                     pruebas de contenido y de cobertura
docs/superpowers/          este documento y los planes
```

### Posicionamiento

- Mapa del sitio con `@astrojs/sitemap`; la fecha de cada página sale de la entrada.
- Datos estructurados de artículo por entrada; dirección canónica; etiquetas de idioma preparadas.
- Una imagen para compartir por entrada, dibujada en local con Playwright y sharp y guardada en el repositorio (el entorno de Cloudflare no tiene navegador).
- Search Console: alta del dominio y envío del mapa del sitio al publicar.

### Analítica y dominio

- Analítica de Cloudflare, sin cookies.
- Zona de `odyle.net` endurecida como las demás: TLS estricto, mínimo 1.2, HTTPS siempre, HSTS de 180 días, DNSSEC, y registros de correo nulos. `www` redirige al dominio raíz.
- **Todo lo que toque Cloudflare o GitHub se hace con visto bueno expreso en el momento.**

---

## 3 · La entrada y el flujo editorial ✅ aprobado

### Cómo se ve una entrada

1. Título en forma de afirmación.
2. Sello de estado.
3. Ficha: fecha de comprobación, zona, nivel y cliente. En el tema «Equipo» se añade la máquina.
4. **Lo que se dice:** qué afirman las guías, con enlace a cada una.
5. **Lo que pasa:** lo visto en el juego, con captura propia.
6. **Qué hacer:** la consecuencia práctica, en dos o tres líneas.
7. Fuentes e historial de cambios.

### Estados

| Estado | Significa | Exige |
|---|---|---|
| `comprobado` | Visto por el autor en el cliente | Fecha de comprobación y lugar (zona y nivel) |
| `duda` | Las guías se contradicen y aún no se ha visto | Al menos dos fuentes que discrepen |
| `cambio` | Un parche lo dejó obsoleto | Fecha del cambio y nota de qué cambió |

Una entrada que pasa a `cambio` no se borra: conserva lo que era cierto y desde cuándo dejó de serlo.

### Temas (lista cerrada)

`economia`, `recoleccion`, `fabricacion`, `tienda`, `progresion`, `equipo`.

«Equipo» recoge la experiencia de jugar en una Steam Machine con Windows 11 (gráfica de 8 GB, monitor 4K).

### Esquema de una entrada

| Campo | Tipo | Regla |
|---|---|---|
| `title` | texto | Hasta 110 caracteres |
| `description` | texto | Hasta 170 caracteres |
| `status` | `comprobado` \| `duda` \| `cambio` | Obligatorio |
| `topic` | uno de los seis temas | Obligatorio |
| `verifiedAt` | fecha | Obligatorio si `comprobado` o `cambio` |
| `where` | `{ zone, level }` | Obligatorio si `comprobado` |
| `rig` | `{ machine, os, gpu, display }` | Obligatorio si `topic` es `equipo` |
| `client` | `global` | Fijo en la primera versión |
| `changedAt`, `changedNote` | fecha, texto | Obligatorios si `cambio` |
| `sources` | lista de `{ title, url, lang }` | Mínimo 2 si `duda`; puede ir vacía si `firstHand` |
| `firstHand` | sí/no | Sí cuando la única fuente es lo visto en el juego |
| `history` | lista de `{ date, note }` | Opcional |
| `cover` | ruta bajo `/capturas/` | Opcional |
| `updated` | fecha | Obligatorio; alimenta el mapa del sitio |
| `translationKey` | texto | Obligatorio; une la entrada con su futura traducción |

El cuerpo lleva tres apartados de segundo nivel con esos títulos exactos: «Lo que se dice», «Lo que pasa» y «Qué hacer». En una `duda`, el tercero se titula «Cómo se va a comprobar». Una prueba lo exige.

Si una entrada no cumple el esquema, la web no compila.

### Flujo

1. El autor cuenta lo que ha visto, o se recoge la captura.
2. Se apunta en el cuaderno privado.
3. Se redacta la entrada en la rama de trabajo, contrastando fuentes en inglés, coreano y chino tradicional.
4. Vista previa, lectura del autor y, con su visto bueno, a producción.
5. `npm run stale` lista las entradas con más de 60 días sin revisar, para repasarlas tras cada parche.

### Capturas

- Solo del autor. Se recogen por SSH de la carpeta de capturas de Steam de la Steam Machine.
- Recortadas a lo que importa, en WebP.
- Los nombres de otros jugadores, tapados.

---

## 4 · Identidad visual ✅ aprobado

Elegida el 5-oct-2026 entre tres direcciones maquetadas (copia en `content-vault/AION 2/AION 2-web/odyle-direcciones.html`): **el cuaderno cuadriculado, con cara de día y de noche, y el orbe con alas como logotipo.**

Motivo de la elección: todas las webs de aficionados de AION son negras y casi todas doradas. El cuaderno no se parece a ninguna y cuenta la idea de la web sin explicarla.

### Piezas

| Pieza | Descripción |
|---|---|
| **Hoja** | Cuadrícula de 22 px con margen rojo a la izquierda |
| **Tinta** | Azul de bolígrafo de día; casi blanca de noche |
| **Subrayador** | Verde Odyle, bajo la frase clave del titular y en el bloque «Qué hacer» |
| **Sello** | Rectángulo de borde grueso, girado unos grados, en mayúsculas de máquina de escribir: verde para «comprobado», rojo para «duda», gris para «cambió» |
| **Ficha** | Tarjeta blanca pegada con celo, con un giro leve; cada entrada del índice es una |
| **Nota al margen** | Letra manuscrita, uso mínimo: una por página como mucho |
| **Logotipo** | Orbe verde con alas junto a la palabra `odyle`. El ala del boceto se lee como una hoja: se redibuja para que sea claramente un ala |

### Las dos caras

| | De día | De noche |
|---|---|---|
| Fondo | Papel casi blanco, cuadrícula azul pálido | Azul marino, cuadrícula tenue |
| Texto | Azul tinta | Casi blanco |
| Fichas | Blancas | Azul marino más claro |
| Acento | Verde subrayador | Verde Odyle luminoso |
| Margen | Rojo | Rojo suave |

- La cara sigue el tema del dispositivo del visitante. Un botón la cambia y la elección se recuerda en ese navegador.
- Todos los colores se definen una sola vez como variables, con sus valores de día y de noche.

### Tipografía

| Uso | Familia |
|---|---|
| Titulares y logotipo | Zilla Slab |
| Texto | Bitter |
| Datos, etiquetas y sellos | Courier Prime |
| Nota al margen | Patrick Hand |

Las fuentes se sirven desde `odyle.net`, por subconjuntos, sin peticiones a terceros.

### Lectura

En la página de una entrada, el texto largo va sobre **papel liso** en una columna de unos 65 caracteres; la cuadrícula queda en los márgenes y en la portada. Las capturas del juego van «pegadas» como fotos, con su celo.

### Lo que no se usa

Logotipo, tipografía o arte oficial de AION 2 y de NCSOFT.

---

## 5 · Calidad, cumplimiento y pruebas — propuesta, pendiente de visto bueno

### Cumplimiento

- Aviso de no afiliación con NCSOFT en el pie de todas las páginas y en «Acerca».
- Solo capturas propias.
- Sin anuncios y sin cookies; por tanto, sin aviso de cookies.
- No se enlaza a vendedores de Kina ni a servicios de subida de nivel, aunque alguna guía suya haya servido de pista. Tampoco se publica nada que ayude a hacer trampas.

### Calidad

- **Accesibilidad:** contraste suficiente en las dos caras, foco visible con teclado, y sin animaciones para quien las tenga desactivadas.
- **Móvil:** se diseña primero para 390 px, sin desplazamiento lateral.
- **Rendimiento:** todo estático; objetivo de 95 o más en Lighthouse móvil.

### Pruebas (proporcionales: es una web estática hecha por gusto)

| Prueba | Qué comprueba |
|---|---|
| Contenido | Que todas las entradas cumplen el esquema y llevan sus tres apartados |
| Cobertura de imagen | Que cada entrada tiene su imagen para compartir |
| Contraste | Que cada pareja texto/fondo de las dos caras cumple el mínimo |
| Desbordamiento | Que ningún tipo de página se desborda a 390 px |
| Enlaces | Que no hay enlaces internos rotos |
| Aspecto | Capturas de cada tipo de página, de día y de noche, antes de cada publicación |

### Publicación

Rama de trabajo, vista previa, visto bueno del autor, producción.

---

## Fuera de alcance (primera versión)

Inglés, herramientas y calculadoras, buscador, comentarios, y la app Odyle para Android e iOS. Cada una tendrá su propio diseño cuando toque.

## Dependencias abiertas

1. Visto bueno a la sección 5.
2. Confirmar que la zona de `odyle.net` está en la cuenta de Cloudflare habitual.
3. Permiso para crear el repositorio privado en GitHub y el proyecto de Pages.
4. Localizar la carpeta de capturas de Steam en la Steam Machine.
5. Dibujo final del orbe con alas.
