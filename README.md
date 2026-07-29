# HKUST Summer School ENVR2002D — Class 9

This repository maintains Jeremy Jiajing Chen's guest lecture for **ENVR2002D: Tides of Change: Climate, Oceans, Ports & the Future of the Maritime World**.

The repository has two jobs:

1. maintain the HTML slide deck, visual assets and exported PDF;
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

The main production route is a static 16:9 HTML deck exported to PDF.

## Planned repository layout

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
├── references/
├── src/
│   ├── index.html
│   └── styles.css
└── output/
    ├── ENVR2002D_Class9.html
    └── ENVR2002D_Class9.pdf
```

Folders will be added as the deck source and approved assets are committed.

## Current phase

The narrative direction is agreed. Three visual samples established the new pixel-art, left-text/right-image style. The next task is to rebuild Part 1 in that style, with the background changed to pure white.
