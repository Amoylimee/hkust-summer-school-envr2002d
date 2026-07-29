from __future__ import annotations

import base64
import mimetypes
from pathlib import Path

from weasyprint import HTML


ROOT = Path(__file__).resolve().parents[1]
SOURCE_HTML = ROOT / "src" / "index.html"
SOURCE_CSS = ROOT / "src" / "styles.css"
OUTPUT_HTML = ROOT / "output" / "ENVR2002D_Class9_Part1.html"
OUTPUT_PDF = ROOT / "output" / "ENVR2002D_Class9_Part1.pdf"


def as_data_uri(path: Path) -> str:
    mime_type = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    payload = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime_type};base64,{payload}"


def main() -> None:
    html = SOURCE_HTML.read_text(encoding="utf-8")
    css = SOURCE_CSS.read_text(encoding="utf-8")
    html = html.replace(
        '<link rel="stylesheet" href="styles.css">',
        f"<style>\n{css}\n</style>",
    )

    for image_path in sorted((ROOT / "assets" / "pixel").glob("slide-*.png")):
        html = html.replace(
            f"../assets/pixel/{image_path.name}",
            as_data_uri(image_path),
        )

    OUTPUT_HTML.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_HTML.write_text(html, encoding="utf-8")
    HTML(filename=str(OUTPUT_HTML)).write_pdf(str(OUTPUT_PDF))
    print(OUTPUT_HTML)
    print(OUTPUT_PDF)


if __name__ == "__main__":
    main()
