---
title: Global's anticheat is NCGuard, not EasyAntiCheat
description: I checked on my machine with the game running. It's NCSOFT's own and runs inside the game, although some say global uses EasyAntiCheat.
status: comprobado
topic: equipo
verifiedAt: 2026-10-06
where: { zone: Verteron, level: 20 }
rig: { machine: Steam Machine, os: Windows 11, gpu: 8 GB, display: 3840×2160 }
firstHand: true
sources:
  - { title: 'AION 2 — ProtonDB', url: 'https://www.protondb.com/app/3393110', lang: en }
updated: 2026-10-06
translationKey: anticheat-ncguard
---

## What people say

It depends on where you look. ProtonDB talks about NCGuard, NCSOFT's anticheat. On the other hand, some Korean-language summaries take it for granted that the North American and European servers use EasyAntiCheat.

## What happens

In the game folder there's an NCGuard library, signed by NC Corporation, and the game keeps it loaded while it runs. EasyAntiCheat and BattlEye are installed on the machine for other games, but stopped while AION 2 is open.

I haven't seen an NCSOFT kernel driver loaded. That's what can be seen from the outside: it doesn't rule out that it loads something some other way.

The file was updated on 6 October, so there was a patch that day.

## What to do

Nothing special. If you're coming from games with EasyAntiCheat, what you know about it doesn't apply here. And if you want to use third-party tools, keep in mind that NCSOFT hasn't published what it tolerates and what it doesn't.
