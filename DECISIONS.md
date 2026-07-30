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

**Decision:** Part 2 runs from 11:00 to 11:40 and uses a compact 12-slide
sequence rather than the earlier 21-slide plan.

**Reason:** Jeremy corrected the end time from 12:40 to 11:40. The shorter
format should reach the Green Shipping Corridor case quickly, keep interaction
optional and reserve enough time to explain the research-to-policy connection.

## D014 — LaTeX Beamer is the active production route

**Decision:** Maintain the lecture in `src/main.tex`, build it with XeLaTeX and
publish a single 16:9 PDF. The former HTML/PPTX implementation is archived and
no longer maintained.

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
