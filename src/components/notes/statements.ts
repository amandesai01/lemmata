// Definitions, results and examples: their anchors on the page, and the list of them in a note.

export const statementKinds = ['Definition', 'Example', 'Proposition', 'Lemma', 'Theorem', 'Corollary'] as const;
export type StatementKind = (typeof statementKinds)[number];

/** The anchor of a statement on its page: Definition 1.1 → "definition-1-1". */
export const statementId = (kind: StatementKind, n: string) => `${kind.toLowerCase()}-${n.replaceAll('.', '-')}`;

export interface StatementEntry {
  id: string;
  kind: StatementKind;
  n: string;
  /** The statement's title, as inline HTML, shown under its label in the statements rail. */
  title: string;
}

// The opening tag's attributes may hold markup inside quotes (title="… *D*<sub>3</sub>"), so a ">" only
// ends the tag outside them.
const statementTag = new RegExp(`<(${statementKinds.join('|')})\\b((?:[^>"]|"[^"]*")*)>`, 'g');

/** Every statement in a note's MDX source, in order. Fails the build if one has no title. */
export function listStatements(body: string, note: string): StatementEntry[] {
  return [...body.matchAll(statementTag)].map(([, kind, attrs]) => {
    const { n = '', title = '' } = Object.fromEntries([...attrs.matchAll(/(\w+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
    if (!title.trim()) throw new Error(`${note}: ${kind} ${n} needs a title, as in <${kind} n="${n}" title="…">.`);
    return { id: statementId(kind as StatementKind, n), kind: kind as StatementKind, n, title: inline(title) };
  });
}

// Just enough Markdown for a title: variables, terms, subscripts and superscripts.
const inline = (md: string) =>
  md
    .replace(/\*\*(.+?)\*\*/g, '<dfn>$1</dfn>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/<(?!\/?(?:em|dfn|sub|sup)>)[^>]*>/g, '');
