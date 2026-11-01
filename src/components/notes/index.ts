// The components available in every note's MDX, without importing them.
//
// Conventions for writing notes:
//   *G*            a variable, set in italic
//   **group**      a term being defined, set as <dfn> (the notes never use bold)
//   1. 2. 3.       an ordered list, numbered (i), (ii), (iii)
//   \{ \}          braces, escaped because MDX reads { } as code
import Definition from './Definition.astro';
import Example from './Example.astro';
import Proposition from './Proposition.astro';
import Lemma from './Lemma.astro';
import Theorem from './Theorem.astro';
import Corollary from './Corollary.astro';
import Proof from './Proof.astro';
import Display from './Display.astro';
import Problems from './Problems.astro';

export const components = {
  strong: 'dfn',
  Definition,
  Example,
  Proposition,
  Lemma,
  Theorem,
  Corollary,
  Proof,
  Display,
  Problems,
};
