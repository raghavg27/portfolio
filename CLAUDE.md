# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm install
npm run dev      # dev server on http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run resume:pdf  # regenerate public/Raghav-Gupta-Resume.pdf (needs a server on :3210)
```

There is no test runner, no linter, and no TypeScript in this project. `npm run build` is the only verification gate — run it before claiming a change works.

## Architecture

A fully static editorial portfolio: one long page at `/`, long-form case studies at `/work` and `/work/[slug]`, and a printable CV at `/resume` (`/cv` redirects to it). Next.js 16 App Router + React 19, three dependencies total. No database, no API routes, no server actions, no Tailwind.

**Content/presentation split is the core convention.** Every string, number, URL, and list on the site lives in `data/content.js` as named exports (`site`, `nav`, `cta`, `ticker`, `hero`, `now`, `believe`, `caseStudies`, `evaluation`, `allStudies`, `building`, `ventures`, `roles`, `skills`, `contact`, `resume`). Components in `components/` import those exports and only map over them. Copy edits belong in `data/content.js`; component files change only when markup or structure changes.

`app/page.jsx` assembles the whole page by composing one component per section in order: `Motion`, `Ribbon`, `Masthead`, then `<main>` with `Hero`, `Now`, `Building`, `Believe`, `Record`, `Skills`, then `Colophon`. Section ids (`#now`, `#building`, `#believe`, `#record`, `#skills`, `#contact`) are the anchor targets that `nav` in `data/content.js` links to — adding a section means adding both the component and the nav entry, and `nav` order must match page order.

`Now` is deliberately the first section: the AI-agent-evaluation work is the pivot the whole site argues for, so it sits directly under the hero instead of waiting for `Record`. Its "read more" target is the `evaluation` case study, which is the artifact for work that has no public repo.

**The `/work` routes are the depth layer.** `app/work/page.jsx` lists `allStudies`; `app/work/[slug]/page.jsx` renders one via `components/CaseStudy.jsx`, with `generateStaticParams` over `allStudies` and `notFound()` for anything else. Both pages compose `Motion` + `components/PageBar.jsx` (the slim bar, reusing the `.resume-bar` styles) + `Colophon`, not `Masthead` — the masthead nav is all `#` anchors that do not resolve off the long page.

**Server components by default.** Three `"use client"` files exist and nothing else should become one:

- `components/Motion.jsx` — scroll-progress bar width, the `IntersectionObserver` that adds `.in` to `.reveal` / `.stagger` / `.ruled` elements, and smooth-scroll interception on `nav.main a` and `.nowline a[href^="#"]`. Renders only `<div id="progress" />`.
- `components/MobileNav.jsx` — the hamburger and full-screen panel that are the only navigation below 560px, where `nav.main` is hidden. It handles its own smooth scrolling, scroll lock and Escape key, because `Motion.jsx` binds `nav.main a` once at mount and the panel's links are not that selector. The panel carries its own brand and close button since it is fixed-position and the masthead toggle scrolls away.
- `components/PrintButton.jsx` — `window.print()` on `/resume`.

Do not convert section components to client components.

**Reduced motion is handled in two places** and both must stay in sync: `Motion.jsx` checks `prefers-reduced-motion` and immediately adds `.in` to all revealables (skipping the observer and using `behavior: "auto"` for scroll), and the `prefers-reduced-motion` block near the end of `app/globals.css` disables the animations in CSS.

**Styling is one plain CSS file**, `app/globals.css` (~500 lines), organized by commented section blocks that mirror the component list. `.cv-sec` and `.study-sec` deliberately zero the global `section{padding-block}` rule — the CV and the case studies set their own rhythm. The case-study article is styled as `article.study`, not `.study`: a bare `.study` selector previously collided with a `study` class on a link elsewhere, and the element selector keeps that from recurring. Design tokens are CSS custom properties on `:root` — paper/ink/accent colors, the three font families (`--display` Fraunces, `--body` Newsreader, `--mono` Space Mono), `--maxw`, `--gutter`, `--ease`. Use the tokens; do not introduce hard-coded colors or a CSS framework. Fonts are self-hosted by `next/font/google` in `app/layout.jsx`, which declares `--font-display` / `--font-body` / `--font-mono` on `<html>`; the `:root` tokens read those with the literal family name as the `var()` fallback. Nothing on the page requests fonts.googleapis.com. Only Fraunces carries the `opsz` axis (headlines run from .6rem to 3.4rem) — adding it to Newsreader doubles that family's preloaded bytes for no visible gain at body size, so `font-optical-sizing: auto` is a deliberate no-op there.

Path alias `@/*` maps to the repo root (`jsconfig.json`), e.g. `@/data/content`, `@/components/Hero`.

## Data-shape contracts

Components make assumptions about `data/content.js` that will break silently if violated:

- `roles[].bullets` — strings where `**text**` renders bold. `components/withBold.jsx` splits on `**` and bolds odd-index parts, so asterisks must be balanced. Used by both `Record.jsx` and `/resume`.
- `cta.*` — each entry is `{ label, href, arw?, download?, external? }` and is rendered by `components/CtaButton.jsx`. `download` and `external` are mutually exclusive; `arw` is the trailing glyph, and `↗` gets the diagonal hover nudge via `[data-arw]`.
- `caseStudies[]` — the single source for both the Building grid and `/work/[slug]`. `ventures` is derived from it by `.map()`, so a card and its case study cannot drift apart; edit `caseStudies`, never `ventures`. The full field list is documented in a comment above the array — only `slug`, `name`, `tag`, `status`, `card`, `meta`, `links` and `lede` are required, and `CaseStudy.jsx` omits any block whose field is absent.
- `evaluation` — the same shape, kept out of `caseStudies` because it is not a venture (no repo, no card in the grid). `allStudies = [evaluation, ...caseStudies]` is what the routes and the prev/next footer walk.
- `caseStudies[].meta` / `evaluation.meta` — array of `[key, value]` pairs, rendered into a `<dl>`.
- `caseStudies[].links` — `{ live, repo }`; use `null`, not `""`. A card's links block always carries the case-study link, so it is never empty; the case-study header's button row is omitted when both are falsy.
- `caseStudies[].approach.diagram` / `.shot` — the diagram is a template literal rendered verbatim in `<pre>` inside a horizontally scrollable `.diagram`; avoid glyphs Space Mono renders poorly (`§` among them). `shot` needs `{ src, w, h, alt, cap }` and `portrait: true` for tall images, which caps the plate width.
- `hero.figures[].lines` — array of strings joined with `<br />`.
- `ticker[]` — `{ strong?, rest, dot? }`; `Ribbon.jsx` duplicates the array once for a seamless marquee loop.
- Case-study prose (`problem`, `approach.p`, `decisions[].p`, `proof`, `scope`) is rendered by `components/richText.jsx`, which is a superset of `withBold`: `**bold**`, `` `code` ``, and `**`nested`**`. It splits on `**` first so a code span wrapped in bold survives; both markers must be balanced or the rest of the string inherits the mark.
- `Hero`, `Now`, `Believe`, `Building`, `Record`, `Skills`, `Colophon` hard-code their `<h2>`/`<h1>` headlines and the `Colophon` closing line in JSX rather than reading them from `data/content.js`. The Building folio count is data-driven (`building.folioCount`).

`data/future.js` holds parked ventures and is imported by nothing. To revive one, copy the object into `ventures` in `data/content.js`.

## Resume PDF and OG image

Two binaries in the repo are generated, not authored. Both are regenerated with headless Chrome and must be re-run when their source changes:

- `public/Raghav-Gupta-Resume.pdf` — printed from `/resume`. Run `npm run build`, start a server on port 3210, then `npm run resume:pdf`. The script (`scripts/print-resume.mjs`) drives Chrome over the DevTools protocol because the `--print-to-pdf` CLI flag ignores `@page` and hardcodes US Letter. It prints the laid-out CV height so the `@media print` block in `app/globals.css` can be tuned — keep it under two A4 pages (~1032 CSS px of usable height per page).
- `app/opengraph-image.png` (1200×630) — screenshotted from `scripts/og-image.html`, which carries the exact Chrome command in a comment at the top. Its design tokens are copied from `globals.css` and are not imported, so keep them in sync by hand. `app/opengraph-image.alt.txt` supplies `og:image:alt`.

`metadataBase` in `app/layout.jsx` must stay pointed at the production origin or the emitted `og:image` URL will be relative and social cards will break.

## SEO surface

Four things carry the site's machine-readable identity, and all four read `site.url` from `data/content.js` — change the origin there, not in any of them:

- `app/robots.js` and `app/sitemap.js` — the metadata file conventions, emitted at `/robots.txt` and `/sitemap.xml`. The sitemap walks `allStudies`, so a new case study appears in it automatically; `/cv` is left out on purpose because it is a permanent redirect.
- The `personLd` JSON-LD `Person` node in `app/layout.jsx`, rendered as a `<script type="application/ld+json">` at the top of `<body>`.
- `alternates.canonical` — the root layout sets `/`, and **every** route that adds its own metadata must set its own, or it inherits the root's and self-canonicalises to the homepage.
- `metadataBase`, above.

The `@media print` block flattens `*`, `::before` and `::after` to `opacity: 1; transform: none` with animations and transitions off. That is not cosmetic: the scroll reveal is an `IntersectionObserver` effect, so anything never scrolled past is still at `opacity: 0` when a print job or a full-page capture renders, and the page comes out blank below the fold. Leaving transitions on is enough to catch `.ruled::before` mid-`scaleX`.

## Deployment

Vercel, auto-deploying on push to `main`. `vercel.json` pins `framework: "nextjs"`. `.next/` and `out/` are gitignored — never commit build artifacts.
