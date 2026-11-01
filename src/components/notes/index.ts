// The components available in every note's MDX, without importing them.
//
// Conventions for writing notes:
//   <Theorem n="3.3" name="Lagrange" title="Lagrange’s theorem">
//                  every Definition, Example, Proposition, Lemma, Theorem and Corollary needs a
//                  title; it is listed under the statement's label in the statements rail
//   *G*            a variable, set in italic
//   **group**      a term being defined, set as <dfn> (the notes never use bold)
//   1. 2. 3.       an ordered list, numbered (i), (ii), (iii)
//   \{ \}          braces, escaped because MDX reads { } as code
//   <Video id="…" title="…" duration="48:12" />
//                  opens a section that follows a video; plays it in a full-screen view on the page,
//                  with a link to YouTube
//   <Questions>    closes such a section: <Question> items, without solutions
//   <Question answer-ctx="…">
//                  one question; answer-ctx, required and never shown, is the expected answer and
//                  what to check, carried into the prompt an AI assistant checks the reader's work by
import Definition from './Definition.astro';
import Example from './Example.astro';
import Proposition from './Proposition.astro';
import Lemma from './Lemma.astro';
import Theorem from './Theorem.astro';
import Corollary from './Corollary.astro';
import Proof from './Proof.astro';
import Display from './Display.astro';
import Problems from './Problems.astro';
import Video from './Video.astro';
import Questions from './Questions.astro';
import Question from './Question.astro';

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
  Video,
  Questions,
  Question,
};
