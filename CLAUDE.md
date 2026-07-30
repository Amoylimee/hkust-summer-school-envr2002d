# CLAUDE.md

This repository maintains Jeremy Jiajing Chen's HKUST ENVR2002D Class 9
lecture.

Before editing, read:

1. `AGENTS.md`
2. `STATUS.md`
3. `STRUCTURE.md`
4. `DECISIONS.md`
5. `SOURCES.md`
6. `assets/README.md`, when working with visuals

`AGENTS.md` is authoritative.

## Essential current context

- The audience is undergraduate and non-specialist.
- Part 1 introduces Jeremy's route into shipping research.
- Part 2 explains how science supports maritime decarbonisation.
- The active source is `src/main.tex`.
- The active production route is LaTeX Beamer.
- The approved style is an economics-seminar treatment: white background,
  black Times-style serif text and restrained dark-navy rules.
- Images are optional and should remain as placeholders until a relevant
  visual is approved.
- The legacy HTML/PPTX implementation is read-only under `_archive/`.

Build with:

```bash
./scripts/build_beamer.sh
```

Before stopping, rebuild, inspect changed slides, update `STATUS.md` and commit
the work.
