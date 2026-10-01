import Seo from '@/components/Seo';
import { Container, PageHero } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import { BlogCard } from '@/components/cards';
import CtaBanner from '@/components/sections/CtaBanner';
import { blogArticles } from '@/content/blog-articles';
import { site } from '@/site';

const posts = [...blogArticles].sort((a, b) => +new Date(b.date) - +new Date(a.date));

export default function BlogIndex() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${site.name} Â· Writing`,
    url: `${site.url}/blog`,
    author: { '@type': 'Person', name: site.name },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      url: `${site.url}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <Seo
        title="Blog"
        path="/blog"
        description="Essays on building, scaling, and leading, from making your first tech hire to shipping AI products and turning a running business into a live AI dashboard."
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
