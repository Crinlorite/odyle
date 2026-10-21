---
title: PURPLE no aprovecha la instalación de Steam, pero sí una suya movida de sitio
description: "Apuntar PURPLE a la carpeta de Steam no sirve, ni con un enlace simbólico: descarga los 82 GB. Mover una instalación de PURPLE sí. Y los cierres siguen."
status: comprobado
topic: equipo
verifiedAt: 2026-10-21
where: { zone: 'Fuera del juego, en el launcher', level: 45 }
rig: { machine: Steam Machine, os: Windows 11, gpu: AMD RX 7600 de 8 GB, display: Alienware AW2725QF a 3840×2160 y 165 Hz }
firstHand: true
updated: 2026-10-21
translationKey: purple-no-aprovecha-la-instalacion-de-steam
---

## Lo que se dice

Steam y PURPLE, el launcher de NCSOFT, instalan el mismo cliente. Así que parece lógico enseñarle a PURPLE la carpeta de Steam y ahorrarse la descarga.

## Lo que pasa

No funciona. Lo probé el 20 y el 21 de octubre en la Steam Machine:

| Prueba | Qué pasó |
|---|---|
| Elegir en PURPLE la carpeta de Steam, `steamapps\common\AION2` | No la reconoce |
| Un enlace simbólico `steamapps\common\AION 2` → `AION2` | Tampoco: crea su propia carpeta y descarga el juego entero, unos 82 GB |
| Mover una instalación de PURPLE ya hecha a otra carpeta | Funciona: la reconoce en segundos, sin descargar nada |

Con PURPLE, además, la configuración se guarda en `%LOCALAPPDATA%\AION2\Saved_Global\` y no en `Saved_Steam\`. Los ajustes gráficos no pasan de un sitio a otro: hay que volver a ponerlos.

Y cambiar de launcher no arregla [los cierres de la gráfica](/es/cuaderno/cuelgues-sincronizacion-vertical/). El 20 de octubre se colgó cuatro veces con PURPLE, a las 21:01, 22:13, 22:16 y 22:25, con el mismo `DXGI_ERROR_DEVICE_REMOVED` que con Steam esa misma tarde.

## Qué hacer

- Si quieres los dos launchers, cuenta con dos descargas completas: no comparten archivos.
- Para mover PURPLE de disco: ciérralo desde la bandeja, mueve la carpeta (la mía está en `C:\PURPLE\AION 2`), ábrelo, pulsa «Instalar» y elige esa carpeta.
- Al estrenar PURPLE, repasa los ajustes gráficos.
- No te cambies de launcher por los cierres: a mí no me ha servido.

## Cómo se va a comprobar

Si una actualización de PURPLE o de Steam cambia esto, volveré a probar el enlace a la carpeta de Steam. Y seguiré contando los cierres con PURPLE frente a los de Steam.
