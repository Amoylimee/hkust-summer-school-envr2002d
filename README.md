# HKUST Summer School ENVR2002D — Class 9

This repository maintains Jeremy Jiajing Chen's guest lecture for **ENVR2002D: Tides of Change: Climate, Oceans, Ports & the Future of the Maritime World**.

The repository has two jobs:

1. maintain the HTML slide deck, visual assets and exported HTML, PDF and editable PPTX;
2. preserve enough context for a new AI-agent session to continue the work without reconstructing the project from chat history.

## Start here

Every new development session should read these files in order:

1. [`AGENTS.md`](AGENTS.md) — authoritative working and design rules;
2. [`STATUS.md`](STATUS.md) — current progress and immediate next task;
3. [`STRUCTURE.md`](STRUCTURE.md) — slide-by-slide narrative and visual brief;
4. [`DECISIONS.md`](DECISIONS.md) — decisions that should not be reopened without a reason;
5. [`SOURCES.md`](SOURCES.md) — evidence and asset provenance.

`CLAUDE.md` provides the same onboarding route for Claude-based agents.

## Course and timing

- Audience: undergraduate students from mixed academic backgrounds.
- Jeremy begins after two student-group presentations, shortly after 10:00.
- Part 1 ends around 10:30–10:40.
- Break until 11:00.
- Part 2 runs from 11:00 to 12:40, when the bus leaves.

## Presentation structure

### Part 1 — Jeremy's route into shipping research

A personal story connecting family shipping experience, formal training, an intended industry career, an unexpected Research Assistant opportunity, computer games, coding and maritime research.

### Part 2 — How science supports maritime decarbonisation

A teaching sequence showing how science helps quantify shipping emissions, identify possible transition pathways, test whether proposed solutions are workable, and support policy and implementation. The Green Shipping Corridor and Hong Kong–San Antonio / Cherry Express work provide the main applied case.

See [`STRUCTURE.md`](STRUCTURE.md) for the detailed slide plan.

## Approved visual direction

- pure white slide background;
- consistent left-text / right-image composition;
- one simple sans-serif type family;
- low-density, natural presentation copy;
- 8-bit / 16-bit pixel-art images in a consistent restrained palette;
- every image must directly illustrate the point of its slide;
- no dashboard cards, decorative diagrams, gradients or generic AI imagery.

The main production route is a static 16:9 HTML deck. A companion editable
PPTX uses the same copy, images, layout and speaker notes.

## Repository layout

```text
.
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── STATUS.md
├── STRUCTURE.md
├── DECISIONS.md
├── SOURCES.md
├── assets/
│   ├── README.md
│   ├── original/
│   └── pixel/
├── src/
│   ├── index.html
│   └── styles.css
├── scripts/
│   ├── build_html.py
│   └── build_ppt.mjs
├── requirements.txt
└── output/
    ├── ENVR2002D_Class9_Part1.html
    ├── ENVR2002D_Class9_Part1.pdf
    └── ENVR2002D_Class9_Part1.pptx
```

`tmp/` contains local renders and is intentionally ignored.

## Build Part 1

Install the Python dependency and build the self-contained HTML:

```bash
python -m pip install -r requirements.txt
python scripts/build_html.py
```

The HTML build also writes the 16:9 PDF with WeasyPrint.

The PPTX source uses the Codex presentation runtime and `@oai/artifact-tool`.
In a Codex workspace:

```bash
node /root/.codex/skills/builtins/presentations/container_tools/setup_artifact_tool_workspace.mjs \
  --workspace tmp/ppt-work
cp scripts/build_ppt.mjs tmp/ppt-work/build_ppt.mjs
cd tmp/ppt-work
node build_ppt.mjs
```

The exported PPTX contains editable text, embedded pixel-art images and
speaker notes. `AGENTS.md` contains the required visual-QA procedure.

## Current phase

Part 1 version 1 is complete: 15 slides, 15 unique images, self-contained HTML,
PDF and editable PPTX. The next step is Jeremy's content and pacing review
before any Part 2 slide production begins.
