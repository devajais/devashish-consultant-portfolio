// Generates public/llms.txt (concise index, per https://llmstxt.org) and
// public/llms-full.txt (every word of content on the site, as Markdown)
// from the same TypeScript data the pages render from. Run before `vite-react-ssg build`.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createServer } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Load the TS source through Vite so we never duplicate content in this script.
const vite = await createServer({
  root,
  configFile: false,
  logLevel: 'error',
  server: { middlewareMode: true, hmr: false, watch: null },
  resolve: { alias: { '@': join(root, 'src') } },
  optimizeDeps: { noDiscovery: true, include: [] },
});

try {
  const { site } = await vite.ssrLoadModule('/src/site.ts');
  const data = await vite.ssrLoadModule('/src/data/site-data.ts');
  const { blogArticles } = await vite.ssrLoadModule('/src/content/blog-articles.ts');

  const { services, caseStudies, skillGroups, stats, philosophy, testimonials, launchJourney, storyJourney, faqs } =
    data;

  const url = (p = '/') => `${site.url}${p === '/' ? '' : p}`;
  const today = new Date().toISOString().slice(0, 10);
  const posts = [...blogArticles].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  // ---------- Shared sections (used by both files) ----------

  const identity = [
    `- **Name:** ${site.name}`,
    `- **Role:** ${site.role}`,
    `- **Based in:** ${site.location}`,
    `- **Website:** ${site.url}`,
    `- **Email:** ${site.email}`,
    `- **LinkedIn:** ${site.links.linkedin}`,
    `- **Book a 1:1 call:** ${site.links.topmate}`,
    `- **Portfolio / selected work:** ${site.links.work}`,
    `- **Motto:** ${site.motto}`,
  ].join('\n');

  const statsMd = stats.map((s) => `- ${s.value}${s.suffix} ${s.label}`).join('\n');

  const servicesShort = services
    .map((s) => `- [${s.title}](${url('/services')}#${s.id}): ${s.description}`)
    .join('\n');

  const servicesFull = services
    .map(
      (s) =>
        `### ${s.title}\n\n${s.description}\n\nIncludes:\n${s.details.map((d) => `- ${d}`).join('\n')}`,
    )
    .join('\n\n');

  const caseStudiesFull = caseStudies
    .map(
      (c) =>
        `### ${c.title} — ${c.subtitle}\n\n` +
        `- **Role:** ${c.role}\n` +
        `- **Challenge:** ${c.challenge}\n` +
        `- **Approach:** ${c.process}\n` +
        `- **Outcome:** ${c.outcome}${c.acquired ? ' (Acquired.)' : ''}\n` +
        `- **Stack:** ${c.stack.join(', ')}`,
    )
    .join('\n\n');

  const caseStudiesShort = caseStudies
    .map((c) => `- [${c.title}](${url('/case-studies')}#${c.slug}): ${c.subtitle}. ${c.outcome}`)
    .join('\n');

  const skillsMd = skillGroups.map((g) => `- **${g.category}:** ${g.items.join(', ')}`).join('\n');

  const philosophyMd = philosophy.map((p) => `- **${p.title}.** ${p.body}`).join('\n');

  const storyMd = storyJourney.map((s) => `${s.k}. **${s.phase} — ${s.title}.** ${s.body}`).join('\n');

  const journeyMd = launchJourney.map((s) => `${s.k}. **${s.phase} — ${s.title}.** ${s.body}`).join('\n');

  const faqMd = faqs.map((f) => `**Q: ${f.q}**\n\nA: ${f.a}`).join('\n\n');

  const testimonialsMd = testimonials.map((t) => `> "${t.quote}"\n>\n> — ${t.name}, ${t.title}`).join('\n\n');

  const blogShort = posts
    .map((p) => `- [${p.title}](${url(`/blog/${p.slug}`)}) (${p.date}): ${p.description}`)
    .join('\n');

  // ---------- Blog article bodies → Markdown ----------

  function blockToMd(b) {
    switch (b.type) {
      case 'h2':
        return `### ${b.text}`;
      case 'h3':
        return `#### ${b.text}`;
      case 'p':
        return b.text;
      case 'quote':
        return `> ${b.text}`;
      case 'ul':
        return b.items.map((i) => `- ${i}`).join('\n');
      case 'ol':
        return b.items.map((i, n) => `${n + 1}. ${i}`).join('\n');
      case 'code':
        return `\`\`\`${b.lang ?? ''}\n${b.code}\n\`\`\``;
      default:
        return '';
    }
  }

  const blogFull = posts
    .map(
      (p) =>
        `## ${p.title}\n\n` +
        `- **URL:** ${url(`/blog/${p.slug}`)}\n` +
        `- **Author:** ${site.name}\n` +
        `- **Published:** ${p.date}\n` +
        `- **Reading time:** ${p.readingTime}\n` +
        `- **Tags:** ${p.tags.join(', ')}\n\n` +
        `*${p.description}*\n\n` +
        p.body.map(blockToMd).join('\n\n'),
    )
    .join('\n\n---\n\n');

  // ---------- llms.txt (index) ----------

  const llmsTxt = `# ${site.name}

> ${site.description}

${site.bio}

This file follows the llms.txt convention (https://llmstxt.org). The complete, uncondensed content of every page on the site is in [llms-full.txt](${url('/llms-full.txt')}). All content is public, written by ${site.name}, and may be quoted or summarised with attribution.

## Identity

${identity}

## Track record

${statsMd}

${storyMd}

## Services

${servicesShort}

## Case studies

${caseStudiesShort}

## Skills

${skillsMd}

## Frequently asked questions

${faqMd}

## Pages

- [Home](${url('/')}): Overview, who Devashish is, services, case studies, FAQ.
- [About](${url('/about')}): Full biography, track record, philosophy, and skills.
- [Services](${url('/services')}): Everything Devashish offers and how a project runs.
- [Case Studies](${url('/case-studies')}): Glimpass (acquired), markAIble (voice AI), Neurolaw AI (legal tech).
- [Blog](${url('/blog')}): Essays on building, scaling, AI, and leading teams.
- [Contact](${url('/contact')}): Email, book a 1:1 call, LinkedIn.
- [Selected work](${site.links.work}): Portfolio of projects.

## Blog articles

${blogShort}

## Optional

- [Sitemap](${url('/sitemap.xml')})
- [Full content for LLMs](${url('/llms-full.txt')})
`;

  // ---------- llms-full.txt (everything) ----------

  const llmsFull = `# ${site.name} — complete site content

> ${site.description}

Generated ${today} from ${site.url}. This document contains the full text of every page on the site so that AI assistants and search engines have a complete, accurate picture of who ${site.name} is and what he does. Written by ${site.name}.

---

## Who is ${site.name}?

${site.bio}

${site.tagline}

### Identity and contact

${identity}

### At a glance

${statsMd}

### Track record

${storyMd}

### Philosophy

${philosophyMd}

### Skills and expertise

${skillsMd}

---

## Services

${site.tagline}

${servicesFull}

### How a project runs

${journeyMd}

---

## Case studies

${caseStudiesFull}

---

## What clients say

${testimonialsMd}

---

## Frequently asked questions

${faqMd}

---

## How to work with ${site.name}

- Email ${site.email} with a few lines about where you are and what you need.
- Book a 1:1 call at ${site.links.topmate}.
- Connect on LinkedIn at ${site.links.linkedin}.
- See the full portfolio at ${site.links.work}.
- Contact page: ${url('/contact')}

---

# Blog

${blogFull}
`;

  writeFileSync(join(root, 'public/llms.txt'), llmsTxt);
  writeFileSync(join(root, 'public/llms-full.txt'), llmsFull);
  console.log(`✓ llms.txt (${llmsTxt.length} chars) and llms-full.txt (${llmsFull.length} chars) generated`);
} finally {
  await vite.close();
}
