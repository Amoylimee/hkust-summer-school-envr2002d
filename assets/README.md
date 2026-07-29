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

## Initial approved style references

Three draft style samples were approved in principle during the working conversation:

1. identity-preserving pixel-art portrait of Jeremy;
2. illustrative seafarer on a merchant-ship deck at sunrise;
3. two-monitor desk with a strategy game and programming code.

These establish the intended style, palette and layout direction. The next implementation should recreate or add the approved files under `assets/pixel/`, use a pure-white slide background and record each asset in this manifest.
