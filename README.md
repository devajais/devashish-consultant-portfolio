# devashishjaiswal.com

Personal site & identity for **Devashish Jaiswal** — Fractional CTO & AI Architect.

Dark, futuristic, hand-crafted. Built to be fast, accessible, and genuinely crawlable.

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **vite-react-ssg** — every route is statically pre-rendered to real, crawlable HTML
- **Three.js + @react-three/fiber + drei** — the interactive hero scene (lazy, client-only)
- **Motion** (`motion/react`) — scroll reveals, magnetic buttons, tilt cards, count-ups
- Fonts: Clash Display + Satoshi (Fontshare) + JetBrains Mono

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # generates sitemap + static SSG build into dist/
npm run preview    # serve the built site
```

## Content

- Site identity, links & nav: `src/site.ts`
- Services / case studies / skills / testimonials: `src/data/site-data.ts`
- Blog articles (structured content): `src/content/blog-articles.ts`

Add a blog post by appending to `blogArticles` — its route, sitemap entry, and SEO
tags are generated automatically.

## SEO

- Per-page `<title>`, meta description, canonical, OpenGraph & Twitter tags (`src/components/Seo.tsx`)
- JSON-LD: `Person`, `BlogPosting`, `Blog`, `Service`
- `sitemap.xml` (auto-generated), `robots.txt`, branded `og.png`, `404.html`

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages. The site serves from the custom domain via `public/CNAME`.

**DNS (one-time):** point `devashishjaiswal.com` at GitHub Pages —
`A` records to `185.199.108–111.153`, and a `CNAME` for `www` → `devajais.github.io`.
Then enable HTTPS in the repo's Pages settings.
