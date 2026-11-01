// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Lossless HTML whitespace instead of Astro 7's JSX rules, which drop the space at a line break
  // next to an inline tag ("the group is <dfn>abelian</dfn>" would run together in the notes).
  compressHTML: true,
});
