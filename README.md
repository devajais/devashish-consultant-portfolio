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

## SEO & LLM discoverability

- Per-page `<title>`, meta description, keywords, author, robots, canonical, OpenGraph & Twitter tags (`src/components/Seo.tsx`)
- JSON-LD with a shared `@id` graph: `Person` (rich: occupations, knowsAbout, offers), `WebSite`,
  `ProfilePage` (About), `Service` ×5 + `FAQPage` (Services), `Blog` / `BlogPosting`, `ItemList`
  (Case Studies), `ContactPage`, and `BreadcrumbList` on every subpage
- `llms.txt` (concise index, per [llmstxt.org](https://llmstxt.org)) and `llms-full.txt` (every
  word on the site as Markdown), both generated at build time by `scripts/gen-llms.mjs` from the
  same data the pages render from. Linked from `<link rel="alternate">` in every head and the footer.
- `robots.txt` explicitly allows Google, Bing and the major AI crawlers (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, …) and points at the sitemap
- `sitemap.xml` (auto-generated), branded `og.png`, `404.html` (noindex)

Regenerate the derived files without a full build with `npm run generate`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages. The site serves from the custom domain via `public/CNAME`.

**DNS (one-time):** point `devashishjaiswal.com` at GitHub Pages —
`A` records to `185.199.108–111.153`, and a `CNAME` for `www` → `devajais.github.io`.
Then enable HTTPS in the repo's Pages settings.
