---
title: Eight GPU hangs on launch day on a Steam Machine
description: The game closed when using menus. It wasn't simply the game, but the graphics card stopping responding. What I measured and what calmed it down.
status: comprobado
topic: equipo
verifiedAt: 2026-10-05
where: { zone: Verteron, level: 11 }
rig: { machine: Steam Machine, os: Windows 11, gpu: 8 GB, display: 3840×2160 }
firstHand: true
sources:
  - { title: 'Crashes all day — AION 2 forum on Steam', url: 'https://steamcommunity.com/app/3393110/discussions/6/583935635494121453/', lang: en }
history:
  - { date: 2026-10-07, note: 'The crashes came back on 6 and 7 October. Linked the entry that covers what was tried and did not fix them.' }
updated: 2026-10-07
translationKey: cuelgues-grafica-steam-machine
---

## What people say

The Steam forum has crash threads going back to early access. The usual remedies are verifying files, updating the graphics driver, increasing virtual memory or turning off the launcher overlay.

## What happens

Eight crashes in about five hours, almost always with a menu open. Each one matches, to the second, a Windows dump that points to the graphics driver: it isn't the game failing, it's the card that stops responding. One of the game's own logs points to the interface.

What was set at the time: 3840×2160 borderless output and **no frame limit**. FSR was already on High Performance, so the game wasn't rendering at 4K.

The only thing I changed before it stopped was capping the frame rate at 45. The cause isn't confirmed: it's what coincided, and it needs more playtime before I call it good.

A separate effect: with textures on medium, the character's textures stayed blurry after dismounting or alt-tabbing. On high it doesn't happen.

**Added on 7 October:** the frame cap wasn't enough. The crashes came back on the next two days, and neither switching drivers nor turning off vertical sync stopped them. It's covered in [the 7 October entry](/en/cuaderno/cuelgues-sincronizacion-vertical/).

## What to do

I don't have a fix yet. A frame cap does no harm, but here it wasn't enough. Keep textures on high if your card can handle it, and lower FSR instead of quality.
