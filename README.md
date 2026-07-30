# HKUST Summer School ENVR2002D — Class 9

This repository maintains Jeremy Jiajing Chen's guest lecture for
**ENVR2002D: Tides of Change: Climate, Oceans, Ports & the Future of the
Maritime World**.

The active presentation is a 16:9 LaTeX Beamer deck using a restrained
economics-seminar design.

## Current deliverables

- Source: [`src/main.tex`](src/main.tex)
- Makefile: [`src/Makefile`](src/Makefile)
- Primary PDF: [`src/main.pdf`](src/main.pdf)
- Compatibility PDF: [`output/ENVR2002D_Class9.pdf`](output/ENVR2002D_Class9.pdf)

The current PDF contains a thirteen-slide Part 1 sequence and a fourteen-slide
Part 2 sequence.

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

Approximately 40 minutes, beginning around 11:00. The fourteen-slide section
explains how science helps measure emissions, compare possible pathways, test
implementation and support Green Shipping Corridor development through the
Hong Kong–San Antonio / Cherry Express case.

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
cd src
make
```

The Makefile compiles twice and writes the result beside the source:

```text
src/main.pdf
```

Compiler errors include `main.tex:<line>` references that are clickable in
the Visual Studio Code terminal. To print a clickable link to a particular
source line, run:

```bash
make link LINE=530
```

The build also generates temporary `main.synctex.gz` data for source/PDF
navigation in editors such as LaTeX Workshop. Use `make open` to build and
open the PDF, `make clean` to remove auxiliary files, or `make distclean` to
remove all generated files including the PDF.

The root compatibility command remains available:

```bash
./scripts/build_beamer.sh
```

It runs the same Makefile and refreshes
`output/ENVR2002D_Class9.pdf`.

## Repository layout

```text
.
├── src/
│   ├── Makefile
│   ├── main.tex
│   └── main.pdf
├── scripts/
│   └── build_beamer.sh
├── output/
│   └── ENVR2002D_Class9.pdf
├── assets/
│   ├── README.md
│   └── hong-kong-victoria-harbour-raymond-yeung.jpg
├── AGENTS.md
├── STATUS.md
├── STRUCTURE.md
├── DECISIONS.md
└── SOURCES.md
```

## Legacy work

The former HTML/PPTX implementation, 27-slide outputs, pixel-art assets and
style-selection samples have been permanently removed from this repository.
