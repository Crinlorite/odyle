---
title: Logi Options+ shortcuts don't register in the game; the mouse's side buttons do
description: I tried to put flying up and down on my mouse buttons with Logitech's software and it did nothing. Binding the buttons inside the game works.
status: comprobado
topic: equipo
verifiedAt: 2026-10-07
where: { zone: Verteron, level: 26 }
rig: { machine: Steam Machine, os: Windows 11, gpu: AMD RX 7600 8 GB, display: Alienware AW2725QF at 3840×2160 and 165 Hz }
firstHand: true
sources:
  - { title: 'How to Fly — game8', url: 'https://game8.co/games/Aion-2/archives/626111', lang: en }
  - { title: 'AION 2 Keybindings, How to Change and Customize Your Controls — allthings.how', url: 'https://allthings.how/aion-2-keybindings-how-to-change-and-customize-your-controls/', lang: en }
  - { title: 'On gliding, which confuses people — Inven', url: 'https://www.inven.co.kr/board/aion2/6444/235', lang: ko }
updated: 2026-10-07
translationKey: atajos-logi-options-botones-laterales
---

## What people say

Guides give Ctrl + R to go up while flying and Ctrl + F to go down, and warn that almost everyone changes them on day one because you use them all the time.

## What happens

I wanted to move them to the two side buttons of an MX Master 3S. The first thing I tried was the usual: in Logi Options+, assign each button its keyboard shortcut. In the game they did nothing.

What did work was the other way around. I left the buttons at their factory settings, Back and Forward, and bound them inside the game, in the key settings, to flying up and down. That way the game recognizes them right away.

The explanation that seems most likely to me, though I haven't checked it: when Options+ sets the shortcut, the keys don't come from the mouse, the software simulates them, and the game ignores simulated keys. The factory button, on the other hand, is sent by the mouse itself.

## What to do

1. In the mouse software, leave the side buttons on their factory function. If you use shortcuts in other programs, create a profile just for the game.
2. In the game, go into the key settings, find flying up and down, and press each side button when it asks for the key.

If your mouse doesn't have buttons the game recognizes, change those two actions to single keys near WASD, without Ctrl. I haven't tried forcing the simulated keys through, and I don't recommend it in a game with anticheat.
