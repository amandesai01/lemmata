# Importing notes from a YouTube playlist

This procedure turns a YouTube playlist into one subject page of Lemmata notes. Each video becomes
one numbered section of the page, in this form:

1. a link card to the video, which opens it on YouTube;
2. clear notes on what the video teaches, set as prose, definitions, results and proofs;
3. a list of questions on that material, without solutions.

Follow the steps in order. Where a step says to ask the user, ask and wait for an answer before going
on. Use the AskUserQuestion tool when it is available.

## Before you start

Read these first. They are short, and every rule in them applies to the pages you write.

- `CLAUDE.md`: the content rules. There are no authors, no status and no placeholders anywhere.
- `src/components/notes/index.ts`: the notation conventions and the components available in a note.
- `src/content.config.ts` and `src/data/catalog.ts`: how a page and its area are declared.

Check that `yt-dlp` is installed (`yt-dlp --version`). If it is missing, ask the user before
installing it (`brew install yt-dlp` or `python3 -m pip install yt-dlp`). If they decline, read each
video's transcript in the browser instead: open the video, choose "…" › "Show transcript", and copy
the text with `get_page_text`.

Keep all downloaded and intermediate files in your scratchpad directory, never in the repository.

## Step 1. Decide which page to create

### 1.1 Ask about the topic

Ask the user what the playlist teaches, in their words: "an introduction to Galois theory",
"lectures on point-set topology", "real analysis, sequences and series".

### 1.2 Place it: an area and a subject

The site is organised like a mathematics department. An **area** is a broad branch of mathematics
(a section of the homepage, such as Abstract Algebra). A **subject** is one page of notes inside an
area (such as Abstract Group Theory). The playlist becomes one subject.

If the user already knows the area and subject, confirm them and go on. If they don't, classify the
topic for them:

1. Read `src/data/catalog.ts` for the areas that already exist. Prefer an existing area whenever the
   topic fits it.
2. Otherwise choose the branch the topic belongs to. Common areas and the subjects under them:

   | Area | Subjects, for example |
   | --- | --- |
   | Abstract Algebra | group theory, rings and fields, Galois theory, modules, representation theory |
   | Number Theory | elementary, algebraic and analytic number theory |
   | Analysis | real analysis, complex analysis, measure theory, functional analysis |
   | Linear Algebra | vector spaces, linear maps, spectral theory |
   | Topology | point-set topology, algebraic topology |
   | Geometry | Euclidean, projective and differential geometry |
   | Discrete Mathematics | combinatorics, graph theory |
   | Logic and Foundations | set theory, mathematical logic, computability |
   | Probability and Statistics | probability theory, stochastic processes |

3. Name the subject after what the playlist covers, the way a department would name a course:
   "Galois Theory", "Point-Set Topology". Never use the channel's, presenter's, course code's or
   series' name.
4. Propose the area and the subject name to the user, with one line on why, and let them confirm or
   change it.

If the playlist spans two areas, place it in the area of its main subject.

### 1.3 Check whether the page already exists

Look for `src/content/notes/<area>/<subject>.mdx` and a matching entry in `src/data/catalog.ts`. If
the subject already has a page, ask the user whether to add the playlist's videos to that page as new
sections or to create a separate subject. When adding to an existing page, new sections go after the
existing ones and their numbering continues from them.

### 1.4 Create the area if needed

If the area is new, add a `CatalogSection` to `src/data/catalog.ts` with a kebab-case `id`
(`number-theory`), its `name` (`Number Theory`) and the new subject as its only entry. The `id` is
also the URL's first segment and the note's folder name. Areas appear on the homepage in the order of
this list.

### 1.5 Settle the figure

Every page opens with a figure, and every subject has a small figure on the homepage:

- the note's `figure` field must name a figure in `src/components/notes/figures.ts` (its allowed values
  are listed in `src/content.config.ts`);
- the catalog entry's `figure` must be a `SubjectFigureKey` drawn in `src/components/SubjectFigure.astro`.

Today the only figures are the triangle's symmetries, which belong to group theory. A figure must be
a true mathematical figure of the subject (see "Figure Plate" in `DESIGN.md`), so never reuse one for
a subject it does not depict. If no existing figure fits, tell the user and ask how to proceed before
going further. Drawing a new figure is separate design work.

## Step 2. Take the playlist

Ask the user for the playlist's URL. It must be a playlist:

- Accept `https://www.youtube.com/playlist?list=<id>`, or a watch URL that carries a `list=<id>`
  parameter. In the second case use the playlist, not the single video.
- Refuse a single video, a channel, a search or a Short, and ask again for a playlist.
- Refuse mixes and personal lists, whose ids begin `RD`, `WL` or `LL`. They are not real playlists,
  or not public ones.

List the playlist's videos:

```bash
yt-dlp --flat-playlist -J "https://www.youtube.com/playlist?list=<id>" > playlist.json
```

From `playlist.json`, note the playlist's `title` and, for each entry in `entries`, its position, `id`,
`title` and `duration` (in seconds). If any entry is private, deleted or unavailable, tell the user
which ones and go on without them. If the URL does not resolve to a playlist, say so and ask again.

Show the user the list of videos, numbered in playlist order.

## Step 3. Put the videos in order

Playlists are sometimes out of order. Settle the order before writing anything, because the notes
are numbered and later sections build on earlier ones.

1. **Read the order from the titles.** Look for numbering: "Lecture 3", "Part 2", "#4", "Ep. 5", "3.2",
   "(3/10)", Roman numerals, or "Introduction" and "Overview" at the start and "Review" or "Summary"
   at the end. Treat numbering by chapter and then section ("2.1", "2.2", "3.1") as an order too.
2. **If the titles give one complete and consistent order**, use it, even where it differs from the
   playlist's. Tell the user which videos you moved.
3. **If the titles give no order, or a broken one** (gaps, repeated numbers, two numbering schemes,
   unnumbered videos among numbered ones), and the playlist's own order does not obviously make
   sense, propose an order and ask the user to confirm or correct it.
4. **If the user is not sure either**, fetch the subtitles of every video first (Step 4) and order
   the videos by their content:
   - a video that uses a notion goes after the video that introduces it;
   - spoken references settle ties: "last time we proved…", "in the previous lecture", "next time",
     "in part one";
   - introductions and overviews go first, and reviews and summaries go last.

   Tell the user the order you settled on, with a one-line reason for each video you placed, then go
   on.

Also ask the user about any video that does not teach the topic (a trailer, an announcement, a Q&A
about logistics) and leave it out if they agree. If two videos are duplicates, use one.

## Step 4. Get each video's subtitles

Fetch the subtitles without downloading the video:

```bash
yt-dlp --skip-download --write-subs --write-auto-subs \
  --sub-langs "en.*" --sub-format vtt \
  -o "subs/%(id)s.%(ext)s" "https://www.youtube.com/watch?v=<video id>"
```

Prefer subtitles written by the uploader over automatic captions when both exist. If a video has
subtitles only in another language, ask the user whether to work from them. If it has none at all,
tell the user and ask how to proceed. Never write notes from a video's title or description alone.

Turn each `.vtt` file into plain text. Automatic captions repeat each line as it scrolls, and this
drops the repeats, the timings, the markup and cues such as `[Music]`:

```bash
python3 - subs/<video id>.en.vtt > subs/<video id>.txt <<'PY'
import html, re, sys
for path in sys.argv[1:]:
    kept = []
    for raw in open(path, encoding='utf-8'):
        line = raw.strip()
        if not line or line == 'WEBVTT' or '-->' in line or re.match(r'(Kind|Language|NOTE)\b', line):
            continue
        line = html.unescape(re.sub(r'<[^>]+>', '', line)).strip()
        if line and not re.fullmatch(r'\[[^\]]*\]', line) and (not kept or line != kept[-1]):
            kept.append(line)
    print(' '.join(kept))
PY
```

Read the whole transcript before writing. Automatic captions mangle mathematics. They spell symbols
as words ("x sub n", "g inverse"), lose what was written on the board, and mishear terms ("a billion"
for *abelian*, "silo" for *Sylow*, "co-sets" for *cosets*). Recover the intended mathematics from
context. Where the board carried an argument the speaker only gestured at ("and this goes to here,
so we're done"), reconstruct it from what was said before and after.

## Step 5. Write one section per video

Work through the videos in the settled order. Each video is one `##` section of the page. Write each
section in this shape:

```mdx
## Cosets and Lagrange’s theorem

<Video id="dQw4w9WgXcQ" title="Cosets and Lagrange’s theorem" duration="48:12" />

Prose that introduces the section’s idea.

<Definition n="3.1" title="Cosets and index">
For *H* ≤ *G* and *g* ∈ *G*, the **left coset** of *H* containing *g* is …
</Definition>

<Theorem n="3.2" name="Lagrange" title="Lagrange’s theorem">
If *G* is finite and *H* ≤ *G*, then …
</Theorem>

<Proof>
…
</Proof>

<Questions>
<Question answer-ctx="Expected: the map h ↦ gh is a bijection from H to gH, with inverse x ↦ g^(−1)x, so every left coset has |H| elements. Check that both injectivity and surjectivity (or an explicit inverse) are shown.">
Show that any two left cosets of *H* have the same number of elements.
</Question>

<Question answer-ctx="Expected: for example G = S_3 and H = {e, (1 2)}: the left coset (1 3)H differs from the right coset H(1 3). Any non-normal subgroup works. Check that one left coset is computed explicitly and shown to differ from the right coset with the same representative.">
Find a group *G* and a subgroup *H* whose left and right cosets differ.
</Question>
</Questions>
```

### 5.1 The heading

The heading names what the section is about: `## Cosets and Lagrange’s theorem`. Never write
"Lecture 3", "Part 2" or the video's numbering. Section numerals are added by the page.

### 5.2 The video card

The `<Video>` card always comes first, directly under the heading. It links out to YouTube. Never
embed a player or an iframe.

- `id`: the video's id, the `v=` of its watch URL.
- `title`: what the video is about. Start from the video's own title and remove every channel,
  presenter, university, course-code and series name, plus lecture numbers, emoji and decoration.
  "Lecture 7 | Cosets & Lagrange's Theorem – Prof. X, ABC 101" becomes
  "Cosets and Lagrange’s theorem". It may match the heading.
- `duration`: the running time from `playlist.json`, written as YouTube shows it: `48:12`, or `1:04:09`
  for an hour or more.

### 5.3 The notes

Write clear notes on exactly what the video teaches, in the order it teaches it.

**Set the mathematics as statements.** Use the components listed in `src/components/notes/index.ts`:
`Definition`, `Example`, `Proposition`, `Lemma`, `Theorem`, `Corollary`, `Proof` and `Display`. Use
prose between statements to motivate them and connect them.

- Number statements by section, with one counter shared by every kind: in section 3, `n="3.1"`,
  `n="3.2"`, `n="3.3"`, whatever the kinds. Proofs are not numbered.
- Every statement needs a `title`. It is listed in the statements rail, and the build fails without
  one. Give a named result its `name` as well: `name="Lagrange"`.
- A proof goes in `<Proof>` directly after the statement it proves.
- Refer back to earlier statements by number: "by Lemma 3.2", "as in Definition 1.1".

**Follow the notation conventions:**

- variables in italic, `*G*`, and a term in bold where it is defined, `**coset**` (it is set as a
  defined term; the notes never use bold for anything else);
- Unicode symbols rather than LaTeX: ∈ ⊆ ≤ ⊴ ≅ ↦ → ∘ × ℤ ℚ ℝ ℂ ∑ ∫ ∞ …, with `<sub>` and `<sup>`
  for subscripts and superscripts: `*g*<sup>−1</sup>`, `*S*<sub>*n*</sub>`;
- a true minus sign (−), multiplication sign (×) and curly apostrophes and quotes (’ “ ”);
- `<Display>` for a formula set on its own line;
- `\{` and `\}` for braces, and `&lt;` for a less-than sign. MDX reads `{` as code and `<` as a tag.

**Use outside knowledge only to repair what the video leaves incomplete.** You may:

- complete a proof the video sketches, skips or leaves "as an exercise", if the notes depend on it;
- state precisely a definition or result the video gives loosely, including hypotheses it leaves
  implicit;
- correct a slip, a misstatement or a misheard term;
- fill in a step of a computation or an example the video works through.

You may not add anything the video does not cover: no further results, examples, applications,
history, generalisations, remarks or reading. If the video does not mention it, it is not in the notes.

**Write for a reader who never sees the video.** The notes must stand on their own, in the
impersonal voice of the existing note.

- Remove talk about the lecture itself: "in this video", "last time", "as I said", "we're running out
  of time", "this will be on the exam", sponsor messages, requests to like or subscribe.
- Never name or refer to the presenter, the channel, the course or an institution. Never write "the
  lecturer shows" or "in the video". State the mathematics directly.
- Never label anything as partial, in progress or to be continued, and never give counts such as
  "video 3 of 12". See the content rules in `CLAUDE.md`.

### 5.4 The questions

Close every section with a `<Questions>` card, after the last of its notes. It holds one
`<Question>` per question, each with an `answer-ctx`. The page numbers the items by section (3.1, 3.2,
…), and a SOLVE control lets the reader work through them one at a time and have an AI assistant
check a photo of their written solution.

- Each item is a question and nothing else: no solution, answer, hint or "(hint: …)", and no
  difficulty labels.
- Put first any exercises the video itself poses, rewritten as plain questions.
- Then add questions that test this section's material: recall a definition precisely, check a
  hypothesis, compute an example, prove a stated result or a small consequence of it, find a
  counterexample. Aim for four to eight in all.
- A question may draw on earlier sections, but never on anything the notes have not covered.
- Refer to a statement by its number ("Proposition 5.6", "Example 1.3") whenever the question depends
  on it. The prompt the reader copies quotes every statement cited this way in full.

Every `<Question>` needs an `answer-ctx`, and the build fails without one. It is never shown on the page.
It goes into the prompt an AI assistant uses to check the reader's solution, so write it for an
examiner who has not read the notes:

- **Expected:** the answer, and the steps a complete solution must contain, with values worked out.
- **Check that:** the points to verify, such as a hypothesis used, a case not to skip, or a direction of
  an equivalence.
- **Common errors:** the usual wrong turns, such as composing in the wrong order or assuming
  commutativity.
- Any notation the question relies on that is not in a cited statement (for example, what *f*<sub>3</sub>
  means and the order of composition).

Write it in plain text with Unicode symbols, ^ for powers and _ for subscripts: `g^(−1)`, `S_3`. Use
curly quotes (“ ”) inside it, never straight double quotes, since the value is itself quoted.

## Step 6. Finish the page

1. **Front matter.** Write the note's front matter at the top of
   `src/content/notes/<area>/<subject>.mdx`:
   - `title`: the subject's name.
   - `description`: one sentence for the meta description: "Lecture notes on …".
   - `area`: the area's `id`.
   - `figure`: as settled in Step 1.5.

   Write no summary or abstract of the page: it opens directly with its first section.
2. **Catalog entry.** Add the subject to its area in `src/data/catalog.ts` with its `name`, a one-line
   `description` in the same style as the existing entry, its `figure` and its `href`
   (`/<area>/<subject>/`).
3. **Build.** Run `npm run build`. It fails if a statement has no `title`, if MDX meets an unescaped
   `{` or `<`, or if the front matter does not match the schema. Fix every error.
4. **Look at the page.** Start the dev server with `preview_start` (configuration `lemmata-dev`) and
   open the new page. Check that:
   - the homepage lists the subject under its area;
   - the contents rail lists every section, in order;
   - each section opens with its video card, and the card opens the right video on YouTube;
   - the statements rail lists every statement with its title;
   - every section ends with its questions, numbered by section;
   - the page has no names, no status and no talk about videos or lectures.
5. **Report.** Tell the user the page's path and URL, the order the videos were placed in, and any
   video you left out or could not read, with the reason.
