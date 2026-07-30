# Current visual assets

The active LaTeX Beamer deck contains one approved photograph for the closing
slide. Other slides that may benefit from a visual use a labelled placeholder
in `src/main.tex`.

Each placeholder contains its slide-specific visual brief. Treat that wording
as a content requirement: a replacement image should satisfy the brief rather
than merely fill the available space.

Slide 17 specifically reserves a nearly full-width page for a teaching diagram that moves from
one ship's activity record to estimated fuel use, then from many ship-level
estimates to a global total. The final diagram should be simple enough for
students to understand without prior knowledge of maritime data.

Slide 23 reserves a right-side area for a simplified candidate-route map.
Show many ship tracks first, then highlight one recurring port pair and label
frequency, traffic scale and operator concentration.

### hong-kong-victoria-harbour-raymond-yeung.jpg

- Status: active
- Type: full-bleed photographic background for slide 27
- Subject: Hong Kong Island skyline across Victoria Harbour at night
- Photographer: Raymond Yeung
- Source: https://unsplash.com/photos/nighttime-skyline-of-hong-kong-lit-up-cZ2PwQJ8Fpw
- License: Unsplash License
- Treatment: centred 16:9 crop with a dark overlay for readable white text

When a final image is approved:

1. save it in this directory using a descriptive filename;
2. record its source and purpose in `SOURCES.md`;
3. replace the relevant placeholder in `src/main.tex`;
4. rebuild and inspect the full slide at presentation size.

Images are optional. Add one only when it materially improves understanding
or supports the personal story. Do not fill space with generic shipping
imagery.
