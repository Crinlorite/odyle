---
title: Turning off vertical sync didn't fix the graphics card crashes
description: I wrote that turning it off had stopped them, and it wasn't true. They came back, and the game's own logs show it was already off on day one. What I tested and ruled out.
status: comprobado
topic: equipo
verifiedAt: 2026-10-07
where: { zone: Verteron, level: 26 }
rig: { machine: Steam Machine, os: Windows 11, gpu: AMD RX 7600 8 GB, display: Alienware AW2725QF at 3840×2160 and 165 Hz }
firstHand: true
sources:
  - { title: 'GPU Crash dump Triggered DXGI_ERROR — AION 2 forum on Steam', url: 'https://steamcommunity.com/app/3393110/discussions/6/583936001036071306/', lang: en }
  - { title: 'Crashes all day — AION 2 forum on Steam', url: 'https://steamcommunity.com/app/3393110/discussions/6/583935635494121453/', lang: en }
history:
  - { date: 2026-10-07, note: 'Published in the afternoon saying that turning off vertical sync had stopped the crashes.' }
  - { date: 2026-10-07, note: "Corrected that same afternoon: it crashed twice more with it off, and the game's reports contradict it." }
  - { date: 2026-10-10, note: 'Eleven more crashes from 8 to 10 October, with FreeSync off and at 2K; the last one at 1080p, resolution at 100% and textures at minimum, in the middle of combat. The menu lead is ruled out too. Now testing: TAA upscaler instead of FSR.' }
updated: 2026-10-11
translationKey: cuelgues-sincronizacion-vertical
---

## What people say

The error is always the same, `GPU Crash dump Triggered DXGI_ERROR_DEVICE_REMOVED`, and on the forums it gets blamed on almost everything: old drivers, temperature, overlays, corrupted files. On the Steam forum some people avoid it by closing menus with Esc instead of the X, and someone says it went away after switching upscaler.

## What happens

A few hours ago this entry said something else: that the crashes had stopped after turning off vertical sync. It held for almost two hours and then crashed twice more. I jumped the gun.

On top of that, there was a way to know without waiting. The game saves a report for every crash, and it records whether sync was on. Of the 22 crashes in three days, 10 happened with it off, including the eight [from launch day](/en/cuaderno/cuelgues-grafica-steam-machine/).

What I've changed that doesn't fix it:

| Change | What happened |
|---|---|
| Frame limit | The crashes came back the next day |
| Graphics quality, from minimum to high | It crashes on all of them |
| AMD driver, from Adrenalin 26.8.1 to 26.9.2 | It crashed after three minutes |
| Window, borderless and fullscreen, at 1080p and 4K | It crashes in every mode |
| Vertical sync | It crashes with and without it |
| FreeSync off in AMD's software, and 2560×1440 | Eleven more crashes in three days |
| 1080p, resolution at 100% and textures at minimum | It crashed all the same, on 10 October |

It doesn't depend on how full the graphics card's memory is either: it has crashed with 7.0 GB used out of 8 and held up for a good while at 8.06.

For the first few days it looked like it only happened when closing a fullscreen menu. On 10 October it crashed in the middle of a fight in the daily dungeon, so it's not that either. Windows hardware-accelerated GPU scheduling was already off.

The Windows dump for each crash says little, but it's clear: the graphics card stops making progress on a draw command and Windows resets it. On the Steam forum there are players with graphics cards from other brands and the same error when closing menus. That's why I suspect something the game does when coming back from the menu rather than this machine. I can't prove it.

## What to do

I don't have a fix. What I can tell you is what isn't worth an afternoon: changing drivers, lowering quality or touching vertical sync didn't help here.

What has worked for others and I still have to test, one at a time: switching upscaler (for one player, going from TSR to DLSS did it; I'm testing TAA instead of FSR), clearing the shader cache and removing overlays.

If the same thing happens to you, avoid opening fullscreen menus when a crash would cost you something, like in the middle of a dungeon. And if you want to check something before calling it settled, look at the report the game leaves for each crash instead of trusting a stretch without failures, which is exactly the mistake I made.
