import { Link, useParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import { Container } from '@/components/Section';
import { Aurora } from '@/components/three/HeroScene';
import ArticleRenderer from '@/components/ArticleRenderer';
import Reveal from '@/components/reactbits/Reveal';
import MagneticButton from '@/components/reactbits/MagneticButton';
import { BlogCard } from '@/components/cards';
import NotFound from '@/pages/NotFound';
import { blogArticles } from '@/content/blog-articles';
import { site } from '@/site';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogArticles.find((a) => a.slug === slug);

  if (!post) return <NotFound />;

  const related = blogArticles.filter((a) => a.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(', '),
    author: { '@type': 'Person', name: site.name, url: site.url },
    publisher: { '@type': 'Person', name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    image: site.ogImage,
  };

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      <Seo
        title={post.title}
        path={`/blog/${post.slug}`}
        description={post.description}
        type="article"
        publishedTime={post.date}
        jsonLd={jsonLd}
      />

      {/* Header */}
      <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
          <Aurora />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(90% 70% at 50% 0%, transparent 40%, var(--color-base) 90%)' }}
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <Link to="/blog" className="group inline-flex items-center gap-2 text-sm text-muted hover:text-white">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:-translate-x-0.5">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All articles
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
              <time dateTime={post.date}>{formattedDate}</time>
              <span className="h-1 w-1 rounded-full bg-border-2" />
              <span>{post.readingTime}</span>
            </div>

            <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05]">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-border pt-8">
              <img
                src={site.profileImage}
                alt={site.name}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full border border-border-2 object-cover"
                loading="lazy"
              />
              <div className="text-sm">
                <div className="font-medium text-white">{site.name}</div>
                <div className="text-muted">{site.role}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="pb-16">
        <Container>
          <article className="mx-auto max-w-3xl">
            <ArticleRenderer body={post.body} />
          </article>
        </Container>
      </section>

      {/* Footer CTA + related */}
      <section className="pb-8">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface/40 p-8 text-center sm:p-10">
            <p className="eyebrow mb-3 flex justify-center">{site.motto}</p>
            <h2 className="font-display text-2xl sm:text-3xl">
              Working on something like this?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-ink-dim">
              If this resonated, let’s talk about your product. I partner with a handful of
              founders at a time.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <MagneticButton to="/contact" variant="primary">
                Start a conversation
              </MagneticButton>
              <MagneticButton href={site.links.work} external variant="secondary">
                See my work
              </MagneticButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="pb-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-display text-xl text-muted">Keep reading</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08} className="h-full">
                  <BlogCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
