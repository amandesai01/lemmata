---
name: Lemmata
description: An independent space for the study and exploration of mathematics, printed in Byrne's four inks on white.
colors:
  ultramarine: "#1C3F94"
  vermilion: "#D2321E"
  chrome-yellow: "#EDB21B"
  plate-white: "#FCFCFA"
  lamp-black: "#141414"
  iron-gall: "#4A4A47"
  pencil-grey: "#6B6B67"
typography:
  wordmark:
    fontFamily: "Libre Caslon Display, STIX Two Text, Georgia, serif"
    fontSize: "3.5rem"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.06em"
  display:
    fontFamily: "Libre Caslon Display, STIX Two Text, Georgia, serif"
    fontSize: "4.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.2
  lead:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "STIX Two Text, STIX Two Math, Cambria Math, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  note:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.14em"
  masthead:
    fontFamily: "Libre Caslon Display, STIX Two Text, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    letterSpacing: "0.12em"
rounded:
  none: "0px"
spacing:
  result-gap: "1rem"
  margin-col: "4rem"
  gutter: "4rem"
components:
  masthead-home:
    textColor: "{colors.lamp-black}"
    typography: "{typography.masthead}"
  masthead-home-hover:
    textColor: "{colors.vermilion}"
  subject-link:
    textColor: "{colors.ultramarine}"
    typography: "{typography.title}"
  subject-link-hover:
    textColor: "{colors.vermilion}"
  subject-description:
    textColor: "{colors.iron-gall}"
    typography: "{typography.small}"
  contents-item:
    textColor: "{colors.iron-gall}"
    typography: "{typography.body-small}"
  contents-item-current:
    textColor: "{colors.vermilion}"
    typography: "{typography.body-small}"
---

# Design System: Lemmata

## Overview

**Creative North Star: "The Coloured Proof"**

Lemmata borrows one idea from Oliver Byrne's 1847 colour edition of Euclid: colour is the reference. Instead of labelling a figure with letters and asking the reader to match them, the text names a part of the figure by its ink. The red axis is set in red. The section being read has a red numeral. A phrase that performs a symmetry is underlined in that axis's colour. Every saturated mark on the page points at something, and everything else is black type on white.

The mood is exact, sparse and didactic. Figures are true: the triangle really has six symmetries, and each caption states what the figure shows. Pages carry a lot of white and few elements. Type does the structural work: Caslon for titles and STIX Two for reading, each at one weight, with hierarchy built from size, capitals and tracking. The page is flat paper. Nothing floats, glows or rounds off.

On a reading page the figure stands in a slim left column above the contents, facing the title and the text, which take most of the width. On wide screens the homepage is a pair of facing pages. On the left is the name set as a dictionary entry (its pronunciation, then its one sense), followed by the defining line and a short paragraph. A hairline spine stands between the pages. On the right is a Contents heading over the subjects, grouped by area as plain linked entries that read like search results. On phones the pages stack, and the spine lies flat as a rule between them.

**Key Characteristics:**
- Four flat inks (ultramarine, vermilion, chrome yellow, lamp black) on one white ground.
- Colour used as reference, never as decoration.
- Caslon Display for the name and page titles, STIX Two for everything read; weight 400, roman and italic, with semibold kept for the heads of statements alone.
- Numerals hang in a fixed 4rem margin column beside the text.
- Square corners, no shadows, no gradients, no boxes or borders; a single hairline rule on the homepage.
- One filled control, the Ultramarine action field, kept for the solving view's two actions.
- One easing curve; the only extended motion is a true symmetry being performed. Pages change by a short crossfade with the name and a subject's title carried across, and the homepage inks in once on first load.

## Colors

A full palette of four pigment inks, each with one job, on a single unvarying white ground, with two greys for reading and secondary text.

### Primary
- **Ultramarine**: links: subject titles on the homepage, links inside reading text, and the keyboard focus ring. It is also the blue axis in figures, so a blue link reads as "go there". It fills the action field, the one filled control (see Components), with Plate White capitals on it.

### Secondary
- **Vermilion**: response and position. Hover states on links turn vermilion. Section numerals, the current item in a contents or statements list, and the heads of definitions, results and examples (DEFINITION 1.1) are vermilion, so the reader can find each statement down the page. In figures it is the red axis and its vertex. On the homepage it names one part of the headword, the way Byrne names a part of a figure: the plural ending of LEMMA**TA** and the word "plural" in its definition share vermilion, while *lemma* stays black in both.

**The Vermilion Ending Rule.** The red TA is part of the name's identity. Wherever LEMMATA is set (the homepage wordmark, the masthead, the colophon) LEMMA takes the surrounding ink and TA is Vermilion, through the `Name` component. On hover the masthead link turns wholly Vermilion.

### Tertiary
- **Chrome Yellow**: a field colour only. It fills figures (the triangle) and is the text-selection highlight. At about 1.9:1 against the ground it cannot carry text.

### Neutral
- **Plate White**: the ground of every page. Very slightly warm, but never cream.
- **Lamp Black**: headings, the wordmark, the "Proof." head, proof squares and the black axis in figures.
- **Iron Gall**: the homepage paragraph, subject descriptions, figure captions and proof bodies (8.7:1 on Plate White).
- **Pencil Grey**: secondary text: margin numerals, fact labels, contents numerals and figure readouts (5.2:1 on Plate White, the lightest ink allowed to carry text).

### Named Rules
**The Colour-Is-Reference Rule.** A saturated ink on the page must point at something: an axis, a figure, a state, the reader's position. An ink that refers to nothing is decoration and does not ship.

**The Yellow Field Rule.** Chrome Yellow fills figures and highlights selections. Text is never set in it and never laid over it.

**The One Ground Rule.** Every page sits on Plate White. No cream, no tints, no grey panels, no dark sections.

## Typography

**Display Font:** Libre Caslon Display (with STIX Two Text, Georgia)
**Body Font:** STIX Two Text (with Georgia)
**Mathematical symbols:** STIX Two Math, filling in glyph by glyph for symbols the text face lacks (∈, ≤, ⊴, ≅, ℤ, ↦), so letters and symbols are one design. Both STIX faces are scaled up 12% (`size-adjust`) to the x-height of the Caslon they replaced, so every rem size reads as before. The math face loads only on pages that use those symbols.

**Character:** An eighteenth-century English book face, Caslon Display, for the wordmark and page titles; for everything a reader reads, STIX Two, a scientific text face built with its own math companion, with a clear, distinctly sloped italic for variables and statements. One weight, with italic as the only variant.

### Hierarchy
- **Wordmark** (400, scales from 2.25rem to its token size, line-height 0.9, tracked 0.06em, all capitals): LEMMATA at the head of the homepage only, with its plural ending TA in Vermilion (see Colors).
- **Entry** (400, 1rem, line-height 1.5): the dictionary entry held tight under the wordmark. First a pronunciation line in Iron Gall: the IPA, a respelling with the stressed syllable in capitals, and the part of speech in Pencil Grey italic. Beneath it, the sense in Lamp Black, with the word it cites in italic.
- **Display** (400, scales from 2.75rem, line-height 1): a subject's name at the head of its notes.
- **Headline** (400, scales from 1.625rem, line-height 1.2): section headings in notes, each preceded by a vermilion section numeral; on the homepage, the Contents heading, held at 1.5rem.
- **Lead** (400, scales from 1.5rem to 2rem, line-height 1.2, balanced wrap, at most 17em wide): the defining line, the homepage's statement and its largest type after the wordmark. It is set in the text face, which holds up better than Display at this size, with a generous gap above it so it reads as its own block rather than the end of the dictionary entry. It gets its attention from size and space alone: no ground, tint or highlight (see the One Ground and Yellow Field rules).
- **Title** (400, line-height 1.3, Ultramarine): subject titles in the homepage list, each one a link.
- **Body** (400, line-height 1.6, measure 34em, roughly 65 to 70 characters): all reading text. Mathematical variables are italic, and subscripts and superscripts are set at 0.72em.
- **Body Small** (400, line-height 1.5): the homepage paragraph, figure captions, contents entries.
- **Small** (400, line-height 1.5): subject descriptions under their titles.
- **Note** (400 italic): figure readouts, and the check sheet's status line.
- **Question** (400, scales from 1.1875rem to 1.375rem, line-height 1.55): a question alone in the solving view, larger than the notes because it is the only thing on the page.
- **Sheet heading** (400, 1.5rem, line-height 1.2): the heading of the check sheet, at the homepage Contents heading's size.
- **Statement head** (600, 0.8125rem, tracked 0.12em, all capitals, Vermilion): the run-in head of a definition, result or example (THEOREM 3.3). The only semibold on the site.
- **Label** (400, tracked 0.12 to 0.16em, all capitals): figure numbers (FIG. 1), fact labels (AREA), statement labels in the statements rail, area headings on the homepage (ABSTRACT ALGEBRA) and small section names (CONTENTS).
- **Masthead** (Display, 400, tracked 0.12em, all capitals): the LEMMATA home link at the top of reading pages.

### Named Rules
**The One Weight Rule.** Caslon Display and STIX Two are loaded at 400, plus STIX Two Text semibold (600) for statement heads and nothing else. Hierarchy comes from size, capitals and tracking. Bold is never used, and the browser is never allowed to fake a weight that is not loaded.

**The Run-In Head Rule.** Definitions, theorems, examples, proofs and figures open with a head that runs into the same line as the text (tracked capitals, or italic for "Proof."). A head never sits on its own line above the text it introduces.

## Layout

All pages share a 100rem maximum frame, centred, with a fluid side gutter (1rem on phones, 4rem on wide screens). Inside it, a fixed **margin column** of 4rem holds the numerals of a text column: section numbers, fact labels, problem numbers, and figure numbers where the figure sits in a wide column. Text never starts inside this column.

Reading pages at 960px and wider use two columns. The left fifth (at least 13rem) is a **figure rail**: the figure, its caption, then the contents list, which sticks while reading. The rest holds the title block and the text on one shared edge, at a 36em measure plus the margin column. From 1280px a third column, as wide as the figure rail (columns 1 : 3 : 1, so the rail keeps its fifth), holds the **statements rail**. Below 1280px the statements rail is left off. Below 960px they stack in reading order: figure, title, contents, then text. The homepage is lifted slightly above the window's vertical centre (free space splits 2 : 3 above and below). From 960px it is a spread of two equal facing pages, each capped at 36rem so the spread stays together on the frame's left edge on very wide windows, with the rule stood upright between them as a 1px Lamp Black spine; both pages and the spine start on the wordmark's cap line. The left page holds the intro: the wordmark, the dictionary entry tight beneath it, then, after a larger gap, the defining line and the paragraph. The right page holds a Contents heading, then each area's label and its subjects as one stacked list, entries 1rem apart, each a 24px figure beside a linked title and its description. Below 960px the pages stack as a single 40rem sheet on the frame's left edge, lined up with the colophon, with the rule lying flat across it between the intro and the contents. The colophon rests at the bottom of the window.

Spacing follows a book's rhythm. There is more space above a section than below its heading. Theorem-like blocks are separated by 1.5rem. Paragraphs are separated by 1rem rather than indented. Breakpoints sit at 600px (phone), 960px (facing pages begin), 1280px (the statements rail appears) and 1440px.

Every page is at least as tall as the window. The main region grows, so a short page's footer rests at the bottom of the window. The space between page-level blocks (masthead to title, title to section, last section to footer) scales with the window's height, not its width, so a page that holds one screen of content fits one screen on a laptop at 100% zoom.

### Named Rules
**The Margin Column Rule.** In every text column, numerals hang in the same 4rem margin column, so the eye finds sections, facts and problems down one vertical line. In a column too narrow to spare it (the figure rail on reading pages), the label sits above its text instead.

**The One Screen Rule.** A page whose content fits the window never scrolls. Vertical gaps between page-level blocks are set against the window's height, never as fixed or width-based padding that pushes a short page past the bottom edge.

## Motion

One curve, `cubic-bezier(0.16, 1, 0.3, 1)`. Nothing rises, bounces, lifts or slides into place, with one exception: the quick look.

- **Between pages:** the browser's cross-document view transition. The outgoing page fades in 160ms, the incoming one inks in over 320ms. Two parts travel instead of blinking (420ms): LEMMATA, between the homepage wordmark and the masthead, and a subject's title, between its homepage link and the heading of its notes. A shared part is marked `data-vt` with its name in `--vt`; the name and the title of a subject share `subject-<slug>`.
- **Homepage entrance:** on first load only, the intro inks in (opacity, 520ms), the rule is drawn down the spine from the cap line (across the sheet on phones; 700ms, from 120ms), then the contents ink in (520ms, from 280ms). A page reached through a view transition skips it.
- **Video view:** it inks in over 320ms like an incoming page and fades out in 160ms; the top line follows from 80ms, the player from 180ms and the list of videos from 280ms. A video chosen from the list inks in over 380ms.
- **Solving view:** it inks in over 320ms like an incoming page and fades out in 160ms; a question chosen in place of another inks in over 320ms. With reduced motion it simply appears.
- **Quick look and check sheet:** opening, the sheet rises 14px and grows from 97% as it fades in (420ms), the backdrop pales and blurs (320ms), and the statement and its links ink in just after (from 90ms and 150ms). Closing, it sinks back 10px and fades in 200ms on an ease-in, `cubic-bezier(0.4, 0, 1, 1)`, since the house curve spends itself in the first frames and reads as a snap on the way out. With reduced motion it only fades (120ms).
- **Reduced motion:** shared parts lose their names, so pages simply crossfade; the rule appears by opacity instead of being drawn.

## Elevation & Depth

The system is flat. There are no shadows, blurs, overlays or layered surfaces, except the quick look, which is the one thing that sits above the page. Depth is otherwise not part of the visual language. Hierarchy comes from ink strength, size and the margin column.

### Named Rules
**The Flat Plate Rule.** Nothing on the page sits above anything else. Shadows, glows, gradients, blurs and tinted panels are never used. The lifted sheet is the single exception: a square sheet of Plate White lifted off the page by a soft three-layer shadow in Lamp Black (6%, 8% and 16%), over a backdrop of 72% Plate White with a 3px blur (the shared `.sheet`). It is used by the quick look and the check sheet and by nothing else. The solving view and the video view are not lifted: each is a flat page laid over the notes.

## Shapes

Corners are square everywhere (0px). No boxes or borders are drawn anywhere. There is one rule: a 1px Lamp Black hairline on the homepage separating the introduction from the contents. From 960px it stands upright as the spine between the facing pages; below that it lies flat across the stacked sheet. Circles appear only as the vertex marks inside figures. Underlines carry meaning: 1px for ordinary links, 2px in an axis's colour for phrases that perform a figure's operation, and dotted for the identity operation.

### Named Rules
**The Square Corner Rule.** No radius on any element. A rounded corner does not belong in this world.

## Components

Flat ink, exact response. At rest, controls read as printed matter. On interaction they change ink (to vermilion on hover) and make one small, exact movement, never a lift or a glow. There are no cards, and navigation is by links. Controls that are not links are set as labels (CLOSE, SOLVE, PREVIOUS), with one exception, the action field.

### Action Field
The one filled control: a flat, square field of Ultramarine with its action in Plate White Label capitals (0.8125rem, tracked 0.14em) beside a drawn 1.25px line mark. On hover the field turns Vermilion (200ms). No border, radius or shadow. It is used for exactly two actions, CHECK YOUR SOLUTION in the solving view and COPY PROMPT in the check sheet, and never as a general button style.

### Subject List (signature component)
Subjects on the homepage read like search results, with no box around them.
- **Entry:** a 24px subject figure at the left, like a site's icon; beside it the subject's title (Title, Ultramarine) as the link, with the description (Small, Iron Gall) beneath, up to 36em wide.
- **Spacing:** under the Contents heading, each area's Label heading (1.125rem below it, 1.75rem between areas), then its entries in one column, 1rem apart.
- **Behaviour:** only the title is the link. On hover it turns Vermilion with a Vermilion underline; keyboard focus draws the 2px Ultramarine outline. While the title is hovered or focused, its figure turns a third of a turn clockwise (820ms), landing on itself with its axes traded.

### Navigation
- **Masthead:** on reading pages only, LEMMATA (Masthead type) at the left links home. No other links, background or rule. The homepage has no masthead; its wordmark is the page heading.
- **States:** hover turns a link Vermilion with a Vermilion underline.
- **Contents rail:** on reading pages, a CONTENTS label, then numbered entries in Body Small Iron Gall with Pencil Grey numerals. The section currently being read turns Vermilion, numeral and title. On wide screens it sits in the figure rail, about a fifth of the width, beneath the figure, and sticks 2rem from the top. On phones it sits inline before the text.
- **Statements rail:** on reading pages from 1280px, a STATEMENTS label, then every definition, result and example in order: its label (DEFINITION 1.1) in Pencil Grey Label capitals over its title in Iron Gall ("Lagrange’s theorem"), which wraps rather than being cut. Every statement in a note carries a title; the build fails without one. A little space opens where the section changes. The statement being read turns Lamp Black with a Vermilion label, and the rail scrolls itself to keep it in view. It sits in the right-hand column and sticks 2rem from the top, scrolling within the window's height, with no visible scrollbar. Choosing an entry opens the quick look.
- **Quick look:** a dialog showing the chosen statement exactly as set on the page, with an Ultramarine "Go to Theorem 3.3" link that closes it and scrolls there, and a CLOSE label. It is a square sheet of Plate White with no border, lifted off the page by a soft shadow while the page behind pales and blurs (see Elevation & Depth); it rises into place and sinks away (see Motion). It closes on Escape or a click outside.

### Video Card and the Video View
A section that follows a video opens with its card: an Ultramarine play mark hanging in the margin column and the video's title as the link (Title size; both turn Vermilion on hover), and WATCH with the running time in Pencil Grey label capitals. Chosen, the card opens the **video view**: a flat Plate White page over the whole window, like the solving view. Its top line carries a VIDEO label, the section's Vermilion numeral and the video's title, then OPEN ON YOUTUBE (an Ultramarine label link with a drawn arrow, opening a new tab) and CLOSE. The video plays at once in YouTube's privacy-enhanced player (`youtube-nocookie.com`), kept to 16:9 at the largest size its space allows. Beside it, from 960px, a column as wide as a rail lists every video on the page in order, read like the contents rail: a VIDEOS label that stays at the top as the list scrolls, then each video's section numeral in Pencil Grey, its title in Iron Gall and its running time in small Pencil Grey capitals beneath. The video playing is Vermilion, numeral and title; choosing another plays it in place, the player inking in again (380ms). Below 960px the list sits under the player and scrolls in the space left. Nothing loads from YouTube until a card is chosen, and the player is removed when the view closes, so playback stops. The card remains a link to the video on YouTube, so a modified click, or a page without scripts, opens it there.

### Questions and the Solving View
Each section's notes end with a QUESTIONS label and its questions, numbered by section (3.1, 3.2, …) in the margin column, without solutions. At the right of the label, a SOLVE control (Pencil Grey label with a drawn mark of four corners, which opens out slightly on hover) opens the **solving view**: a flat Plate White page over the whole window. Its top line carries the QUESTIONS label, the section's Vermilion numeral and title, and CLOSE. One question stands alone in Question type, a little above the middle of the window, its numeral in the margin column, with the action field CHECK YOUR SOLUTION beneath. The foot carries PREVIOUS and NEXT at its ends and the section's question numerals between, the one being solved in Vermilion; on phones the numerals take their own row. The arrow keys step between questions, and Escape closes the view.

**Every question.** Above the CONTENTS label in the figure rail, 1.75rem above it and sticking with the contents, stand two controls in the same style, one under the other, 0.85rem apart: WATCH ALL VIDEOS (a filled play mark), when the page has videos, which opens the video view at the page's first video, its list holding the rest; and SOLVE ALL QUESTIONS, when the page has questions. It opens the solving view with every question on the page in order: PREVIOUS and NEXT run straight across sections, the top line follows the section being solved, and the numerals along the foot are that section's. From 960px a rail (18rem to 25rem wide) stands to the left of the question, as the contents stand to the left of the notes: headed "Sections" in Title type, fixed, with the list scrolling on its own beneath it, so nothing passes behind the heading; when the reader enters a section not wholly in sight, the list glides to bring its title to the top. The list gives each section's Pencil Grey numeral and Iron Gall title (Lamp Black for the section being solved), which open its first question, with the numerals of its questions beneath in Pencil Grey, the one being solved in Vermilion. Below 960px the rail is left off.

**Check sheet.** CHECK YOUR SOLUTION opens a lifted sheet over the solving view, headed "Check your solution". Four numbered steps (Pencil Grey numerals) guide the reader: copy the prompt (the COPY PROMPT action field, with an italic status line beneath), open an AI assistant, photograph the written solution, paste the prompt. A READ THE PROMPT disclosure, with a drawn chevron that turns when open, shows the full prompt and falls back to a selection when the browser refuses the clipboard. The prompt carries the question, every statement it cites by number (in full), the question's `answer-ctx` checking notes and the notation, so any assistant can check the work standalone.

### Figure Plate (signature component)
A true mathematical figure drawn in SVG with the four inks, followed by a caption opened by a FIG. numeral: in the margin column when the figure sits in a wide column, above the caption (at 0.9375rem) in the narrow figure rail. In interactive figures, phrases in the caption are buttons that perform the operation they name. Each has an inline glyph and a 2px underline in that axis's colour. The figure animates the actual symmetry (820ms, or 1100ms for two thirds of a turn) and an italic Pencil Grey readout states what moved. With reduced motion the figure changes state without animating.

### Theorem Statement (signature component)
Definitions, propositions, theorems, lemmas, corollaries and examples run in from a Statement head in Vermilion semibold (DEFINITION 1.1), which links to the statement itself like a contents entry (a 1px Vermilion underline on hover), with an optional parenthetical name in roman. Statements of results are italic. Displayed formulas are centred at 1.125rem. Proofs open with an italic "Proof." in Lamp Black, are set in Iron Gall, and end with a small Lamp Black square at the right of the last line.

### Facts List
A subject's area, set as a two-column list. The label is Pencil Grey Label capitals hanging in the margin column, and the value is a Body Small link in Lamp Black.

## Do's and Don'ts

### Do:
- **Do** draw every figure with true geometry and caption it with a FIG. numeral in the margin column.
- **Do** use Ultramarine for links in reading text and for focus; use Vermilion for hover and for marking where the reader is.
- **Do** name a figure's part in the text by its ink, with a 2px underline in that colour when the phrase performs an operation.
- **Do** keep reading text at 1.0625rem with line-height 1.6 inside a 34 to 36em measure.
- **Do** take every transition from the one ease-out curve and switch it off under reduced motion.

### Don't:
- **Don't** set text in Chrome Yellow or lay text over it.
- **Don't** use cream, tinted, grey or dark grounds.
- **Don't** add shadows, gradients, blur or rounded corners to anything other than the lifted sheet's shadow and backdrop blur (the quick look and the check sheet); it never gets rounded corners either.
- **Don't** use cards, boxes or borders; a list of subjects is a list of plain linked entries, and the homepage's intro rule is the only rule.
- **Don't** fill any control other than the two action fields; every other control is a label or a link.
- **Don't** use bold, or any weight other than 400 outside statement heads.
- **Don't** put a small label above a heading; heads run into the text instead.
- **Don't** animate anything except a true symmetry, a control's direct response to the reader, or the page transitions, homepage entrance, solving and video views and lifted sheets described under Motion.
