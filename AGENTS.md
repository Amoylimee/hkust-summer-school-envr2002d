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

Then inspect `src/main.tex` and the current PDF in `output/`.

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

The session has two parts:

- **Part 1:** Jeremy's route into shipping research.
- **Part 2:** how science supports maritime decarbonisation through
  measurement, comparison, implementation analysis and the Green Shipping
  Corridor / Hong Kong–San Antonio case.

## 3. Approved production route

LaTeX Beamer is the sole active production route.

- Main source: `src/main.tex`
- Build command: `./scripts/build_beamer.sh`
- Current PDF: `output/ENVR2002D_Class9.pdf`
- Temporary LaTeX files and rendered PNGs: `tmp/` and never committed

The former HTML/PPTX implementation is preserved under
`_archive/legacy-html-pptx/`. Do not edit, rebuild or move archived files back
into the active tree unless Jeremy explicitly asks.

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

- Do not commit private messages, email addresses, confidential attachments,
  credentials or unapproved course materials.
- Prefer primary and authoritative sources for factual claims.
- Record factual and visual provenance in `SOURCES.md`.
- Record private sources through neutral descriptions only.
- Never present an illustrative or generated visual as documentary evidence.

## 7. Build and quality assurance

After changing the deck:

1. run `./scripts/build_beamer.sh`;
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
- Do not delete superseded work; move it into `_archive/` with an explanatory
  README.
- Keep final outputs in `output/`, active source in `src/`, build scripts in
  `scripts/`, approved visuals in `assets/`, and temporary files in `tmp/`.

## 9. Definition of done

A revision is complete when:

- the requested slides are implemented;
- the PDF is rebuilt;
- the changed pages have been visually checked;
- the build log is clean;
- sources and image provenance are current;
- `STATUS.md` records the exact next task;
- all changes are committed.
