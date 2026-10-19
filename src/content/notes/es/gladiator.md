---
title: Gladiator en PvE, qué subir y en qué orden
description: Mi chuleta del Gladiator, puntos de skill, especializaciones, estigmas, Daevanion y rotación, según lo que llevan los mejores jugadores coreanos.
basis: Datos de jugadores coreanos, tablas del cliente global y una guía taiwanesa
updated: 2026-10-19
sources:
  - { title: 'Aion 2 Gladiator Build Guide (8.459 jugadores coreanos) — aion2-meta', url: 'https://aion2-meta.com/guides/gladiator/', lang: en }
  - { title: 'Gladiator, guía completa — IMPERIUM', url: 'https://comunidad-imp.com/guias/aion-2/clase-gladiator', lang: es }
  - { title: 'Aion 2 Gladiator Build, Skill Order by Level and Stigmas — mmo-codex', url: 'https://mmo-codex.com/articles/aion-2-gladiator-guide/', lang: en }
  - { title: 'Gladiator Build Planner (150 jugadores) — metabot', url: 'https://metabot.gg/en/aion-2/classes/gladiator/build', lang: en }
  - { title: 'Guía de cría del Gladiator, de cero al final — foro de AION2 en Bahamut', url: 'https://forum.gamer.com.tw/C.php?bsn=82913&snA=3380', lang: zh }
  - { title: 'Cómo llegar a nivel 16–20 de skill — Inven', url: 'https://www.inven.co.kr/board/aion2/6444/457', lang: ko }
  - { title: 'How to Respec Skills and Daevanion Board — game8', url: 'https://game8.co/games/Aion-2/archives/629160', lang: en }
  - { title: 'Gladiador, nombres de las skills con el cliente en español — metabot', url: 'https://metabot.gg/es/aion-2/classes/gladiator', lang: es }
  - { title: 'Arena Guide: Modes, Rewards, Ranks — metabot', url: 'https://metabot.gg/en/aion-2/guides/arena-pvp-guide', lang: en }
  - { title: 'Arena of Solitude Guide — game8', url: 'https://game8.co/games/Aion-2/archives/619351', lang: en }
  - { title: 'The ONLY Gladiator PvP Guide You Need — Sen (YouTube)', url: 'https://www.youtube.com/watch?v=K_rfMNr0auk', lang: en }
  - { title: 'Guía de PvP del Gladiator, 1.000 muertes — 어썸재 (YouTube)', url: 'https://www.youtube.com/watch?v=B4NSjLC7xsc', lang: ko }
  - { title: 'Skills y guía de PvP del Gladiator — Inven', url: 'https://www.inven.co.kr/board/aion2/6448/91', lang: ko }
  - { title: 'The Only Gladiator PVE Guide You Need — Grobs (YouTube)', url: 'https://www.youtube.com/watch?v=xRPr30JetyY', lang: en }
  - { title: 'How to Animation Cancel + Gladiator Macro — Sen (YouTube)', url: 'https://www.youtube.com/watch?v=vRSioIhNfj8', lang: en }
  - { title: 'Cancelar con Rending Blow, con medidor — 희수 (YouTube)', url: 'https://www.youtube.com/watch?v=tqQ-5Apo_O0', lang: ko }
  - { title: 'Overhead Slam solo o con Rending Blow, medido — 호이호이 (YouTube)', url: 'https://www.youtube.com/watch?v=2uWvqOBqM7U', lang: ko }
glossary:
  - { en: "Keen Strike", es: "Estacazo punzante" }
  - { en: "Ruinous Blow", es: "Embestida de perdición" }
  - { en: "Rending Blow", es: "Embestida desgarradora" }
  - { en: "Leaping Slam", es: "Perforación con salto" }
  - { en: "Rush Strike", es: "Estacazo de acometida" }
  - { en: "Lunge Stance", es: "Postura de asalto" }
  - { en: "Zikel's Blessing", es: "Bendición de Zikel" }
  - { en: "Rage Burst", es: "Explosión de furia" }
  - { en: "Focused Block", es: "Bloqueo concentrado" }
  - { en: "Tenaciousness", es: "Perseverancia" }
  - { en: "Wrath Wave", es: "Onda de ira" }
  - { en: "Mocking Blade", es: "Espada devastadora" }
  - { en: "Overhead Slam", es: "Punzada descendente" }
  - { en: "Sword Aura Rampage", es: "Desenfreno de aura de espada" }
  - { en: "Ankle Slice", es: "Corte de tobillo" }
  - { en: "Crushing Wave", es: "Onda pulverizadora" }
  - { en: "Aerial Snare", es: "Amarre aéreo" }
  - { en: "Defiance", es: "Eliminación de impacto" }
  - { en: "Survival Stance", es: "Postura de supervivencia" }
  - { en: "Protection Armor", es: "Armadura de protección" }
  - { en: "Blood Absorption", es: "Absorción de sangre" }
  - { en: "Identify Weakness", es: "Identificación de debilidades" }
  - { en: "Attack Preparation", es: "Preparación de ataque" }
  - { en: "Impact Hit", es: "Acierto de impacto" }
  - { en: "Destructive Impulse", es: "Impulso de destrucción" }
  - { en: "Experienced Counterstrike", es: "Contraataque experimentado" }
  - { en: "Survival Willpower", es: "Voluntad de supervivencia" }
  - { en: "Murderous Burst", es: "Estallido de sed de sangre" }
  - { en: "Blade Toss", es: "Vuelo de cuchillas" }
  - { en: "Forced Restraint", es: "Amarre forzado" }
  - { en: "Assault Strike", es: "Estacazo agresivo" }
  - { en: "Fracturing Rush", es: "Acometida pulverizadora" }
  - { en: "Lifestealing Blade", es: "Espada de drenaje de sangre" }
  - { en: "Wave Armor", es: "Blindaje de onda" }
  - { en: "Armor of Balance", es: "Armadura de equilibrio" }
translationKey: gladiator
---

## La regla

Cada vez que haya un punto de skill, va a la skill más alta de la lista que admita otro nivel. Hay dos límites: los puntos, y el nivel del personaje, porque una skill solo puede subir un nivel cada tres niveles tuyos desde que la aprendes.

## Lo que cuesta cada nivel de skill

| Nivel de la skill | Puntos | Qué abre |
|---|---|---|
| 2 a 4 | 1 por nivel | Nada, solo pega más |
| 5 a 7 | 2 por nivel | Nada, solo pega más |
| 8 | 4 | Primer hueco de especialización, a elegir entre tres |
| 9 y 10 | 4 por nivel | El tope que se alcanza con puntos |

Llevar una skill a 8 son 13 puntos; a 10, 21. Subiendo a nivel 45 se ganan 203, que dan para unas nueve skills a 10. El resto de puntos sale de las Wisdom Stones: Monolito, mazmorras selladas y tiendas.

## Puntos de skill, por orden

| Orden | Skill | Tipo | Objetivo | Acumulado |
|---|---|---|---|---|
| 1 | **Overhead Slam** | Activa | 10 | 21 |
| 2 | **Rending Blow** (clic derecho) | Activa | 10 | 42 |
| 3 | **Ruinous Blow** | Activa | 10 | 63 |
| 4 | **Crushing Wave** | Activa | 10 | 84 |
| 5 | **Experienced Counterstrike** | Pasiva | 10 | 105 |
| 5 | **Attack Preparation** | Pasiva | 10 | 126 |
| 5 | **Murderous Burst** | Pasiva | 10 | 147 |
| 6 | **Identify Weakness** | Pasiva | 10 | 168 |
| 7 | **Keen Strike** (clic izquierdo) | Activa | 10 | 189 |
| 8 | El resto de activas | Activas | 8, según lleguen los puntos | |

- Al principio los puntos van a Rending Blow y Keen Strike, porque son las únicas que hay.
- Las pasivas del paso 5 se suben en cuanto se aprenden (niveles 13, 21 y 25).
- Las activas de persecución solo importan en PvP.
- Ya a nivel 45 no hay ninguna skill «menor». Entre los mejores Gladiators que mide metabot, casi todos llevan también **Impact Hit** (13,3 de media), **Blood Absorption** (12,8), **Survival Stance** (12,5), Survival Willpower (10,1), Destructive Impulse (9,8) y Protection Armor (7,9), contando lo que suman Daevanion y equipo. De las activas, Leaping Slam (12,3), Rush Strike (11,5), Sword Aura Rampage (11) y Ankle Slice (10,3). Al llegar a 45, los puntos que sobren van a estas.
- El juego deja guardar tres configuraciones de skills. Lo he visto en mi pantalla; me falta probar qué guarda cada una.

## Especializaciones

Cada activa tiene cinco. Se usa una con la skill entre nivel 8 y 11, dos desde el 12 y tres desde el 16: el propio juego marca el tercer hueco con un 16. Hay que equiparlas a mano después de subir la skill; si no, el hueco se queda vacío y no da nada. En algunas skills, la de nivel 12 o la de 16 es fija; en otras, el segundo hueco deja elegir entre varias (en Crushing Wave, por ejemplo, entre las tres de nivel 8 y la de 12).

Por encima de 10 ya no se sube con puntos, sino con Daevanion, cartas Arcana y equipo. En el global, skills y estigmas topan en 20.

| Skill | A nivel 8, una de estas | A nivel 12 | A nivel 16 |
|---|---|---|---|
| **Rending Blow** | −20 % de maná · +200 de bloqueo al usarla · **usable en movimiento** | Hasta +12 % de daño con menos objetivos | +50 de maná por crítico |
| **Keen Strike** | **+20 % de maná recuperado** · roba 1 % de vida · +50 % de golpe múltiple | Cada golpe quita 1 s a la recarga de Ruinous Blow | Añade la cadena Reckless Strike |
| **Overhead Slam** | **Roba 0,7 % de vida** · pasa a ser de área · añade la cadena Upward Strike | Todos los golpes son críticos | Quita la recarga |
| **Ruinous Blow** | +20 % de velocidad · **+12,5 m de alcance** · +30 % de crítico | Daño extra al acertar | Ignora bloqueo y evasión |
| **Crushing Wave** | **Roba 2 % de vida** · 50 de maná por crítico · hasta +20 % con más objetivos | Se reinicia con cada crítico | 50 % de arrastrar |
| **Leaping Slam** | Prepare for Battle 3 s · 50 % de lanzar Ankle Slice · **se reinicia al matar** | +20 % de PvE Damage Tolerance 3 s | Pasa a ser de área y atrae |
| **Rush Strike** | 300 de Stamina al acertar · **+10 m de alcance** · carga con daño en área | −10 s de recarga | +25 % de derribo |
| Mocking Blade | Roba 4 % de vida y un 15 % de la del objetivo (el final sale cortado) · pasa a ser de área con el objetivo derribado · añade 2 golpes | +1 s de derribo | Ignora bloqueo y evasión (cortado) |
| Sword Aura Rampage | Roba 5 % de vida · recupera 120 de maná · usable en movimiento | Golpe múltiple al acertar | −1 s a la recarga de todas las skills al acertar |
| Ankle Slice | 30 % de derribar 3 s · añade la cadena Ankle Smash · +16 m de alcance | Ignora bloqueo y evasión | 25 % de reiniciar su recarga |
| Aerial Snare | Golpe múltiple al acertar · +25 % de lanzar por los aires · +100 % de daño a objetivos incapacitados | Añade la cadena Forced Fall | −50 % de recarga |
| Defiance | Añade la cadena Wrath Burst · recupera 1.000 de Stamina al usarla · recupera 20 % de vida al usarla | +2 s de Tenacity | +50 % de PvE Damage Tolerance y algo más (cortado) |

Las cinco últimas filas las he copiado de mi pantalla el 8 de octubre de 2026; para esas no he encontrado qué eligen los demás. En negrita, lo que eligen para subir de nivel los creadores y los foros coreanos. En el final de juego la élite cambia varias: en Rending Blow lleva movimiento, bloqueo y el maná por crítico; en Overhead Slam, la cadena y las dos de nivel 12 y 16.

Las de «+X % de probabilidad» de aplicar un estado no valen nada en PvE, porque contra un monstruo el estado entra siempre.

## Estigmas

Se abren a nivel 22 y usan fragmentos, no puntos de skill. En el cliente global hay 13 por clase y **cuatro huecos**, que se abren a nivel 22, 27, 32 y 37.

Lo que llevan los 151 mejores Gladiator que sigue metabot (13 de octubre): **Lunge Stance 91 %, Zikel's Blessing 91 %, Rage Burst 73 % y Focused Block 62 %**. Detrás, Lifestealing Blade (42 %), Wrath Wave (27 %) y Tenaciousness (17 %). De media los llevan a 5-8.

Cada estigma enciende una especialidad fija a nivel 5, 10, 15 y 20; no se elige. Lo que dan los dos primeros escalones:

| Estigma | Qué hace | A nivel 5 | A nivel 10 |
|---|---|---|---|
| **Zikel's Blessing** | +20 % de ataque y +100 de precisión 10 s (2 min) | +50 % de daño a la barra de aturdimiento | **+10 % de daño PvE** (+5 % PvP) |
| **Lunge Stance** | +20 % de velocidad de combate 10 s (1 min) | +5 % de probabilidad de golpe doble | +20 % de velocidad de movimiento |
| **Rage Burst** | Golpe fuerte y Wounded: −10 % de ataque al enemigo (45 s) | **−15 s de recarga** | −10 % más de ataque al enemigo |
| **Focused Block** | +100 % de reducción al bloquear y parada segura (20 s) | Dos usos seguidos | Se puede usar en movimiento |
| **Lifestealing Blade** | Área a 4 enemigos y roba vida (90 s) | Hasta +20 % de daño cuantos más golpea | Robo de vida para el grupo 20 s |
| **Wrath Wave** | Área a 4 enemigos con derribo (1 min) | Hasta +20 % de daño cuantos más golpea | −20 % de ataque al enemigo 5 s |

Si solo uno puede ir a 10, que sea **Zikel's Blessing**: su escalón de 10 es el único que suma daño puro. Los demás, a 5: Lunge Stance y Rage Burst siempre, y el cuarto según toque. Focused Block para jefes; Lifestealing Blade si farmeas grupos de bichos o vas solo.

Coste por nivel: 1 fragmento hasta el 5, 2 hasta el 10, 4 hasta el 15 y 8 hasta el 20. Un estigma a nivel 20 son 75 fragmentos.

## Daevanion

Los cristales se gastan en nodos, y cada nodo tiene que tocar a uno que ya tengas. El coste va por color:

| Color | Qué es | Cristales |
|---|---|---|
| Gris | Una estadística | 1 |
| Verde | +1 a una pasiva | 2 |
| Azul | +1 a una activa | 3 |
| Naranja (las cuatro esquinas) | Nodo especial | 4 |

Subiendo a 45 se ganan 136 cristales, 4 por nivel desde el 12. Llenar los cinco tableros cuesta 802, y Nezekan, Zikel y Vaizel comparten la misma bolsa: el orden importa.

### Nezekan

Se abre a nivel 12. El tablero es una cuadrícula de 11 por 11; doy cada nodo por columna (desde la izquierda) y fila (desde arriba). El centro es la casilla 6, 6. El orden es el de aion2-meta para el tablero global.

| # | Columna, fila | Qué da | Cristales |
|---|---|---|---|
| 1 | 6, 5 | Attack +3 | 1 |
| 2 | 6, 7 | Defense +30 | 1 |
| 3 | 5, 7 | Critical Hit +5 | 1 |
| 4 | 4, 7 | Identify Weakness +1 | 2 |
| 5 | 5, 8 | Attack +3 | 1 |
| 6 | 3, 7 | HP +100 | 1 |
| 7 | 3, 8 | Defense +30 | 1 |
| 8 | 3, 9 | Rush Strike +1 | 3 |
| 9 | 3, 10 | Critical Hit +5 | 1 |
| 10 | 4, 10 | Attack +3 | 1 |
| 11 | 3, 11 | Blood Absorption +1 | 2 |
| 12 | 5, 10 | HP +100 | 1 |
| 13 | 5, 11 | **Ruinous Blow +1** | 3 |
| 14 | 6, 11 | Critical Hit +5 | 1 |
| 15 | 7, 11 | Survival Stance +1 | 2 |
| 16 | 7, 10 | Attack +3 | 1 |
| 17 | 8, 10 | HP +100 | 1 |
| 18 | 9, 10 | Ankle Slice +1 | 3 |
| 19 | 9, 11 | Critical Hit +5 | 1 |
| 20 | 10, 11 | Defense +30 | 1 |
| 21 | 11, 11 | **Combat Speed +1,5 %** | 4 |
| 22 | 7, 7 | HP +100 | 1 |
| 23 | 7, 8 | Critical Hit +5 | 1 |
| 24 | 5, 5 | MP +50 | 1 |
| 25 | 4, 5 | HP +100 | 1 |
| 26 | 3, 5 | **Rending Blow +1** | 3 |

Hasta el 26 son 40 cristales. Más lejos quedan Overhead Slam +1 (3, 2), Attack Preparation +1 (8, 5) y las otras tres esquinas: Combat Speed +1,5 % (1, 1) y Cooldown Reduction +1,5 % (11, 1 y 1, 11).

### Zikel

Se abre a nivel 20. Lo valioso está lejos del centro:

| Nodo | Columna, fila |
|---|---|
| Damage Boost +1,5 % | 11, 1 y 1, 11 |
| Damage Tolerance +1,5 % | 1, 1 y 11, 11 |
| Rending Blow +1 | 11, 5 |
| Overhead Slam +1 | 3, 11 |
| Ruinous Blow +1 | 9, 1 |
| Experienced Counterstrike +1 | 5, 4 y 9, 10 |
| Murderous Burst +1 | 3, 2 y 7, 8 |

Junto al centro: Attack +3 a la derecha (7, 6) y Defense +30 a la izquierda (5, 6).

Lo que he visto en mi pantalla alrededor del centro, pasando el ratón:

| Columna, fila | Qué da | Cristales |
|---|---|---|
| 5, 5 | Critical Hit +5 | 1 |
| 5, 4 | **Experienced Counterstrike +1** | 2 |
| 7, 5 | MP +50 | 1 |
| 8, 5 | **Destructive Impulse +1** | 2 |
| 7, 7 | Critical Hit Resist +5 | 1 |
| 7, 8 | **Murderous Burst +1** | 2 |
| 5, 7 | HP +100 | 1 |

Destructive Impulse e Impact Hit son dos pasivas distintas; las dos tienen nodo en este tablero. El orden de aion2-meta para los primeros nodos de Zikel es Attack, Defense, Critical Hit, Experienced Counterstrike +1, Attack, HP, Sword Aura Rampage +1, Defense, Impact Hit +1, Attack, Ruinous Blow +1 y Defense.

Entre 150 Gladiators punteros medidos por metabot, los nodos de skill que casi todos cogen son Overhead Slam +1 y Rending Blow +1 en Nezekan (98 % y 97 %), y Rending Blow, Overhead Slam y Ruinous Blow en Zikel (96 %, 95 % y 93 %).

## Rotación

Lo que hacen Grobs (la guía de PvE más vista), Sen y tres coreanos con medidor de daño:

1. **La macro del propio juego.** En Ajustes → Teclas → General hay una tecla de «Skill Macro». La macro es una línea de skills por prioridad; se mantiene pulsada esa tecla **a la vez que el clic izquierdo** (Keen Strike), y el juego encadena y cancela las animaciones solo. Cuando la cancelación sale bien, aparece una sombra negra. Sen la pone en el clic derecho.
2. **La línea**, de arriba abajo: Rage Burst → Overhead Slam → Rending Blow.
3. **Entrada:** Lunge Stance y Zikel's Blessing, saltar al jefe, Ruinous Blow (20 segundos de +20 % de daño PvE) y a la macro.
4. **El primer golpe del jefe, con Focused Block.** Si lo bloqueas, Experienced Counterstrike sube el daño de todo el grupo 20 segundos.
5. **Siempre delante del jefe:** Experienced Counterstrike da más daño de frente. Ayuda activar el indicador de orientación del jefe (Ajustes → Información en pantalla → Combate).

**El maná.** Keen Strike, con «+20 % de maná recuperado» y «+50 % de golpe múltiple», es lo que recarga mientras Rending Blow gasta. En Rending Blow, Grobs elige primero «usable en movimiento», porque sin ella la clase se vuelve torpe, y luego el +12 % de daño.

**A nivel 16** cambia todo: Overhead Slam pierde la recarga y Rending Blow devuelve 50 de maná por crítico. Desde ahí se deja de usar Keen Strike y solo se mantiene la tecla de la macro.

**Por orden de prioridad:** Overhead Slam y Rending Blow a 16. En estigmas, Rage Burst a 5 (recarga de 45 a 30 segundos), Focused Block a 5 (dos usos) y Lunge Stance a 20: con un crítico, 50 % de quitar 1 segundo a todas las recargas, casi siempre con todo activo. Pasivas: Experienced Counterstrike, Attack Preparation, Impact Hit (por la probabilidad de daño doble) y Murderous Burst.

**De dónde sale el daño.** En el medidor de un coreano de nivel 50 (un minuto contra un muñeco), más de la mitad del daño es Overhead Slam con su cadena Upward Strike; Rending Blow, un 10 %; Ruinous Blow, un 6 %. Otro coreano midió 20 veces que alternar Overhead Slam con Rending Blow hace algo más de daño que pulsar solo Overhead Slam. Corea va por delante en niveles y skills: los porcentajes pueden cambiar en el global.

⛔ Algunos coreanos usan macros de ratón externas para pulsar más rápido. NCSOFT las ha desaconsejado: aquí solo se usa la macro del juego.

Contra grupos, **Crushing Wave**: se reinicia con cada crítico.

## Para tumbar a los jefes (Stagger)

Algunos jefes, como Bakarma en Draupnir o Berk en Krao Cave, sacan una barra de Stagger. Si el grupo no la llena a tiempo, muere todo el mundo. Lo que llena la barra, según las fichas de metabot del cliente global:

| Skill | Llena | Qué es |
|---|---|---|
| **Lifestealing Blade** | 20 | Estigma, de área, roba vida |
| **Forced Restraint** | 20 | Un objetivo, sella |
| **Mocking Blade** | 15 | Un objetivo, derriba 3 s |
| **Leaping Slam** | 10 | Salto desde 20 m |
| Crushing Wave | 5 | De área |
| Blade Toss | 5 | A distancia, baja la defensa |
| Rending Blow | 2 | Clic derecho |

Lifestealing Blade es el quinto estigma, y con cuatro huecos no suele caber. Sword Aura Rampage y la pasiva Destructive Impulse no llenan la barra: pegan más fuerte al jefe una vez tumbado. Lo práctico es guardar Mocking Blade, Leaping Slam y Forced Restraint, si la llevas, para cuando salga la barra.

## Arena 1v1

Arena of Solitude, según metabot y game8; no lo he comprobado. 1 contra 1, 10 minutos, 3 vidas con 5 segundos para reaparecer, en Fire Temple Arena o Impetusium Arena. Abre siempre, desde nivel 45. El rango va por clase, de Iron a Challenger 1 (1.800 puntos), y da un bono de PvP que no se suma al del Abismo: vale el más alto. Cada combate da Abyss Points: 300 por jugar (10 a la semana) y 500 por ganar (30 a la semana). Abandonar cuenta como derrota.

**No iguala el equipo.** game8 dice que no y metabot que sí; en mi partida, no. El 19 de octubre de 2026, en Bronce, con 96k de CP y 2.066 de nivel de objeto, me tocó un Gladiator de 131k y 2.482 que pegaba mucho más fuerte de lo normal. En un vídeo de Taiwán, un Gladiator con 2.487 de nivel de objeto dice lo mismo: su rival le gana por equipo. En Bronce el emparejamiento mezcla equipos muy distintos, así que una derrota contra alguien con mucho más CP no dice nada de cómo juegas.

**Ajustes.** Un Gladiator coreano con 1.000 muertes en PvP quita el objetivo automático al usar skills, en las opciones de combate: el Gladiator entra con cargas y apuntando a mano falla menos. Sen guarda una configuración de skills para PvE, otra para PvP y otra para Battlefield, y al pasar a PvP cambia también alas y título.

**Estigmas.** Tenaciousness no falta nunca: 3 segundos sin recibir daño. Con ella, Lunge Stance, Zikel's Blessing y una de estas dos: **Blade Toss** (−30 % de defensa y −70 % de curación recibida 10 segundos; a nivel 10, además, ralentiza) o **Forced Restraint** (sella 5 segundos: el rival no puede usar skills).

**Apertura**, la del coreano: Blade Toss → Leaping Slam para entrar → Mocking Blade, el único derribo seguro → Forced Restraint → **Ruinous Blow para rematar**, que es el golpe más fuerte. Si el intercambio se tuerce, Zikel's Blessing o Tenaciousness y aguantar. La cadena de control de Inven: Mocking Blade → Overhead Slam → Aerial Snare → Forced Fall, entre 4 y 5 segundos en los que el rival no hace nada.

**Defiance** quita aturdimiento, derribo, lanzamiento, agarre, congelación y miedo, y da inmunidad; tarda 60 segundos en volver. Hay que hacérsela gastar al rival con un control flojo antes de soltar el bueno. El sello no lo quita.

**Contra cada clase,** lo que dicen las guías coreanas:

- **Cleric:** nada de daño en el tiempo, porque sus curas y las pociones lo limpian. Derribos, Forced Restraint para sellarle las curas y Blade Toss para quitarle el 70 % de lo que se cura.
- **Assassin:** si te embosca, Tenaciousness en el momento, no Defiance.
- **Templar y Chanter:** Ankle Slice, con su derribo.

En Arena no hay barra de Stagger, así que Sword Aura Rampage no sirve. Lo que más sube para PvP: PvP Damage Boost y PvP Damage Tolerance en el tablero de Azphel, el título Tread on White Wings (matar a 300 jugadores), los Abyss Power Shards y el amuleto.

## Equipo

- En el arma: velocidad de combate, después aumento de daño y precisión.
- Subiendo de nivel, arma a +5 y parar.
- En equipo que se va a cambiar, un solo grabado de Manastone: sube el nivel de objeto. Volver a grabar y el Soul Binding, solo en lo que vas a llevar tiempo.

## Dónde queda la clase

Según unos 300.000 registros de combate coreanos: arriba del todo en arena y para subir y farmear; un escalón por debajo en mazmorras, donde se la valora como tanque principal o secundario. El global va en un parche anterior.

**No tiene provocación.** Ninguna de sus skills ni estigmas obliga a un jefe a atacarte, y las guías coreanas de la clase no nombran ninguna: eso es del Templar. El Gladiator retiene al jefe pegando más que los demás y aguanta con Survival Stance, Protection Armor, Tenaciousness y el robo de vida. Las guías del global lo llaman DPS y tanque secundario.

**Para juntar enemigos sí tiene herramientas**, según sus especializaciones:

- **Leaping Slam**, con la de nivel 16: pasa a ser de área y atrae a los de alrededor.
- **Crushing Wave**, 3.ª: 50 % de arrastrar. Además pega hasta un 20 % más cuantos más golpea.
- **Rush Strike**, 1.ª: carga con daño en área y 10 m más de alcance.
- **Overhead Slam**, 1.ª: pasa a ser de área.
- **Wrath Wave**, el estigma: área a 4 enemigos con derribo.

Para tirar de un grupo: Rush Strike para entrar, Leaping Slam para juntarlos, Crushing Wave y Wrath Wave. Con los jefes no sirve.

## Lo que no tengo claro

- Si reiniciar el Daevanion cuesta Kina. El reinicio de activas y pasivas sí es gratis.
- Si cambiar de especialización cuesta algo.
- Qué guarda cada una de las tres configuraciones de skills.
- El tablero coreano tiene otra disposición: el orden de Nezekan está emparejado por tipo de nodo, no casilla a casilla.
