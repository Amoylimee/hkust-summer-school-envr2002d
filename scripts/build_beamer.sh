#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_TEX="$PROJECT_ROOT/src/main.tex"
BUILD_DIR="$PROJECT_ROOT/tmp/beamer-build"
OUTPUT_PDF="$PROJECT_ROOT/output/ENVR2002D_Class9.pdf"

if ! command -v xelatex >/dev/null 2>&1; then
  echo "Error: xelatex is required to build the deck." >&2
  exit 1
fi

mkdir -p "$BUILD_DIR" "$PROJECT_ROOT/output"

xelatex \
  -interaction=nonstopmode \
  -halt-on-error \
  -output-directory="$BUILD_DIR" \
  "$SOURCE_TEX"

xelatex \
  -interaction=nonstopmode \
  -halt-on-error \
  -output-directory="$BUILD_DIR" \
  "$SOURCE_TEX"

cp "$BUILD_DIR/main.pdf" "$OUTPUT_PDF"

echo "Built $OUTPUT_PDF"
