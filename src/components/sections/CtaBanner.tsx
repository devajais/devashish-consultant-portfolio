import { Container } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import MagneticButton from '@/components/reactbits/MagneticButton';
import { Aurora } from '@/components/three/HeroScene';
import { site } from '@/site';

export default function CtaBanner() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-base-2 px-6 py-20 text-center sm:px-12">
            <div className="absolute inset-0 opacity-70">
              <Aurora />
            </div>
            <div className="relative">
              <p className="eyebrow mb-5 flex justify-center">
                <span>{site.motto}</span>
              </p>
              <h2 className="mx-auto max-w-2xl font-display text-4xl leading-[1.05] sm:text-5xl">
                Let’s build something <span className="text-gradient">worth remembering.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-ink-dim">
                Whether you’re validating an idea or scaling past your first big milestone, I’d
                love to hear what you’re working on.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton to="/contact" variant="primary">
                  Start a conversation
                </MagneticButton>
                <MagneticButton href={site.links.topmate} external variant="secondary">
                  Book a 1:1 call
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
