---
title: Quitar la sincronización vertical no arregló los cuelgues de la gráfica
description: Publiqué que apagarla los había parado, y no era verdad. Volvieron, y el propio juego guarda que el primer día ya estaba apagada. Lo probado y descartado.
status: comprobado
topic: equipo
verifiedAt: 2026-10-07
where: { zone: Verteron, level: 26 }
rig: { machine: Steam Machine, os: Windows 11, gpu: AMD RX 7600 de 8 GB, display: Alienware AW2725QF a 3840×2160 y 165 Hz }
firstHand: true
sources:
  - { title: 'GPU Crash dump Triggered DXGI_ERROR — foro de AION 2 en Steam', url: 'https://steamcommunity.com/app/3393110/discussions/6/583936001036071306/', lang: en }
  - { title: 'Crashes all day — foro de AION 2 en Steam', url: 'https://steamcommunity.com/app/3393110/discussions/6/583935635494121453/', lang: en }
history:
  - { date: 2026-10-07, note: 'Publicada por la tarde diciendo que apagar la sincronización vertical había parado los cierres.' }
  - { date: 2026-10-07, note: 'Corregida esa misma tarde: volvió a colgarse dos veces con ella apagada, y los informes del juego lo desmienten.' }
updated: 2026-10-07
translationKey: cuelgues-sincronizacion-vertical
---

## Lo que se dice

El aviso es siempre el mismo, `GPU Crash dump Triggered DXGI_ERROR_DEVICE_REMOVED`, y en los foros se achaca a casi todo: controlador antiguo, temperatura, superposiciones, archivos dañados. En el foro de Steam hay quien lo evita cerrando los menús con Esc en lugar de con la X, y quien dice que se le fue al cambiar de escalador.

## Lo que pasa

Esta entrada decía otra cosa hace unas horas: que los cierres habían parado al apagar la sincronización vertical. Aguantó casi dos horas y volvió a colgarse dos veces. Me precipité.

Además había una forma de saberlo sin esperar. El juego guarda un informe de cada cierre, y en él apunta si la sincronización estaba puesta. De los 22 cierres en tres días, 10 fueron con ella apagada, incluidos los ocho [del día del estreno](/es/cuaderno/cuelgues-grafica-steam-machine/).

Lo que he cambiado y no lo arregla:

| Cambio | Qué pasó |
|---|---|
| Límite de fotogramas | Los cierres volvieron al día siguiente |
| Calidad gráfica, del mínimo a alta | Se cuelga con todas |
| Controlador de AMD, de Adrenalin 26.8.1 a 26.9.2 | Se colgó a los tres minutos |
| Ventana, sin bordes y pantalla completa, a 1080p y a 4K | Se cuelga en todos los modos |
| Sincronización vertical | Se cuelga con ella y sin ella |

Tampoco depende de lo llena que esté la memoria de la gráfica: se ha colgado con 7,0 GB ocupados de 8 y ha aguantado un buen rato con 8,06.

Lo único que no cambia nunca es el momento: pasa al cerrar un menú de pantalla completa y volver al mundo. Habilidades, logros, ajustes, da igual cuál.

Lo que dice el volcado de Windows de cada cierre es poco, pero claro: la gráfica deja de avanzar con una orden de dibujo y Windows la reinicia. En el foro de Steam hay jugadores con gráficas de otra marca y el mismo aviso al cerrar menús. Por eso sospecho de algo que hace el juego al volver del menú más que de este equipo. No lo puedo demostrar.

## Qué hacer

No tengo arreglo. Lo que sí puedo decir es qué no merece la tarde: cambiar de controlador, bajar la calidad o tocar la sincronización vertical no sirvió aquí.

Si te pasa lo mismo, evita abrir menús de pantalla completa cuando un cierre te haría perder algo, como en mitad de una mazmorra. Y si quieres comprobar algo antes de darlo por bueno, mira el informe que el juego deja de cada cierre en lugar de fiarte de un rato sin fallos, que es justo el error que cometí yo.
