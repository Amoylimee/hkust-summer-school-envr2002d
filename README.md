# HKUST Summer School ENVR2002D — Class 9

This repository maintains Jeremy Jiajing Chen's guest lecture for
**ENVR2002D: Tides of Change: Climate, Oceans, Ports & the Future of the
Maritime World**.

The active presentation is a 16:9 LaTeX Beamer deck using a restrained
economics-seminar design.

## Current deliverables

- Source: [`src/main.tex`](src/main.tex)
- PDF: [`output/ENVR2002D_Class9.pdf`](output/ENVR2002D_Class9.pdf)
- Build script: [`scripts/build_beamer.sh`](scripts/build_beamer.sh)

The current PDF contains the approved six-slide opening sequence. The
remainder of Part 1 and Part 2 will be migrated after Jeremy confirms the
content and pacing.

## Start here

Read these files before editing:

1. [`AGENTS.md`](AGENTS.md) — authoritative workflow and design rules;
2. [`STATUS.md`](STATUS.md) — current state and exact next task;
3. [`STRUCTURE.md`](STRUCTURE.md) — current slide sequence and planned arc;
4. [`DECISIONS.md`](DECISIONS.md) — durable decisions;
5. [`SOURCES.md`](SOURCES.md) — evidence and provenance;
6. [`assets/README.md`](assets/README.md) — rules for future images.

## Lecture structure

### Part 1 — How I ended up in shipping research

Approximately 30–40 minutes. Jeremy introduces his family connection to
shipping, formal training, intended Huawei career, unexpected PhD decision,
interest in computer games and coding, current research and future ambition.

### Part 2 — How science supports maritime decarbonisation

Approximately 40 minutes, beginning at 11:00. The section explains how science
helps measure emissions, compare possible pathways, test implementation and
support Green Shipping Corridor development.

## Visual direction

- pure white 16:9 canvas;
- black Times New Roman-style serif typography;
- dark navy used sparingly for rules, section labels, timings and page
  markers;
- low-density academic layouts;
- text-only cover, session overview and section dividers;
- optional right-side images on content slides;
- placeholders remain until relevant images are approved.

The source uses Times New Roman when available and falls back to Nimbus Roman,
a metrically compatible open-source substitute.

## Build

Install a TeX distribution that includes XeLaTeX and Beamer, then run:

```bash
./scripts/build_beamer.sh
```

The script compiles twice and writes:

```text
output/ENVR2002D_Class9.pdf
```

Temporary LaTeX files are written under `tmp/beamer-build/` and are ignored by
Git.

## Repository layout

```text
.
├── src/
│   └── main.tex
├── scripts/
│   └── build_beamer.sh
├── output/
│   └── ENVR2002D_Class9.pdf
├── assets/
│   └── README.md
├── _archive/
│   ├── legacy-html-pptx/
│   └── beamer-samples/
├── AGENTS.md
├── STATUS.md
├── STRUCTURE.md
├── DECISIONS.md
└── SOURCES.md
```

## Archive

The former HTML/PPTX implementation, 27-slide outputs, pixel-art assets and
style-selection samples are preserved under [`_archive/`](_archive/). They are
retained for reference and are not part of the active build.
