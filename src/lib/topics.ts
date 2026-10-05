export const TOPIC_KEYS = ['economia', 'recoleccion', 'fabricacion', 'tienda', 'progresion', 'equipo'] as const;
export type Topic = (typeof TOPIC_KEYS)[number];

export const TOPICS: Record<Topic, { name: string; blurb: string }> = {
  economia: { name: 'Economía', blurb: 'El Mercado, la Kina y lo que cuesta cada cosa.' },
  recoleccion: { name: 'Recolección', blurb: 'Essence Extraction: nodos, puntos y Odyle.' },
  fabricacion: { name: 'Fabricación', blurb: 'Los cinco oficios y sus materiales.' },
  tienda: { name: 'Tienda', blurb: 'Membresía, pases y qué compensa comprar.' },
  progresion: { name: 'Progresión', blurb: 'Skills, estigmas y Daevanion.' },
  equipo: { name: 'Equipo', blurb: 'Jugar en una Steam Machine con Windows 11.' },
};
