import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  Presentation,
  PresentationFile,
} from "@oai/artifact-tool";

function findProjectRoot(startPath) {
  let current = startPath;
  while (current !== path.dirname(current)) {
    if (
      fs.existsSync(path.join(current, "STRUCTURE.md")) &&
      fs.existsSync(path.join(current, "assets"))
    ) {
      return current;
    }
    current = path.dirname(current);
  }
  throw new Error("Could not locate the project root.");
}

const ROOT = findProjectRoot(path.dirname(fileURLToPath(import.meta.url)));
const OUT = path.join(ROOT, "output");
const RENDER = path.join(ROOT, "tmp", "part2-artifact-render");
const SOURCE = path.join(ROOT, "src", "part2.html");

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(RENDER, { recursive: true });

const C = {
  white: "#FFFFFF",
  ink: "#10263A",
  muted: "#5B6B78",
  accent: "#C76B43",
  page: "#89959D",
};

function decode(text) {
  return text
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rsquo;/g, "’")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\n[ \t]+/g, "\n")
    .trim();
}

function match(section, pattern, label) {
  const found = section.match(pattern);
  if (!found) throw new Error(`Could not parse ${label}.`);
  return decode(found[1]);
}

const html = fs.readFileSync(SOURCE, "utf8");
const sections = [...html.matchAll(/<section class="slide[^"]*">([\s\S]*?)<\/section>/g)];
const slides = sections.map((entry) => {
  const section = entry[1];
  const imageMatch = section.match(/<img src="\.\.\/assets\/pixel\/([^"]+)" alt="([^"]+)">/);
  if (!imageMatch) throw new Error("Could not parse slide image.");
  return {
    eyebrow: match(section, /<div class="eyebrow">([\s\S]*?)<\/div>/, "eyebrow"),
    title: match(section, /<h[12]>([\s\S]*?)<\/h[12]>/, "title"),
    body: match(section, /<p class="body">([\s\S]*?)<\/p>/, "body"),
    page: match(section, /<div class="page">([\s\S]*?)<\/div>/, "page"),
    notes: match(section, /<aside class="notes">([\s\S]*?)<\/aside>/, "notes"),
    image: imageMatch[1],
    alt: decode(imageMatch[2]),
  };
});

function addTextBox(slide, text, position, style) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontFamily: "Arial",
    color: C.ink,
    ...style,
  };
  return shape;
}

function titleSize(text, index) {
  if (index === 0) return 47;
  if (text.length > 60) return 41;
  if (text.length > 49) return 43;
  return 47;
}

function bodySize(text) {
  if (text.length > 170) return 17;
  if (text.length > 130) return 18;
  return 20;
}

function addSlide(deck, item, index) {
  const slide = deck.slides.add();
  slide.background.fill = C.white;

  const left = 72;
  const textWidth = 590;
  const imagePosition = { left: 720, top: 28, width: 532, height: 664 };
  const tSize = titleSize(item.title, index);
  const bSize = bodySize(item.body);
  const titleHeight = 210;
  const bodyHeight = 142;
  const startY = 124;

  addTextBox(
    slide,
    item.eyebrow.toUpperCase(),
    { left, top: startY, width: textWidth, height: 24 },
    {
      fontSize: 13,
      bold: true,
      color: C.accent,
      className: "font-bold",
    },
  );

  addTextBox(
    slide,
    item.title,
    { left, top: startY + 42, width: textWidth, height: titleHeight },
    {
      fontSize: tSize,
      bold: true,
      color: C.ink,
      className: "font-bold leading-tight",
    },
  );

  addTextBox(
    slide,
    item.body,
    { left, top: startY + 42 + titleHeight + 18, width: textWidth, height: bodyHeight },
    {
      fontSize: bSize,
      color: C.muted,
      className: "leading-relaxed",
    },
  );

  addTextBox(
    slide,
    item.page,
    { left, top: 674, width: 42, height: 18 },
    { fontSize: 13, color: C.page },
  );

  const imageBytes = fs.readFileSync(path.join(ROOT, "assets", "pixel", item.image));
  slide.images.add({
    dataUrl: `data:image/png;base64,${imageBytes.toString("base64")}`,
    alt: item.alt,
    fit: "cover",
    position: imagePosition,
    geometry: "rect",
  });

  slide.speakerNotes.textFrame.setText(item.notes);
  slide.speakerNotes.setVisible(true);
}

const deck = Presentation.create({
  slideSize: { width: 1280, height: 720 },
  presentationTheme: {
    defaultTextStyle: {
      fontFamily: "Arial",
      color: C.ink,
    },
  },
});

slides.forEach((item, index) => addSlide(deck, item, index));

const pptx = await PresentationFile.exportPptx(deck);
const pptxPath = path.join(OUT, "ENVR2002D_Class9_Part2.pptx");
fs.writeFileSync(pptxPath, Buffer.from(pptx.data));

for (let index = 0; index < slides.length; index += 1) {
  const rendered = await deck.slides.items[index].export({
    format: "png",
    scale: 1,
  });
  fs.writeFileSync(
    path.join(RENDER, `slide-${String(index + 16).padStart(2, "0")}.png`),
    Buffer.from(await rendered.arrayBuffer()),
  );
}

console.log(
  JSON.stringify(
    { pptx: pptxPath, render: RENDER, slides: slides.length },
    null,
    2,
  ),
);
