# Project status

Last updated: 2026-07-30

## Current state

The repository has been migrated to the approved LaTeX Beamer production
route.

The active deck currently contains six reviewed opening slides:

1. lecture cover;
2. two-part lecture structure;
3. Part 1 divider;
4. shipping and family background;
5. the Huawei / Research Assistant / PhD turning point;
6. computer games and coding.

Active files:

- `src/main.tex`
- `scripts/build_beamer.sh`
- `output/ENVR2002D_Class9.pdf`

The current PDF is 16:9, contains six pages and compiles without overfull
boxes, underfull boxes or font warnings.

## Approved direction

- LaTeX Beamer is the sole active production route.
- Visual style: white background, black Times-style serif typography and
  restrained dark-navy rules and labels.
- Cover, overview and section dividers are text-only.
- Content slides may use a right-side image, but placeholders remain until
  relevant visuals are approved.

## Archive

The former 27-slide HTML/PPTX implementation and all associated outputs,
scripts, requirements and pixel-art assets are preserved under:

```text
_archive/legacy-html-pptx/
```

The two Beamer style-selection samples are preserved under:

```text
_archive/beamer-samples/
```

Archived files are read-only references and are not part of the active build.

## Completed in this migration

- Promoted the approved economics-style Beamer sample to `src/main.tex`.
- Added a reproducible XeLaTeX build script.
- Generated the active six-page PDF.
- Added hidden `[Sources]` notes to every implemented frame.
- Rewrote the repository instructions and build documentation.
- Updated the stable structure and durable decisions.
- Replaced the old active asset manifest with rules for future images.
- Preserved all superseded work in documented archive folders.
- Made Beamer's incidental sans-serif font portable with TeX Gyre Heros from
  TeX Live.
- Confirmed the final build uses embedded Times-compatible serif fonts.

## Exact next task

Review the wording and pacing of slides 4–6. Once approved, implement the
remaining Part 1 slides in the same Beamer style before migrating Part 2.

For visuals, decide slide by slide whether to:

1. keep the page text-only;
2. reuse or adapt an archived visual;
3. use a real photograph or document;
4. create a new image.

## Known open items

- Final images have not been selected.
- The active deck contains only the six-slide opening sequence.
- Part 1 and Part 2 speaker notes still need to be expanded during migration.

## Blockers

No content or build blocker exists.
