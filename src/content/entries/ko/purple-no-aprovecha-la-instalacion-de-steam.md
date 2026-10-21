---
title: PURPLE는 Steam 설치본을 쓰지 못하지만, 자기 설치본은 옮겨도 인식합니다
description: "PURPLE에 Steam 폴더를 지정해도, 심볼릭 링크를 걸어도 안 됩니다. 82GB를 전부 받습니다. PURPLE 설치본을 옮기는 건 됩니다. 크래시는 그대로입니다."
status: comprobado
topic: equipo
verifiedAt: 2026-10-21
where: { zone: '게임 밖, 런처', level: 45 }
rig: { machine: Steam Machine, os: Windows 11, gpu: AMD RX 7600 8GB, display: Alienware AW2725QF 3840×2160 165Hz }
firstHand: true
updated: 2026-10-21
translationKey: purple-no-aprovecha-la-instalacion-de-steam
---

## 알려진 내용

Steam과 엔씨소프트 런처 PURPLE는 같은 클라이언트를 설치합니다. 그래서 PURPLE에 Steam 폴더를 알려 주면 다운로드를 건너뛸 수 있을 것 같습니다.

## 실제로 일어나는 일

안 됩니다. 10월 20일과 21일에 제 Steam Machine(Windows 11)에서 시험했습니다:

| 시험 | 결과 |
|---|---|
| PURPLE에서 Steam 폴더 `steamapps\common\AION2` 선택 | 인식하지 못함 |
| 심볼릭 링크 `steamapps\common\AION 2` → `AION2` | 역시 안 됨. 자체 폴더를 만들고 게임 전체(약 82GB)를 받음 |
| 이미 설치한 PURPLE 폴더를 다른 곳으로 이동 | 됨. 몇 초 만에 인식하고 아무것도 받지 않음 |

또 PURPLE는 설정을 `Saved_Steam\`이 아니라 `%LOCALAPPDATA%\AION2\Saved_Global\`에 저장합니다. 그래픽 설정은 넘어가지 않으니 다시 맞춰야 합니다.

그리고 런처를 바꿔도 [그래픽카드 크래시](/ko/cuaderno/cuelgues-sincronizacion-vertical/)는 해결되지 않습니다. 10월 20일 PURPLE로 21:01, 22:13, 22:16, 22:25에 네 번 꺼졌고, 같은 날 오후 Steam과 똑같은 `DXGI_ERROR_DEVICE_REMOVED`였습니다.

## 할 일

- 두 런처를 다 쓰려면 전체 다운로드를 두 번 해야 합니다. 파일을 공유하지 않습니다.
- PURPLE를 다른 드라이브로 옮기려면: 트레이에서 종료하고, 폴더를 옮기고(제 경우 `C:\PURPLE\AION 2`), PURPLE를 열어 “설치”를 누른 뒤 그 폴더를 고릅니다.
- PURPLE를 처음 쓸 때 그래픽 설정을 다시 확인합니다.
- 크래시 때문에 런처를 바꾸지는 마세요. 저는 효과가 없었습니다.

## 확인 방법

PURPLE나 Steam 업데이트로 달라지면 Steam 폴더 링크를 다시 시험하겠습니다. 그리고 PURPLE와 Steam의 크래시 횟수를 계속 비교하겠습니다.
