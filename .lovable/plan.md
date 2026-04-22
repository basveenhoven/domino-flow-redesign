
## World Domino Collective — Landing Page Redesign

A premium, modern reskin of worlddominocollective.nl. All Dutch copy preserved verbatim from the original site. Landing page first; deeper pages can follow later.

### Visual direction
- **Palette**: Deep midnight navy (#0A0E27) base, off-white surfaces, vibrant domino accents (magenta, electric blue, lime — pulled from existing brand) used sparingly for highlights and CTAs. High contrast, accessible.
- **Typography**: Inter (body) + Space Grotesk or Montserrat (display) — bold, tight tracking on hero.
- **Motion**: "Falling domino" cascade reveals on scroll, subtle parallax in hero, magnetic hover on cards, smooth section transitions, animated underlines on nav links.
- **Surface style**: Generous whitespace, thin hairline dividers, soft shadows, rounded-2xl cards.

### Page sections (in order)

1. **Sticky glassmorphism header**
   - Translucent blur background, appears on scroll
   - Logo "World Domino Collective" left, nav right: Home · Over ons · WDC 2026 · Reserveren · Sponsoren · Contact
   - Language toggle (NL/EN) chip
   - Mobile: slide-in sheet menu

2. **Hero**
   - Full-viewport, dark cinematic background image placeholder (domino setup) with subtle Ken Burns zoom
   - Eyebrow: "WDC 2026"
   - Headline: **"Domino Art that Connects"**
   - Subcopy from existing welcome text
   - Two CTAs: "Bekijk WDC 2026" (primary, accent fill) + "Watch the Falldown" (ghost with play icon)
   - Scroll indicator at bottom

3. **Featured video** — "Bekijk hier de falldown van WDC 2025!"
   - Large 16:9 framed YouTube embed placeholder with elegant border-glow
   - Section heading with hairline divider

4. **Welkom / Intro**
   - Centered narrative block with the existing welcome paragraph
   - Stat strip: 1,000,000 dominoes · WDC 2025 record · Dutch Domino Team — animated count-up on scroll

5. **Sponsors — "WDC 2026 wordt mede mogelijk gemaakt door:"**
   - Clean logo grid (5 sponsors) on light surface, grayscale → color on hover
   - Tagline under each preserved from original

6. **Three feature cards** (Over ons · WDC 2026 · Contact)
   - Modern image-led cards in a responsive grid
   - Image placeholder top, title, original description text, "Lees meer / Meer informatie / Neem contact op" link with animated arrow

7. **Social feed** — "Volg ons op Facebook, Instagram en YouTube"
   - 4-up Instagram-style masonry of recent posts (placeholders), captions preserved
   - "Volgen op Instagram" CTA button

8. **Contact form**
   - Two-column: left = heading + intro, right = sleek shadcn form (Naam, E-mailadres, Vraag/opmerking, Verzenden)
   - Honeypot field included as in original

9. **Footer**
   - Dark band, "Volg ons op:" with Facebook / YouTube / Instagram icon buttons
   - Secondary nav links, copyright

### Technical notes
- React + Tailwind + shadcn/ui components throughout (Button, Card, Sheet, Input, Textarea, Sonner for form toast)
- All images/videos as easily-swappable `/placeholder.svg` or `<img>` with clear `alt` and TODO comments
- Design tokens (colors, fonts, gradients, shadows) defined in `index.css` + `tailwind.config.ts` — no hard-coded colors in components
- Custom keyframes added: `domino-fall`, `fade-up`, `glow-pulse`
- Fully responsive: mobile-first, tablet, desktop breakpoints
- Copy: Dutch text kept exactly as on the live site
