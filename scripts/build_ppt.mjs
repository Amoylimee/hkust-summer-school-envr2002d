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
const RENDER = path.join(ROOT, "tmp", "artifact-render");

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(RENDER, { recursive: true });

const C = {
  white: "#FFFFFF",
  ink: "#10263A",
  muted: "#5B6B78",
  accent: "#C76B43",
  page: "#89959D",
};

const slides = [
  {
    eyebrow: "PART 1 · A PERSONAL JOURNEY",
    title: "How I ended up in\nshipping research",
    body: "A personal route through shipping, code and\none unexpected decision.",
    name: "Jeremy Jiajing Chen",
    affiliation: "HKUST · ENVR2002D",
    image: "slide-01-jeremy-pixel.png",
    alt: "Pixel-art portrait of Jeremy beside a cargo ship and port cranes",
    crop: { left: 0.50, right: 0.049, top: 0, bottom: 0 },
    titleSize: 64,
    notes: `Good morning. I want to begin with a personal story rather than a technical definition.

I did not grow up thinking, “I want to become a researcher.” My route into research came through shipping, computer games, coding, and one decision I was given only a day to make.

This first part is about that route—and what research feels like from the inside.

[Sources]
- Jeremy Lim personal website: https://amoylimee.github.io/index.html
- Course planning materials supplied by the instructor (not redistributed).`,
  },
  {
    eyebrow: "WHERE IT BEGAN",
    title: "Shipping was part of\nmy life before it\nbecame my research.",
    body: "My grandfather and my father both worked at sea.\nShipping therefore felt personal long before it\nbecame an academic subject.",
    image: "slide-02-shipping-family.png",
    alt: "Illustrative pixel-art seafarer on a ship deck looking toward port",
    crop: { left: 0.50, right: 0.049, top: 0, bottom: 0 },
    titleSize: 52,
    imageLabel: "Illustrative image",
    notes: `Shipping entered my life before research did. My father was a seafarer, so ships and ports were connected to real people, real work and family life.

That matters because later, when I studied shipping, I was not encountering an abstract system for the first time.

[Sources]
- Personal background provided by Jeremy Lim.
- Image is illustrative pixel art; it is not a family photograph.`,
  },
  {
    eyebrow: "LEARNING THE SYSTEM",
    title: "I learned the industry\nbefore I tried to\nchange it.",
    body: "I started with international shipping management,\nthen moved into logistics and environmental policy.",
    image: "slide-03-shipping-study.png",
    alt: "Pixel-art study desk with shipping charts, books and a port outside",
    titleSize: 52,
    notes: `My university training was in shipping and logistics. I first learned how the system operates: vessels, ports, markets, cargo flows and commercial decisions.

That foundation became important later. To improve a system, it helps to understand how the people inside it already make decisions.

[Sources]
- Jeremy Lim personal website: https://amoylimee.github.io/index.html`,
  },
  {
    eyebrow: "THE ORIGINAL PLAN",
    title: "After my Master’s,\nI was going into\nindustry.",
    body: "I had accepted a supply-chain management job at\nHuawei. A PhD was not the plan.",
    image: "slide-04-industry-plan.png",
    alt: "Pixel-art planning office overlooking a container port",
    titleSize: 54,
    notes: `After my Master’s degree, the straightforward next step seemed to be industry.

That was the plan: use what I had learned in a practical role in shipping or logistics. I was not actively looking for an academic career.

[Sources]
- Personal career story provided by Jeremy Lim.`,
  },
  {
    eyebrow: "THEN, ONE ADVERTISEMENT",
    title: "I saw a Research\nAssistant opening.",
    body: "I thought it might simply help fund my flight ticket\nhome.",
    image: "slide-05-ra-ad.png",
    alt: "Pixel-art research assistant notice beside travel documents and a suitcase",
    titleSize: 56,
    notes: `Then I saw an opening for a Research Assistant.

At first, it looked like a small detour rather than a life-changing decision. But many career changes begin exactly like this: one opportunity appears before you fully know what it might become.

[Sources]
- Personal career story provided by Jeremy Lim.`,
  },
  {
    eyebrow: "THE DECISION",
    title: "Ten minutes of\npersuasion. One day\nto decide.",
    body: "Prof. Alexis Lau encouraged me to stay. The next day,\nI decided to pursue a PhD.",
    image: "slide-06-decision.png",
    alt: "Pixel-art professor and student discussing a decision in an office",
    titleSize: 51,
    notes: `A professor spent about ten minutes persuading me to try the Research Assistant role. I was given roughly one day to decide.

I said yes.

The decision was quick, but it changed the direction of my career. The important point is not that everyone should choose research. It is that trying something can reveal a fit that no amount of planning could predict.

[Sources]
- Personal career story provided by Jeremy Lim.`,
  },
  {
    eyebrow: "BUT WHY DID IT CLICK?",
    title: "Research fit the way\nmy brain already liked\nto work.",
    body: "The opportunity explains how I started. It does not\nfully explain why I stayed.",
    image: "slide-07-research-fit.png",
    alt: "Pixel-art researcher studying a complex network of ships and routes",
    titleSize: 52,
    notes: `Once I started, research felt unexpectedly familiar.

I liked taking a complicated system, breaking it into smaller questions, testing an idea, seeing where it failed, and trying again.

That loop is central to research—but I had already learned to enjoy it somewhere else.

[Sources]
- Personal reflection provided by Jeremy Lim.`,
  },
  {
    eyebrow: "MY FIRST DIGITAL OBSESSION",
    title: "I liked computer\ngames long before I\nliked research.",
    body: "Games made me curious about computers, rules and\ncomplex systems.",
    image: "slide-08-gaming.png",
    alt: "Pixel-art strategy game setup with maps, units and a glowing monitor",
    titleSize: 52,
    notes: `I have always liked computer games.

Games reward curiosity: you explore a system, learn its rules, make a decision, fail, update your strategy, and try again.

That mindset later became useful in coding and research.

[Sources]
- Personal interests provided by Jeremy Lim.`,
  },
  {
    eyebrow: "THE BRIDGE",
    title: "Games led me to\ncode. Code led me to\nresearch.",
    body: "Coding changed me from someone who played with\nsystems into someone who could build and analyse\nthem.",
    image: "slide-09-games-to-code.png",
    alt: "Pixel-art desk with a strategy game on one screen and code on another",
    crop: { left: 0.274, right: 0.275, top: 0, bottom: 0 },
    titleSize: 54,
    notes: `My interest in games eventually extended into writing code.

Coding changed my position. Instead of only playing inside a system, I could build a model of one, change the rules, run an experiment and inspect what happened.

That is very close to the daily practice of computational research.

[Sources]
- Personal interests and career reflection provided by Jeremy Lim.`,
  },
  {
    eyebrow: "THE RESEARCH LOOP",
    title: "Research gave me the\nsame satisfaction as a\ndifficult game.",
    body: "A hard problem. Repeated attempts. Debugging.\nAnd finally, a pattern that makes sense.",
    image: "slide-10-debugging.png",
    alt: "Pixel-art coding desk showing a failed run becoming a successful result",
    titleSize: 50,
    notes: `This is the loop I enjoy: observe a problem, build something, test it, fail, debug it, and try again.

Most research does not work perfectly on the first attempt. The satisfaction comes from gradually understanding why—and finally getting a useful result.

[Sources]
- Personal reflection provided by Jeremy Lim.`,
  },
  {
    eyebrow: "THE FIT",
    title: "Shipping gave me the\nsubject. Coding gave\nme the tools.",
    body: "Research brought the two together.",
    image: "slide-11-shipping-coding.png",
    alt: "Pixel-art cargo ship whose wake transforms into data and code",
    titleSize: 51,
    notes: `Shipping gave me a real system that I already cared about. Coding gave me a way to study that system at scale.

Research became the place where those two interests met: knowledge of the industry on one side, and computational tools on the other.

[Sources]
- Jeremy Lim personal website: https://amoylimee.github.io/index.html`,
  },
  {
    eyebrow: "WHAT I DO AT HKUST",
    title: "I use data to\nunderstand how\nmaritime systems\nwork.",
    body: "Large-scale shipping activity data reveals patterns\nthat are difficult to see from the shore.",
    image: "slide-12-maritime-data.png",
    alt: "Pixel-art vessel surrounded by data trails and a port map",
    titleSize: 51,
    notes: `Today, much of my work uses maritime data to understand how shipping systems behave.

Ships leave digital traces. By organizing and analysing those traces, we can identify patterns in movement, operations and connections across ports.

The goal here is not to explain a technical method. It is to show what the method makes visible.

[Sources]
- Jeremy Lim personal website: https://amoylimee.github.io/index.html`,
  },
  {
    eyebrow: "THE WORK IN THREE MOVES",
    title: "My research moves\nfrom observation to\nuseful evidence.",
    body: "Observe real activity. Interpret it with code.\nTranslate the result into something decision-makers\ncan use.",
    image: "slide-13-evidence.png",
    alt: "Pixel-art sequence from a working port to data analysis and a briefing",
    titleSize: 52,
    notes: `Data alone is not the destination.

The research process moves from observing the real system, to organizing evidence, to explaining what that evidence might mean for a decision.

This is the bridge to the second part of the class: how science can support policy and implementation.

[Sources]
- Jeremy Lim personal website: https://amoylimee.github.io/index.html
- Course learning outcomes supplied by the instructor.`,
  },
  {
    eyebrow: "WHAT MAKES IT MEANINGFUL",
    title: "A paper is not the final\ndestination.",
    body: "The work matters when evidence enters a real\nconversation and supports a practical next step.",
    image: "slide-14-beyond-paper.png",
    alt: "Pixel-art research paper being discussed in a meeting overlooking a port",
    titleSize: 54,
    notes: `Publishing is important, but a paper is not automatically an outcome in the real world.

Evidence has to enter conversations with the people who operate systems and make decisions: industry, ports, policymakers and communities.

That translation is difficult—and it is one of the most interesting parts of the work.

[Sources]
- Personal research perspective provided by Jeremy Lim.`,
  },
  {
    eyebrow: "AFTER THE PHD",
    title: "I want to stay close to\nshipping—and closer\nto implementation.",
    body: "I want to keep connecting research, public policy\nand industry action in the transition to lower-carbon\nshipping.",
    image: "slide-15-future-port.png",
    alt: "Pixel-art future port with a clean ship, shore power and sunrise",
    titleSize: 49,
    notes: `I still want to stay close to shipping as an industry. But I also want to move closer to implementation.

The question that excites me is no longer only, “What can the data tell us?” It is also, “How can this evidence help people act?”

That takes us into Part 2: science, shipping decarbonisation and the difficult distance between a promising solution and something that actually works.

[Sources]
- Jeremy Lim personal website: https://amoylimee.github.io/index.html
- Course planning materials supplied by the instructor (not redistributed).`,
  },
];

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

function lineCount(text) {
  return text.split("\n").length;
}

function addSlide(deck, item, index) {
  const slide = deck.slides.add();
  slide.background.fill = C.white;

  const left = 72;
  const textWidth = 590;
  const imagePosition = { left: 720, top: 28, width: 532, height: 664 };
  const titleSize = index === 0 ? 56 : index === 11 ? 44 : 46;
  const titleHeight = Math.ceil(lineCount(item.title) * titleSize * 1.24 + 16);
  const bodySize = 20;
  const bodyHeight = Math.ceil(lineCount(item.body) * bodySize * 1.52 + 18);
  const eyebrowHeight = 22;
  const gapAfterEyebrow = 20;
  const gapAfterTitle = 24;
  const nameHeight = item.name ? (item.affiliation ? 60 : 42) : 0;
  const nameGap = item.name ? 26 : 0;
  const groupHeight =
    eyebrowHeight +
    gapAfterEyebrow +
    titleHeight +
    gapAfterTitle +
    bodyHeight +
    nameGap +
    nameHeight;
  const startY = Math.max(70, Math.round((720 - groupHeight) / 2));

  addTextBox(
    slide,
    item.eyebrow,
    { left, top: startY, width: textWidth, height: eyebrowHeight },
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
    {
      left,
      top: startY + eyebrowHeight + gapAfterEyebrow,
      width: textWidth,
      height: titleHeight,
    },
    {
      fontSize: titleSize,
      bold: true,
      color: C.ink,
      className: "font-bold leading-tight",
    },
  );

  const bodyTop =
    startY + eyebrowHeight + gapAfterEyebrow + titleHeight + gapAfterTitle;
  addTextBox(
    slide,
    item.body,
    { left, top: bodyTop, width: textWidth, height: bodyHeight },
    {
      fontSize: bodySize,
      color: C.muted,
      className: "leading-relaxed",
    },
  );

  if (item.name) {
    addTextBox(
      slide,
      item.name,
      {
        left,
        top: bodyTop + bodyHeight + nameGap,
        width: textWidth,
        height: nameHeight,
      },
      {
        fontSize: 22,
        bold: true,
        color: C.ink,
        className: "font-bold",
      },
    );
    if (item.affiliation) {
      addTextBox(
        slide,
        item.affiliation,
        {
          left,
          top: bodyTop + bodyHeight + nameGap + 31,
          width: textWidth,
          height: 20,
        },
        {
          fontSize: 13,
          color: C.muted,
        },
      );
    }
  }

  addTextBox(
    slide,
    String(index + 1).padStart(2, "0"),
    { left, top: 674, width: 42, height: 18 },
    {
      fontSize: 13,
      color: C.page,
    },
  );

  const imagePath = path.join(ROOT, "assets", "pixel", item.image);
  const imageBytes = fs.readFileSync(imagePath);
  slide.images.add({
    dataUrl: `data:image/png;base64,${imageBytes.toString("base64")}`,
    alt: item.alt,
    fit: "cover",
    crop: item.crop,
    position: imagePosition,
    geometry: "rect",
  });

  if (item.imageLabel) {
    addTextBox(
      slide,
      item.imageLabel,
      { left: 1090, top: 681, width: 142, height: 14 },
      {
        fontSize: 10,
        color: C.white,
        bold: true,
        className: "font-bold",
      },
    );
  }

  slide.speakerNotes.textFrame.setText(item.notes);
  slide.speakerNotes.setVisible(true);
  return slide;
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
fs.writeFileSync(
  path.join(OUT, "ENVR2002D_Class9_Part1.pptx"),
  Buffer.from(pptx.data),
);

for (let index = 0; index < slides.length; index += 1) {
  const rendered = await deck.slides.items[index].export({
    format: "png",
    scale: 1,
  });
  fs.writeFileSync(
    path.join(RENDER, `slide-${String(index + 1).padStart(2, "0")}.png`),
    Buffer.from(await rendered.arrayBuffer()),
  );
}

console.log(
  JSON.stringify(
    {
      pptx: path.join(OUT, "ENVR2002D_Class9_Part1.pptx"),
      render: RENDER,
      slides: slides.length,
    },
    null,
    2,
  ),
);
