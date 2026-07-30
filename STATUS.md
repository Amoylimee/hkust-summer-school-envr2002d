# Project status

Last updated: 2026-07-30

## Current state

The repository has been migrated to the approved LaTeX Beamer production
route.

The active deck currently contains twenty-seven slides: thirteen Part 1 slides
and fourteen Part 2 slides.

Part 1:

1. lecture cover;
2. two-part lecture structure;
3. Part 1 divider;
4. shipping and family background;
5. the Huawei / Research Assistant / PhD turning point;
6. computer games and coding;
7. shipping as the subject, with coding and algorithm development as the
   tools;
8. understanding shipping through vessel-activity data;
9. the three-step research logic from observation to useful evidence;
10. research moving beyond a paper into practical conversations;
11. a photo-led page for presentations and events where Jeremy shared his
    research;
12. the ideal post-PhD shipping-research path;
13. the transition into Part 2.

Part 2:

14. an opinion-led discussion of whether shipping is a significant source of
    global carbon emissions;
15. the simple fuel-consumption × emission-factor calculation;
16. the global fleet data problem, explained through one ship's activity and
    a layman-level bottom-up method;
17. a full-width placeholder for the maritime-big-data teaching diagram;
18. the Fourth IMO Greenhouse Gas Study as evidence for policy discussion;
19. a top-to-bottom sequence of efficiency, operational, fuel and port
    pathways;
20. three practical implementation tests;
21. Green Shipping Corridors as route-focused coordination mechanisms;
22. the implementation gap between active Green Shipping Corridor initiatives
    and projects reaching the realisation stage;
23. maritime big data for identifying routes with credible starting
    conditions;
24. the data-based case for San Antonio–Hong Kong: first-ranked estimated
    fuel demand, repeated voyages, long voyage duration and a concentrated
    decarbonisation opportunity;
25. the movement from April 2025 research presentation to wider policy
    dialogue and the Partner Port announcement;
26. the closing boundary between scientific evidence and policy decisions;
27. a thank-you and questions page with Jeremy's email and personal website.

Active files:

- `src/Makefile`
- `src/main.tex`
- `src/main.pdf`
- `scripts/build_beamer.sh`
- `output/ENVR2002D_Class9.pdf`

The primary compiled deck now sits beside its source at `src/main.pdf`.
The compatibility build script also refreshes the copy under `output/`.
The current PDF is 16:9, contains twenty-seven pages and compiles without
overfull boxes, underfull boxes, font warnings or missing glyphs.

Part 2 has been redesigned as a lecture sequence with a quieter title scale,
fewer fragmented column layouts, clearer teaching questions, bullet-led
explanations and more precise visible copy following Jeremy's writing style.

## Approved direction

- LaTeX Beamer is the sole active production route.
- Visual style: white background, black Times-style serif typography and
  restrained dark-navy rules and labels.
- Cover, overview and section dividers are text-only.
- Content slides may use a right-side image, but placeholders remain until
  relevant visuals are approved.

## Repository cleanup

The former HTML/PPTX implementation, Beamer style samples, duplicate outputs,
pixel-art assets and inactive HKUST logo files were removed from the active
repository.

Transient QA renders under `tmp/`, operating-system metadata and LaTeX
auxiliary files are removed after validation.

## Completed in this migration

- Promoted the approved economics-style Beamer sample to `src/main.tex`.
- Added a reproducible XeLaTeX build script.
- Generated the active twenty-seven-page lecture PDF.
- Added hidden `[Sources]` notes to all Part 1 and Part 2 frames.
- Rewrote the repository instructions and build documentation.
- Updated the stable structure and durable decisions.
- Replaced the old active asset manifest with rules for future images.
- Removed superseded implementations and inactive assets from the active tree
  after the Beamer production route was established.
- Made Beamer's incidental sans-serif font portable with TeX Gyre Heros from
  TeX Live.
- Confirmed the final build uses embedded Times-compatible serif fonts.
- Added a local `src/Makefile` that builds `src/main.pdf`, emits clickable
  `file:line` references for Visual Studio Code and generates SyncTeX data.
- Retained `scripts/build_beamer.sh` as a compatibility wrapper that refreshes
  the existing PDF under `output/`.
- Implemented every inline TODO comment in `src/main.tex`.
- Removed the practical backup-plan slide and the repeated Part 2 divider.
- Changed the Part 2 opening from four questions to four positions that
  students can respond to.
- Converted the fuel-factor qualification into a footnote.
- Reworked the maritime-big-data explanation around one ship's activity and
  added a separate full-width teaching-diagram slide.
- Added a mixed-case yellow evidence highlight and simplified the pathway and
  implementation pages into clear top-to-bottom sequences.
- Added a Green Shipping Corridor dilemma page using the 2025 global progress
  review's 84 active initiatives, four realisation-stage projects and
  feasibility-wall finding.
- Reconnected the route-selection page to the earlier maritime-big-data
  explanation and highlighted science's role in identifying credible starting
  points.
- Removed the requested closing lines and highlighted the April and November
  dates on the policy-dialogue page.
- Added a final thank-you page with clickable links to Jeremy's approved
  contact email and personal website.
- Added a full-bleed Hong Kong Victoria Harbour night background to the
  thank-you page, with a dark readability overlay and photographer credit.
- Updated the cover with Jeremy's Year 4 PhD Candidate status and Division of
  Environment and Sustainability affiliation.
- Moved the cover's main title slightly upward for better vertical balance.
- Reworked slide 24 around the earlier presentation and op-ed evidence,
  showing why the San Antonio--Hong Kong route stands out in the data and what
  the figures imply for corridor potential.
- Re-spaced slide 24 into two clearly separated metric rows and replaced its
  heavy full-width conclusion banner with a lighter inline takeaway.

## Exact next task

Jeremy should review the visible copy and pacing of slides 14–27. Then provide
or approve the highest-priority real visuals:

1. a ship-activity-to-fuel-estimate teaching diagram for slide 17;
2. a Green Shipping Corridor route diagram for slide 21;
3. a simplified movement-data candidate-route map for slide 23;
4. a Hong Kong–San Antonio / Cherry Express route visual for slide 24;
5. an April 2025 presentation or Partner Port image for slide 25.

The Part 1 photo request also remains open: slide 11 needs 3–5 presentation and
event photos with event, location, year and photographer/source context.

For visuals, decide slide by slide whether to:

1. keep the page text-only;
2. provide or create a new approved visual;
3. use a real photograph or document;
4. create a new image.

## Known open items

- Final images have not been selected.
- Full delivery notes still need to be expanded after the visible copy and
  visuals are approved.

## Blockers

No content or build blocker exists.
