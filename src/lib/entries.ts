import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/langs';
import { LOCALE } from '../i18n/langs';
import type { Topic } from './topics';
import { localized } from './i18n';

export type Entry = CollectionEntry<'entries'>;

export const slugOf = (e: Entry) => e.id.split('/')[1];
export const langOf = (e: Entry) => e.id.split('/')[0] as Lang;

/** Entradas de un idioma (más las que solo están en español), de la más reciente a la más antigua. */
export async function entriesFor(lang: Lang): Promise<Entry[]> {
  const all = localized(await getCollection('entries'), lang);
  return all.sort((a, b) => b.data.updated.getTime() - a.data.updated.getTime() || a.data.title.localeCompare(b.data.title));
}

export const byTopic = (list: Entry[], topic: Topic) => list.filter((e) => e.data.topic === topic);

export function counts(list: Entry[]) {
  return {
    total: list.length,
    ok: list.filter((e) => e.data.status === 'comprobado').length,
    open: list.filter((e) => e.data.status === 'duda').length,
  };
}

export function fmtDate(d: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(LOCALE[lang], { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(d).replace(/\./g, '');
}
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
