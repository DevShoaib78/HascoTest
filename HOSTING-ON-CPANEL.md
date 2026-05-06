# HASCO Website — cPanel Hosting Quick Start

This zip contains the complete HASCO Group website ready to deploy on cPanel via the **Setup Node.js App** panel. The site has already been pre-built — you do **not** need to run `npm run build` on the server.

---

## What's in this zip

- All source files (`app/`, `src/`, `public/`, `messages/`)
- Config files (`package.json`, `next.config.js`, `middleware.ts`, etc.)
- **`server.js`** — the entry point cPanel/Passenger uses to launch the app
- **`.next/`** — the pre-built production output (Linux-compatible)
- `DOCUMENTATION.md` — full project handover document
- `HOSTING-ON-CPANEL.md` — this file

---

## Deployment steps (5 minutes)

### 1. Create the Node.js App (skip this step if it already exists)

cPanel → **Setup Node.js App** → **Create Application**

- **Node.js version:** `20.x` (must be 20 — do not pick 16, 18, 22, or 24)
- **Application mode:** `Production`
- **Application root:** `hasconew` (or any folder name you prefer — remember this)
- **Application URL:** the domain or test subdomain
- **Application startup file:** `server.js`

Click **Create**.

### 2. Upload the project files

cPanel → **File Manager** → navigate to your application root (e.g. `/home/<account>/hasconew/`).

- If anything is already in that folder from previous attempts, **delete it first** (especially any old `node_modules/` or `.next/`).
- **Upload this entire zip** to the folder.
- Right-click the uploaded zip → **Extract** → into the application root.
- After extraction, the application root should directly contain `package.json`, `server.js`, `app/`, `src/`, `public/`, `messages/`, `.next/`, etc. (NOT a nested subfolder).

### 3. Add the environment variable

Go back to **Setup Node.js App** → click the pencil icon to edit your app.

Scroll to **Environment variables** → click **+ ADD VARIABLE**:

- **Name:** `NEXT_PUBLIC_SITE_URL`
- **Value:** `https://<your-final-domain>` (e.g. `https://hasco.com.sa`)

Click **Save**.

### 4. Install dependencies

In the same Node.js App panel, click **▶ Run NPM Install**.

Wait until it completes — typically 2–5 minutes. The output should end with a success message like *"added 400+ packages"*. **Do not proceed until this completes successfully.**

### 5. Start the app

Click **🔁 RESTART** (if the app was already running) or **▶ START APP** (if it was stopped).

### 6. Visit the site

Open the **Application URL** in a browser. The HASCO Group website should load.

- English version: `https://<your-domain>/en`
- Arabic version: `https://<your-domain>/ar`

---

## If something goes wrong

### Site shows "500 Internal Server Error"

The app started but crashed when serving a request. Check the error log:

- Open **File Manager** → navigate to your application root
- Look for a file named **`stderr.log`**
- Open it (View or Edit) → scroll to the bottom → that's the actual error

The most common causes:
- Wrong Node.js version (must be 20.x; check the panel)
- `npm install` didn't finish or had errors — re-run **▶ Run NPM Install**
- Files were uploaded into a nested folder rather than directly into the application root
- `.next/` folder is missing or empty — re-extract the zip

### Site shows "503 Service Unavailable" or just doesn't respond

The app didn't start. Click **🔁 RESTART** in the panel. If it still won't start, check `stderr.log` as above.

### "Cannot find module" errors in the log

`npm install` didn't complete. Re-run **▶ Run NPM Install**. If it fails repeatedly, paste the error to your developer.

---

## Important — do not do this

- ❌ Do not run `npm run build` on the cPanel server. The shared host's memory limits will kill the build (`WebAssembly: Out of memory`). The `.next/` folder included in this zip is already pre-built.
- ❌ Do not upload a `.next/` folder built on a Windows machine. It will produce `MODULE_NOT_FOUND` errors on the Linux server. The `.next/` in this zip was specifically built on Linux for compatibility.
- ❌ Do not change the Node.js version after the first deploy. If you must, redeploy from scratch.

---

## Updating the site later

Any time the source code changes, the `.next/` folder must be rebuilt **on a Linux machine** (the developer handles this — see `DOCUMENTATION.md` Section 6 Option D for the full process). Then:

1. Upload only the changed files + the new `.next/` folder
2. If `package.json` changed, click **▶ Run NPM Install** again
3. Click **🔁 RESTART**

For full project documentation, see **`DOCUMENTATION.md`** in this zip.
