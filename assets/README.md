# Visual assets

This directory will contain approved source images and their derived pixel-art versions.

## Planned folders

```text
assets/
├── original/   # approved originals or user-owned reference images
└── pixel/      # approved slide-ready 8-bit / 16-bit assets
```

Do not overwrite originals. A pixel-art transformation must be saved as a new file.

## Visual style

All generated/edited slide illustrations should share these characteristics:

- polished 8-bit / 16-bit pixel art;
- visible square pixels and clean block shading;
- restrained palette: deep navy, desaturated blue, muted sea green, white/ivory and limited warm orange;
- credible maritime and research details;
- quiet, personal and slightly nostalgic mood;
- no photorealistic texture, painterly smoothing or glossy 3D rendering;
- no readable generated text, logos or watermarks;
- composition designed for the right 45% of a 16:9 slide.

The slide background is pure white. Images may use dark or coloured backgrounds inside their own rectangular frame.

## Relevance rule

Every asset must answer: **what does this image help the student understand about this slide?**

Do not approve an image merely because it looks attractive. A generic ship image is insufficient when the slide is about a decision, a Research Assistant advertisement, debugging, policy translation or implementation.

The required image for every planned slide is specified in `STRUCTURE.md`.

## Documentary versus illustrative images

- Jeremy's portrait is based on his public personal-website photograph and should preserve his identity.
- Family/shipping-background scenes are illustrative unless Jeremy provides an actual family photograph.
- AI-generated pixel art must never be described as a real event photograph or documentary evidence.
- Add “illustrative image” in metadata, notes or small visible copy when there is a meaningful risk of confusion.

## Asset manifest

Add every approved asset below using this template:

```text
### filename.png
- Slide(s): 00
- Status: draft / approved / rejected
- Type: user-owned original / public source / AI-generated / AI-edited
- Source/reference: URL or private-source description
- Purpose: what slide claim the image supports
- Prompt summary: concise generation/edit brief
- Date created:
- Notes: crop, identity, factual or attribution constraints
```

## Part 1 asset manifest

All slide-ready images below are version-1 assets created or approved on
2026-07-30.

### original/jeremy-headshot.png
- Slide(s): reference for 01
- Status: approved reference
- Type: public source
- Source/reference: Jeremy's public website, https://amoylimee.github.io/index.html
- Purpose: identity reference for the title-slide portrait
- Notes: preserve attribution; do not substitute an invented face

### pixel/slide-01-jeremy-pixel.png
- Slide(s): 01
- Status: approved for version 1
- Type: AI-edited
- Source/reference: `original/jeremy-headshot.png`
- Purpose: introduce Jeremy and establish the personal/pixel-art visual language
- Notes: identity-preserving portrait; right-edge crop is intentional

### pixel/slide-02-shipping-family.png
- Slide(s): 02
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: show that shipping was personally familiar before it became research
- Notes: anonymous seafarer; never describe as a family photograph

### pixel/slide-03-shipping-study.png
- Slide(s): 03
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: communicate learning the operations and structure of shipping

### pixel/slide-04-industry-plan.png
- Slide(s): 04
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: represent the original plan for an industry/supply-chain career
- Notes: no company logo

### pixel/slide-05-ra-ad.png
- Slide(s): 05
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: connect the RA opening with a practical travel/flight motivation
- Notes: generated screen text is not used as evidence

### pixel/slide-06-decision.png
- Slide(s): 06
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: represent the short conversation and one-day decision
- Notes: figures are illustrative; no claimed likeness

### pixel/slide-07-research-fit.png
- Slide(s): 07
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: show a researcher absorbed in a complex but inviting system

### pixel/slide-08-gaming.png
- Slide(s): 08
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: establish Jeremy's long-standing interest in computer games

### pixel/slide-09-games-to-code.png
- Slide(s): 09
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: show the bridge from strategy games to writing code

### pixel/slide-10-debugging.png
- Slide(s): 10
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: make iteration, debugging and eventual success visible

### pixel/slide-11-shipping-coding.png
- Slide(s): 11
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: combine shipping as the subject with data/code as the tools

### pixel/slide-12-maritime-data.png
- Slide(s): 12
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: show ships leaving intuitive digital movement traces
- Notes: the tracks are illustrative, not a real AIS plot

### pixel/slide-13-evidence.png
- Slide(s): 13
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: connect port observation, analysis and a decision-oriented briefing

### pixel/slide-14-beyond-paper.png
- Slide(s): 14
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: show research evidence entering a practical port-side conversation

### pixel/slide-15-future-port.png
- Slide(s): 15
- Status: approved for version 1
- Type: AI-generated illustrative pixel art
- Purpose: close with a credible implementation-oriented lower-carbon port
- Notes: future-facing but intentionally not science fiction

## Part 2 asset manifest

All slide-ready images below are version-1 assets created on 2026-07-30.
They are AI-generated illustrative pixel art and are not factual evidence.

| Asset | Slide | Purpose |
|---|---:|---|
| `pixel/slide-16-science-policy.png` | 16 | Connect maritime observation, analysis and policy relevance |
| `pixel/slide-17-visible-ships.png` | 17 | Show that ships are visible while emissions are not directly observable |
| `pixel/slide-18-estimate-emissions.png` | 18 | Make engine effort, operating time and fuel intuitive |
| `pixel/slide-19-global-emissions.png` | 19 | Expand the perspective from individual ships to a global system |
| `pixel/slide-20-pathways.png` | 20 | Show multiple complementary decarbonisation pathways |
| `pixel/slide-21-real-world-barriers.png` | 21 | Show promising technology stalled by practical dependencies |
| `pixel/slide-22-green-corridor.png` | 22 | Explain a Green Shipping Corridor as a coordinated route |
| `pixel/slide-23-coordination.png` | 23 | Show corridor stakeholders and a missing implementation link |
| `pixel/slide-24-maritime-data.png` | 24 | Show data revealing one credible route among many |
| `pixel/slide-25-cherry-express.png` | 25 | Connect refrigerated cherry cargo with an existing Pacific service |
| `pixel/slide-26-policy-conversation.png` | 26 | Show evidence entering a policy and port-practitioner conversation |
| `pixel/slide-27-science-policy-together.png` | 27 | Close with science, operations and policy working together |

The images contain no intentional real-world logos or documentary depictions.
Any map, vessel, port, screen or data element is illustrative.
