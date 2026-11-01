// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  // Lossless HTML whitespace instead of Astro 7's JSX rules, which drop the space at a line break
  // next to an inline tag ("the group is <dfn>abelian</dfn>" would run together in the notes).
  compressHTML: true,
});
