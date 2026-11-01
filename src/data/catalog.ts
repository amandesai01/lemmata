// The homepage's subject list, grouped by area.

export type SubjectFigureKey = 'triangle';

export interface CatalogEntry {
  name: string;
  description: string;
  figure: SubjectFigureKey;
  href: string;
}

export interface CatalogSection {
  id: string;
  name: string;
  entries: CatalogEntry[];
}

export const catalog: CatalogSection[] = [
  {
    id: 'abstract-algebra',
    name: 'Abstract Algebra',
    entries: [
      {
        name: 'Abstract Group Theory',
        description: 'Groups from the axioms: cosets and Lagrange’s theorem, quotients, homomorphisms, actions and the Sylow theorems.',
        figure: 'triangle',
        href: '/abstract-algebra/abstract-group-theory/',
      },
    ],
  },
];
