import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    lang: z.enum(['fr', 'en', 'es']),
    pageSlug: z.string(),
    title: z.string(),
    location: z.string(),
    category: z.enum(['gardens', 'terraces', 'details']),
    cover: z.string(),
    images: z.array(z.string()),
    excerpt: z.string(),
    order: z.number().default(0)
  })
});

export const collections = { projects };
