// Generates public/sitemap.xml from the static routes + blog slugs.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const BASE = 'https://devashishjaiswal.com';

const staticPaths = ['/', '/about', '/services', '/case-studies', '/blog', '/contact'];

// Extract blog slugs without importing TS.
const blogSrc = readFileSync(join(root, 'src/content/blog-articles.ts'), 'utf8');
const slugs = [...blogSrc.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
const blogPaths = slugs.map((s) => `/blog/${s}`);

const today = new Date().toISOString().slice(0, 10);
const urls = [...staticPaths, ...blogPaths];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (p) => `  <url>
    <loc>${BASE}${p === '/' ? '' : p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p === '/' || p === '/blog' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${p === '/' ? '1.0' : p.startsWith('/blog/') ? '0.7' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`✓ sitemap.xml generated with ${urls.length} URLs`);
