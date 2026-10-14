---
title: Steam Machine에서 출시 첫날 그래픽카드가 8번 멈춘 일
description: 메뉴를 쓰면 게임이 꺼졌습니다. 게임 자체 문제가 아니라 그래픽카드가 응답을 멈춘 것이었습니다. 제가 측정한 것과 증상을 가라앉힌 방법입니다.
status: comprobado
topic: equipo
verifiedAt: 2026-10-05
where: { zone: Verteron, level: 11 }
rig: { machine: Steam Machine, os: Windows 11, gpu: 8 GB, display: 3840×2160 }
firstHand: true
sources:
  - { title: 'Crashes all day — Steam AION 2 포럼', url: 'https://steamcommunity.com/app/3393110/discussions/6/583935635494121453/', lang: en }
history:
  - { date: 2026-10-07, note: '10월 6일과 7일에 다시 꺼졌습니다. 시도했지만 해결되지 않은 내용을 정리한 항목을 링크했습니다.' }
updated: 2026-10-07
translationKey: cuelgues-grafica-steam-machine
---

## 알려진 내용

Steam 포럼에는 얼리 액세스 때부터 튕김 관련 글이 올라와 있습니다. 흔히 나오는 해결책은 파일 무결성 검사, 그래픽 드라이버 업데이트, 가상 메모리 늘리기, 런처 오버레이 끄기입니다.

## 실제로 일어나는 일

5시간 정도 하는 동안 8번 꺼졌고, 거의 매번 메뉴를 열어 둔 상태였습니다. 꺼질 때마다 같은 초에 Windows 덤프가 남았고, 모두 그래픽 드라이버를 가리켰습니다. 게임이 죽는 게 아니라 그래픽카드가 응답을 멈추는 겁니다. 게임 자체 로그 중 하나는 UI를 가리켰습니다.

당시 설정은 3840×2160 테두리 없는 창 모드에 **프레임 제한 없음**이었습니다. FSR은 이미 High Performance였으니 게임이 4K로 렌더링하지는 않았습니다.

멈추기 전에 바꾼 건 프레임을 45로 제한한 것 하나뿐입니다. 원인이 확인된 건 아닙니다. 시기가 겹쳤을 뿐이고, 확실하다고 하려면 더 플레이해 봐야 합니다.

별개의 현상: 텍스처를 중간으로 두면 탈것에서 내리거나 알트탭할 때 캐릭터 텍스처가 흐릿한 채로 남았습니다. 높음에서는 그렇지 않습니다.

**10월 7일 추가:** 프레임 제한으로는 부족했습니다. 그 뒤 이틀 동안 다시 꺼졌고, 드라이버를 바꾸거나 수직 동기화를 꺼도 멈추지 않았습니다. 자세한 내용은 [10월 7일 항목](/ko/cuaderno/cuelgues-sincronizacion-vertical/)에 있습니다.

## 할 일

아직 해결책은 없습니다. 프레임 제한은 해가 되지 않지만, 제 경우엔 그걸로 부족했습니다. 그래픽카드가 버틴다면 텍스처는 높음으로 두고, 품질 대신 FSR을 낮추세요.
