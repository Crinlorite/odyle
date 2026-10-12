import { getCollection, type CollectionEntry } from 'astro:content';

export type Objeto = CollectionEntry<'objetos'>;
export type Ref = Objeto['data']['sirvePara'][number];

export const slugOf = (o: Objeto) => o.id.split('/')[1];

// Todas las fichas de un idioma, y las conexiones resueltas: si una apunta a una ficha que no existe, no compila.
export async function objetos(lang: string) {
  const all = (await getCollection('objetos', (o) => o.id.startsWith(`${lang}/`))).sort((a, b) => a.data.en.localeCompare(b.data.en));
  const bySlug = new Map(all.map((o) => [slugOf(o), o]));
  for (const o of all) {
    for (const r of [...o.data.sirvePara, ...o.data.hechoCon, ...o.data.saleDe]) {
      if (r.objeto && !bySlug.has(r.objeto)) throw new Error(`${o.id}: la conexión apunta a «${r.objeto}», que no tiene ficha`);
    }
  }
  return { all, bySlug };
}

// Quién enlaza a esta ficha desde sus conexiones: así cada relación se escribe una vez y sale en los dos lados.
export function mencionan(all: Objeto[], slug: string) {
  return all.filter((o) => [...o.data.sirvePara, ...o.data.hechoCon, ...o.data.saleDe].some((r) => r.objeto === slug));
}
