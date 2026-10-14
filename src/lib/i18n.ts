import { LANGS, type Lang } from '../i18n/langs';

// Las piezas de contenido viven en <idioma>/<slug>.md; la traducción de una pieza lleva el mismo slug.
export const langOfId = (id: string) => id.split('/')[0] as Lang;
export const slugOfId = (id: string) => id.split('/')[1];

/** Lo escrito en `lang`, más lo que solo existe en español (se marca y enlaza a /es/). */
export function localized<T extends { id: string }>(all: T[], lang: Lang): T[] {
  const own = all.filter((x) => langOfId(x.id) === lang);
  if (lang === 'es') return own;
  const have = new Set(own.map((x) => slugOfId(x.id)));
  return [...own, ...all.filter((x) => langOfId(x.id) === 'es' && !have.has(slugOfId(x.id)))];
}

/** Idiomas en los que existe una pieza, con su dirección: para hreflang y el selector de idioma. */
export function versions(all: { id: string }[], slug: string, section: string): Partial<Record<Lang, string>> {
  const out: Partial<Record<Lang, string>> = {};
  for (const l of LANGS) if (all.some((x) => x.id === `${l}/${slug}`)) out[l] = `/${l}/${section}/${slug}/`;
  return out;
}

/** Solo las piezas de idiomas que la web publica. */
export const published = <T extends { id: string }>(all: T[]) => all.filter((x) => (LANGS as readonly string[]).includes(langOfId(x.id)));
