import type { Lang } from '../i18n/langs';

export const TOPIC_KEYS = ['economia', 'recoleccion', 'fabricacion', 'tienda', 'progresion', 'equipo'] as const;
export type Topic = (typeof TOPIC_KEYS)[number];

type Info = { name: string; blurb: string };
export const TOPICS: Record<Lang, Record<Topic, Info>> = {
  es: {
    economia: { name: 'Economía', blurb: 'El Mercado, la Kina y lo que cuesta cada cosa.' },
    recoleccion: { name: 'Recolección', blurb: 'Essence Extraction: nodos, puntos y Odyle.' },
    fabricacion: { name: 'Fabricación', blurb: 'Los cinco oficios y sus materiales.' },
    tienda: { name: 'Tienda', blurb: 'Membresía, pases y qué compensa comprar.' },
    progresion: { name: 'Progresión', blurb: 'Skills, estigmas y Daevanion.' },
    equipo: { name: 'Equipo', blurb: 'Jugar en una Steam Machine con Windows 11.' },
  },
  en: {
    economia: { name: 'Economy', blurb: 'The Market, Kina and what everything costs.' },
    recoleccion: { name: 'Gathering', blurb: 'Essence Extraction: nodes, points and Odyle.' },
    fabricacion: { name: 'Crafting', blurb: 'The five crafting professions and their materials.' },
    tienda: { name: 'Shop', blurb: 'Membership, passes and what is worth buying.' },
    progresion: { name: 'Progression', blurb: 'Skills, stigmas and Daevanion.' },
    equipo: { name: 'Hardware', blurb: 'Playing on a Steam Machine with Windows 11.' },
  },
  ko: {
    economia: { name: '경제', blurb: '거래소, 키나, 그리고 각종 비용.' },
    recoleccion: { name: '채집', blurb: 'Essence Extraction: 채집 지점, 포인트, Odyle.' },
    fabricacion: { name: '제작', blurb: '다섯 가지 제작 기술과 재료.' },
    tienda: { name: '상점', blurb: '멤버십, 패스, 그리고 살 만한 것.' },
    progresion: { name: '성장', blurb: '스킬, 스티그마, 데바니온.' },
    equipo: { name: '플레이 환경', blurb: 'Windows 11 Steam Machine에서 플레이하기.' },
  },
};
