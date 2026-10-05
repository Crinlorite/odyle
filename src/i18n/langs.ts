export const LANGS = ['es'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'es';
export const LOCALE: Record<Lang, string> = { es: 'es-ES' };
