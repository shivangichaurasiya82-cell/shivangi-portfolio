# Shivangi Chaurasiya — Portfolio Website

A professional dark-themed portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Darkest | `#06141B` | Page background |
| Dark | `#11212D` | Card backgrounds |
| Mid | `#253745` | Borders, UI elements |
| Slate | `#4A5C6A` | Secondary text, icons |
| Gray | `#9BA8AB` | Primary text, labels |
| Light | `#CCD0CF` | Headings, highlights |

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build

# 4. Export static site (already configured)
# Files will be in the `out/` folder after build
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Customization

### Update LinkedIn & GitHub Links
In `src/components/Hero.tsx` and `src/components/Contact.tsx`, find the social link `href` values and replace with real profile URLs:

```tsx
// Hero.tsx ~line 100
href="https://github.com/YOUR_USERNAME"
href="https://linkedin.com/in/YOUR_USERNAME"

// Contact.tsx ~line 60
href: "https://github.com/YOUR_USERNAME"
href: "https://linkedin.com/in/YOUR_USERNAME"
```

### Add Real Projects
Edit `src/components/Projects.tsx` to add GitHub links when available.

## Deployment

This site is configured for **static export** (`output: 'export'` in `next.config.js`).

**Deploy to Vercel (recommended):**
1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Deploy — it's free!

**Or deploy to Netlify / GitHub Pages** using the `out/` folder.
