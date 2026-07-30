# AGENTS.md

This file is the authoritative instruction set for agents working on Jeremy
Jiajing Chen's HKUST ENVR2002D Class 9 lecture.

## 1. Start every session here

Read these files completely before changing the deck:

1. `AGENTS.md`
2. `STATUS.md`
3. `STRUCTURE.md`
4. `DECISIONS.md`
5. `SOURCES.md`
6. `assets/README.md`, when adding or replacing visuals

Then inspect `src/main.tex` and the current PDF at `src/main.pdf`.

At the end of a meaningful session:

- update `STATUS.md` with completed work and the exact next task;
- update `STRUCTURE.md` when slide order, visible copy or image briefs change;
- update `DECISIONS.md` only when Jeremy approves a durable decision;
- update `SOURCES.md` and `assets/README.md` when evidence or visuals change;
- rebuild and visually inspect every changed slide;
- commit the work with a concise message.

## 2. Audience and communication job

- Presenter: Jeremy Jiajing Chen, also referred to as Jeremy or JJ.
- Course: HKUST ENVR2002D, Class 9.
- Audience: undergraduate students with mixed academic backgrounds.
- Visible copy: clear, natural English for intelligent non-specialists.
- Communication with Jeremy may be in Chinese.

The lecture should make research and maritime policy intuitive without making
them inaccurate.

### Jeremy's writing style

- Write in clear, natural and polished English.
- Keep the tone measured, confident and academically credible without
  unnecessary technicality.
- Prioritise clarity, flow and argument quality over stylistic complexity.
- Use technical terms only when they improve precision. Write out a term in
  full before introducing an abbreviation.
- Avoid repeatedly framing ideas as “not X but Y”, “rather than” or “instead”.
  Use contrast only when it is central to the argument.
- Qualify claims appropriately and never overstate causality, certainty or
  practical implications.

The session has two parts:

- **Part 1:** Jeremy's route into shipping research.
- **Part 2:** how science supports maritime decarbonisation through
  measurement, comparison, implementation analysis and the Green Shipping
  Corridor / Hong Kong–San Antonio case.

## 3. Approved production route

LaTeX Beamer is the sole active production route.

- Main source: `src/main.tex`
- Primary build command: `make -C src`
- Current PDF: `src/main.pdf`
- SyncTeX data for editor/PDF navigation is generated on demand by the build
  and may be deleted after quality assurance
- Compatibility wrapper: `./scripts/build_beamer.sh`, which also refreshes
  `output/ENVR2002D_Class9.pdf`
- Temporary LaTeX files, SyncTeX data and rendered PNGs are ignored by Git

The superseded HTML/PPTX implementation and Beamer samples were removed from
the repository to keep it lean. Do not restore or reintroduce them.

The build requires XeLaTeX. The source uses Times New Roman when installed and
falls back to the metrically compatible Nimbus Roman family.

## 4. Approved visual system

The deck follows a restrained economics-seminar Beamer style:

- 16:9 canvas;
- pure white background;
- black serif typography;
- Times New Roman or the documented compatible fallback;
- dark navy used only for thin rules, section labels, timings and page
  markers;
- generous margins and low information density;
- no orange accent, gradients, shadows, dashboards, pills or decorative
  interface elements.

Cover, session-structure and section-divider slides are text-first.

Content slides may use a left-text / right-image layout. Images are optional.
Keep a placeholder until a relevant and approved image is available. Never add
a generic ship image merely to fill space.

## 5. Content rules

- Give every slide one narrative job and one primary takeaway.
- Use titles Jeremy could naturally say aloud.
- Prefer two short paragraphs over dense bullet lists.
- Explain intuition before technical detail.
- Open Part 2 by asking whether shipping is a significant global emitter.
  Give hints before revealing the Fourth IMO GHG Study result.
- Explain the first emissions estimate as fuel consumption multiplied by an
  emission factor. Introduce the bottom-up method in lay terms before adding
  technical detail.
- Do not add technical material merely because it is available.
- Do not use AIS thinning as the opening research case.
- Do not reuse the IMO sulphur cap as the main policy example.
- Show the role of science through measurement, comparison, pathway
  assessment and implementation support.
- Do not imply that science alone determines policy. Institutions, economics,
  politics and values also matter.

### Participation

Use only low-risk, optional prompts. The lecture must remain smooth if no
student responds. Do not rely on workshops, breakout groups or mandatory
discussion.

## 6. Source and privacy discipline

This repository is public.

- Do not commit private messages, unapproved email addresses, confidential
  attachments, credentials or unapproved course materials. Jeremy has
  explicitly approved the presentation contact details shown on the closing
  slide.
- Prefer primary and authoritative sources for factual claims.
- Record factual and visual provenance in `SOURCES.md`.
- Record private sources through neutral descriptions only.
- Never present an illustrative or generated visual as documentary evidence.

## 7. Build and quality assurance

After changing the deck:

1. run `make -C src`;
2. confirm the PDF is 16:9 and has the expected page count;
3. inspect the LaTeX log for overfull or underfull boxes and font warnings;
4. render every page to PNG at presentation resolution;
5. inspect every changed page individually at full size;
6. create a contact sheet to check deck-level consistency;
7. verify image crops, title wrapping, body fit, footers and page numbers.

Do not describe the deck as finished when only the `.tex` source has been
edited.

## 8. Change discipline

- Preserve Jeremy's approved wording, structure and style.
- Keep unrelated edits out of the same commit.
- Keep superseded implementations and generated archives out of the
  repository.
- Keep the primary source, its Makefile and `main.pdf` together in `src/`.
  Keep the compatibility PDF mirror in `output/`, wrapper scripts in
  `scripts/` and approved visuals in `assets/`. Use `tmp/` only for transient
  QA renders and remove them after the review is complete.

## 9. Definition of done

A revision is complete when:

- the requested slides are implemented;
- the PDF is rebuilt;
- the changed pages have been visually checked;
- the build log is clean;
- sources and image provenance are current;
- `STATUS.md` records the exact next task;
- all changes are committed.
