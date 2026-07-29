# STATUS.md

Last updated: 2026-07-30

## Current state

**Part 1 version 1 is complete and ready for Jeremy's review.**

The implemented deck contains 15 slides and follows the approved visual
system:

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

## Review notes

- Slide 2 is explicitly labelled as an illustrative image.
- The deck intentionally does not include technical AIS-thinning material.
- Part 1 closes by setting up Part 2's question: how research can help turn
  maritime-decarbonisation ideas into workable action.
- The images are illustrative pixel art, not documentary photographs.

## Exact next task

Jeremy should review Part 1 for:

1. whether the personal details and tone sound natural in his voice;
2. whether any slide needs more or less speaking time;
3. whether the 15-slide sequence fits the 30–40 minute window;
4. whether the current slide 15 transition is the right handoff to Part 2.

After Jeremy approves or revises Part 1, update the copy and notes, rebuild all
three outputs, repeat visual QA, and only then begin Part 2.

## Known source material outside the repository

The working conversation used the course syllabus, a course-guide brief, an
earlier TA presentation and the mid-term evaluation spreadsheet. These files
remain outside this public repository. See `SOURCES.md`.

## Blockers

No technical or narrative blocker exists. Part 2 production is intentionally
paused pending Jeremy's Part 1 review.
