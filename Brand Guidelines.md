# HASCO — Brand Guidelines

> Version: 1.0 (May 2025)  
> Source: HASCO Brand Guideline V1.0 :contentReference[oaicite:0]{index=0}

---

## 1) Brand Essence (Definition)

The HASCO logo combines modern typography with a **circular globe motif**, representing an **infinite commitment to comprehensive logistics services**. The **deep blue** reflects maritime expertise and the brand’s **sea-to-sky** operational scope. The clean, minimalist design embodies **efficient and precise** integrated supply-chain solutions. :contentReference[oaicite:1]{index=1}

**Lock-up:** The brand mark consists of **Symbol (A)** + **Type (B)** and must retain its official configuration (no redraw or re-arrangement). :contentReference[oaicite:2]{index=2}

---

## 2) Brand Mark (Logo)

The brandmark consists of two elements: **the Symbol** and **the Type**. Maintain their official proportions at all times. **Never** stretch, squeeze, or distort. Always reproduce from **master artwork**. :contentReference[oaicite:3]{index=3}

### 2.1 Clear Space
Maintain a minimum clear space around the brandmark equal to **x**, where **x = the width of the symbol**. No text, imagery, or other marks may intrude into this zone. This rule scales at all sizes. :contentReference[oaicite:4]{index=4}

### 2.2 Minimum Size
For legibility and recognition, adhere to these minimum heights when reproducing the logo:  
- **5 mm** height — recommended minimum usage  
- **10 mm** height — for improved clarity where possible  
Do not reproduce below these thresholds. :contentReference[oaicite:5]{index=5}

### 2.3 Correct Usage
Approved colorways:  
- **Main (Primary)**  
- **Inverse** (white mark on dark/brand backgrounds)  
- **Grayscale** (for single-color/limited contexts)  
Use only these official variants. :contentReference[oaicite:6]{index=6}

### 2.4 Incorrect Usage (Do Not)
- Do **not** use alternative typefaces in the logo.  
- Do **not** use unspecific/non-brand colors.  
- Do **not** distort, stretch, or squeeze.  
- Do **not** add brush strokes, outlines, strokes, double lines, or key-line changes.  
- Do **not** add gradients, textures, patterns, shadows, or any effects.  
- Do **not** place on visually noisy backgrounds that reduce contrast/legibility. :contentReference[oaicite:7]{index=7}

---

## 3) Typography

### 3.1 Primary Typeface — Montserrat
Use Montserrat for headings, display typography, and primary UI text. (Web usage: serve via `next/font` or self-host; set `font-display: swap`.) :contentReference[oaicite:8]{index=8}

### 3.2 Secondary Typeface — Helvetica
Use Helvetica as secondary and fallback type in body copy and system contexts. (Web stack suggestion: `Montserrat, Helvetica, Arial, ui-sans-serif, system-ui`.) :contentReference[oaicite:9]{index=9}

---

## 4) Color System

### 4.1 Primary Palette
- **Blue**  
  - Hex **#004A81** — RGB (0, 74, 129) — CMYK (100, 52, 0, 37) — **Pantone P 107-16 U** :contentReference[oaicite:10]{index=10}
- **Light Blue**  
  - Hex **#66AADD** — RGB (102, 170, 221) — CMYK (61, 21, 0, 0) — **Pantone P 109-5 U** :contentReference[oaicite:11]{index=11}

> **Contrast:** Ensure WCAG AA contrast for text and UI elements when using brand blues over images or colored backgrounds.

---

## 5) Icon / Favicon

Use the official **HASCO icon** for website/app favicon and platform icons. Do not alter, redraw, add effects, or place within unapproved containers. :contentReference[oaicite:12]{index=12}

---

## 6) Digital Usage — Implementation Notes (Helper)

> The items below guide consistent web implementation. They respect the brand PDF while addressing UI/UX and accessibility needs.

- **Color Tokens (Tailwind)**
  - `brand.blue = #004A81`
  - `brand.light = #66AADD`
- **Font Stack**
  - `font-sans = Montserrat, Helvetica, Arial, ui-sans-serif, system-ui`
- **Overlays on Photography**
  - For hero/section banners, apply a dark overlay (e.g., linear gradient from black/60% to transparent) to preserve brand contrast and premium feel.
- **Accessibility**
  - Maintain text contrast AA+; provide `:focus-visible` styles; ensure keyboard navigation; add skip-to-content.
- **Logo on Backgrounds**
  - Use **Main** on light backgrounds, **Inverse** on dark/brand backgrounds, **Grayscale** for single-color or restricted contexts; never apply effects (see §2.4). :contentReference[oaicite:13]{index=13}
- **Minimum Size & Clear Space**
  - Keep logo at **≥5 mm height** (print) or equivalent CSS size on web; maintain **x-based** clear space (see §2.1–2.2). :contentReference[oaicite:14]{index=14}

---

## 7) Do/Don’t Quick Reference

**Do**  
- Use official logo lock-ups and approved colorways.  
- Keep clear space = **symbol width (x)** on all sides.  
- Use Montserrat (primary) and Helvetica (secondary).  
- Use brand blues exactly as specified.  
- Convert to grayscale only where necessary/approved.

**Don’t**  
- Don’t distort, stretch, or recolor the logo.  
- Don’t add gradients, shadows, textures, outlines, or brush strokes.  
- Don’t swap the logo typeface.  
- Don’t place on low-contrast or noisy backgrounds.  
- Don’t reproduce below minimum size. :contentReference[oaicite:15]{index=15}

---

## 8) Assets

- **Master Logo Files**: (Provide SVG/PNG from brand package)  
- **Icon/Favicon**: (Provide SVG + generated ICO/PNGs)  
- **Font Files**: Montserrat; system fallback Helvetica  
- **Color Swatches**: HEX, RGB, CMYK, Pantone (see §4.1)

---

## 9) Governance

For any unlisted use cases (special finishes, motion, co-branding, product/UI edge cases), escalate to brand owners and follow the principles in this guide: preserve integrity, legibility, and consistency. :contentReference[oaicite:16]{index=16}
