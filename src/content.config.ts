import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { TOPIC_KEYS } from './lib/topics';

// Una entrada = un hecho del juego, contrastado. Si no cumple esto, la web no compila.
const entries = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/entries' }),
  schema: z
    .object({
      title: z.string().max(110),
      description: z.string().max(170),
      status: z.enum(['comprobado', 'duda', 'cambio']),
      topic: z.enum(TOPIC_KEYS),
      verifiedAt: z.coerce.date().optional(),
      where: z.object({ zone: z.string(), level: z.number().int().min(1) }).optional(),
      rig: z.object({ machine: z.string(), os: z.string(), gpu: z.string(), display: z.string() }).optional(),
      client: z.literal('global').default('global'),
      changedAt: z.coerce.date().optional(),
      changedNote: z.string().optional(),
      sources: z.array(z.object({ title: z.string(), url: z.url(), lang: z.enum(['es', 'en', 'ko', 'zh', 'ja', 'de', 'fr', 'pt', 'ru', 'tr', 'ar']) })).default([]),
      firstHand: z.boolean().default(false),
      history: z.array(z.object({ date: z.coerce.date(), note: z.string() })).default([]),
      cover: z.string().startsWith('/capturas/').optional(),
      glossary: z.array(z.object({ en: z.string(), es: z.string() })).default([]),
      updated: z.coerce.date(),
      translationKey: z.string(),
    })
    .superRefine((d, ctx) => {
      const need = (ok: boolean, path: string, message: string) => { if (!ok) ctx.addIssue({ code: 'custom', path: [path], message }); };
      if (d.status !== 'duda') need(d.verifiedAt !== undefined, 'verifiedAt', 'hace falta la fecha de comprobación');
      if (d.status === 'comprobado') need(d.where !== undefined, 'where', 'hace falta zona y nivel');
      if (d.status === 'cambio') need(d.changedAt !== undefined && !!d.changedNote, 'changedAt', 'un cambio lleva fecha y nota');
      if (d.status === 'duda') need(d.sources.length >= 2, 'sources', 'una duda necesita al menos dos fuentes que discrepen');
      if (d.topic === 'equipo') need(d.rig !== undefined, 'rig', 'las entradas de equipo llevan la máquina');
      if (!d.firstHand) need(d.sources.length >= 1, 'sources', 'sin fuentes solo si es de primera mano');
    }),
});

// Apuntes: notas de trabajo del autor, NO comprobadas en el cliente. Viven aparte de las entradas.
const notes = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string().max(110),
    description: z.string().max(170),
    basis: z.string(),
    updated: z.coerce.date(),
    sources: z.array(z.object({ title: z.string(), url: z.url(), lang: z.enum(['es', 'en', 'ko', 'zh', 'ja', 'de', 'fr', 'pt', 'ru', 'tr', 'ar']) })).min(1),
    // Nombres del juego en inglés y cómo salen con el cliente en español: la página enseña un botón para cambiarlos.
    glossary: z.array(z.object({ en: z.string(), es: z.string() })).default([]),
    translationKey: z.string(),
  }),
});

// Objetos: una ficha por objeto del que tengo nota propia. Datos de metabot contados con mis palabras y citados;
// lo visto en partida va marcado aparte. Las conexiones apuntan a otras fichas (objeto) o a páginas del sitio (href).
const ref = z.object({ objeto: z.string().optional(), href: z.string().startsWith('/').optional(), texto: z.string() });
const objetos = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/objetos' }),
  schema: z
    .object({
      en: z.string(),
      es: z.string(),
      description: z.string().max(170),
      grado: z.string(),
      gradoEn: z.string(),
      categoria: z.string().optional(),
      comercio: z.enum(['mercado', 'no', 'alma']),
      npc: z.number().int().optional(),
      textoJuego: z.string().optional(),
      sirvePara: z.array(ref).default([]),
      hechoCon: z.array(ref).default([]),
      saleDe: z.array(ref).default([]),
      firstHand: z.boolean().default(false),
      verifiedAt: z.coerce.date().optional(),
      sources: z.array(z.object({ title: z.string(), url: z.url(), lang: z.enum(['es', 'en', 'ko', 'zh', 'ja', 'de', 'fr', 'pt', 'ru', 'tr', 'ar']) })).min(1),
      updated: z.coerce.date(),
    })
    .superRefine((d, ctx) => {
      if (d.firstHand && !d.verifiedAt) ctx.addIssue({ code: 'custom', path: ['verifiedAt'], message: 'lo visto en partida lleva fecha' });
    }),
});

export const collections = { entries, notes, objetos };
