# STATUS.md

Last updated: 2026-07-30

## Current state

**Part 1 and Part 2 version 1 are complete and ready for Jeremy's review.**

An alternative six-slide Beamer opening sample is also ready for review. It
tests a text-first academic direction before any decision is made to replace
the existing HTML/PPTX production route:

- `src/beamer_opening_sample.tex` — editable Beamer source;
- `output/ENVR2002D_Beamer_Opening_Sample.pdf` — reviewed 16:9 sample.

The two implemented decks contain 27 slides in total and follow the approved
visual system:

- pure-white 16:9 canvas;
- stable left-text / right-image composition;
- one Arial/Helvetica-style sans-serif family;
- restrained navy, blue-grey and warm-orange typography;
- one unique, directly relevant pixel-art image per slide;
- low-density English copy designed for an undergraduate audience.

Current outputs:

- `output/ENVR2002D_Class9_Part1.html` — self-contained HTML deck;
- `output/ENVR2002D_Class9_Part1.pdf` — 15-page 16:9 PDF;
- `output/ENVR2002D_Class9_Part1.pptx` — editable text, embedded images and
  speaker notes.
- `output/ENVR2002D_Class9_Part2.html` — self-contained 12-slide HTML deck;
- `output/ENVR2002D_Class9_Part2.pdf` — 12-page 16:9 PDF;
- `output/ENVR2002D_Class9_Part2.pptx` — editable text, embedded images and
  speaker notes.

## Completed in this version

- Implemented the full Part 1 personal narrative in `src/index.html`.
- Added a reusable white-background slide system in `src/styles.css`.
- Preserved the three approved visual samples.
- Created 12 additional slide-specific pixel-art illustrations.
- Added an identity-preserving pixel portrait derived from Jeremy's public
  website portrait.
- Added speaker notes and source blocks to HTML and PPTX.
- Added reproducible HTML/PDF and PPTX build scripts.
- Rendered and inspected all 15 HTML pages.
- Rendered and inspected all 15 exported PowerPoint slides.
- Ran the presentation overflow test: no overflow detected.
- Confirmed the PPTX contains 15 speaker-note files and 15 embedded images.
- Reframed Part 2 as a 40-minute research talk running from 11:00 to 11:40.
- Implemented the 12-slide Part 2 narrative in `src/part2.html`.
- Verified the shipping-emissions, Green Shipping Corridor, Cherry Express
  and Partner Port claims against primary or authoritative sources.
- Created 12 directly relevant Part 2 pixel-art illustrations.
- Added slide-by-slide speaking times totaling 40 minutes.
- Rendered and visually inspected all 12 Part 2 HTML/PDF pages and all 12
  PowerPoint slides.
- Confirmed the Part 2 PDF has 12 pages and the PPTX archive is valid.
- Created and visually checked a six-slide Beamer opening sample covering the
  lecture cover, two-part session structure, Part 1 divider and the first
  three personal-story slides.
- Incorporated Jeremy's wording corrections: “My journey,” “A PhD was not my
  first choice,” and a direct description of enjoying computer games and
  coding without adding an analytical motivation.
- Confirmed the Beamer log contains no overfull boxes or font warnings.

## Review notes

- Slide 2 is explicitly labelled as an illustrative image.
- The deck intentionally does not include technical AIS-thinning material.
- Part 1 closes by setting up Part 2's question: how research can help turn
  maritime-decarbonisation ideas into workable action.
- The images are illustrative pixel art, not documentary photographs.

## Exact next task

Collect Jeremy's feedback on the six-slide Beamer opening sample. If the
direction is approved, update the stable slide structure and extend the same
visual system through the rest of Part 1 before revising Part 2.

## Known source material outside the repository

The working conversation used the course syllabus, a course-guide brief, an
earlier TA presentation and the mid-term evaluation spreadsheet. These files
remain outside this public repository. See `SOURCES.md`.

## Blockers

No technical blocker exists.
