import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { catalog } from './data/catalog';

// Each subject's notes, one MDX file per subject at src/content/notes/<area>/<subject>.mdx.
// The file's path is its URL, and its headings (##) are the numbered sections.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    /** For the meta description. */
    description: z.string(),
    /** Shown under the title. */
    abstract: z.string(),
    area: z.enum(catalog.map((s) => s.id) as [string, ...string[]]),
    /** The figure that opens the notes, from src/components/notes/figures.ts. */
    figure: z.enum(['symmetry']),
  }),
});

export const collections = { notes };
