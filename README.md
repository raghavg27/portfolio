# Raghav Gupta — Portfolio

An editorial, magazine-style portfolio built with Next.js (App Router). All copy,
ventures, roles, skills and contact details live in a single file, so you can edit
the whole site without touching layout code.

## Stack

- Next.js 16 (App Router), React 19
- Plain CSS design system in `app/globals.css` (no Tailwind, no build config to fight)
- Fonts loaded from Google Fonts: Fraunces, Newsreader, Space Mono
- No database, no server code — fully static, deploys anywhere

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Edit your content

Everything you will want to change is in **`data/content.js`**:

- `site` — name, tagline, email, GitHub, LinkedIn, phone
- `hero` — headline lede, the three figures, the "now building" links
- `believe` — the intro line and the three principles
- `ventures` — your projects (name, status, description, meta, optional repo link)
- `roles` — work history; wrap emphasis in `**double asterisks**` to render it bold
- `skills` — the grouped toolkit and education
- `contact` — the closing line

Section markup lives in `components/`. Styling lives in `app/globals.css`.

## Project structure

```
.
├── app/
│   ├── layout.jsx      # metadata, fonts, global CSS
│   ├── page.jsx        # assembles the sections
│   └── globals.css     # the full design system
├── components/         # one file per section + Motion (scroll/reveal logic)
├── data/
│   └── content.js      # ← edit everything here
└── public/
```

## Deploy to Vercel

The easiest path, since you already use GitHub:

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** your repo.
3. Vercel detects Next.js automatically. Leave every setting at its default and
   click **Deploy**. No build command or output directory changes are needed.
4. Every `git push` to your main branch redeploys the site.

### Custom domain

In the Vercel project: **Settings → Domains → Add**, then point the DNS records
Vercel gives you at your domain. HTTPS is issued automatically.

## Accessibility and polish

- Respects `prefers-reduced-motion` (animations and smooth scroll disable cleanly)
- Keyboard-focusable, visible focus rings
- Prints cleanly (sticky header and ticker flatten for print)
