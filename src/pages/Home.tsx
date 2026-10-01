import { Link } from 'react-router-dom';
import Seo, { personJsonLd, faqJsonLd, websiteJsonLd } from '@/components/Seo';
import { Container, SectionHeading } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import CountUp from '@/components/reactbits/CountUp';
import Parallax from '@/components/reactbits/Parallax';
import MagneticButton from '@/components/reactbits/MagneticButton';
import ScrollHighlightText from '@/components/reactbits/ScrollHighlightText';
import ScrollVelocityMarquee from '@/components/reactbits/ScrollVelocityMarquee';
import Hero from '@/components/sections/Hero';
import ScrollJourney from '@/components/sections/ScrollJourney';
import SelectedWork from '@/components/sections/SelectedWork';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import CtaBanner from '@/components/sections/CtaBanner';
import { CaseStudyCard, BlogCard } from '@/components/cards';
import { caseStudies, stats, launchJourney, faqs } from '@/data/site-data';
import { blogArticles } from '@/content/blog-articles';
import { site } from '@/site';

const latestPosts = [...blogArticles]
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  .slice(0, 3);

export default function Home() {
  return (
    <>
      <Seo path="/" jsonLd={[personJsonLd, websiteJsonLd, faqJsonLd(faqs)]} />

      <Hero />

      {/* Intro: portrait + who I am + stats */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal>
              <Parallax speed={0.06}>
                <figure className="group relative mx-auto w-fit">
                  <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent-2/40 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-90" />
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-border-2 bg-surface">
                    <img
                      src={site.profileImage}
                      alt="Devashish Jaiswal, Fractional CTO and AI Architect"
                      width={460}
                      height={540}
                      className="h-auto w-full max-w-xs object-cover"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-base/90 to-transparent p-5">
                      <div className="font-display text-lg text-white">Devashish Jaiswal</div>
                      <div className="font-mono text-xs uppercase tracking-wider text-accent-soft">
                        {site.role}
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </Parallax>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Who I am"
                title="The person founders call when the stakes are technical."
              />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-dim">
                <p>
                  I’m Devashish Jaiswal, a Fractional CTO and AI architect. I’ve co-founded
                  ventures, led engineering teams, shipped voice-AI at scale, and taken a product
                  all the way to a successful acquisition.
                </p>
                <p>
                  Most of the people I work with aren’t engineers. They’re founders and business
                  owners who need a straight answer: what should we build, is it worth it, is our
                  team on track, and where does AI actually help? That’s exactly what I do.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.06}>
                    <div className="h-full rounded-2xl border border-border bg-surface/40 p-5">
                      <div className="font-display text-3xl text-gradient sm:text-4xl">
                        <CountUp value={s.value} suffix={s.suffix} />
                      </div>
                      <p className="mt-2 text-xs leading-snug text-muted">{s.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-8">
                <MagneticButton to="/about" variant="secondary">
                  More about me
                </MagneticButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Manifesto: scroll-scrubbed word highlight */}
      <section className="py-24 sm:py-32">
        <Container>
          <ScrollHighlightText
            text="I turn uncertainty into clear decisions, scattered data into live dashboards, and good ideas into products founders can point to."
            gradientWords={[5, 10, 15]}
            className="max-w-4xl font-display text-3xl font-semibold leading-[1.18] tracking-tight sm:text-4xl md:text-5xl md:leading-[1.15]"
          />
        </Container>
      </section>

      {/* Journey (pinned scroll) */}
      <ScrollJourney
        eyebrow="How I help"
        title="Your journey to launch."
        stages={launchJourney}
        ctaLabel="Explore all services"
        ctaTo="/services"
      />

      {/* Scroll-velocity marquee band */}
      <div className="border-y border-border py-8">
        <ScrollVelocityMarquee
          items={['AI Strategy', 'AI Dashboards', 'MVP Validation', 'Fractional CTO', 'Team Health Check']}
        />
      </div>

      <SelectedWork />

      {/* Case studies preview */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Case Studies"
              title="Challenges tackled. Results delivered."
            />
            <Link to="/case-studies" className="shrink-0 text-sm text-accent-soft hover:text-white">
              All case studies →
            </Link>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.08} className="group h-full">
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />

      {/* Blog preview */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Writing"
              title="Notes on building, scaling & leading."
            />
            <Link to="/blog" className="shrink-0 text-sm text-accent-soft hover:text-white">
              All articles →
            </Link>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08} className="h-full">
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Faq />

      <CtaBanner />
    </>
  );
}
