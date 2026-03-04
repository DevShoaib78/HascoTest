# HASCO v2 — Project Reference for AI Agents

This document is the single source of truth for any AI agent (Claude or otherwise) working on this codebase. Read this before making any changes.

---

## Project Overview

**HASCO v2** is the corporate website for HASCO Group — a Saudi conglomerate operating across 6 sectors: Tourism & Events, Hospitality, Construction, Supply Chain, Marine, and Logistics.

- **Type:** Corporate/Marketing website
- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Styling:** TailwindCSS 3.3.0
- **i18n:** next-intl v4.5.2 — fully bilingual (English + Arabic, with RTL support)
- **Smooth Scroll:** Lenis v1.3.15
- **Maps:** React Leaflet 4.2.1 + Leaflet 1.9.4
- **Icons:** Lucide React v0.553.0
- **Backend (configured, not yet used):** Supabase v2.74.0
- **Package Manager:** npm (use `npm run dev`, `npm run build`)

---

## Directory Structure

```
/
├── app/
│   ├── [locale]/               # Dynamic locale routing (en / ar)
│   │   ├── page.tsx            # Home page — imports all sections
│   │   ├── about/page.tsx      # Full about page (story, stats, services, mission/vision)
│   │   ├── sectors/page.tsx    # Sectors page (6 sectors, zigzag image+content layout)
│   │   ├── clients/page.tsx    # Clients page (5 client cards + stats + CTA)
│   │   ├── contact/page.tsx    # Contact page (form + info sidebar + offices grid)
│   │   ├── careers/page.tsx    # Careers page (why HASCO + openings + CTA)
│   │   ├── terms/page.tsx      # Terms & Conditions (bilingual, hardcoded EN/AR content)
│   │   ├── privacy/page.tsx    # Privacy Policy (bilingual, hardcoded EN/AR content)
│   │   └── layout.tsx          # Locale layout: i18n provider + splash + Lenis
│   ├── globals.css             # Global base styles, fonts
│   ├── layout.tsx              # Root layout: SEO metadata, structured data
│   ├── not-found.tsx
│   └── sitemap.ts
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Sticky nav, mobile menu, language toggle
│   │   │   └── Footer.tsx      # Links, social icons, contact info
│   │   ├── sections/           # All homepage section components
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── CEO.tsx
│   │   │   ├── Sectors.tsx     # Auto-scrolling carousel (6 sectors)
│   │   │   ├── Clients.tsx     # Logo grid (5 clients) — also used as home section
│   │   │   ├── InteractiveMap.tsx  # Leaflet map, 10 Saudi locations
│   │   │   ├── MapController.tsx
│   │   │   ├── Projects.tsx    # Horizontal scrolling carousel
│   │   │   ├── Stats.tsx       # Animated counters
│   │   │   ├── News.tsx        # Removed from home; kept as component
│   │   │   └── CTA.tsx         # Contact form (firstName, lastName, email)
│   │   ├── ui/
│   │   │   ├── SectionTransition.tsx   # Scroll-triggered animation wrapper
│   │   │   ├── AnimatedCounter.tsx     # Eased number animation
│   │   │   └── SplashScreen.tsx
│   │   └── providers/
│   │       └── LenisProvider.tsx
│   ├── i18n/
│   │   └── request.ts          # i18n config (locales: en, ar)
│   └── lib/
│       └── navigation.ts       # Locale-aware routing helpers
│
├── messages/
│   ├── en.json                 # All translation keys (English)
│   └── ar.json                 # All translation keys (Arabic)
│
├── public/images/              # Static assets: logos, backgrounds, CEO portrait
│   ├── hascowhite.png / hascoblue.png
│   ├── ceo-portrait.png
│   ├── hero.jpeg, skyline1-3.jpg, skyline7.webp   # Hero/page backgrounds
│   ├── Slide5.jpeg, construction-site.png, reception.png, talk.png, truck.png
│   └── [Client logos] NEOM, Amaala, Red Sea Global, Saudi Aramco, Tronox
│
├── middleware.ts               # Locale routing middleware
├── next.config.js              # next-intl plugin, image remotePatterns
├── tailwind.config.js          # Brand colors, custom fonts/sizes
├── tsconfig.json               # Strict TypeScript, path alias @/*
├── .env.example                # Environment variable template
├── DOCUMENTATION.md            # Full setup & customization guide
└── Brand Guidelines.md         # Brand colors, fonts, usage rules
```

---

## Brand & Design System

| Token | Value |
|-------|-------|
| Primary Blue | `#004A81` |
| Light Blue | `#66AADD` |
| Dark Background | `#0f172a` |
| Light Background | `#f8fafc` |
| Heading Font | Montserrat (`font-heading`) |
| Body Font | Helvetica / Arial (`font-body`) |

Custom Tailwind font sizes: `title-xl` (48px), `title-lg` (40px), `title-md` (32px), `body-lg` (18px), `body-md` (16px).

### Page Design Pattern (follow for all pages)
All inner pages follow this structure — reference `about/page.tsx` as the canonical example:
1. **Hero** — full-bleed background image + `from-brand-primary/80` gradient overlay + wave SVG divider at bottom. **Exception:** `contact/page.tsx` uses a pure CSS gradient hero (no image) with dot-grid pattern and decorative circles — suitable for simple/utility pages.
2. **Content sections** — white or `gray-50` alternating backgrounds, `max-w-7xl mx-auto` container
3. **Section headings** — `text-title-lg md:text-title-xl font-heading text-brand-primary` + `w-24 h-1 bg-brand-primary` underline bar
4. **Scroll animations** — `IntersectionObserver` + `useState` visibility flags + `transition-all duration-1000`
5. **CTA block** — white card with `rounded-3xl shadow-2xl border-2 border-gray-200` or dark gradient variant

---

## Key Architectural Patterns

### 1. i18n Routing
- All pages live under `app/[locale]/` — locale is either `en` or `ar`
- `middleware.ts` always prefixes URLs with locale
- `generateStaticParams()` pre-renders both locales at build time
- Translation keys are in `messages/en.json` and `messages/ar.json`
- RTL is handled via `<html dir="rtl">` for Arabic — Tailwind flexbox and text alignment adapt automatically

### 2. Component Architecture
- **Sections** are self-contained, independently animated building blocks
- **`SectionTransition`** wraps sections for scroll-triggered animations (fade, slide-up, scale, reveal)
- All interactive components are `'use client'`
- `InteractiveMap` is dynamically imported with `ssr: false`

### 3. State Management
- No global state library — local `useState`/`useEffect`/`useRef` per component
- `IntersectionObserver` pattern used everywhere for scroll-triggered visibility

### 4. Image Optimization
- All images use `next/image`
- Whitelisted external domains in `next.config.js`: `images.unsplash.com`, `eu-images.contentstack.com`, `d3q0fpse3wbo5h.cloudfront.net`, `i0.wp.com`, `server.arcgisonline.com`

### 5. SEO
- Structured data (Organization JSON-LD) in root layout
- Open Graph + Twitter card metadata
- `sitemap.ts` generates XML sitemap
- Canonical URLs and hreflang alternate links

---

## Pages & Sections

### Home (`/[locale]/`)
Sections in order: **Hero → About → CEO → Sectors → InteractiveMap → Projects → Stats → Trusted Partnerships (Clients) → CTA**

> Note: `News` section was removed from home. `Clients` section moved to after Stats.

### Inner Pages
| Route | Status | Notes |
|-------|--------|-------|
| `/about` | ✅ Complete | Story, stats, services, mission/vision, CTA |
| `/sectors` | ✅ Complete | 6 sectors, zigzag image+content, feature lists |
| `/clients` | ✅ Complete | 5 client cards (alternating layout), animated stats, CTA |
| `/contact` | ✅ Complete | CSS gradient hero, form → WhatsApp redirect, info sidebar, offices grid |
| `/careers` | ✅ Complete | 4 benefit cards (bg icon watermark), 6 job listings, Send CV → Gmail |
| `/terms` | ✅ Complete | 9-section T&C, bilingual hardcoded content, minimal CSS hero |
| `/privacy` | ✅ Complete | 9-section Privacy Policy, bilingual hardcoded content, minimal CSS hero |

### The 6 Sectors (current)
Order in carousel and Sectors page:
1. Tourism & Events
2. Hospitality
3. Construction
4. Supply Chain *(translation key: `consultancy` — repurposed)*
5. Marine
6. Logistics

> **Important:** The Supply Chain sector uses the translation key `sectors.consultancy` in both `en.json` and `ar.json`. Do not rename the key — just update the value content if needed.

---

## Translation File Structure

Both `messages/en.json` and `messages/ar.json` contain these top-level keys:
- `aboutPage` — About page content
- `sectorsPage` — Sectors page content (6 sectors with feature lists)
- `clientsPage` — Clients page content (5 clients, partnership stats)
- `contactPage` — Contact page content (form labels, info, offices)
- `careersPage` — Careers page content (benefits, 6 job listings)
- `header` — Navigation labels
- `hero` — Home hero text
- `about` — Home about section
- `ceo` — CEO section (name: "Hasan Alharbi")
- `sectors` — Home sectors carousel (6 sectors)
- `clients` — Home clients section heading
- `projects` — Home projects carousel
- `stats` — Home stats section (20+, 6+, 100+)
- `news` — Unused on home; kept for future
- `cta` — Home contact form section
- `destinations` — Interactive map section (label: "HASCO OFFICES")
- `footer` — Footer content

---

## Environment Variables

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://hascogroup.com

# Supabase (for future backend features)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## Dev Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint check
```

---

## Conventions to Follow

1. **Always add new translation keys to both** `messages/en.json` AND `messages/ar.json`
2. **New interactive components must use** `'use client'` directive
3. **New section components** should be wrapped in `<SectionTransition>` for scroll animations
4. **Images** must use `next/image`; add new external domains to `next.config.js`
5. **Navigation links** must use locale-aware `Link` from `src/lib/navigation.ts`
6. **RTL support** — use `dir`-aware Tailwind classes (`ltr:`, `rtl:`) where layout differs between languages
7. Keep components under `src/components/`, pages under `app/[locale]/`

---

## Recent Changes & Current Status

> **Last updated:** 2026-03-05
> **Branch:** `master` (single branch so far; `main` is the target for PRs)

### Current Status: Active Development — Session 3 Complete

### Changes Made (Session 1 — initial content updates)
- CEO name updated to **"Hasan Alharbi"** (EN) / **"حسن الحربي"** (AR)
- Map section label changed from "Our Destinations" → **"HASCO Offices"** / **"مكاتب هاسكو"**
- Stats: Core Sectors changed from `7+` → **`6+`** (fixed in both `en.json`, `ar.json`, and hardcoded value in `Stats.tsx`)
- Home page restructured: **News section removed**, **Clients (Trusted Partnerships) moved** to after Stats
- Sectors carousel updated:
  - New order: Tourism & Events, Hospitality, Construction, Supply Chain, Marine, Logistics
  - `consultancy` key repurposed → Supply Chain content
  - New supply chain image (`photo-1586528116311`)
  - All sector titles and descriptions updated in both languages

### Changes Made (Session 2 — inner pages built)
- **Sectors page** (`/sectors`): Full page with hero, intro, 6 alternating zigzag image+content blocks with feature checklists. Image overlays and icon badges subsequently removed per client feedback.
- **Clients page** (`/clients`): Full page with hero, intro, 5 client cards (logo + scope tag + description), animated stats section, CTA.
- **Contact page** (`/contact`): Full page with hero, contact form (8 subject options), sticky info sidebar, 6-city offices grid.
- **Careers page** (`/careers`): Full page with hero, 4 benefit cards (Why HASCO), 6 job listings with location/type/sector, dark gradient CTA.
- Translation keys added for all 4 pages in both `en.json` and `ar.json`.
- Build verified clean: all 16 routes (6 pages × 2 locales) generate successfully.

### Changes Made (Session 3 — polish, forms, SEO)
- **Clients page**: Stats "Sectors Served" now shows `6+`; client cards alternate logo-left/logo-right layout; logos enlarged (`w-56 h-32`)
- **Contact page**: Form fields fixed with `bg-white` (were dark from browser dark mode); hero replaced with CSS gradient + dot grid + decorative circles (no image); form submits → WhatsApp `wa.me/966126425834` with `*bold*` formatted message header "HASCO Form Submission"
- **Home CTA form** (`CTA.tsx`): submits → WhatsApp redirect with same format
- **Terms & Conditions page** (`/terms`): created, bilingual, 9 sections, minimal CSS hero
- **Privacy Policy page** (`/privacy`): created, bilingual, 9 sections, minimal CSS hero
- **Footer**: Quick links updated (Projects → Careers); Privacy/Terms bottom links now point to real pages
- **Careers page**: Benefit card icons moved to bg watermark (`opacity-[0.15]`); "Send Your CV" → Gmail compose link
- **SEO**: `/terms` + `/privacy` added to sitemap; placeholder Google/Yandex verification codes removed; `telephone` added to JSON-LD ContactPoint

### What's Pending / Known TODOs
- [ ] Careers "Apply Now" buttons on job listings — non-functional (no action yet)
- [ ] News section content — `News.tsx` component exists but is unused on home and has no dedicated page
- [ ] Deploy to production (Vercel recommended)
- [ ] Add Google Search Console + Yandex Webmaster verification codes to `app/layout.tsx` once available
- [ ] Supabase integration (installed, zero code) — forms currently use WhatsApp redirect
- [ ] `sizes` prop missing on `fill` images in clients, sectors, careers pages (performance — Next.js warning)

### Form Submission Behaviour (important)
- **Home CTA form** (`CTA.tsx`): submits → opens WhatsApp `wa.me/966126425834` with formatted message
- **Contact page form** (`contact/page.tsx`): submits → opens WhatsApp `wa.me/966126425834` with formatted message
- **Careers "Send Your CV"**: opens Gmail compose to `careers@hasco.com.sa`
- No API routes exist; no Supabase calls wired up

### Footer Quick Links (current)
Home · About · Sectors · Clients · Contact · Careers
(Projects link removed; Careers added)

### Active Work
_(Update this section whenever starting a new feature or fix)_

Session 3 complete. All pages finalized, SEO cleaned up, forms wired to WhatsApp/Gmail.
