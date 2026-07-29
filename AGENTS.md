# AGENTS.md

This file is the authoritative instruction set for AI agents working on this repository.

## 1. Session onboarding

Before changing anything, read the following files completely:

1. `AGENTS.md`
2. `STATUS.md`
3. `STRUCTURE.md`
4. `DECISIONS.md`
5. `SOURCES.md`
6. `assets/README.md`, when working with visuals

Then inspect the current source and rendered deck. Do not reconstruct the project from general assumptions or redesign it from scratch.

At the end of every meaningful work session:

- update `STATUS.md` with what changed and the exact next task;
- update `STRUCTURE.md` if slide order, visible copy or visual briefs changed;
- update `DECISIONS.md` only when Jeremy approves a new durable decision;
- update `SOURCES.md` and `assets/README.md` when evidence or visual assets are added;
- commit changes with a concise, descriptive message.

## 2. Project owner and audience

- Project owner and presenter: Jeremy Jiajing Chen, also referred to as Jeremy or JJ.
- Course: HKUST ENVR2002D, Class 9.
- Audience: undergraduate students with mixed backgrounds. Assume they are intelligent but are not specialists in AIS, emissions modelling, shipping regulation or maritime decarbonisation.
- Visible slide copy is in clear natural English.
- Communication with Jeremy may be in Chinese.

The deck should make complex research intuitive without making it inaccurate.

## 3. Stable narrative

The presentation has two parts:

- **Part 1:** Jeremy's personal route into shipping research.
- **Part 2:** how science supports maritime decarbonisation, illustrated through emissions estimation, transition pathways, Green Shipping Corridors and the Hong Kong–San Antonio / Cherry Express case.

The detailed slide sequence lives in `STRUCTURE.md`. Do not change the agreed storyline or add technical material merely because it is available. Propose structural changes before implementing them.

## 4. Approved visual system

These requirements are mandatory unless Jeremy explicitly changes them.

### Canvas and composition

- 16:9 slide ratio.
- Background must be **pure white (`#FFFFFF`)**.
- Default composition: **text on the left, image on the right**.
- Keep the left and right regions stable across slides so the deck feels deliberate.
- A practical starting ratio is approximately 55% text / 45% image.
- Use generous margins and vertical centring. Avoid excessive empty space, but never fill space with decoration.

### Typography

- Use one simple sans-serif family throughout: Arial, Helvetica, Inter or a close system-safe equivalent.
- Use weight and size for hierarchy; do not introduce a second display font.
- Titles should generally be 50–66 px in HTML / at least 35 pt in presentation terms.
- Body copy should generally be 22–25 px in HTML / at least 16 pt.
- Use dark navy for primary text, muted blue-grey for secondary text and one restrained warm-orange accent.
- Avoid all-caps except for a short eyebrow label.

### Images

- The preferred illustration style is polished **8-bit / 16-bit pixel art**.
- Pixel art should use a consistent restrained palette: deep navy, desaturated blue, muted sea green, white/ivory and limited warm orange.
- Jeremy's portrait may be converted from his real photograph into identity-preserving pixel art.
- Every slide's image must directly explain, illustrate or emotionally support what that slide says.
- Do not use a generic container ship simply because the topic is shipping.
- Do not reuse one image for several different claims.
- Keep a slide-to-image brief in `STRUCTURE.md` and provenance in `assets/README.md`.
- Generated images must contain no text, logos or watermarks unless specifically required.
- Never present an illustrative or generated image as documentary evidence or as a real family photograph.

### Avoid

- AI-looking presentation templates;
- card grids, pills, badges, dashboards and fake interfaces;
- decorative diagrams that do not improve understanding;
- gradients, glass effects, dramatic glows and excessive shadows;
- multiple font families or editorial-serif styling;
- dense bullet lists;
- vague slogans and formulaic marketing language;
- unrelated imagery chosen only to make a slide look full.

## 5. Content and teaching rules

- Each slide has one narrative job and one primary takeaway.
- The slide title should be something Jeremy could naturally say aloud.
- Prefer one short paragraph or two short statements over bullet lists.
- Explain the intuition first. Add technical detail only when it changes understanding.
- AIS thinning and other research-method details are too technical for the opening story and should not be used as the main teaching case.
- The IMO sulphur cap was covered earlier in the course and should not be reused as the main opening case.
- The role of science must be visible through concrete work: measurement, comparison, pathway assessment and implementation support.
- Do not imply that science alone determines policy. Policy also involves institutions, economics, politics and values.

### Classroom participation

Class participation is likely to be uneven. Activities must be low-risk and optional:

- brief show-of-hands questions;
- rhetorical questions followed immediately by Jeremy's explanation;
- one simple choice students can answer without group reorganisation.

The lecture must still work if no student responds. Do not build the session around workshops, breakout groups or mandatory discussion.

## 6. Technical production

The default production route is:

1. maintain the source as static HTML/CSS;
2. use local assets only;
3. render at 16:9;
4. export to PDF with print backgrounds enabled and zero page margins;
5. inspect every rendered page at full size.

Preferred repository locations:

- source: `src/`
- approved original assets: `assets/original/`
- approved pixel assets: `assets/pixel/`
- temporary work: `tmp/` or `.tmp/` and never committed
- final HTML/PDF: `output/`

If the HTML is meant to be distributed as one file, inline the approved assets in the final build while retaining normal source files in `src/`.

## 7. Visual QA

Before presenting a revision to Jeremy:

- render every changed slide at 1280 × 720 or an equivalent 16:9 resolution;
- inspect every changed slide individually;
- check title wrapping, body overflow, image crop, face crop and consistency of image scale;
- verify that the image visibly corresponds to the slide's claim;
- create a contact sheet for deck-level consistency;
- confirm the PDF page count and 16:9 page size.

Do not describe a deck as finished when only the HTML source has been edited.

## 8. Source and privacy discipline

This repository is public.

- Do not commit private email threads, personal email addresses, file identifiers, confidential project documents or unapproved course materials.
- Do not commit credentials, API keys or environment files.
- Prefer primary and authoritative sources for factual claims.
- Record factual and visual provenance in `SOURCES.md` and `assets/README.md`.
- If an attachment supplied in chat may be private, summarise only the approved information and ask before committing the source file.

## 9. Change discipline

- Preserve Jeremy's approved wording, story and style unless the requested task requires a change.
- Keep unrelated edits out of the same commit.
- Do not overwrite original images; add edited versions under `assets/pixel/`.
- Use concise commit prefixes where useful: `docs:`, `deck:`, `assets:`, `fix:`.
- Update `STATUS.md` before ending the session so the next agent has a precise handoff.

## 10. Definition of done

A deck revision is complete only when:

- the requested slides are implemented;
- all images are relevant and provenance is recorded;
- changed pages have been rendered and visually checked;
- the PDF export is current;
- `STATUS.md` accurately states the result and next step;
- the changes are committed to the repository.
