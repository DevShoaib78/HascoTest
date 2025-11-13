# HASCO i18n - Deployment Checklist

## Pre-Deployment Steps

### 1. Build & Test
```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev

# Test both languages
# English: http://localhost:3000/
# Arabic: http://localhost:3000/ar

# Build for production
npm run build

# Test production build
npm start
```

### 2. Verify Translations
- [ ] All English text displays correctly
- [ ] All Arabic text displays correctly
- [ ] No missing translation keys
- [ ] No console errors

### 3. Test RTL Layout
- [ ] Arabic layout is fully mirrored
- [ ] Navigation arrows are reversed
- [ ] Text alignment is correct
- [ ] Forms align properly
- [ ] Footer layout is correct

### 4. Test Language Switcher
- [ ] English → Arabic switch works
- [ ] Arabic → English switch works
- [ ] URL updates correctly
- [ ] Page content updates immediately
- [ ] No page reload required

### 5. Test Navigation
- [ ] All links work in English
- [ ] All links work in Arabic
- [ ] Locale is preserved in URLs
- [ ] Disabled links remain disabled

### 6. Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### 7. Responsive Testing
- [ ] Desktop (>1024px)
- [ ] Tablet (640-1024px)
- [ ] Mobile (<640px)
- [ ] Test both orientations

### 8. Performance Check
- [ ] Page load time acceptable
- [ ] No layout shift on language switch
- [ ] Smooth animations in both languages
- [ ] Images load properly

### 9. SEO Verification
- [ ] `lang` attribute set correctly
- [ ] `dir` attribute set correctly
- [ ] Meta tags present
- [ ] Proper URL structure

### 10. Accessibility Check
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] ARIA labels present
- [ ] Color contrast maintained

## Deployment Commands

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Docker (if applicable)
```bash
docker build -t hasco-website .
docker run -p 3000:3000 hasco-website
```

## Post-Deployment Verification

### Live Site Checks
- [ ] English homepage loads: `https://yourdomain.com/`
- [ ] Arabic homepage loads: `https://yourdomain.com/ar`
- [ ] Language switcher works
- [ ] All sections display correctly
- [ ] No 404 errors
- [ ] SSL certificate valid

### Analytics Setup (Optional)
- [ ] Google Analytics tracking both locales
- [ ] Language preference tracking
- [ ] User flow tracking per language

## Rollback Plan

If issues occur:
1. Revert to previous deployment
2. Check error logs
3. Fix issues locally
4. Re-test thoroughly
5. Re-deploy

## Support Documentation

Provide to team:
- [ ] `I18N_IMPLEMENTATION.md` - Technical docs
- [ ] `QUICK_START_I18N.md` - Quick reference
- [ ] `I18N_SUMMARY.md` - Overview
- [ ] This checklist

## Known Limitations

- Other pages (About, Sectors, etc.) are disabled in navigation
- Only homepage is fully translated
- Search functionality not implemented
- Contact form backend not connected

## Future Enhancements

- [ ] Translate remaining pages
- [ ] Add more languages
- [ ] Implement locale-specific SEO
- [ ] Add language preference cookie
- [ ] Create translation management system

---

**Deployment Status**: Ready for production  
**Last Updated**: November 2025  
**Approved By**: _____________  
**Deployment Date**: _____________
