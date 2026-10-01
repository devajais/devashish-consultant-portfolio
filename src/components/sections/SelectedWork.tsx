import { motion, useReducedMotion } from 'motion/react';
import { Container, SectionHeading } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import { site } from '@/site';

/** Prominent funnel to work.devashishjaiswal.com. */
export default function SelectedWork() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="A deeper look at what I’ve built."
            intro="Case studies, live products, and experiments, the full archive lives on my dedicated work showcase."
          />
        </div>

        <Reveal className="mt-12">
          <a
            href={site.links.work}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 transition-colors duration-500 hover:border-accent/40 sm:p-12"
          >
            {/* animated gradient sheen */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(600px circle at var(--x,50%) var(--y,50%), color-mix(in oklab, var(--color-accent) 12%, transparent), transparent 60%)',
              }}
            />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-soft">
                  work.devashishjaiswal.com
                </p>
                <h3 className="mt-4 max-w-xl font-display text-3xl leading-tight sm:text-4xl">
                  Explore the full portfolio of products, builds & experiments.
                </h3>
                <p className="mt-4 max-w-lg text-ink-dim">
                  From acquired startups to real-time voice AI and live business dashboards,
                  see the work in detail.
                </p>
              </div>

              <motion.span
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-border-2 bg-base/60 text-accent"
                whileHover={reduce ? {} : { scale: 1.08, rotate: 45 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M6 18L18 6M18 6H8M18 6V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
            </div>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
