import Seo, { faqJsonLd } from '@/components/Seo';
import { Container, PageHero, SectionHeading } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import { ServiceCard } from '@/components/cards';
import ScrollJourney from '@/components/sections/ScrollJourney';
import Faq from '@/components/sections/Faq';
import CtaBanner from '@/components/sections/CtaBanner';
import { services, launchJourney, faqs } from '@/data/site-data';
import { site } from '@/site';

export default function Services() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: { '@type': 'Person', name: site.name, url: site.url },
    serviceType: services.map((s) => s.title),
    areaServed: 'Worldwide',
    description: site.description,
  };
  const jsonLd = [serviceJsonLd, faqJsonLd(faqs)];

  return (
    <>
      <Seo
        title="Services"
        path="/services"
        description="AI strategy, MVP validation, tech team health checks, and Fractional CTO help for founders and business owners, technical or not. Honest, hands-on, no hype."
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Services"
        title="Clear answers. Then real building."
        gradientWords={[0, 1]}
        intro="Whether you want to adopt AI, sanity-check an idea, audit your team, or scale a product, I give you a straight answer first, and the hands to build it if you need them."
      />

      {/* Featured service */}
      <section className="pb-8 pt-10">
        <Container>
          <Reveal>
            <div className="border-gradient relative overflow-hidden rounded-3xl p-8 sm:p-12">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent-soft">
                Where most people start
              </span>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
                {services[0].title}
              </h2>
              <p className="mt-4 max-w-xl text-lg text-ink-dim">{services[0].description}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {services[0].details.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-ink-dim">
                    <svg className="h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Journey (pinned scroll) */}
      <ScrollJourney
        eyebrow="How a project runs"
        title="Your journey to launch."
        stages={launchJourney}
      />

      {/* All services grid */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Everything I offer" title="Pick the help that fits where you are." gradientWords={[5, 6]} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(1).map((service, i) => (
              <Reveal key={service.id} delay={i * 0.06} className="group h-full">
                <ServiceCard service={service} index={i + 1} />
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
