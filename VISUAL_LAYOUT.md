# HASCO Hero & Navbar - Visual Layout Guide

## 🎨 Desktop Layout (>1024px)

### Initial State (Transparent Navbar)

```
┌─────────────────────────────────────────────────────────────────┐
│ [LOGO]              Home  About  Sectors  Clients  Contact  Careers  [🔍] [عربي] │ ← Transparent
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                                                                 │
│   Diversified Strength.                                        │ ← Hero
│   Unified Vision.                                              │   Section
│                                                                 │   (Full
│   From marine expertise to logistics, construction,            │   Screen)
│   tourism, and beyond — HASCO delivers world-class             │
│   solutions that power the Kingdom's growth and                │
│   global ambitions.                                            │
│                                                                 │
│                                                                 │
│                                                                 │
│                         SCROLL                                  │ ← Scroll
│                           ↓                                     │   Indicator
└─────────────────────────────────────────────────────────────────┘
```

### Scrolled State (Solid Navbar)

```
┌─────────────────────────────────────────────────────────────────┐
│ [LOGO]              Home  About  Sectors  Clients  Contact  Careers  [🔍] [عربي] │ ← Solid Blue
│                                                                 │   (#004A81)
└─────────────────────────────────────────────────────────────────┘   + Shadow
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   [Next Section Content]                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📱 Mobile Layout (<1024px)

### Initial State (Menu Closed)

```
┌──────────────────────────────────┐
│ [LOGO]                      [☰] │ ← Transparent
├──────────────────────────────────┤
│                                  │
│                                  │
│  Diversified                     │
│  Strength.                       │
│  Unified Vision.                 │ ← Hero
│                                  │   Section
│  From marine expertise           │   (Full
│  to logistics...                 │   Screen)
│                                  │
│                                  │
│           SCROLL                 │ ← Scroll
│             ↓                    │   Indicator
└──────────────────────────────────┘
```

### Menu Open

```
┌──────────────────────────────────┐
│ [LOGO]                      [✕] │ ← Solid Blue
├──────────────────────────────────┤
│  Home                            │
│  About                           │
│  Sectors                         │ ← Menu
│  Clients                         │   Overlay
│  Contact                         │
│  Careers                         │
│  ─────────────────               │
│  [🔍]  عربي                      │
└──────────────────────────────────┘
```

---

## 🎨 Color Layers (Hero Section)

### Z-Index Stacking

```
Layer 5: Content (z-10)
         ┌─────────────────────────┐
         │ Diversified Strength.   │
         │ Unified Vision.         │
         │ [Text Content]          │
         └─────────────────────────┘

Layer 4: Additional Overlay (bg-black/20)
         ┌─────────────────────────┐
         │ ░░░░░░░░░░░░░░░░░░░░░░░ │
         └─────────────────────────┘

Layer 3: Gradient Overlay (from-black/60 to transparent)
         ┌─────────────────────────┐
         │ ████████████████████████ │ ← 60% black
         │ ████████████████████████ │
         │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ ← 40% black
         │ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
         │ ░░░░░░░░░░░░░░░░░░░░░░░░ │ ← Transparent
         └─────────────────────────┘

Layer 2: Background Image (hero.jpeg)
         ┌─────────────────────────┐
         │ [Hero Background Image] │
         └─────────────────────────┘

Layer 1: Black Background (fallback)
         ┌─────────────────────────┐
         │ ████████████████████████ │
         └─────────────────────────┘
```

---

## 🎯 Interactive Elements

### Navigation Link States

#### Enabled (Home)
```
┌─────────┐
│  Home   │ ← White text
└─────────┘
    ↓ Hover
┌─────────┐
│  Home   │ ← Light blue (#66AADD)
└─────────┘
    ▔▔▔▔▔   ← Underline animation
```

#### Disabled (Others)
```
┌─────────┐
│  About  │ ← White/50% opacity
└─────────┘
    ↓ Hover
┌─────────┐
│  About  │ ← Light blue but no navigation
└─────────┘
    (no underline)
```

---

## 🎬 Navbar Transition Animation

### Scroll Position: 0px - 50px (Transparent)
```
┌─────────────────────────────────────────────┐
│ [LOGO]    Nav Items    [Icons]              │ ← bg-transparent
└─────────────────────────────────────────────┘
                                                  No shadow
```

### Scroll Position: 50px+ (Solid)
```
┌─────────────────────────────────────────────┐
│ [LOGO]    Nav Items    [Icons]              │ ← bg-[#004A81]
└─────────────────────────────────────────────┘
  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔  ← Shadow
```

**Transition**: 500ms ease-in-out

---

## 📐 Spacing & Dimensions

### Desktop Navbar
```
┌─────────────────────────────────────────────────────────────┐
│ ← 48px →                                        ← 48px →    │
│          [LOGO]  ← 32px → [Nav] ← 32px → [Icons]           │
│                                                             │
│ ↑                                                           │
│ 96px                                                        │
│ ↓                                                           │
└─────────────────────────────────────────────────────────────┘
```

### Mobile Navbar
```
┌─────────────────────────────────┐
│ ← 24px →              ← 24px → │
│          [LOGO]  [☰]           │
│                                │
│ ↑                              │
│ 80px                           │
│ ↓                              │
└─────────────────────────────────┘
```

### Hero Content Spacing
```
┌─────────────────────────────────────┐
│ ← 48px →                            │
│                                     │
│ ↑                                   │
│ 128px (pt-32)                       │
│ ↓                                   │
│                                     │
│ Diversified Strength.               │
│ Unified Vision.                     │
│                                     │
│ ↓ 32px (space-y-8)                 │
│                                     │
│ From marine expertise...            │
│                                     │
└─────────────────────────────────────┘
```

---

## 🎨 Typography Hierarchy

### Hero Section
```
┌─────────────────────────────────────────┐
│                                         │
│  Diversified Strength.                  │ ← 48-96px, weight: 300
│  Unified Vision.                        │   Montserrat, white
│                                         │
│  ↓ 24px gap                             │
│                                         │
│  From marine expertise to logistics,    │ ← 18-24px, weight: 300
│  construction, tourism, and beyond...   │   Helvetica, white/90%
│                                         │
└─────────────────────────────────────────┘
```

### Navigation
```
┌─────────────────────────────────────────┐
│  Home  About  Sectors  Clients          │ ← 14px, weight: 500
│                                         │   Montserrat, white
└─────────────────────────────────────────┘
```

---

## 🎬 Animation Timeline

### Page Load (Hero)
```
0ms     ─────────────────────────────────────
        [Page loads, hero visible but content hidden]

200ms   ─────────────────────────────────────
        [Headline fades in from bottom]
        "Diversified Strength. Unified Vision."

400ms   ─────────────────────────────────────
        [Subtitle fades in from bottom]
        "From marine expertise..."

600ms   ─────────────────────────────────────
        [Scroll indicator fades in]
        "SCROLL ↓"

800ms   ─────────────────────────────────────
        [All animations complete]
```

### Scroll Transition (Navbar)
```
Scroll: 0px
┌─────────────────────────────────────────┐
│ [Transparent Navbar]                    │
└─────────────────────────────────────────┘

Scroll: 25px (halfway)
┌─────────────────────────────────────────┐
│ [50% Blue Background]                   │
└─────────────────────────────────────────┘

Scroll: 50px+
┌─────────────────────────────────────────┐
│ [Solid Blue Background + Shadow]        │
└─────────────────────────────────────────┘
```

---

## 🎯 Hover States

### Navigation Link Hover
```
Before Hover:
┌─────────┐
│  Home   │
└─────────┘

During Hover (300ms transition):
┌─────────┐
│  Home   │ ← Color changes to #66AADD
└─────────┘
    ▔▔▔     ← Underline grows from left

After Hover:
┌─────────┐
│  Home   │
└─────────┘
    ▔▔▔▔▔   ← Full underline
```

### Scroll Indicator Hover
```
Before Hover:
    SCROLL
      ↓

During Hover (1000ms transition):
    SCROLL  ← Brighter white
      ↓     ← Scales to 110%

After Hover:
    SCROLL
      ↓     ← Continues bouncing
```

---

## 📱 Responsive Breakpoints

### Typography Scaling
```
Mobile (<640px):
  Headline: 48px (text-5xl)
  Subtitle: 18px (text-lg)

Tablet (640-1024px):
  Headline: 60px (text-6xl)
  Subtitle: 20px (text-xl)

Desktop (1024-1280px):
  Headline: 72px (text-7xl)
  Subtitle: 24px (text-2xl)

Large Desktop (>1280px):
  Headline: 96px (text-8xl)
  Subtitle: 24px (text-2xl)
```

### Navbar Height
```
Mobile/Tablet:
┌─────────────┐
│             │ ← 80px (h-20)
└─────────────┘

Desktop:
┌─────────────┐
│             │ ← 96px (h-24)
└─────────────┘
```

---

## 🎨 Mobile Menu Animation

### Hamburger to X Transformation
```
Closed (☰):
  ─────  ← Top line (0°)
  ─────  ← Middle line (visible)
  ─────  ← Bottom line (0°)

Opening (300ms):
  ╱     ← Top line (rotate 45°, move down)
        ← Middle line (fade out)
  ╲     ← Bottom line (rotate -45°, move up)

Open (✕):
  ╱     ← Top line (45°)
        ← Middle line (hidden)
  ╲     ← Bottom line (-45°)
```

### Menu Slide Animation
```
Closed:
┌─────────────┐
│ [Navbar]    │
└─────────────┘
  max-h: 0
  opacity: 0

Opening (300ms):
┌─────────────┐
│ [Navbar]    │
├─────────────┤
│ [Menu]      │ ← Sliding down
└─────────────┘
  max-h: 500px
  opacity: 1

Open:
┌─────────────┐
│ [Navbar]    │
├─────────────┤
│ Home        │
│ About       │
│ Sectors     │
│ Clients     │
│ Contact     │
│ Careers     │
│ ─────────── │
│ [🔍] عربي   │
└─────────────┘
```

---

## 🎯 Click Targets (Touch-Friendly)

### Minimum Touch Target: 44x44px

```
Desktop Navigation:
┌──────────────┐
│    Home      │ ← 48px height
└──────────────┘

Mobile Navigation:
┌──────────────┐
│              │
│    Home      │ ← 56px height (py-2 + text)
│              │
└──────────────┘

Hamburger Icon:
┌──────────┐
│          │
│    ☰     │ ← 40x40px
│          │
└──────────┘

Scroll Indicator:
┌──────────┐
│  SCROLL  │
│    ↓     │ ← 60x60px clickable area
└──────────┘
```

---

## 🎨 Visual Hierarchy

### Importance Levels
```
Level 1 (Highest):
  - Hero Headline
  - HASCO Logo

Level 2:
  - Hero Subtitle
  - Navigation Items

Level 3:
  - Scroll Indicator
  - Search/Language Icons

Level 4 (Lowest):
  - Background Elements
  - Overlays
```

---

## 📐 Grid System

### Desktop Layout (1920px max-width)
```
┌────────────────────────────────────────────────────────────┐
│ ← 48px → [Content Area: 1824px] ← 48px →                  │
│                                                            │
│          ┌──────────────────────────────────┐             │
│          │  Hero Content (max-w-4xl)        │             │
│          │  896px max width                 │             │
│          └──────────────────────────────────┘             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Mobile Layout (375px)
```
┌──────────────────────────────┐
│ ← 24px → [Content] ← 24px → │
│                              │
│  ┌────────────────────────┐ │
│  │  Hero Content          │ │
│  │  327px width           │ │
│  └────────────────────────┘ │
│                              │
└──────────────────────────────┘
```

---

This visual layout guide provides a comprehensive understanding of the spatial relationships, animations, and responsive behavior of the HASCO Hero and Navbar implementation.
