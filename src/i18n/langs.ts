// Idiomas de la web. El español es el original: lo que aún no está traducido se lista en los otros
// idiomas con la marca «en español» y enlaza a la página /es/ (no se generan copias).
export const LANGS = ['es', 'en', 'ko'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'es';
export const LOCALE: Record<Lang, string> = { es: 'es-ES', en: 'en-GB', ko: 'ko-KR' };
export const LANG_LABEL: Record<Lang, string> = { es: 'ES', en: 'EN', ko: '한국어' };
export const LANG_NAME: Record<Lang, string> = { es: 'Español', en: 'English', ko: '한국어' };
export const isLang = (x: string): x is Lang => (LANGS as readonly string[]).includes(x);
