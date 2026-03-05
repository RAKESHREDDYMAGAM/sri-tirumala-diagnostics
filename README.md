# Sri Tirumala Diagnostic Center

A modern frontend-only React website for Sri Tirumala Diagnostic Center — a government recognised laboratory in Cheriyal.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

Output in `dist/` folder.

### Preview Build

```bash
npm run preview
```

---

## Deployment

### Option 1: GitHub Pages

1. Push your code to a GitHub repository
2. Go to **Settings** → **Pages** → **Build and deployment**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` branch — the workflow will build and deploy automatically

Your site will be live at:  
`https://<username>.github.io/<repo-name>/`

> **Note:** If your default branch is `master`, change `main` to `master` in `.github/workflows/deploy.yml`

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Connect your repo
4. Build settings (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

### Option 3: Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework preset: Vite (auto-detected)
4. Deploy (uses `vercel.json` for SPA routing)

### Option 4: Static Hosting (GitHub Pages, etc.)

```bash
npm run build
```

Upload contents of `dist/` folder. Ensure your host serves `index.html` for all routes (SPA fallback).

### Environment Variables (Optional)

For production, you can set `VITE_FORMSPREE_FORM_ID` in your hosting platform's environment variables. Copy `.env.example` to `.env` and fill values for local overrides.

---

## Form Setup

Booking form uses [Formspree](https://formspree.io). Submissions go to srithirumaladiagnostics@gmail.com. Form ID is in `src/config.js` (or via `VITE_FORMSPREE_FORM_ID` env var).

---

## Contact

- **Phone:** 8978196941
- **Location:** Cheriyal
- **Email:** srithirumaladiagnostics@gmail.com
- **WhatsApp:** [wa.me/918978196941](https://wa.me/918978196941)
