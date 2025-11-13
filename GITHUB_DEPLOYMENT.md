# Deploy to GitHub

## Quick Steps to Push to GitHub

### Step 1: Initialize Git (if not already done)
```bash
git init
```

### Step 2: Add All Files
```bash
git add .
```

### Step 3: Commit
```bash
git commit -m "Initial commit - HASCO website ready for deployment"
```

### Step 4: Create Repository on GitHub
1. Go to https://github.com
2. Click "New repository"
3. Name it (e.g., "hasco-website")
4. Don't initialize with README (you already have files)
5. Click "Create repository"

### Step 5: Connect and Push
```bash
# Replace YOUR_USERNAME and YOUR_REPO with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## After Pushing to GitHub

You can then deploy using:
- **Vercel** (Recommended for Next.js) - https://vercel.com
- **Netlify** (via GitHub integration) - https://netlify.com
- **GitHub Pages** (requires static export)

---

## Quick Deploy with Vercel (Recommended)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! ✅

Vercel is made by the Next.js team and works perfectly with Next.js projects.

---

**Status:** ✅ Netlify CLI cleanup complete, ready for GitHub
