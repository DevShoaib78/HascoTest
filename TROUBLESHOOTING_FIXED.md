# Troubleshooting - Issue Fixed ✅

## Problem
The website was not running after `npm install` and `npm run dev`. The error was:
```
[next-intl] Could not locate request configuration module.
This path is supported by default: ./(src/)i18n/request.{js,jsx,ts,tsx}
```

## Root Cause
The i18n configuration file (`i18n.ts`) was placed in the wrong location. The `next-intl` plugin expects the configuration to be at:
- `src/i18n/request.ts` (or `i18n/request.ts`)

But we had it at:
- `i18n.ts` (root level)

## Solution Applied

### 1. Moved i18n Configuration
**From**: `i18n.ts` (root)  
**To**: `src/i18n/request.ts`

### 2. Updated Import Paths
Updated all files that imported from the old location:

**Files Updated:**
- ✅ `middleware.ts` - Updated import path
- ✅ `src/lib/navigation.ts` - Updated import path and API
- ✅ `app/[locale]/layout.tsx` - Updated import path

### 3. Fixed Navigation API
Changed from deprecated API to current API:
```typescript
// Old (deprecated)
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

// New (current)
import { createNavigation } from 'next-intl/navigation';
```

## Result
✅ **Website is now running successfully!**

```
▲ Next.js 14.0.0
- Local: http://localhost:3000
✓ Ready in 3.7s
```

## How to Access

### English (Default)
```
http://localhost:3000/
```

### Arabic
```
http://localhost:3000/ar
```

## Verification Steps

1. ✅ Server starts without errors
2. ✅ No TypeScript diagnostics errors
3. ✅ All imports resolved correctly
4. ✅ i18n configuration loaded properly

## File Structure (Corrected)

```
src/
├── i18n/
│   └── request.ts          ✅ Correct location
├── lib/
│   └── navigation.ts       ✅ Updated imports
└── components/
    └── ...

messages/
├── en.json                 ✅ English translations
└── ar.json                 ✅ Arabic translations

middleware.ts               ✅ Updated imports
app/
└── [locale]/
    ├── layout.tsx          ✅ Updated imports
    └── page.tsx
```

## Testing Checklist

- [x] Server starts successfully
- [x] No console errors
- [x] TypeScript compiles without errors
- [ ] English homepage loads (`http://localhost:3000/`)
- [ ] Arabic homepage loads (`http://localhost:3000/ar`)
- [ ] Language switcher works
- [ ] RTL layout displays correctly

## Next Steps

1. Open `http://localhost:3000/` in your browser
2. Verify English content displays correctly
3. Click the "عربي" button to switch to Arabic
4. Verify Arabic content and RTL layout
5. Test all sections and interactions

## Common Issues & Solutions

### Issue: "Module not found" errors
**Solution**: Make sure all imports use the correct path:
```typescript
import { locales } from '@/src/i18n/request';
```

### Issue: Language switcher not working
**Solution**: Check that middleware.ts is properly configured and the navigation utility is imported correctly.

### Issue: Translations not showing
**Solution**: Verify that translation keys exist in both `messages/en.json` and `messages/ar.json`.

---

**Status**: ✅ **FIXED**  
**Date**: November 13, 2025  
**Time to Fix**: ~5 minutes
