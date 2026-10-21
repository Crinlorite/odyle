---
title: PURPLE does not reuse the Steam install, but it does accept its own install moved elsewhere
description: "Pointing PURPLE at the Steam folder fails, even with a symbolic link: it downloads all 82 GB. Moving a PURPLE install works. And the crashes go on."
status: comprobado
topic: equipo
verifiedAt: 2026-10-21
where: { zone: 'Outside the game, in the launcher', level: 45 }
rig: { machine: Steam Machine, os: Windows 11, gpu: AMD RX 7600 8 GB, display: Alienware AW2725QF at 3840×2160 and 165 Hz }
firstHand: true
updated: 2026-10-21
translationKey: purple-no-aprovecha-la-instalacion-de-steam
---

## What people say

Steam and PURPLE, NCSOFT's launcher, install the same client. So it seems logical to show PURPLE the Steam folder and skip the download.

## What happens

It does not work. I tested it on 20 and 21 October on the Steam Machine:

| Test | What happened |
|---|---|
| Choosing the Steam folder, `steamapps\common\AION2`, in PURPLE | It does not recognise it |
| A symbolic link `steamapps\common\AION 2` → `AION2` | Neither: it creates its own folder and downloads the whole game, about 82 GB |
| Moving an existing PURPLE install to another folder | It works: it recognises it in seconds, without downloading anything |

With PURPLE, the settings are also saved in `%LOCALAPPDATA%\AION2\Saved_Global\` and not in `Saved_Steam\`. Graphics settings do not carry over: you have to set them again.

And switching launcher does not fix [the graphics card crashes](/en/cuaderno/cuelgues-sincronizacion-vertical/). On 20 October it crashed four times with PURPLE, at 21:01, 22:13, 22:16 and 22:25, with the same `DXGI_ERROR_DEVICE_REMOVED` as with Steam that same afternoon.

## What to do

- If you want both launchers, expect two full downloads: they do not share files.
- To move PURPLE to another drive: close it from the tray, move the folder (mine is in `C:\PURPLE\AION 2`), open it, press “Install” and choose that folder.
- When you start using PURPLE, go over the graphics settings.
- Do not switch launcher because of the crashes: it has not helped me.

## How it will be verified

If a PURPLE or Steam update changes this, I will test the link to the Steam folder again. And I will keep counting crashes with PURPLE against those with Steam.
