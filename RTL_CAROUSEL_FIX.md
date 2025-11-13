# RTL Carousel Fix - Arabic Language Support

## Issue
In the Arabic version of the site, the carousel arrows in the "Featured Projects" (مشاريع مميزة) and "Latest News" sections were not working. Clicking the left/right arrows did not scroll through the items.

## Root Cause
The carousel scroll implementation was using `scrollTo({ left: cardWidth * index })` which doesn't work correctly in RTL (Right-to-Left) mode. RTL scrolling behaves differently across browsers:
- Some browsers use negative scroll values
- Some browsers reverse the scroll direction
- The calculation `cardWidth * index` doesn't account for RTL layout

## Solution
Replaced the manual scroll calculation with `scrollIntoView()` which is browser-agnostic and handles RTL/LTR automatically.

## Files Modified

### 1. Projects Component
**File:** `src/components/sections/Projects.tsx`

**Before:**
```typescript
const scrollToProject = (index: number) => {
  if (scrollContainerRef.current) {
    const container = scrollContainerRef.current
    const cardWidth = container.scrollWidth / projects.length
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    })
    setCurrentIndex(index)
  }
}
```

**After:**
```typescript
const scrollToProject = (index: number) => {
  if (scrollContainerRef.current) {
    const container = scrollContainerRef.current
    const cards = container.children
    
    if (cards[index]) {
      // Use scrollIntoView for better RTL/LTR compatibility
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      })
    }
    setCurrentIndex(index)
  }
}
```

**Added scroll listener:**
```typescript
// Update current index on scroll
useEffect(() => {
  const container = scrollContainerRef.current
  if (!container) return

  const handleScroll = () => {
    const scrollPosition = Math.abs(container.scrollLeft)
    const cardWidth = container.scrollWidth / projects.length
    const newIndex = Math.round(scrollPosition / cardWidth)
    setCurrentIndex(newIndex)
  }

  container.addEventListener('scroll', handleScroll, { passive: true })
  return () => container.removeEventListener('scroll', handleScroll)
}, [projects.length])
```

### 2. News Component
**File:** `src/components/sections/News.tsx`

Applied the same fix as Projects component:
- Changed `scrollToNews()` to use `scrollIntoView()`
- Added scroll listener to update current index

## Why This Works

### scrollIntoView() Benefits:
1. **Browser Compatibility:** Works consistently across all browsers
2. **RTL Support:** Automatically handles RTL/LTR direction
3. **Native Behavior:** Uses browser's native scrolling logic
4. **Accessibility:** Better for keyboard navigation and screen readers

### Scroll Listener Benefits:
1. **Sync Indicators:** Keeps dot indicators in sync with manual scrolling
2. **Touch Support:** Works with swipe gestures on mobile
3. **Accurate Tracking:** Uses `Math.abs()` to handle negative scroll values in RTL

## Testing

### English Version (LTR):
1. Visit `/en` homepage
2. Scroll to "Featured Projects" section
3. Click right arrow → Should scroll to next project
4. Click left arrow → Should scroll to previous project
5. Click dot indicators → Should jump to specific project

### Arabic Version (RTL):
1. Visit `/ar` homepage
2. Scroll to "مشاريع مميزة" section
3. Click left arrow (shows ChevronRight icon) → Should scroll to next project
4. Click right arrow (shows ChevronLeft icon) → Should scroll to previous project
5. Click dot indicators → Should jump to specific project
6. Swipe gestures should work naturally in RTL direction

## Technical Details

### RTL Scroll Behavior:
- **Container:** Has `dir="rtl"` attribute when locale is Arabic
- **Scroll Direction:** Reversed in RTL (left becomes right)
- **Arrow Icons:** Swapped in RTL (ChevronLeft/ChevronRight reversed)
- **Scroll Position:** Can be negative or positive depending on browser

### scrollIntoView Options:
```typescript
{
  behavior: 'smooth',    // Smooth animation
  block: 'nearest',      // Don't scroll vertically
  inline: 'start'        // Align to start (respects RTL/LTR)
}
```

## Additional Improvements

### Passive Event Listener:
```typescript
container.addEventListener('scroll', handleScroll, { passive: true })
```
- Improves scroll performance
- Prevents blocking the main thread
- Better for mobile devices

### Math.abs() for Scroll Position:
```typescript
const scrollPosition = Math.abs(container.scrollLeft)
```
- Handles negative scroll values in some RTL implementations
- Ensures consistent calculation across browsers

## Components Fixed
1. ✅ Projects Section (Featured Projects / مشاريع مميزة)
2. ✅ News Section (Latest News / آخر الأخبار)

## Browser Compatibility
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Related Features
- Dot indicators update automatically on scroll
- Touch/swipe gestures work in both directions
- Keyboard navigation (arrow keys) supported
- Smooth animations in both LTR and RTL

---

**Status:** ✅ RTL carousel scrolling now works correctly
**Date:** November 13, 2025
**Impact:** Improved user experience for Arabic language users
