---
title: 글로벌 안티치트는 EasyAntiCheat가 아니라 NCGuard입니다
description: 게임을 켠 상태로 제 기기에서 직접 확인했습니다. 글로벌은 EasyAntiCheat를 쓴다는 말도 있지만, NCSOFT 자체 안티치트이고 게임 안에서 돌아갑니다.
status: comprobado
topic: equipo
verifiedAt: 2026-10-06
where: { zone: Verteron, level: 20 }
rig: { machine: Steam Machine, os: Windows 11, gpu: 8GB, display: 3840×2160 }
firstHand: true
sources:
  - { title: 'AION 2 — ProtonDB', url: 'https://www.protondb.com/app/3393110', lang: en }
updated: 2026-10-06
translationKey: anticheat-ncguard
---

## 알려진 내용

어디를 보느냐에 따라 다릅니다. ProtonDB에서는 NCSOFT의 안티치트인 NCGuard 이야기가 나옵니다. 반면 한국어 요약글 중에는 북미·유럽 서버가 EasyAntiCheat를 쓴다고 당연하게 적어 둔 글도 있습니다.

## 실제로 일어나는 일

게임 폴더에 NC Corporation 서명이 된 NCGuard 라이브러리가 있고, 게임이 실행되는 동안 이걸 불러온 상태로 둡니다. EasyAntiCheat와 BattlEye는 다른 게임 때문에 기기에 설치돼 있지만, AION 2를 켜 둔 동안에는 멈춰 있습니다.

NCSOFT 커널 드라이버가 로드된 건 보지 못했습니다. 밖에서 보이는 건 여기까지라서, 다른 경로로 무언가를 불러올 가능성까지 배제하지는 못합니다.

파일이 10월 6일에 업데이트됐으니 그날 패치가 있었던 겁니다.

## 할 일

특별히 할 건 없습니다. EasyAntiCheat를 쓰는 게임에서 넘어왔다면 그쪽에서 알던 내용은 여기에 해당하지 않습니다. 그리고 서드파티 도구를 쓰고 싶다면, NCSOFT가 무엇을 허용하고 무엇을 허용하지 않는지 공개한 적이 없다는 점을 염두에 두는 게 좋습니다.
