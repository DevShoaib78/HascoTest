# HASCO Website - i18n Implementation Guide

## Overview
Full internationalization (i18n) support has been implemented using `next-intl` with complete English (LTR) and Arabic (RTL) translations.

## Features Implemented

### ✅ Complete Translation Coverage
- **Header/Navigation**: All menu items, language toggle
- **Hero Section**: Headline and subtitle
- **About Section**: Heading, description, CTA button
- **Sectors Section**: All 6 sector titles and descriptions
- **Clients Section**: Headings and partnership statement
- **Projects Section**: All 4 project titles, descriptions, and impacts
- **Stats Section**: Numbers, labels, and descriptions
- **News Section**: All 3 news items with dates
- **CTA Section**: Form labels and submission text
- **Footer**: Company info, quick links, contact details

### ✅ RTL (Right-to-Left) Support
- Automatic direction switching based on locale
- Mirrored layouts for Arabic
- Reversed flex directions
- Flipped navigation arrows (chevrons)
- Adjusted text alignment
- Proper padding/margin reversals
- RTL-optimized animations

### ✅ Locale-Aware Routing
- URL structure: `/` (English default) and `/ar` (Arabic)
- Middleware handles locale detection
- Locale prefix only shown for non-default language
- Proper navigation between locales

## File Structure

```
├── messages/
│   ├── en.json          # English translations
│   └── ar.json          # Arabic translations
├── src/
│   └── i18n/
│       └── request.ts   # i18n configuration
├── middleware.ts        # Locale routing middleware
├── app/
│   ├── layout.tsx       # Root layout (minimal)
│   └── [locale]/
│       ├── layout.tsx   # Locale-specific layout with dir attribute
│       └── page.tsx     # Home page
├── src/
│   ├── lib/
│   │   └── navigation.ts # Locale-aware navigation utilities
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx   # Translated header with language switcher
│       │   └── Footer.tsx   # Translated footer
│       └── sections/
│           ├── Hero.tsx     # Translated hero
│           ├── About.tsx    # Translated about
│           ├── Sectors.tsx  # Translated sectors
│           ├── Clients.tsx  # Translated clients
│           ├── Projects.tsx # Translated projects with RTL carousel
│           ├── Stats.tsx    # Translated stats
│           ├── News.tsx     # Translated news with RTL carousel
│           └── CTA.tsx      # Translated CTA form
```

## Usage

### Switching Languages
Click the language toggle button in the header:
- **English**: Shows "عربي" button
- **Arabic**: Shows "English" button

### URL Structure
- English (default): `http://localhost:3000/`
- Arabic: `http://localhost:3000/ar`

### Adding New Translations

1. **Add to English** (`messages/en.json`):
```json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

2. **Add to Arabic** (`messages/ar.json`):
```json
{
  "newSection": {
    "title": "عنوان جديد",
    "description": "وصف جديد"
  }
}
```

3. **Use in Component**:
```tsx
import { useTranslations } from 'next-intl'

export default function NewSection() {
  const t = useTranslations('newSection')
  
  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </div>
  )
}
```

## RTL-Specific Adjustments

### Automatic RTL Features
- `dir="rtl"` attribute on `<html>` tag
- Text alignment reversed
- Flex directions reversed
- Margins/paddings mirrored

### Manual RTL Adjustments in Components
```tsx
import { useLocale } from 'next-intl'

const locale = useLocale()

// Conditional classes
className={`${locale === 'ar' ? 'pr-4' : 'pl-4'}`}

// Conditional icons (arrows)
{locale === 'ar' ? <ChevronRight /> : <ChevronLeft />}

// Conditional origin for animations
className={`${locale === 'ar' ? 'origin-right' : 'origin-left'}`}
```

## CSS RTL Support

Global RTL styles in `app/globals.css`:
- Text alignment reversals
- Flexbox direction reversals
- Transform adjustments
- Gradient direction reversals
- Arabic font optimizations
- Border radius adjustments

## Navigation Between Locales

The language switcher automatically:
1. Detects current locale
2. Switches to opposite locale
3. Maintains current page path
4. Updates URL with new locale

## Testing Checklist

### English (LTR)
- [ ] All text displays in English
- [ ] Layout flows left-to-right
- [ ] Navigation arrows point correctly
- [ ] Forms align left
- [ ] Language button shows "عربي"

### Arabic (RTL)
- [ ] All text displays in Arabic
- [ ] Layout flows right-to-left
- [ ] Navigation arrows reversed
- [ ] Forms align right
- [ ] Language button shows "English"
- [ ] Phone numbers remain LTR (dir="ltr")

## Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Performance
- Translations loaded server-side
- No client-side translation overhead
- Minimal bundle size impact
- Fast locale switching

## Future Enhancements
- [ ] Add more languages (French, German, etc.)
- [ ] Implement locale-specific date/number formatting
- [ ] Add locale-specific images
- [ ] Implement locale-specific SEO metadata
- [ ] Add locale switcher dropdown for 3+ languages

## Troubleshooting

### Issue: Translations not showing
**Solution**: Check that the translation key exists in both `en.json` and `ar.json`

### Issue: RTL layout broken
**Solution**: Verify `dir="rtl"` attribute is set on `<html>` tag in locale layout

### Issue: Language switcher not working
**Solution**: Check middleware.ts is properly configured and locale routing is enabled

### Issue: 404 on locale routes
**Solution**: Ensure `[locale]` folder structure is correct and middleware is active

## Dependencies
- `next-intl`: ^3.x (i18n framework)
- `next`: 14.0.0 (Next.js framework)
- `react`: ^18 (React library)

## Configuration Files
- `i18n.ts`: Locale configuration
- `middleware.ts`: Routing middleware
- `next.config.js`: Next.js config with next-intl plugin
- `messages/*.json`: Translation files

---

**Implementation Date**: November 2025  
**Status**: ✅ Complete and Production-Ready  
**Supported Locales**: English (en), Arabic (ar)
