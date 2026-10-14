import Seo, { breadcrumbJsonLd, PERSON_ID } from '@/components/Seo';
import { Container, PageHero } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import { CaseStudyCard } from '@/components/cards';
import SelectedWork from '@/components/sections/SelectedWork';
import CtaBanner from '@/components/sections/CtaBanner';
import { caseStudies } from '@/data/site-data';
import { site } from '@/site';

export default function CaseStudies() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${site.url}/case-studies#list`,
      name: `Case studies by ${site.name}`,
      itemListElement: caseStudies.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          '@id': `${site.url}/case-studies#${c.slug}`,
          name: c.title,
          alternativeHeadline: c.subtitle,
          description: `${c.challenge} ${c.outcome}`,
          keywords: c.stack.join(', '),
          author: { '@id': PERSON_ID },
          contributor: { '@type': 'Role', roleName: c.role, contributor: { '@id': PERSON_ID } },
        },
      })),
    },
    breadcrumbJsonLd([{ name: 'Case Studies', path: '/case-studies' }]),
  ];

  return (
    <>
      <Seo
        absoluteTitle="Case Studies · Devashish Jaiswal, Fractional CTO & AI Architect"
        path="/case-studies"
        description="Case studies by Devashish Jaiswal, Fractional CTO: Glimpass (acquired), markAIble real-time voice AI, and Neurolaw AI legal tech built with a team of 12."
        keywords={caseStudies.flatMap((c) => [c.title, ...c.stack])}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Case Studies"
        title="Challenges tackled. Results delivered."
        gradientWords={[3, 4]}
        intro="A showcase of impact, from full-cycle startup exits to AI platforms engineered for serious scale."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.08} className="group h-full">
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <SelectedWork />
      <CtaBanner />
    </>
  );
}
