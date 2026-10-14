---
title: 검성(Gladiator) PvE, 무엇을 어떤 순서로 올릴까
description: 제 검성 정리 노트입니다. 스킬 포인트, 특화, 스티그마, 데바니온, 딜 사이클을 한국 상위 유저들이 쓰는 세팅 기준으로 정리했습니다.
basis: 한국 유저 데이터, 글로벌 클라이언트 테이블, 대만 공략
updated: 2026-10-13
sources:
  - { title: 'Aion 2 Gladiator Build Guide (한국 유저 8,459명) — aion2-meta', url: 'https://aion2-meta.com/guides/gladiator/', lang: en }
  - { title: 'Gladiator, guía completa — IMPERIUM', url: 'https://comunidad-imp.com/guias/aion-2/clase-gladiator', lang: es }
  - { title: 'Aion 2 Gladiator Build, Skill Order by Level and Stigmas — mmo-codex', url: 'https://mmo-codex.com/articles/aion-2-gladiator-guide/', lang: en }
  - { title: 'Gladiator Build Planner (유저 150명) — metabot', url: 'https://metabot.gg/en/aion-2/classes/gladiator/build', lang: en }
  - { title: '검성 육성 가이드, 처음부터 끝까지 — 바하무트 AION2 게시판', url: 'https://forum.gamer.com.tw/C.php?bsn=82913&snA=3380', lang: zh }
  - { title: '스킬 16~20레벨 만드는 법 — 인벤', url: 'https://www.inven.co.kr/board/aion2/6444/457', lang: ko }
  - { title: 'How to Respec Skills and Daevanion Board — game8', url: 'https://game8.co/games/Aion-2/archives/629160', lang: en }
  - { title: '스페인어 클라이언트의 검성 스킬 이름 — metabot', url: 'https://metabot.gg/es/aion-2/classes/gladiator', lang: es }
glossary:
  - { en: "Keen Strike", es: "Estacazo punzante" }
  - { en: "Ruinous Blow", es: "Embestida de perdición" }
  - { en: "Rending Blow", es: "Embestida desgarradora" }
  - { en: "Leaping Slam", es: "Perforación con salto" }
  - { en: "Rush Strike", es: "Estacazo de acometida" }
  - { en: "Lunge Stance", es: "Postura de asalto" }
  - { en: "Zikel's Blessing", es: "Bendición de Zikel" }
  - { en: "Rage Burst", es: "Explosión de furia" }
  - { en: "Focused Block", es: "Bloqueo concentrado" }
  - { en: "Tenaciousness", es: "Perseverancia" }
  - { en: "Wrath Wave", es: "Onda de ira" }
  - { en: "Mocking Blade", es: "Espada devastadora" }
  - { en: "Overhead Slam", es: "Punzada descendente" }
  - { en: "Sword Aura Rampage", es: "Desenfreno de aura de espada" }
  - { en: "Ankle Slice", es: "Corte de tobillo" }
  - { en: "Crushing Wave", es: "Onda pulverizadora" }
  - { en: "Aerial Snare", es: "Amarre aéreo" }
  - { en: "Defiance", es: "Eliminación de impacto" }
  - { en: "Survival Stance", es: "Postura de supervivencia" }
  - { en: "Protection Armor", es: "Armadura de protección" }
  - { en: "Blood Absorption", es: "Absorción de sangre" }
  - { en: "Identify Weakness", es: "Identificación de debilidades" }
  - { en: "Attack Preparation", es: "Preparación de ataque" }
  - { en: "Impact Hit", es: "Acierto de impacto" }
  - { en: "Destructive Impulse", es: "Impulso de destrucción" }
  - { en: "Experienced Counterstrike", es: "Contraataque experimentado" }
  - { en: "Survival Willpower", es: "Voluntad de supervivencia" }
  - { en: "Murderous Burst", es: "Estallido de sed de sangre" }
  - { en: "Blade Toss", es: "Vuelo de cuchillas" }
  - { en: "Forced Restraint", es: "Amarre forzado" }
  - { en: "Assault Strike", es: "Estacazo agresivo" }
  - { en: "Fracturing Rush", es: "Acometida pulverizadora" }
  - { en: "Lifestealing Blade", es: "Espada de drenaje de sangre" }
  - { en: "Wave Armor", es: "Blindaje de onda" }
  - { en: "Armor of Balance", es: "Armadura de equilibrio" }
translationKey: gladiator
---

## 원칙

스킬 포인트가 생길 때마다 목록에서 가장 위에 있으면서 아직 한 레벨 더 올릴 수 있는 스킬에 넣습니다. 제한은 두 가지입니다. 포인트, 그리고 캐릭터 레벨입니다. 스킬은 배운 뒤로 캐릭터 레벨이 3 오를 때마다 한 레벨씩만 올릴 수 있기 때문입니다.

## 스킬 레벨별 비용

| 스킬 레벨 | 포인트 | 열리는 것 |
|---|---|---|
| 2~4 | 레벨당 1 | 없음, 대미지만 오릅니다 |
| 5~7 | 레벨당 2 | 없음, 대미지만 오릅니다 |
| 8 | 4 | 첫 번째 특화 슬롯, 세 개 중 하나 선택 |
| 9, 10 | 레벨당 4 | 포인트로 올릴 수 있는 최대치 |

스킬 하나를 8까지 올리는 데 13포인트, 10까지는 21포인트가 듭니다. 45레벨까지 올리면서 203포인트를 얻으니 스킬 아홉 개 정도를 10으로 만들 수 있습니다. 나머지 포인트는 Wisdom Stone으로 채웁니다. Monolith, 봉인된 던전, 상점에서 나옵니다.

## 스킬 포인트 투자 순서

| 순서 | 스킬 | 종류 | 목표 | 누적 |
|---|---|---|---|---|
| 1 | **Overhead Slam** | 액티브 | 10 | 21 |
| 2 | **Rending Blow** (우클릭) | 액티브 | 10 | 42 |
| 3 | **Ruinous Blow** | 액티브 | 10 | 63 |
| 4 | **Crushing Wave** | 액티브 | 10 | 84 |
| 5 | **Experienced Counterstrike** | 패시브 | 10 | 105 |
| 5 | **Attack Preparation** | 패시브 | 10 | 126 |
| 5 | **Murderous Burst** | 패시브 | 10 | 147 |
| 6 | **Identify Weakness** | 패시브 | 10 | 168 |
| 7 | **Keen Strike** (좌클릭) | 액티브 | 10 | 189 |
| 8 | 나머지 액티브 | 액티브 | 포인트가 생기는 대로 8 | |

- 초반에는 Rending Blow와 Keen Strike밖에 없으니 포인트가 그 둘로 갑니다.
- 5번 패시브는 배우자마자 올립니다(13, 21, 25레벨).
- 추격용 액티브는 PvP에서만 의미가 있습니다.
- 45레벨쯤 되면 “덜 중요한” 스킬은 없습니다. metabot이 집계하는 상위 검성들은 거의 다 **Impact Hit**(평균 13.3), **Blood Absorption**(12.8), **Survival Stance**(12.5), Survival Willpower(10.1), Destructive Impulse(9.8), Protection Armor(7.9)도 올려 둡니다. 데바니온과 장비로 붙는 레벨까지 합친 수치입니다. 액티브 중에서는 Leaping Slam(12.3), Rush Strike(11.5), Sword Aura Rampage(11), Ankle Slice(10.3)입니다. 45레벨이 되고 남는 포인트는 여기에 넣습니다.
- 스킬 세팅은 세 개까지 저장할 수 있습니다. 제 화면에서 봤고, 각 세팅에 무엇이 저장되는지는 아직 시험해 보지 못했습니다.

## 특화

액티브마다 특화가 다섯 개 있습니다. 스킬 레벨 8~11에서는 하나, 12부터는 둘, 16부터는 셋을 쓸 수 있습니다. 게임에서도 세 번째 슬롯에 16이라고 표시해 둡니다. 스킬을 올린 뒤에 직접 장착해야 하고, 안 그러면 슬롯이 빈 채로 남아 아무 효과도 없습니다. 어떤 스킬은 12레벨이나 16레벨 특화가 고정이고, 어떤 스킬은 두 번째 슬롯에서 여러 개 중에 고를 수 있습니다(예를 들어 Crushing Wave는 8레벨 특화 세 개와 12레벨 특화 중에서 고릅니다).

10을 넘으면 포인트가 아니라 데바니온, Arcana 카드, 장비로 올립니다. 글로벌에서는 스킬과 스티그마 모두 20이 최대입니다.

| 스킬 | 8레벨, 이 중 하나 | 12레벨 | 16레벨 |
|---|---|---|---|
| **Rending Blow** | 마나 소모 −20% · 사용 시 막기 +200 · **이동 중 사용 가능** | 대상이 적을수록 대미지 최대 +12% | 치명타마다 마나 +50 |
| **Keen Strike** | **마나 회복량 +20%** · 생명력 1% 흡수 · 다단 히트 +50% | 적중할 때마다 Ruinous Blow 재사용 대기시간 1초 감소 | Reckless Strike 연계 추가 |
| **Overhead Slam** | **생명력 0.7% 흡수** · 범위 공격으로 변경 · Upward Strike 연계 추가 | 모든 타격이 치명타 | 재사용 대기시간 제거 |
| **Ruinous Blow** | 속도 +20% · **사거리 +12.5m** · 치명타 +30% | 적중 시 추가 대미지 | 막기와 회피 무시 |
| **Crushing Wave** | **생명력 2% 흡수** · 치명타마다 마나 50 · 대상이 많을수록 최대 +20% | 치명타마다 초기화 | 50% 확률로 끌어당김 |
| **Leaping Slam** | Prepare for Battle 3초 · 50% 확률로 Ankle Slice 발동 · **처치 시 초기화** | 3초간 PvE Damage Tolerance +20% | 범위 공격으로 변경, 끌어당김 |
| **Rush Strike** | 적중 시 Stamina 300 · **사거리 +10m** · 범위 대미지 돌진 | 재사용 대기시간 −10초 | 넘어뜨리기 +25% |
| Mocking Blade | 생명력 4%와 대상 생명력 15% 흡수(뒷부분이 잘림) · 넘어진 대상에게 범위 공격으로 변경 · 2타 추가 | 넘어뜨리기 +1초 | 막기와 회피 무시(잘림) |
| Sword Aura Rampage | 생명력 5% 흡수 · 마나 120 회복 · 이동 중 사용 가능 | 적중 시 다단 히트 | 적중 시 모든 스킬 재사용 대기시간 −1초 |
| Ankle Slice | 30% 확률로 3초 넘어뜨리기 · Ankle Smash 연계 추가 · 사거리 +16m | 막기와 회피 무시 | 25% 확률로 재사용 대기시간 초기화 |
| Aerial Snare | 적중 시 다단 히트 · 공중에 띄울 확률 +25% · 행동 불가 대상에게 대미지 +100% | Forced Fall 연계 추가 | 재사용 대기시간 −50% |
| Defiance | Wrath Burst 연계 추가 · 사용 시 Stamina 1,000 회복 · 사용 시 생명력 20% 회복 | Tenacity +2초 | PvE Damage Tolerance +50% 외(잘림) |

마지막 다섯 줄은 2026년 10월 8일에 제 화면에서 옮겨 적은 것이고, 다른 사람들이 무엇을 고르는지는 찾지 못했습니다. 굵은 글씨는 크리에이터와 한국 커뮤니티가 레벨업용으로 고르는 특화입니다. 엔드 콘텐츠에서는 상위권이 몇 개를 바꿉니다. Rending Blow는 이동, 막기, 치명타당 마나를 쓰고, Overhead Slam은 연계와 12·16레벨 특화 두 개를 씁니다.

“+X% 확률”로 상태 이상을 거는 특화는 PvE에서 쓸모가 없습니다. 몬스터에게는 상태 이상이 무조건 들어가기 때문입니다.

## 스티그마

22레벨에 열리고, 스킬 포인트가 아니라 조각을 씁니다. 글로벌 클라이언트에는 클래스마다 13개가 있고 **슬롯은 네 개**이며, 22, 27, 32, 37레벨에 열립니다.

metabot이 추적하는 상위 검성 151명의 선택은 이렇습니다(10월 13일). **Lunge Stance 91%, Zikel's Blessing 91%, Rage Burst 73%, Focused Block 62%**. 그 뒤로 Lifestealing Blade(42%), Wrath Wave(27%), Tenaciousness(17%)입니다. 평균 5~8레벨로 씁니다.

스티그마마다 5, 10, 15, 20레벨에 고정 특화가 하나씩 켜지고, 고를 수는 없습니다. 첫 두 단계의 효과는 다음과 같습니다.

| 스티그마 | 효과 | 5레벨 | 10레벨 |
|---|---|---|---|
| **Zikel's Blessing** | 10초간 공격력 +20%, 명중 +100 (2분) | 기절 게이지 대미지 +50% | **PvE 대미지 +10%** (PvP +5%) |
| **Lunge Stance** | 10초간 전투 속도 +20% (1분) | 2연타 확률 +5% | 이동 속도 +20% |
| **Rage Burst** | 강타와 Wounded: 적 공격력 −10% (45초) | **재사용 대기시간 −15초** | 적 공격력 추가 −10% |
| **Focused Block** | 막기 시 피해 감소 +100%, 확정 막기 (20초) | 연속 2회 사용 | 이동 중 사용 가능 |
| **Lifestealing Blade** | 적 4명 범위 공격, 생명력 흡수 (90초) | 많이 맞힐수록 대미지 최대 +20% | 20초간 파티 생명력 흡수 |
| **Wrath Wave** | 적 4명 범위 공격, 넘어뜨리기 (1분) | 많이 맞힐수록 대미지 최대 +20% | 5초간 적 공격력 −20% |

하나만 10으로 올릴 수 있다면 **Zikel's Blessing**입니다. 10레벨 효과 중 순수 대미지를 올려 주는 건 이것뿐입니다. 나머지는 5까지만 올립니다. Lunge Stance와 Rage Burst는 항상, 네 번째는 상황에 따라 고릅니다. 보스전에는 Focused Block, 몹을 몰아서 사냥하거나 솔로 플레이라면 Lifestealing Blade입니다.

레벨당 비용은 5까지 조각 1개, 10까지 2개, 15까지 4개, 20까지 8개입니다. 스티그마 하나를 20레벨로 만들려면 조각 75개가 듭니다.

## 데바니온

크리스탈을 노드에 쓰고, 각 노드는 이미 찍은 노드와 붙어 있어야 합니다. 비용은 색깔에 따라 다릅니다.

| 색 | 내용 | 크리스탈 |
|---|---|---|
| 회색 | 능력치 하나 | 1 |
| 초록 | 패시브 +1 | 2 |
| 파랑 | 액티브 +1 | 3 |
| 주황(네 모서리) | 특수 노드 | 4 |

45레벨까지 올리면서 크리스탈 136개를 얻습니다. 12레벨부터 레벨당 4개입니다. 판 다섯 개를 다 채우려면 802개가 들고, Nezekan, Zikel, Vaizel이 같은 크리스탈을 나눠 쓰기 때문에 순서가 중요합니다.

### Nezekan

12레벨에 열립니다. 판은 11×11 격자이고, 각 노드를 열(왼쪽부터)과 행(위부터)으로 적었습니다. 중앙은 6, 6 칸입니다. 순서는 aion2-meta의 글로벌 판 기준입니다.

| # | 열, 행 | 효과 | 크리스탈 |
|---|---|---|---|
| 1 | 6, 5 | Attack +3 | 1 |
| 2 | 6, 7 | Defense +30 | 1 |
| 3 | 5, 7 | Critical Hit +5 | 1 |
| 4 | 4, 7 | Identify Weakness +1 | 2 |
| 5 | 5, 8 | Attack +3 | 1 |
| 6 | 3, 7 | HP +100 | 1 |
| 7 | 3, 8 | Defense +30 | 1 |
| 8 | 3, 9 | Rush Strike +1 | 3 |
| 9 | 3, 10 | Critical Hit +5 | 1 |
| 10 | 4, 10 | Attack +3 | 1 |
| 11 | 3, 11 | Blood Absorption +1 | 2 |
| 12 | 5, 10 | HP +100 | 1 |
| 13 | 5, 11 | **Ruinous Blow +1** | 3 |
| 14 | 6, 11 | Critical Hit +5 | 1 |
| 15 | 7, 11 | Survival Stance +1 | 2 |
| 16 | 7, 10 | Attack +3 | 1 |
| 17 | 8, 10 | HP +100 | 1 |
| 18 | 9, 10 | Ankle Slice +1 | 3 |
| 19 | 9, 11 | Critical Hit +5 | 1 |
| 20 | 10, 11 | Defense +30 | 1 |
| 21 | 11, 11 | **Combat Speed +1.5%** | 4 |
| 22 | 7, 7 | HP +100 | 1 |
| 23 | 7, 8 | Critical Hit +5 | 1 |
| 24 | 5, 5 | MP +50 | 1 |
| 25 | 4, 5 | HP +100 | 1 |
| 26 | 3, 5 | **Rending Blow +1** | 3 |

26번까지 크리스탈 40개입니다. 더 멀리에는 Overhead Slam +1 (3, 2), Attack Preparation +1 (8, 5), 그리고 나머지 세 모서리인 Combat Speed +1.5% (1, 1)와 Cooldown Reduction +1.5% (11, 1 및 1, 11)가 있습니다.

### Zikel

20레벨에 열립니다. 알짜 노드는 중앙에서 멀리 있습니다.

| 노드 | 열, 행 |
|---|---|
| Damage Boost +1.5% | 11, 1 및 1, 11 |
| Damage Tolerance +1.5% | 1, 1 및 11, 11 |
| Rending Blow +1 | 11, 5 |
| Overhead Slam +1 | 3, 11 |
| Ruinous Blow +1 | 9, 1 |
| Experienced Counterstrike +1 | 5, 4 및 9, 10 |
| Murderous Burst +1 | 3, 2 및 7, 8 |

중앙 바로 옆에는 오른쪽에 Attack +3 (7, 6), 왼쪽에 Defense +30 (5, 6)이 있습니다.

중앙 주변은 제 화면에서 마우스를 올려 직접 확인했습니다.

| 열, 행 | 효과 | 크리스탈 |
|---|---|---|
| 5, 5 | Critical Hit +5 | 1 |
| 5, 4 | **Experienced Counterstrike +1** | 2 |
| 7, 5 | MP +50 | 1 |
| 8, 5 | **Destructive Impulse +1** | 2 |
| 7, 7 | Critical Hit Resist +5 | 1 |
| 7, 8 | **Murderous Burst +1** | 2 |
| 5, 7 | HP +100 | 1 |

Destructive Impulse와 Impact Hit는 서로 다른 패시브이고, 둘 다 이 판에 노드가 있습니다. aion2-meta가 제시하는 Zikel 초반 노드 순서는 Attack, Defense, Critical Hit, Experienced Counterstrike +1, Attack, HP, Sword Aura Rampage +1, Defense, Impact Hit +1, Attack, Ruinous Blow +1, Defense입니다.

metabot이 집계한 상위 검성 150명이 거의 다 찍는 스킬 노드는 Nezekan의 Overhead Slam +1과 Rending Blow +1(98%, 97%), Zikel의 Rending Blow, Overhead Slam, Ruinous Blow(96%, 95%, 93%)입니다.

## 딜 사이클

1. **Ruinous Blow**로 시작합니다. Prepare for Battle이 20초 동안 걸리고 PvE 대미지가 +20% 오릅니다.
2. **Rending Blow**와 **Overhead Slam**을 번갈아 쓰고, 마나 회복용으로 **Keen Strike**를 섞습니다.
3. **Rage Burst**가 터지면 10초 동안 Overhead Slam을 연타합니다.
4. 몹이 여럿이면 **Crushing Wave**.

## 보스 눕히기 (Stagger)

Draupnir의 Bakarma나 Krao Cave의 Berk 같은 일부 보스는 Stagger 게이지를 띄웁니다. 파티가 제때 채우지 못하면 전멸합니다. 글로벌 클라이언트 기준 metabot 스킬 정보에 따르면 게이지를 채우는 스킬은 다음과 같습니다.

| 스킬 | 채우는 양 | 설명 |
|---|---|---|
| **Lifestealing Blade** | 20 | 스티그마, 범위, 생명력 흡수 |
| **Forced Restraint** | 20 | 단일 대상, 봉인 |
| **Mocking Blade** | 15 | 단일 대상, 3초 넘어뜨리기 |
| **Leaping Slam** | 10 | 20m 거리에서 도약 |
| Crushing Wave | 5 | 범위 |
| Blade Toss | 5 | 원거리, 방어력 감소 |
| Rending Blow | 2 | 우클릭 |

Lifestealing Blade는 다섯 번째 스티그마라서 슬롯이 네 개뿐이면 보통 들어갈 자리가 없습니다. Sword Aura Rampage와 패시브 Destructive Impulse는 게이지를 채우지 않습니다. 보스가 누운 뒤에 더 세게 때리는 스킬입니다. 실전에서는 Mocking Blade, Leaping Slam, 그리고 들고 있다면 Forced Restraint를 아껴 뒀다가 게이지가 뜰 때 씁니다.

## 장비

- 무기 옵션은 전투 속도, 그다음 대미지 증가와 명중입니다.
- 레벨업 중에는 무기를 +5까지만 강화하고 멈춥니다.
- 곧 바꿀 장비에는 Manastone 각인을 한 번만 합니다. 아이템 레벨이 오르니까요. 재각인과 Soul Binding은 오래 쓸 장비에만 합니다.

## 클래스 위치

한국 전투 기록 약 300,000건 기준으로 아레나와 레벨업, 사냥에서는 최상위입니다. 던전에서는 한 단계 아래인데, 메인 탱커나 서브 탱커로 평가받습니다. 글로벌은 한 패치 뒤처져 있습니다.

## 아직 확실하지 않은 것

- 데바니온 초기화에 키나가 드는지. 액티브와 패시브 초기화는 무료입니다.
- 특화를 바꾸는 데 비용이 드는지.
- 스킬 세팅 세 개에 각각 무엇이 저장되는지.
- 한국 판은 배치가 다릅니다. Nezekan 순서는 칸 단위가 아니라 노드 종류별로 맞춘 것입니다.
