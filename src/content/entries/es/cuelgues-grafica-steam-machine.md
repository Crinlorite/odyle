---
title: Ocho cuelgues de la gráfica el día del estreno en una Steam Machine
description: El juego se cerraba al usar menús. No era el juego a secas, sino la gráfica dejando de responder. Lo que medí y lo que lo calmó.
status: comprobado
topic: equipo
verifiedAt: 2026-10-05
where: { zone: Verteron, level: 11 }
rig: { machine: Steam Machine, os: Windows 11, gpu: 8 GB, display: 3840×2160 }
firstHand: true
sources:
  - { title: 'Crashes all day — foro de AION 2 en Steam', url: 'https://steamcommunity.com/app/3393110/discussions/6/583935635494121453/', lang: en }
updated: 2026-10-05
translationKey: cuelgues-grafica-steam-machine
---

## Lo que se dice

En el foro de Steam hay hilos de cierres desde el acceso anticipado. Los remedios habituales son verificar archivos, actualizar el controlador gráfico, ampliar la memoria virtual o quitar la superposición del lanzador.

## Lo que pasa

Ocho cierres en unas cinco horas, casi siempre con un menú abierto. Cada uno coincide al segundo con un volcado de Windows que señala al controlador de la gráfica: no falla el juego, deja de responder la tarjeta. Uno de los registros del propio juego apunta a la interfaz.

Lo que había en ese momento: salida a 3840×2160 sin bordes y **sin límite de fotogramas**. El FSR ya estaba en High Performance, así que el juego no dibujaba a 4K.

Lo único que cambié antes de que parase fue limitar a 45 fotogramas. La causa no está confirmada: es lo que coincidió, y hace falta más tiempo de juego para darlo por bueno.

Un efecto aparte: con las texturas en media, las del personaje se quedaban borrosas al bajar de la montura o al tabular. En alta no pasa.

## Qué hacer

Si se te cierra al abrir menús, pon un límite de fotogramas antes de tocar nada más. Deja las texturas en alta si tu gráfica lo aguanta, y baja el FSR en lugar de la calidad.
