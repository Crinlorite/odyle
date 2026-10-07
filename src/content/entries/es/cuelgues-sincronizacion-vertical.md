---
title: Los cuelgues de la gráfica pararon al quitar la sincronización vertical
description: Una veintena de cierres en tres días en una Steam Machine. No era el controlador ni la memoria de la gráfica; pararon al apagar la sincronización vertical.
status: comprobado
topic: equipo
verifiedAt: 2026-10-07
where: { zone: Verteron, level: 20 }
rig: { machine: Steam Machine, os: Windows 11, gpu: AMD RX 7600 de 8 GB, display: Alienware AW2725QF a 3840×2160 y 165 Hz }
firstHand: true
sources:
  - { title: 'GPU Crash dump Triggered DXGI_ERROR — foro de AION 2 en Steam', url: 'https://steamcommunity.com/app/3393110/discussions/6/583936001036071306/', lang: en }
  - { title: 'Crashes all day — foro de AION 2 en Steam', url: 'https://steamcommunity.com/app/3393110/discussions/6/583935635494121453/', lang: en }
updated: 2026-10-07
translationKey: cuelgues-sincronizacion-vertical
---

## Lo que se dice

El aviso es siempre el mismo, `GPU Crash dump Triggered DXGI_ERROR_DEVICE_REMOVED`, y en los foros se achaca a casi todo: controlador antiguo, temperatura, superposiciones, archivos dañados. En el foro de Steam hay quien lo evita cerrando los menús con Esc en lugar de con la X, y quien dice que se le fue al cambiar de escalador. No he encontrado a nadie que nombre la sincronización vertical.

## Lo que pasa

Los cierres [del día del estreno](/es/cuaderno/cuelgues-grafica-steam-machine/) volvieron los dos días siguientes. En tres días fueron una veintena, casi siempre al salir de un menú, y el 7 de octubre llegaron a ser uno cada 2 a 12 minutos. Cada cierre coincide al segundo con un volcado de Windows que señala al controlador de AMD: la gráfica deja de responder y el juego la pierde.

Lo que fui cambiando ese día, por orden:

| Cambio | Qué pasó |
|---|---|
| Controlador de AMD, de Adrenalin 26.8.1 a 26.9.2 | Se colgó a los tres minutos de entrar |
| Pantalla completa en lugar de sin bordes | Mejoró: un cierre en algo más de una hora |
| Sincronización vertical apagada | Ninguno desde entonces, con el juego a 4K |

Tampoco era que la gráfica se quedase sin memoria. Con la sincronización puesta se colgaba con entre 7,2 y 7,4 GB ocupados de los 8 que tiene la tarjeta. Con ella apagada llegó a 8,06 GB, llena del todo, y aguantó.

Encaja con dos pistas que ya había. Pasaba al salir de los menús, que es cuando los fotogramas cambian de golpe. Y el primer día se calmó al limitar los fotogramas. Las dos cosas tienen que ver con cómo se presentan las imágenes en pantalla, no con cuánto trabaja la gráfica.

Hasta dónde llega esto: es una tarde de juego, no una semana. El controlador nuevo, por sí solo, no bastó: con él y la sincronización puesta se colgó tres veces. Y es este equipo, con un monitor compatible con FreeSync de 48 a 165 Hz. En otro puede no ser así.

## Qué hacer

Si se te cierra con ese aviso al salir de los menús, apaga la sincronización vertical en los ajustes gráficos del juego antes de tocar nada más. Es un cambio de diez segundos y se deshace igual.

Sin ella la imagen puede partirse en los movimientos rápidos; con un monitor de refresco variable no debería. Pon además un límite de fotogramas por debajo del refresco de tu monitor, para que la gráfica no trabaje al máximo dentro de los menús.
