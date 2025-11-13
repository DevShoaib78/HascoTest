# HASCO Styling Reference - Hero & Navbar

## 🎨 Color Palette

### Brand Colors (Exact)
```css
Primary Blue:   #004A81  /* HASCO Brand Blue */
Light Blue:     #66AADD  /* HASCO Light Blue */
```

### Usage
- **Navbar solid background**: `bg-[#004A81]`
- **Hover states**: `hover:text-[#66AADD]`
- **Active underlines**: `bg-[#66AADD]`

---

## 📝 Typography Scale

### Headings (Montserrat)
```css
Hero Headline:
- Mobile:  text-5xl (3rem / 48px)
- Tablet:  text-6xl (3.75rem / 60px)
- Desktop: text-7xl (4.5rem / 72px)
- XL:      text-8xl (6rem / 96px)

Font Weight: font-light (300)
Line Height: leading-[1.1]
Tracking:    tracking-tight
```

### Body Text (Helvetica)
```css
Hero Subtitle:
- Mobile:  text-lg (1.125rem / 18px)
- Tablet:  text-xl (1.25rem / 20px)
- Desktop: text-2xl (1.5rem / 24px)

Font Weight: font-light (300)
Line Height: leading-relaxed
Color:       text-white/90
```

### Navigation
```css
Desktop Nav:
- Size:    text-sm (0.875rem / 14px)
- Weight:  font-medium (500)
- Spacing: tracking-wide

Mobile Nav:
- Size:    text-base (1rem / 16px)
- Weight:  font-medium (500)
```

---

## 🎭 Navbar States

### Transparent State (Initial)
```tsx
className="bg-transparent"
```
- Over hero image
- White text and logo
- No shadow
- Height: `h-20 lg:h-24`

### Solid State (Scrolled)
```tsx
className="bg-[#004A81] shadow-lg backdrop-blur-sm"
```
- Solid brand blue background
- White text and logo
- Subtle shadow
- Smooth transition (500ms)

### Transition Logic
```typescript
const [isScrolled, setIsScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

---

## 🎬 Hero Section Layout

### Container Structure
```tsx
<section className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat">
  {/* Background Image */}
  style={{ backgroundImage: 'url(/images/hero.jpeg)' }}
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
  
  {/* Additional Depth Overlay */}
  <div className="absolute inset-0 bg-black/20" />
  
  {/* Content */}
  <div className="relative z-10 w-full h-full flex flex-col">
    {/* Main content area */}
    {/* Scroll indicator */}
  </div>
</section>
```

### Gradient Overlay (Red Sea Global Style)
```css
bg-gradient-to-b from-black/60 via-black/40 to-transparent
```
- Top: 60% black opacity
- Middle: 40% black opacity
- Bottom: Transparent
- Ensures text readability while showing image

---

## ✨ Animations & Transitions

### Fade-in on Load
```tsx
const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
  setIsVisible(true)
}, [])

className={`transition-all duration-1000 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}
```

### Staggered Delays
```tsx
style={{ transitionDelay: '200ms' }}  // Headline
style={{ transitionDelay: '400ms' }}  // Subtitle
style={{ transitionDelay: '600ms' }}  // Scroll indicator
```

### Navbar Transition
```tsx
className="transition-all duration-500 ease-in-out"
```

### Hover Effects
```css
/* Navigation Links */
hover:text-[#66AADD]
transition-colors duration-300

/* Underline Animation */
w-0 group-hover:w-full
transition-all duration-300

/* Scroll Indicator */
hover:scale-110
transition-all duration-1000
```

---

## 📱 Responsive Breakpoints

### Tailwind Breakpoints Used
```css
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
```

### Navbar Responsive
```tsx
{/* Desktop Navigation */}
<nav className="hidden lg:flex items-center space-x-8">

{/* Mobile Menu Button */}
<button className="lg:hidden relative w-10 h-10">

{/* Mobile Menu */}
<div className="lg:hidden overflow-hidden">
```

### Hero Responsive
```tsx
{/* Headline */}
className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"

{/* Subtitle */}
className="text-lg sm:text-xl lg:text-2xl"

{/* Container Padding */}
className="px-6 sm:px-8 lg:px-12"
```

---

## 🎯 Interactive Elements

### Scroll Indicator
```tsx
<button
  onClick={scrollToNextSection}
  className="group flex flex-col items-center space-y-2 hover:scale-110"
>
  <span className="text-white/80 text-sm font-medium tracking-wider uppercase group-hover:text-white">
    Scroll
  </span>
  <ChevronDown 
    className="text-white/80 group-hover:text-white animate-bounce" 
    size={28} 
    strokeWidth={1.5}
  />
</button>
```

### Disabled Navigation Links
```tsx
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href !== '/') {
    e.preventDefault()
  }
}

className={`${
  item.enabled 
    ? 'text-white hover:text-[#66AADD] cursor-pointer' 
    : 'text-white/50 cursor-not-allowed'
}`}
```

### Mobile Menu Toggle
```tsx
<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
  <span className={`${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
  <span className={`${isMenuOpen ? 'opacity-0' : ''}`} />
  <span className={`${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
</button>
```

---

## ♿ Accessibility Features

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### ARIA Labels
```tsx
<button aria-label="Search">
<button aria-label="Toggle menu">
<button aria-label="Scroll to next section">
```

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus states maintained
- Tab order logical

### Color Contrast
- White text on dark overlays: AAA compliant
- Navigation links: AA compliant
- Hover states: AA compliant

---

## 🎨 Spacing System

### Container Max Width
```tsx
className="max-w-[1920px] mx-auto"
```

### Horizontal Padding
```tsx
className="px-6 sm:px-8 lg:px-12"
```
- Mobile: 24px (1.5rem)
- Tablet: 32px (2rem)
- Desktop: 48px (3rem)

### Navbar Height
```tsx
className="h-20 lg:h-24"
```
- Mobile/Tablet: 80px (5rem)
- Desktop: 96px (6rem)

### Navigation Spacing
```tsx
{/* Desktop */}
className="space-x-8"  /* 32px gap */

{/* Mobile */}
className="space-y-4"  /* 16px gap */
```

---

## 🔍 Icon Specifications

### Lucide React Icons
```tsx
import { Search, ChevronDown } from 'lucide-react'

<Search size={20} strokeWidth={2} />
<ChevronDown size={28} strokeWidth={1.5} />
```

### Icon Colors
```tsx
className="text-white hover:text-[#66AADD] transition-colors duration-300"
```

---

## 📐 Layout Patterns

### Flexbox Centering
```tsx
{/* Vertical & Horizontal Center */}
className="flex items-center justify-center"

{/* Vertical Center, Horizontal Space Between */}
className="flex justify-between items-center"

{/* Vertical Stack */}
className="flex flex-col space-y-8"
```

### Absolute Positioning
```tsx
{/* Full Coverage Overlay */}
className="absolute inset-0"

{/* Fixed Header */}
className="fixed top-0 left-0 right-0 z-50"
```

### Z-Index Layers
```css
Header:  z-50
Content: z-10
Overlay: (no z-index, default stacking)
```

---

## 🎬 Animation Classes

### Custom Animations (from globals.css)
```css
animate-bounce        /* Scroll indicator */
animate-slide-in-left
animate-slide-in-right
animate-slide-in-up
```

### Transition Utilities
```css
transition-all duration-300
transition-all duration-500
transition-all duration-1000
transition-colors duration-300
```

### Easing Functions
```css
ease-in-out  /* Navbar transition */
(default)    /* Most transitions */
```

---

## 🖼️ Image Handling

### Next.js Image Component
```tsx
<Image
  src="/images/hasco-white-logo.png"
  alt="HASCO Group Logo"
  fill
  className="object-contain"
  priority
/>
```

### Background Images
```tsx
style={{ backgroundImage: 'url(/images/hero.jpeg)' }}
className="bg-cover bg-center bg-no-repeat"
```

---

## 🎯 Performance Optimizations

### Passive Event Listeners
```typescript
window.addEventListener('scroll', handleScroll, { passive: true })
```

### Conditional Rendering
```tsx
{isScrolled && <SomeComponent />}
```

### Image Optimization
- Use Next.js Image component
- Set `priority` for above-fold images
- Use appropriate image formats (WebP, JPEG)

---

## 📱 Mobile Menu Animation

### Hamburger Icon
```tsx
{/* Top Line */}
<span className={`transition-all duration-300 ${
  isMenuOpen ? 'rotate-45 translate-y-2' : ''
}`} />

{/* Middle Line */}
<span className={`transition-all duration-300 ${
  isMenuOpen ? 'opacity-0' : ''
}`} />

{/* Bottom Line */}
<span className={`transition-all duration-300 ${
  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
}`} />
```

### Menu Slide
```tsx
<div className={`overflow-hidden transition-all duration-300 ${
  isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
}`}>
```

---

## ✅ Quick Reference Checklist

### Colors
- [ ] Primary: `#004A81`
- [ ] Secondary: `#66AADD`
- [ ] White text on dark backgrounds
- [ ] Proper contrast ratios

### Typography
- [ ] Montserrat for headings/nav
- [ ] Helvetica for body text
- [ ] Font weights: 300-700
- [ ] Proper line heights

### Interactions
- [ ] Smooth transitions (300-1000ms)
- [ ] Hover states on all interactive elements
- [ ] Disabled states for non-functional links
- [ ] Mobile menu animation

### Accessibility
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Reduced motion support
- [ ] Color contrast compliance

### Responsive
- [ ] Mobile: < 640px
- [ ] Tablet: 640px - 1024px
- [ ] Desktop: > 1024px
- [ ] Test all breakpoints

---

This reference guide covers all styling patterns, animations, and responsive behaviors used in the HASCO Hero and Navbar implementation.
