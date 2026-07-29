# STATUS.md

Last updated: 2026-07-30

## Current state

The course brief and presentation narrative have been reviewed and discussed with Jeremy.

The presentation is divided into two parts:

- Part 1: Jeremy's personal route into shipping research, approximately 30–40 minutes.
- Part 2: how science supports maritime decarbonisation, approximately 100 minutes after the break.

The overall story is approved. The first visual implementation was rejected because the typography and layout were too complex and looked AI-generated.

A second style test with three slides was approved in principle:

- simple text on the left;
- one directly relevant image on the right;
- a single sans-serif font family;
- consistent 8-bit / 16-bit pixel-art imagery;
- restrained navy, blue-grey, sea-green and warm-orange palette.

Jeremy's latest adjustment is that the slide background must be changed from ivory to **pure white**.

## Durable user decisions

- Maintain all future deck development in this repository.
- New sessions must be able to continue by reading the repository documentation.
- The default format is static HTML/CSS, then 16:9 PDF export.
- Use the approved left-text/right-image layout.
- Each slide needs its own image that clearly corresponds to what the slide is saying.
- Jeremy's real portrait should be converted into identity-preserving pixel art.
- Avoid technical AIS-thinning material in the opening.
- Do not use the IMO sulphur cap as the main policy example because students have already covered it.
- Use conservative classroom interactions that do not depend on broad participation.

## Completed

- Reviewed the course syllabus, course guide, earlier TA presentation and mid-term course evaluation.
- Reviewed Jeremy's public personal website for his bio and portrait.
- Agreed the two-part lecture logic.
- Drafted the Part 1 personal narrative.
- Agreed the Part 2 science → pathways → Green Shipping Corridor → Cherry Express logic.
- Created and reviewed three pixel-art style samples:
  1. Jeremy portrait / title slide;
  2. family shipping background;
  3. games → coding → research.
- Created the repository onboarding and governance documents.

## Important warning

The earlier 15-slide HTML/PDF prototype should be treated as a **content reference only**. Its serif typography, ivory background, varied layouts and editorial design are not the approved visual system.

Do not copy that visual styling into the new implementation.

## Exact next task

Rebuild **Part 1 only** in the approved style:

1. create the project folders described in `README.md`;
2. implement a reusable pure-white left-text/right-image HTML slide template;
3. add or recreate the three approved pixel-art assets under `assets/pixel/`;
4. create a unique, content-relevant pixel-art visual for every remaining Part 1 slide;
5. implement the 15-slide Part 1 sequence in `STRUCTURE.md`;
6. export a 16:9 PDF and render all pages for visual QA;
7. update this file with the review result and next action.

Do not begin Part 2 slide production until Jeremy approves the full Part 1 visual implementation.

## Known source material outside the repository

The working conversation previously used:

- the ENVR2002D summer course syllabus;
- a course-guide email/brief from Christine Loh;
- an earlier TA presentation by Jeremy;
- the course mid-term evaluation spreadsheet;
- Jeremy's public personal website.

The repository is public. Do not commit private correspondence or unapproved source files. See `SOURCES.md`.

## Blockers

No narrative blocker currently exists. The next session needs access to the approved/recreated pixel-art assets and must verify all slide renders before review.
