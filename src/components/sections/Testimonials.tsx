import { Container, SectionHeading } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import { testimonials } from '@/data/site-data';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading center eyebrow="In their words" title="Trusted by the founders I build with." />
        <div className="mx-auto mt-14 grid max-w-4xl gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="border-gradient relative rounded-3xl p-8 sm:p-12">
                <div className="font-display text-6xl leading-none text-accent/30">“</div>
                <blockquote className="-mt-6 text-xl leading-relaxed text-ink sm:text-2xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-base">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <div>
                    <div className="font-medium text-white">{t.name}</div>
                    <div className="text-sm text-muted">{t.title}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
