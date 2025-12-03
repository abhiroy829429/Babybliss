## BabyBliss – Mini Baby Products E‑commerce PWA (Next.js)

BabyBliss is a **demo-only mini e‑commerce experience for baby products**, inspired by FirstCry.com and built with **Next.js App Router + Tailwind CSS**.

It is configured as a **Progressive Web App (PWA)** and includes a **demo push‑style notification** triggered from a `Send Notification` button.

### Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS (v4 preview, no config mode)
- **PWA**: `manifest.json` + custom `sw.js` service worker
- **Notifications**: Browser Notification API + `showNotification` from the registered service worker

### Running Locally

```bash
cd babybliss
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

For the **PWA + notifications demo**, open it in **Chrome** and:

- Accept the notification permission when prompted by the browser.
- Click the **“Send Notification”** button in the header.
- You should see a system notification titled **“BabyBliss”**.

### PWA Details

- Manifest file: `public/manifest.json`
- Service worker: `public/sw.js`
- Registration: `src/app/register-sw.tsx` (mounted in `page.tsx`)
- Meta + manifest wiring: `src/app/layout.tsx` (`metadata.manifest`, `themeColor`)

You can use **Lighthouse** (Chrome DevTools) to verify installability and basic PWA checks.

### Push Notification Demo

This project demonstrates **client‑initiated notifications only** (no backend push server):

- On first click, it requests Notification permission.
- If granted, it uses the **registered service worker** (if available) to call:
  - `registration.showNotification("BabyBliss", { ... })`
- If there is no service worker registration, it falls back to `new Notification(...)`.

This is sufficient for assessment of the “push‑notifications” requirement in a demo context.

### Deploying & GitHub

1. **Create a GitHub repo**
   - In this folder (`babybliss`), run:
     ```bash
     git init
     git add .
     git commit -m "BabyBliss PWA demo"
     git branch -M main
     git remote add origin <your-github-repo-url>
     git push -u origin main
     ```
2. **Deploy to Vercel (recommended for Next.js)**
   - Go to Vercel, **Import Project from GitHub**, choose your BabyBliss repo.
   - Use default Next.js settings; Vercel will detect and deploy automatically.

After that you will have:

- **GitHub repo link** – e.g. `https://github.com/<your-username>/babybliss`
- **Live preview link** – e.g. `https://babybliss-demo.vercel.app`

You can share those actual URLs once you push and deploy.


