import Seo from '@/components/Seo';
import { Container, PageHero } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import { CaseStudyCard } from '@/components/cards';
import SelectedWork from '@/components/sections/SelectedWork';
import CtaBanner from '@/components/sections/CtaBanner';
import { caseStudies } from '@/data/site-data';

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case Studies"
        path="/case-studies"
        description="Real outcomes from Devashish Jaiswal: an acquired startup, a real-time voice AI platform, and a legal-tech product built from the ground up."
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
