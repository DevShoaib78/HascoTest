# HASCO Group Website — Project Documentation

This document is the official handover reference for the HASCO Group corporate website. It covers what was built, how to run it locally, how to deploy it, and how to maintain its content going forward.

---

## 1. About HASCO

**HASCO Group** is a Saudi Arabian conglomerate established in 2005, delivering integrated solutions across six specialised sectors:

1. **Tourism & Events**
2. **Hospitality**
3. **Construction**
4. **Supply Chain**
5. **Marine**
6. **Logistics**

With headquarters in Jeddah (Al Safa district) and operations spanning the Kingdom's Red Sea and Arabian Gulf coasts, HASCO partners with the Kingdom's most ambitious programmes — NEOM, Red Sea Global, AMAALA, Saudi Aramco, Tronox, and others — to deliver Vision 2030-aligned infrastructure, services, and logistics at scale.

This website is the digital flagship of HASCO Group: a bilingual (English + Arabic, with full RTL support), responsive corporate marketing site designed to showcase the company's sectors, projects, client portfolio, and career opportunities.

---

## 2. What Was Delivered

- Fully responsive corporate website (mobile / tablet / desktop)
- Bilingual: English and Arabic with full right-to-left (RTL) layout support
- Six pages: Home, About, Sectors, Clients, Contact, Careers
- Interactive Leaflet map showing 10 HASCO office locations across Saudi Arabia
- Animated sector carousel on the home page
- Infinite auto-scrolling "Featured Projects" carousel on the Sectors page (12 projects, 2 per sector)
- Animated statistics counters
- Contact form and Home CTA form wired to WhatsApp (`wa.me/966126425834`)
- Careers "Send Your CV" button opens a pre-filled Gmail compose to `careers@hasco.com.sa`
- SEO-optimised: per-page metadata, hreflang alternates, canonical URLs, Open Graph, Twitter Cards, Organization JSON-LD structured data, sitemap, robots.txt
- Localised 404 page for both languages
- Smooth scrolling via Lenis, scroll-triggered section animations
- Splash screen on initial load

---

## 3. Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 14.0.0 |
| UI Library | React | 18 |
| Language | TypeScript | 5 |
| Styling | TailwindCSS | 3.3.0 |
| Internationalisation | next-intl | 4.5.2 |
| Smooth Scrolling | Lenis | 1.3.15 |
| Maps | React Leaflet + Leaflet | 4.2.1 / 1.9.4 |
| Icons | Lucide React | 0.553.0 |
| Backend-ready (unused) | Supabase JS | 2.74.0 |

The Supabase package is installed and ready for future use but not currently wired into the application. The site is **frontend-only**; forms redirect to WhatsApp and Gmail rather than a backend API.

---

## 4. Project Structure

```
Hasco v2/
├── app/
│   ├── [locale]/                  # Locale-scoped routes (en, ar)
│   │   ├── page.tsx               # Home page
│   │   ├── about/                 # About page + layout.tsx (metadata)
│   │   ├── sectors/               # Sectors page + layout.tsx
│   │   ├── clients/               # Clients page + layout.tsx
│   │   ├── contact/               # Contact page + layout.tsx
│   │   ├── careers/               # Careers page + layout.tsx
│   │   ├── [...rest]/             # Catch-all that triggers the 404
│   │   ├── not-found.tsx          # Localised 404 page
│   │   └── layout.tsx             # Locale layout (providers, JSON-LD)
│   ├── globals.css                # Global styles, fonts
│   ├── layout.tsx                 # Root metadata (SEO, OG, verification)
│   ├── not-found.tsx              # Bilingual fallback 404
│   └── sitemap.ts                 # Generates sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/                # Header, Footer
│   │   ├── sections/              # Hero, About, CEO, Sectors, Clients,
│   │   │                          # InteractiveMap, Projects, Stats, CTA
│   │   ├── ui/                    # SectionTransition, AnimatedCounter, SplashScreen
│   │   └── providers/             # LenisProvider
│   ├── i18n/request.ts            # next-intl config
│   └── lib/navigation.ts          # Locale-aware Link / useRouter / usePathname
├── messages/
│   ├── en.json                    # English translations
│   └── ar.json                    # Arabic translations
├── public/
│   ├── images/                    # Logos, backgrounds, page imagery
│   └── fonts/                     # Montserrat, Helvetica (self-hosted)
├── middleware.ts                  # Locale routing middleware
├── next.config.js                 # Next.js + next-intl + image domains
├── tailwind.config.js             # Brand tokens (colors, fonts, sizes)
├── tsconfig.json                  # TypeScript strict mode + @/* path alias
├── robots.txt                     # Search engine rules
└── .env.example                   # Environment variable template
```

---

## 5. Local Development

### Prerequisites

- **Node.js** 18 or higher
- **npm** (bundled with Node.js)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Create your local environment file
cp .env.example .env.local

# 3. Start the development server
npm run dev
```

The site runs at:

- English: http://localhost:3000/en
- Arabic: http://localhost:3000/ar

Hot reload is enabled — any source file change triggers an automatic browser refresh.

### Available Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server on port 3000 |
| `npm run build` | Create an optimised production build |
| `npm start` | Run the production build (requires `npm run build` first) |
| `npm run lint` | Run ESLint; current codebase passes with zero warnings |

---

## 6. Deployment

The site is a standard Next.js 14 App Router application and can be deployed to any Node.js-capable host. Vercel is recommended for the simplest, zero-config experience.

### Option A — Vercel (recommended)

1. Push the repository to GitHub (already done — repo: `DevShoaib78/HascoTest`).
2. Log in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the GitHub repository. Vercel auto-detects Next.js — no build settings to change.
4. Under **Environment Variables**, add the values from section 7 below. Apply them to **Production**, **Preview**, and **Development** environments.
5. Click **Deploy**. The first build takes roughly 2–3 minutes.
6. Once deployed, assign the production domain (e.g. `hascogroup.com`) from the **Domains** tab. Vercel handles HTTPS automatically.

Every `git push` to the `main` branch thereafter auto-deploys to production. Every push to other branches creates a preview deployment.

### Option B — Netlify

Netlify supports Next.js via its official `@netlify/plugin-nextjs` adapter.

1. Connect the GitHub repository in the Netlify dashboard.
2. Build command: `npm run build` — Publish directory: `.next` (Netlify will override this automatically when it detects Next.js).
3. Add environment variables under **Site settings → Environment variables**.
4. Deploy.

### Option C — Self-hosted (Node server, Docker, VPS)

```bash
npm install
npm run build
npm start
```

`npm start` runs the optimised production server on port 3000 by default. Put it behind a reverse proxy (nginx, Caddy, AWS ALB, etc.) to handle HTTPS and domain routing. Ensure environment variables are exposed to the Node process.

### Deployment Checklist

Before cutting over to the production domain:

- [ ] `NEXT_PUBLIC_SITE_URL` is set to the final production URL (affects sitemap, canonical URLs, OG URLs, JSON-LD)
- [ ] `GOOGLE_SITE_VERIFICATION` is set if Search Console will be used
- [ ] `YANDEX_VERIFICATION` is set if Yandex Webmaster will be used
- [ ] DNS points at the host (Vercel / Netlify / server IP)
- [ ] HTTPS certificate is active (automatic on Vercel and Netlify)
- [ ] Verify both `/en` and `/ar` routes load correctly
- [ ] Submit the sitemap at `/sitemap.xml` to Google Search Console

---

## 7. Environment Variables

All environment variables live in `.env.local` (git-ignored). A template is provided in `.env.example`.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | The canonical production URL (e.g. `https://hascogroup.com`). Used in the sitemap, hreflang alternates, canonical tags, Open Graph URLs, and JSON-LD. |
| `GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console verification code. Paste the content value only (not the full meta tag). Leave blank if unused — the meta tag is then not rendered. |
| `YANDEX_VERIFICATION` | Optional | Yandex Webmaster verification code. Same rules as above. |

> Note: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` slots exist in the template for future use; the current site does not read them.

---

## 8. Brand System

### Colour Palette

| Token | Hex | RGB | Tailwind Class | Usage |
|---|---|---|---|---|
| Primary Blue | `#004A81` | 0, 74, 129 | `brand-primary` | Headings, buttons, accents, logo |
| Light Blue | `#66AADD` | 102, 170, 221 | `brand-secondary` | Hover states, secondary accents |
| Dark Background | `#0f172a` | — | — | Dark sections, gradient bases |
| Light Background | `#f8fafc` | — | `gray-50` | Alternating section backgrounds |

### Typography

- **Headings:** Montserrat (Tailwind class: `font-heading`)
- **Body:** Helvetica with Arial fallback (Tailwind class: `font-body`)
- Fonts are self-hosted in `public/fonts/` and preloaded in the locale layout for performance.

### Typographic Scale

Custom Tailwind sizes:

- `text-title-xl` — 48px (hero titles)
- `text-title-lg` — 40px (section headings on mobile)
- `text-title-md` — 32px
- `text-body-lg` — 18px (lead paragraphs)
- `text-body-md` — 16px (body copy)

### Logo Usage

- Primary blue logo: `public/images/hascoblue.png` — for white/light backgrounds.
- White logo: `public/images/hascowhite.png` — for dark/brand-colour backgrounds (used in the transparent header state).
- Favicon and touch icon: `public/images/favicon.png`.

Do not stretch, recolour, or add effects to the logo. Maintain clear space around it equal to the width of the symbol.

---

## 9. Content Management

### Editing Text

All user-facing strings live in two translation files:

- `messages/en.json` — English
- `messages/ar.json` — Arabic

Every top-level key corresponds to a page or component (e.g. `aboutPage`, `careersPage`, `header`, `footer`). To edit copy:

1. Open the relevant JSON file.
2. Locate the key — structure is documented by nesting (e.g. `aboutPage.hero.title`).
3. Edit the string value.
4. **Apply the same change in the other language file** so both locales stay in sync.

### Adding a New Translation Key

1. Add the key to **both** `messages/en.json` and `messages/ar.json`.
2. Reference it in your component via:

   ```tsx
   const t = useTranslations('yourNamespace')
   return <h1>{t('yourKey')}</h1>
   ```

### Adding a New Page

1. Create a folder under `app/[locale]/` — for example `app/[locale]/news/`.
2. Add a `page.tsx` file with the page body.
3. Optionally add a `layout.tsx` in the same folder exporting `generateMetadata` for page-specific SEO (use any existing inner page's layout as a template).
4. Add a link in the header navigation (`src/components/layout/Header.tsx`) and/or footer.
5. Add the page to `app/sitemap.ts` so search engines discover it.
6. Add any new translation keys to both JSON files.

### Replacing Images

- Static site images live in `public/images/`. Replace files of the same name to swap imagery without code changes.
- External images referenced by URL (e.g. the Featured Projects carousel) are hardcoded in `src/components/sections/Projects.tsx`. To swap one, update the `image` field in the `baseProjects` array. If the new image comes from a new domain, add that domain to `next.config.js` under `images.remotePatterns`.

### Updating the CEO Section

CEO name and quote are in the `ceo` namespace of both translation files. The portrait is `public/images/ceo-portrait.png` (replace the file to change the image).

### Updating Colours or Fonts

Edit `tailwind.config.js`:

```js
colors: {
  brand: {
    primary: '#004A81',
    secondary: '#66AADD',
  },
},
```

Any component using the `brand-primary` / `brand-secondary` utility classes will pick up the change automatically.

---

## 10. Forms and Contact Flow

All forms on the site currently submit via client-side redirects (no backend API). This is intentional for the frontend-only delivery scope.

| Form | Target | Behaviour |
|---|---|---|
| Home CTA (`CTA.tsx`) | WhatsApp `wa.me/966126425834` | Opens WhatsApp with a pre-filled message containing first name, last name, email |
| Contact page form | WhatsApp `wa.me/966126425834` | Opens WhatsApp with a pre-filled message containing name, email, phone, subject, and message |
| Careers "Send Your CV" | `mailto:careers@hasco.com.sa` | Opens the user's default email client |
| Careers "Apply Now" (per job) | None | Intentionally inert — awaiting a future backend implementation |

To wire a real backend later, replace the submit handlers in:

- `src/components/sections/CTA.tsx`
- `app/[locale]/contact/page.tsx`
- `app/[locale]/careers/page.tsx`

Supabase is already installed as a dependency to keep this path easy for the next developer.

---

## 11. SEO Overview

The site ships with production-ready SEO out of the box:

- **Per-page metadata** — every page has its own localised title, description, canonical URL, hreflang alternates, and Open Graph / Twitter card tags (root metadata in `app/layout.tsx`; per-page overrides in `app/[locale]/<page>/layout.tsx`).
- **Structured data** — an `Organization` JSON-LD schema is embedded in the locale layout with company name, logo, address, social profiles, and contact point.
- **Sitemap** — auto-generated at `/sitemap.xml` covering all 6 pages in both locales (12 URLs total).
- **robots.txt** — allows indexing of all public routes and points at the sitemap.
- **hreflang** — each page declares `en-US` and `ar-SA` alternates so Google serves the right locale per region.
- **Image optimisation** — every image uses `next/image` with alt text and appropriate `sizes`.
- **Verification meta tags** — `GOOGLE_SITE_VERIFICATION` and `YANDEX_VERIFICATION` are wired up; just set the env var value to activate.

### Post-Deployment SEO Checklist

1. Verify the site in [Google Search Console](https://search.google.com/search-console).
2. Submit the sitemap URL (`https://<your-domain>/sitemap.xml`).
3. Verify in [Yandex Webmaster](https://webmaster.yandex.com/) if Russian/Arabic-world organic traffic matters.
4. Check the page in the [Google Rich Results Test](https://search.google.com/test/rich-results) to confirm the Organization JSON-LD renders.
5. Run a [PageSpeed Insights](https://pagespeed.web.dev/) audit and monitor Core Web Vitals.

---

## 12. Accessibility & Performance

- Semantic HTML throughout (nav, main, section, button, a).
- All images have descriptive `alt` text.
- Language and direction are declared on the `<html>` element per locale.
- Fonts are preloaded and `display: swap` is used to avoid invisible text during load.
- First Load JS is roughly **88 kB** (shared chunk), with individual pages adding 3–5 kB on top.
- All public pages are pre-rendered as static HTML at build time and served from the edge (on Vercel/Netlify).

---

## 13. Known Considerations

- **Backend is intentionally absent.** Forms go to WhatsApp / email. A future developer can wire real endpoints (e.g. via Supabase or a Next.js API route) without restructuring the UI.
- **Careers "Apply Now"** buttons are placeholders. Functionality will be added by a future developer.
- **News section** component exists (`src/components/sections/News.tsx`) but is not mounted on any page — kept for future use.
- **Browserslist / baseline-browser-mapping warnings** during build are informational only (the caniuse database is a few months old). Run `npx update-browserslist-db@latest` periodically to suppress them.

---

## 14. Repository

- GitHub: https://github.com/DevShoaib78/HascoTest
- Default branch: `main`
- Production build passes with zero lint errors and zero TypeScript errors.

---

## 15. Handover Notes

Everything needed to run, deploy, and extend this site is included in this repository. A new developer picking this up should be able to:

1. Clone the repo.
2. Run `npm install` and `npm run dev`.
3. Edit content in `messages/*.json` and see changes live.
4. Ship to Vercel by clicking one button.

For any future expansion (adding a blog, wiring a real contact backend, integrating a CMS), the architecture is ready: Next.js App Router server components can be dropped in alongside the existing client components without disrupting anything.

---

## Document Info

**Last updated:** 24 April 2026
**Prepared by:** Mohammed Shoaib Choudry
