# HASCO Group Website - Documentation

## 📋 Project Overview

The HASCO Group website is a modern, bilingual (English/Arabic) corporate website showcasing HASCO Group's integrated solutions across marine, logistics, construction, and development sectors. The site features responsive design, interactive components, and seamless language switching.

### Key Features
- ✅ Full English & Arabic support (bilingual)
- ✅ Interactive map with location-based information
- ✅ Animated carousel for sectors showcase
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Contact form for inquiries
- ✅ Smooth animations and transitions
- ✅ RTL/LTR support for Arabic language

---

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 14** - Modern React framework for production
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework

### Internationalization (i18n)
- **next-intl v4.5.2** - Multi-language support with automatic locale detection

### UI & Visualization
- **Lucide React** - Icon library with 500+ icons
- **React Leaflet** - Interactive mapping library
- **Leaflet** - Underlying mapping engine with satellite imagery support

### Backend Integration
- **Supabase** - Backend-as-a-Service (for future database needs)

### Development & Build Tools
- **ESLint** - Code quality and linting
- **PostCSS** - CSS transformation
- **Autoprefixer** - Browser compatibility for CSS

---

## 📁 Project Structure

```
Hasco v2/
├── app/
│   ├── [locale]/          # Dynamic locale routing (en, ar)
│   ├── globals.css        # Global styles with RTL support
│   └── layout.tsx         # Root layout with language setup
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer, Navigation
│   │   └── sections/      # Page sections (Hero, About, Sectors, etc.)
│   ├── i18n/
│   │   └── request.ts     # i18n configuration
│   └── lib/
│       └── navigation.ts   # Locale-aware navigation
├── messages/
│   ├── en.json            # English translations (167 keys)
│   └── ar.json            # Arabic translations (167 keys)
├── public/                # Static assets (images, logos)
├── middleware.ts          # URL routing middleware
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # TailwindCSS configuration
└── tsconfig.json          # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
Before you begin, ensure you have installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** (Node package manager)

### Installation & Setup

#### Step 1: Install Dependencies
```bash
npm install
```
This downloads all required packages listed in `package.json`.

#### Step 2: Set Up Environment Variables
Create a `.env.local` file in the root directory:
```bash
# Copy the example file
cp .env.example .env.local
```

Edit `.env.local` with your configuration (currently optional for basic development):
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

#### Step 3: Run Development Server
```bash
npm run dev
```

Open your browser and navigate to:
- **English**: http://localhost:3000/en
- **Arabic**: http://localhost:3000/ar

The site will automatically reload when you make changes to the code.

---

## 📦 Available Commands

### Development
```bash
npm run dev
```
Starts the development server with hot-reload on port 3000.

### Production Build
```bash
npm run build
```
Creates an optimized production build. Run this before deploying to ensure there are no errors.

### Start Production Server
```bash
npm start
```
Runs the production-built app. (Must run `npm run build` first)

### Code Linting
```bash
npm run lint
```
Checks code quality and finds potential issues. All current checks pass with zero errors.

---

## 🌍 Language Support

The website is fully bilingual with automatic language switching:

### How Language Switching Works
1. Click the language button (top-right of navbar)
2. Instant navigation to the selected language version
3. All content, including maps and forms, switches to the selected language

### Adding New Translations
All text is stored in translation files for easy updates:

**English** (`messages/en.json`):
```json
{
  "header": {
    "home": "Home",
    "about": "About",
    "language": "عربي"
  }
}
```

**Arabic** (`messages/ar.json`):
```json
{
  "header": {
    "home": "الرئيسية",
    "about": "من نحن",
    "language": "English"
  }
}
```

To add new content:
1. Add the key to both `en.json` and `ar.json`
2. Use `useTranslations()` hook in components:
```tsx
const t = useTranslations('section-name')
// Usage: {t('key-name')}
```

---

## 🗺️ Interactive Map Feature

The "Our Destinations" section features an interactive map with:
- **10 locations** across Saudi Arabia (Red Sea & Arabian Gulf)
- **Satellite imagery** layer for context
- **Interactive markers** that display location information
- **Location buttons** for quick navigation
- **Full Arabic support** with translated location names

### Map Locations
1. Magna (مقنا)
2. Diba (ضباء)
3. Al Wajh (الوجه)
4. Yanbu (ينبع)
5. King Abdullah Port (ميناء الملك عبدالله)
6. Jeddah (جدة)
7. Jazan (جازان)
8. Khafji (الخفجي)
9. Ras Al Khair (رأس الخير)
10. Dammam (الدمام)

---

## 🎨 Design & Styling

### Color Scheme
- **Primary Color**: #004A81 (Brand Blue)
- **Secondary Color**: #66AADD (Light Blue)
- **Background**: White with subtle gradients
- **Text**: Dark gray for readability

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### RTL/LTR Support
The site automatically adapts for Arabic (RTL - Right-to-Left) and English (LTR - Left-to-Right):
- Text alignment flips
- Flexbox direction reverses
- Carousel scroll direction inverts
- Navigation buttons swap positions

---

## 📋 Contact Form

The contact form in the "Partner with HASCO" section collects:
- First Name
- Last Name
- Email Address

**Current Status**: Form collects data but doesn't submit yet.
**To Implement Backend**:
1. Create an API endpoint (`/api/contact`)
2. Add submission logic in `src/components/sections/CTA.tsx` (line 35-38)
3. Connect to email service or database

---

## 🔧 Customization Guide

### Changing Site Content
All text content is in `messages/en.json` and `messages/ar.json`. Update these files to change:
- Navigation menu items
- Page headings and descriptions
- Button labels
- Form labels

### Updating Colors
Edit the color variables in `tailwind.config.ts`:
```typescript
brand-primary: '#004A81',
brand-secondary: '#66AADD',
```

### Adding New Pages
1. Create a new folder in `app/[locale]/`
2. Add a `page.tsx` file
3. The page is automatically routed and translated

---

## ⚙️ Configuration Files

### `next.config.js`
Configures Next.js with:
- next-intl plugin for internationalization
- Custom webpack settings (if needed)

### `tailwind.config.ts`
Defines:
- Custom colors, fonts, and spacing
- Responsive design breakpoints
- RTL/LTR styling utilities

### `tsconfig.json`
TypeScript configuration for type checking and path aliases

### `middleware.ts`
Handles:
- Automatic locale detection from URL
- Redirects to locale-prefixed routes
- Locale cookie persistence

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Dependency Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Translation Not Showing
1. Ensure the key exists in both `en.json` and `ar.json`
2. Check that keys match between files (167 keys should match)
3. Restart the development server

### Build Fails
```bash
npm run lint        # Check for code issues
npm run build       # Run build again
```

---

## 📝 Code Quality

### ESLint
All code follows ESLint standards with zero warnings or errors.
Check with: `npm run lint`

### TypeScript
Full type safety ensures no runtime errors from type mismatches.

### Build Performance
- Production build size: ~87.8 kB (First Load JS)
- All routes pre-rendered as static HTML
- Optimized images and lazy loading

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
# 1. Push code to GitHub
# 2. Connect repository to Vercel dashboard
# 3. Vercel automatically detects Next.js and deploys
```

### Other Platforms
1. Run `npm run build`
2. Deploy the `.next` folder
3. Ensure environment variables are set in deployment platform

---

## 📞 Support & Contact

For issues or questions about the website:
- Check the code comments throughout the project
- Review configuration files for setup details
- All custom components are well-documented

---

## 📅 Last Updated
January 31, 2026

## ✅ Quality Assurance
- ✅ Build passes with zero errors
- ✅ Linting: 0 warnings, 0 errors
- ✅ All 167 translation keys verified
- ✅ RTL/LTR support fully functional
- ✅ Responsive design tested
- ✅ Interactive features working correctly

---

**Developed with Next.js 14, React 18, TypeScript, and TailwindCSS**
