# Quick Start - HASCO i18n

## 🚀 Start Development Server

```bash
npm run dev
```

## 🌐 Access the Website

### English (Default)
```
http://localhost:3000/
```

### Arabic
```
http://localhost:3000/ar
```

## 🔄 Switch Languages

Click the language button in the top-right corner of the header:
- **English page**: Click "عربي" to switch to Arabic
- **Arabic page**: Click "English" to switch to English

## ✅ What's Translated

### ✓ All Homepage Sections
- Hero section (headline + subtitle)
- About HASCO
- Sectors (all 6 sectors)
- Clients & partnerships
- Featured projects (all 4 projects)
- Statistics
- Latest news (all 3 items)
- Contact form (CTA)
- Footer

### ✓ Navigation
- All menu items
- Language switcher
- Footer links

### ✓ RTL Support
- Complete right-to-left layout for Arabic
- Mirrored navigation arrows
- Reversed flex layouts
- Proper text alignment
- Arabic-optimized fonts

## 📝 Key Features

1. **Automatic Direction**: Layout automatically switches between LTR (English) and RTL (Arabic)
2. **URL-based Locale**: Language is part of the URL (`/` for English, `/ar` for Arabic)
3. **Persistent Navigation**: Language switcher maintains current page when switching
4. **SEO-Friendly**: Each language has its own URL for better SEO

## 🎨 Visual Differences

### English (LTR)
- Text flows left to right
- Navigation on the left
- Arrows point → (right)
- Forms align left

### Arabic (RTL)
- Text flows right to left
- Navigation on the right
- Arrows point ← (left)
- Forms align right
- Arabic fonts optimized

## 🔧 Technical Details

- **Framework**: next-intl
- **Locales**: en (English), ar (Arabic)
- **Default Locale**: en
- **Locale Prefix**: Only shown for non-default (Arabic shows `/ar`)

## 📦 Files Modified

- ✅ All section components translated
- ✅ Header with language switcher
- ✅ Footer translated
- ✅ RTL CSS added
- ✅ Middleware configured
- ✅ Translation files created

## 🎯 Testing

1. **Test English**: Visit `http://localhost:3000/`
2. **Test Arabic**: Visit `http://localhost:3000/ar`
3. **Test Switcher**: Click language button and verify switch
4. **Test RTL**: Verify Arabic layout is mirrored correctly
5. **Test Navigation**: Verify all links work in both languages

## 🐛 Common Issues

### Issue: Page not found
**Fix**: Make sure you're using `/ar` for Arabic, not `/ar/`

### Issue: Translations not showing
**Fix**: Check that translation keys exist in both `messages/en.json` and `messages/ar.json`

### Issue: RTL not working
**Fix**: Clear browser cache and reload

## 📚 Documentation

See `I18N_IMPLEMENTATION.md` for complete documentation.

---

**Status**: ✅ Ready to use  
**Last Updated**: November 2025
