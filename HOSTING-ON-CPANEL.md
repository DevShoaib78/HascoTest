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

### 2. Wipe the application folder and upload this zip

> **The cleanest deploy is a clean folder.** Use this exact sequence for both first-time deploys *and* every future update — it eliminates any chance of stale or mismatched files causing problems.

1. First, **stop the Node.js app**: in **Setup Node.js App**, click **■ STOP APP**.
2. cPanel → **File Manager** → navigate to your application root (e.g. `/home/<account>/hasconew/`).
3. **Delete everything in that folder.** Select all files and folders (including `.next/`, `node_modules/`, `stderr.log`, all source folders, every config file) → Delete → then **View Trash → Empty Trash**.
4. The folder should now be completely empty. Verify by clicking refresh in File Manager.
5. **Upload `hasco-cpanel-deploy.zip`** into the now-empty folder.
6. Right-click the uploaded zip → **Extract** → into the application root.
7. After extraction, the folder should directly contain `package.json`, `server.js`, `app/`, `src/`, `public/`, `messages/`, `.next/`, etc. (NOT a nested subfolder). If you see a single subfolder containing everything, move its contents up one level.
8. You can delete the zip itself after extraction to save space.

### 3. Add the environment variable

Go back to **Setup Node.js App** → click the pencil icon to edit your app.

Scroll to **Environment variables** → click **+ ADD VARIABLE**:

- **Name:** `NEXT_PUBLIC_SITE_URL`
- **Value:** `https://<your-final-domain>` (e.g. `https://hasco.com.sa`)

Click **Save**.

### 4. Install dependencies

In the same Node.js App panel, click **▶ Run NPM Install**.

> Because Step 2 wiped the entire folder (including `node_modules/`), this step is **required every time** you redeploy — not optional.

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

Any time the source code changes, the developer will rebuild the `.next/` folder on a Linux machine and send you a new zip (see `DOCUMENTATION.md` Section 6 Option D for the technical details).

When you receive a new zip, **redeploy by repeating the same 6 steps above** — wipe the folder, upload, extract, **▶ Run NPM Install**, **🔁 RESTART**. Same exact process every time. Same instructions for every update.

For full project documentation, see **`DOCUMENTATION.md`** in this zip.
