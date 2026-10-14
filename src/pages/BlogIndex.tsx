import Seo, { breadcrumbJsonLd, PERSON_ID } from '@/components/Seo';
import { Container, PageHero } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import { BlogCard } from '@/components/cards';
import CtaBanner from '@/components/sections/CtaBanner';
import { blogArticles } from '@/content/blog-articles';
import { site } from '@/site';

const posts = [...blogArticles].sort((a, b) => +new Date(b.date) - +new Date(a.date));

export default function BlogIndex() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${site.url}/blog#blog`,
      name: `${site.name} · Writing`,
      url: `${site.url}/blog`,
      inLanguage: 'en',
      author: { '@id': PERSON_ID },
      publisher: { '@id': PERSON_ID },
      blogPost: posts.map((p) => ({
        '@type': 'BlogPosting',
        '@id': `${site.url}/blog/${p.slug}#article`,
        headline: p.title,
        description: p.description,
        datePublished: p.date,
        keywords: p.tags.join(', '),
        url: `${site.url}/blog/${p.slug}`,
        author: { '@id': PERSON_ID },
      })),
    },
    breadcrumbJsonLd([{ name: 'Blog', path: '/blog' }]),
  ];

  return (
    <>
      <Seo
        absoluteTitle="Blog · Devashish Jaiswal on AI, Startups & Engineering Leadership"
        path="/blog"
        description="Articles by Devashish Jaiswal, Fractional CTO & AI Architect, on hiring your first engineer, building AI MVPs, AI business dashboards, and leading teams."
        keywords={[...new Set(posts.flatMap((p) => p.tags))]}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Writing"
        title="Notes on building, scaling & leading."
        gradientWords={[4]}
        intro="Practical, opinionated field notes from the trenches of startup technology, no filler, just what actually worked."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08} className="h-full">
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
