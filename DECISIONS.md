# DECISIONS.md

This is a short log of approved decisions that future sessions should preserve. Add a new entry only when Jeremy approves a durable change.

## D001 — Two-part session structure

**Decision:** The lecture has a personal Part 1 and a science/policy Part 2.

**Reason:** Christine Loh specifically requested an introduction to Jeremy, his long-standing interest in shipping and his ambition after the PhD before discussing the research and its wider importance.

## D002 — HTML-first production (superseded)

**Decision:** Maintain the deck as static 16:9 HTML/CSS and export it to PDF.
Also produce an editable PPTX companion from the same content and visual system.

**Reason:** HTML offers better control over image placement and visual consistency than the earlier generated PowerPoint approach.

## D003 — Sans-serif pixel-art visual style (superseded)

**Decision:** Use a pure-white background, simple sans-serif typography, left-side text and right-side pixel-art imagery.

**Reason:** The earlier editorial/serif design felt too complex and AI-generated. Jeremy approved the simpler pixel-art sample direction and subsequently requested a white background.

## D004 — One image on every slide (superseded)

**Decision:** Every slide gets a unique image that directly corresponds to its claim.

**Reason:** The image is part of the teaching and storytelling, not generic decoration.

## D005 — Pixel-art personal portrait treatment (superseded)

**Decision:** Convert Jeremy's real portrait into identity-preserving 8-bit / 16-bit pixel art.

**Reason:** This connects the visual style to Jeremy's genuine interest in computer games and coding while keeping the deck personal.

## D006 — Part 1 research framing

**Decision:** The opening story uses Jeremy's family shipping background, intended Huawei supply-chain career, accidental RA/PhD decision, gaming and coding interest, current maritime-data research and future ambition.

**Reason:** The audience can understand the personal motivation before encountering policy or technical content.

## D007 — Part 2 teaching argument

**Decision:** Show science's role through concrete stages: estimating emissions, establishing the need to decarbonise, assessing pathways, testing implementation and supporting policy.

**Reason:** A high-level discussion of an IMO strategy did not make the role of science visible enough.

## D008 — Main applied case

**Decision:** Use Green Shipping Corridors and the Hong Kong–San Antonio / Cherry Express work as the main implementation case.

**Reason:** It shows how maritime data and scientific evidence can help move from a broad solution concept toward a practical policy and industry conversation.

## D009 — Excluded opening cases

**Decision:** Do not use AIS thinning as the opening research case and do not rely on the IMO sulphur cap as the main policy example.

**Reason:** AIS thinning is too technical for this undergraduate audience, and the sulphur cap has already been covered earlier in the course.

## D010 — Conservative participation

**Decision:** Use only optional, low-risk questions and show-of-hands prompts.

**Reason:** Only a small number of students may respond actively. The lecture must remain smooth if the room is quiet.

## D011 — Public-repository privacy

**Decision:** Store development in this public repository, but do not commit private emails, personal contact details, confidential attachments or unapproved course files.

**Reason:** The repository should support continuity without exposing source material that was shared privately.

## D012 — Part 1 HTML/PPTX version-1 scope (superseded)

**Decision:** Part 1 uses 15 slides and is delivered as self-contained HTML,
16:9 PDF and editable PPTX with speaker notes.

**Reason:** Jeremy requested the complete first version in both HTML and
PowerPoint while preserving the approved HTML-first design route.

## D013 — Part 2 is a 40-minute research talk

**Decision:** Part 2 begins around 11:00, runs for approximately 40 minutes and
uses a compact 12-slide sequence rather than the earlier 21-slide plan.

**Reason:** Jeremy clarified that 11:00 is an approximate start time. The
shorter format should reach the Green Shipping Corridor case quickly, keep
interaction optional and reserve enough time to explain the
research-to-policy connection.

## D014 — LaTeX Beamer is the active production route

**Decision:** Maintain the lecture in `src/main.tex`, build it with XeLaTeX and
publish a single 16:9 PDF. The former HTML/PPTX implementation is no longer
maintained and has been removed from the active tree.

**Reason:** Jeremy preferred the clarity and academic character of the Beamer
sample and approved it as the production direction on 30 July 2026.

**Supersedes:** D002 and the delivery-format portion of D012.

## D015 — Economics-seminar visual system

**Decision:** Use a pure-white background, black Times New Roman-style serif
typography and restrained dark-navy rules, labels, timings and page markers.

**Reason:** Jeremy identified this as the concise Beamer style commonly used
in economics presentations and approved the sample.

**Supersedes:** D003.

## D016 — Images are optional

**Decision:** Use text-only covers, overviews and section dividers. Content
slides may reserve a right-side image area, but an image is added only when it
supports the slide. Keep a placeholder until an image is approved.

**Reason:** The deck should remain academically clean and should not use
generic imagery merely to fill space.

**Supersedes:** D004 and D005.

## D017 — Lecture-level opening sequence

**Decision:** Begin with a lecture cover, then a two-part session overview,
then a Part 1 divider before the personal story begins.

**Reason:** This lets students understand the full lecture structure before
Jeremy introduces his personal route into shipping research.

## D018 — Honest two-scenario post-PhD plan

**Decision:** Close Jeremy's personal story with two post-PhD scenarios. The
ideal is to continue shipping research and use it to influence industry and
the wider world. The practical backup is to remain flexible, find useful work,
support himself and build a life if the ideal path is unavailable.

**Reason:** Jeremy wants the lecture to state both his ambition and the
ordinary need to make a living. The contrast should feel candid and lightly
humorous rather than pessimistic.

## D019 — No institutional logo in the active deck

**Decision:** Do not display the supplied HKUST logo in the active Beamer
slides.

**Reason:** Jeremy found the rendered corner logo visually unsatisfactory and
asked for it to be removed.

## D020 — Jeremy's writing style

**Decision:** Use clear, natural and polished English with a measured,
academically credible tone. Prioritise clarity and logical flow, introduce
technical terms only when useful, define abbreviations on first use, qualify
claims appropriately and avoid repetitive contrastive phrasing.

**Reason:** Jeremy supplied these principles as his preferred style for
academic, analytical and research-oriented writing and asked for Part 2 to
follow them.

## D021 — Part 2 opens with a question-led emissions estimate

**Decision:** Begin Part 2 by asking whether shipping is a significant source
of global carbon emissions. Provide comparison prompts, explain the simple
fuel-consumption × emission-factor calculation, introduce the global fleet
data problem and a layman-level bottom-up method, then reveal the Fourth IMO
Greenhouse Gas Study result.

**Reason:** The audience should encounter the policy question and intuitive
calculation before the global result. This makes the IMO estimate a clear
example of science providing evidence for policy discussion.

## D022 — Co-located source build and PDF

**Decision:** Keep `Makefile`, `main.tex` and the primary compiled
`main.pdf` together in `src/`. Compile with file-and-line error reporting and
SyncTeX enabled. Retain the root build script only as a compatibility wrapper
that refreshes the existing PDF mirror under `output/`.

**Reason:** Jeremy wants to build from the main source folder, receive the PDF
there and click terminal references in Visual Studio Code to jump directly to
the corresponding source location.

## D023 — Tighter transition between Part 1 and Part 2

**Decision:** Keep only the ideal post-PhD research plan and remove the
separate practical backup-plan slide. Use the existing “What can science
actually do for maritime decarbonisation?” transition as the sole Part 2
divider.

**Reason:** Jeremy marked both the backup-plan page and the repeated Part 2
opening page for deletion. The shorter sequence reaches the teaching question
more directly.

**Supersedes:** D018.

## D024 — Opinion-led opening and linear lecture layouts

**Decision:** Introduce the shipping-emissions question through possible
positions that students can respond to. Explain maritime big data through one
ship's activity before scaling to the fleet, followed by a separate,
full-width teaching-diagram slide. Present decarbonisation pathways and
implementation conditions in numbered top-to-bottom sequences.

**Reason:** Jeremy wants students to express opinions, understand the
bottom-up method through an everyday example and always know where to begin
reading each slide.

## D025 — Introduce the corridor feasibility gap before route selection

**Decision:** Add a page between the Green Shipping Corridor definition and
the maritime-data application. Use the 2025 global progress review to show the
gap between 84 active initiatives and four projects at the realisation stage,
then use the earlier maritime-big-data logic to identify routes with credible
starting conditions.

**Reason:** Jeremy wants the lecture to establish the practical dilemma before
explaining how scientific evidence can help. This creates a direct transition
from the feasibility problem to route-level analysis.

**Supersedes:** The 12-slide Part 2 count in D013; Part 2 now contains thirteen
slides.

## D026 — Closing contact slide

**Decision:** End the deck with a thank-you and questions page showing
Jeremy's email address and personal-homepage URL as clickable links. Use a
full-bleed Hong Kong Victoria Harbour night photograph with a dark overlay and
white text.

**Reason:** Jeremy wants students to have a clear way to contact him and find
his work after the lecture, with a visually memorable Hong Kong closing image.

**Supersedes:** The 13-slide Part 2 count recorded in D025; Part 2 now contains
fourteen slides.
