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
│   │   ├── sectors/page.tsx    # Sectors page (6 sectors zigzag + Featured Projects carousel + CTA)
│   │   ├── clients/page.tsx    # Clients page (5 client cards + stats + CTA)
│   │   ├── contact/page.tsx    # Contact page (form + info sidebar + offices grid)
│   │   ├── careers/page.tsx    # Careers page (why HASCO + openings + CTA)
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
│   │   │   └── Footer.tsx      # Links, social icons, contact info (no terms/privacy links)
│   │   ├── sections/           # All homepage section components
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx       # bg: globe.webp
│   │   │   ├── CEO.tsx
│   │   │   ├── Sectors.tsx     # Auto-scrolling carousel (6 sectors)
│   │   │   ├── Clients.tsx     # Logo grid (5 clients) — also used as home section
│   │   │   ├── InteractiveMap.tsx  # Leaflet map, 10 Saudi locations
│   │   │   ├── MapController.tsx
│   │   │   ├── Projects.tsx    # Infinite auto-scrolling carousel (12 projects, 2 per sector)
│   │   │   ├── Stats.tsx       # Animated counters
│   │   │   ├── News.tsx        # Removed from home; kept as component (unused)
│   │   │   └── CTA.tsx         # Contact form (firstName, lastName, email) — no T&C disclaimer
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
│   ├── favicon.png             # Used for favicon + apple-touch-icon (og-image.jpg deleted)
│   ├── hero.jpeg               # Used as OG/Twitter card social preview image
│   ├── herobg.webp, globe.webp, globe.svg
│   ├── saudi1.jpg, saudi2.webp, saudi3.jpg  # Page hero backgrounds
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
- Structured data (Organization JSON-LD) in locale layout
- Open Graph + Twitter card metadata — OG image: `public/images/hero.jpeg`
- `sitemap.ts` generates XML sitemap (6 pages × 2 locales = 12 entries)
- Canonical URLs and hreflang alternate links

---

## Pages & Sections

### Home (`/[locale]/`)
Sections in order: **Hero → About → CEO → Sectors → InteractiveMap → Stats → Clients → CTA**

> Note: `News` section removed from home. `Projects` section moved to Sectors page. `Clients` section after Stats.

### Inner Pages
| Route | Status | Notes |
|-------|--------|-------|
| `/about` | ✅ Complete | Story, stats, services, mission/vision, CTA |
| `/sectors` | ✅ Complete | 6 sectors zigzag layout + Featured Projects carousel at bottom + CTA |
| `/clients` | ✅ Complete | 5 client cards (alternating layout), animated stats, CTA |
| `/contact` | ✅ Complete | CSS gradient hero, form → WhatsApp redirect, info sidebar, offices grid |
| `/careers` | ✅ Complete | 4 benefit cards (bg icon watermark), 6 job listings, Send CV → Gmail |
| `/terms` | ❌ DELETED | Removed per client request |
| `/privacy` | ❌ DELETED | Removed per client request |

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

## Featured Projects Carousel (`Projects.tsx`)

- **Location:** Sectors page only (`/sectors`) — removed from home page
- **Type:** Infinite auto-scrolling carousel (CSS transform, tripled array for seamless loop)
- **Auto-scroll:** Every 3 seconds, pauses on hover, resumes 6s after manual navigation
- **Cards:** 3 visible on desktop, 2 on tablet, 1 on mobile (computed via ResizeObserver)
- **Navigation:** Prev/Next arrows + dot indicators (both functional, RTL-aware)
- **Background:** `bg-gray-50`
- **12 projects total (2 per sector):**

| Sector | Projects (translation keys) |
|--------|---------------------------|
| Marine | `neom`, `arabianGulf` |
| Logistics | `amaala`, `jeddahPort` |
| Tourism & Events | `redSea`, `diriyah` |
| Hospitality | `cruise`, `alula` |
| Construction | `neomConstruction`, `jeddahDistrict` |
| Supply Chain | `aramcoSupply`, `nationalDistrib` |

> **Images** are hardcoded external URLs in the `baseProjects` array in `Projects.tsx`. To swap an image, update the `image` field for that project directly in the component. Sector labels (`sector` field) are also hardcoded inline (EN/AR via `isRtl`).

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
- `projects` — Featured projects carousel (12 project entries + UI labels)
- `stats` — Home stats section (20+, 6+, 100+)
- `news` — Unused; kept for future
- `cta` — Home contact form section
- `destinations` — Interactive map section (label: "HASCO OFFICES")
- `footer` — Footer content

> **Note:** Orphaned keys remain in both JSON files: `cta.terms`, `cta.termsLink`, `cta.privacyLink`, `footer.terms`, `footer.privacy`, `footer.cookies` — leftovers from deleted pages. They are unused and harmless but can be cleaned up.

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

## Current Status & Session History

> **Last updated:** 2026-03-12
> **Branch:** `main`

### Current Status: Active Development — Session 4 Complete

### Changes Made (Session 1 — initial content updates)
- CEO name updated to **"Hasan Alharbi"** (EN) / **"حسن الحربي"** (AR)
- Map section label changed from "Our Destinations" → **"HASCO Offices"** / **"مكاتب هاسكو"**
- Stats: Core Sectors changed from `7+` → **`6+`**
- Home page restructured: News section removed, Clients moved to after Stats
- Sectors carousel order updated; `consultancy` key repurposed → Supply Chain

### Changes Made (Session 2 — inner pages built)
- Sectors, Clients, Contact, Careers pages built
- Translation keys added for all 4 pages

### Changes Made (Session 3 — polish, forms, SEO)
- Clients, Contact, Careers pages polished
- Terms & Privacy pages created (later deleted in Session 4)
- Forms wired to WhatsApp/Gmail
- Footer updated

### Changes Made (Session 4 — current)
- **About section bg** changed from `Slide5.jpeg` → `globe.webp`
- **Featured Projects** (`Projects.tsx`) moved from home page → end of Sectors page
- **Projects carousel** fully rewritten: infinite auto-scroll, 12 projects (2/sector), white bg, brand-compliant heading, RTL-aware arrows
- **Terms & Privacy pages** deleted entirely
- **CTA.tsx** disclaimer line removed (no more T&C/Privacy reference)
- **Footer** Privacy/Terms bottom links removed; copyright now centered
- **Sitemap** updated: `/terms` and `/privacy` removed
- **SEO fixes**: OG image updated from deleted `og-image.jpg` → `hero.jpeg`; favicon references cleaned up (removed dead `/favicon.ico` and `/apple-touch-icon.png` — both now point to existing `/images/favicon.png`)

### What's Pending / Known TODOs
- [ ] Careers "Apply Now" buttons — non-functional (no action yet)
- [ ] News section — `News.tsx` exists but unused, no dedicated page
- [ ] Deploy to production (Vercel recommended)
- [ ] Add Google Search Console + Yandex Webmaster verification codes to `app/layout.tsx` once available
- [ ] Supabase integration (installed, zero code) — forms currently use WhatsApp redirect
- [ ] `sizes` prop missing on `fill` images in clients, sectors, careers pages (Next.js perf warning)
- [ ] Orphaned translation keys cleanup: `cta.terms`, `cta.termsLink`, `cta.privacyLink`, `footer.terms`, `footer.privacy`, `footer.cookies`
- [ ] `app/not-found.tsx` links to `/` (always EN) — should be locale-aware

### Form Submission Behaviour (important)
- **Home CTA form** (`CTA.tsx`): submits → WhatsApp `wa.me/966126425834` with `*HASCO Form Submission*` header
- **Contact page form** (`contact/page.tsx`): submits → WhatsApp `wa.me/966126425834` with formatted message
- **Careers "Send Your CV"**: opens Gmail compose to `careers@hasco.com.sa`
- **Careers "Apply Now"**: non-functional
- No API routes exist; no Supabase calls wired up

### Footer Quick Links (current)
Home · About · Sectors · Clients · Contact · Careers
(No Terms or Privacy links anywhere in the site)
