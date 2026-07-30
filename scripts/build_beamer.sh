#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_DIR="$PROJECT_ROOT/src"
OUTPUT_PDF="$PROJECT_ROOT/output/ENVR2002D_Class9.pdf"

if ! command -v make >/dev/null 2>&1; then
  echo "Error: make is required to build the deck." >&2
  exit 1
fi

make -C "$SOURCE_DIR"

mkdir -p "$PROJECT_ROOT/output"
cp "$SOURCE_DIR/main.pdf" "$OUTPUT_PDF"

echo "Primary PDF: $SOURCE_DIR/main.pdf"
echo "Built $OUTPUT_PDF"
