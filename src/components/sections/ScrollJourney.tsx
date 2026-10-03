import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'motion/react';
import { Container, Eyebrow } from '@/components/Section';
import type { JourneyStage } from '@/data/site-data';

interface ScrollJourneyProps {
  eyebrow: string;
  title: string;
  stages: JourneyStage[];
  ctaLabel?: string;
  ctaTo?: string;
}

function StageCard({ stage, active }: { stage: JourneyStage; active: boolean }) {
  return (
    <div
      className={`relative flex h-full flex-col justify-between rounded-3xl border p-8 transition-all duration-500 sm:p-10 ${
        active
          ? 'border-accent/40 bg-surface shadow-[0_0_60px_-20px_var(--color-accent)]'
          : 'border-border bg-surface/30'
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-display text-7xl font-semibold transition-colors duration-500 sm:text-8xl ${
            active ? 'text-gradient' : 'text-border-2'
          }`}
        >
          {stage.k}
        </span>
        <span className="eyebrow">{stage.phase}</span>
      </div>
      <div>
        <h3 className="font-display text-2xl sm:text-3xl">{stage.title}</h3>
        <p className="mt-3 max-w-md text-ink-dim">{stage.body}</p>
      </div>
    </div>
  );
}

export default function ScrollJourney({ eyebrow, title, stages, ctaLabel, ctaTo }: ScrollJourneyProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  // Travel one centered panel at a time. Step = panel(56vw) + gap(4vw) = 60vw.
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(stages.length - 1) * 60}vw`]);
  const fill = useTransform(scrollYProgress, [0, 1], ['6%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const i = Math.min(stages.length - 1, Math.max(0, Math.round(v * (stages.length - 1))));
    setActive(i);
  });

  const Header = (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="mb-4">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="font-display text-3xl font-semibold leading-[1.05] sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {ctaLabel && ctaTo && (
        <Link to={ctaTo} className="text-sm text-accent-soft hover:text-white">
          {ctaLabel} →
        </Link>
      )}
    </div>
  );

  return (
    <section>
      {/* Desktop: pinned horizontal travel (skipped when motion is reduced) */}
      {!reduce && (
        <div ref={ref} className="relative hidden h-[240vh] md:block">
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
            <Container>{Header}</Container>

            <div className="relative mt-12 overflow-hidden">
              <motion.div style={{ x }} className="flex gap-[4vw] pl-[22vw] pr-[22vw]">
                {stages.map((stage, i) => (
                  <div key={stage.k} className="w-[56vw] shrink-0" style={{ height: '46vh' }}>
                    <StageCard stage={stage} active={active === i} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* progress rail */}
            <Container className="mt-10">
              <div className="flex items-center gap-5">
                <span className="font-mono text-sm text-muted">
                  {String(active + 1).padStart(2, '0')}
                  <span className="text-border-2"> / {String(stages.length).padStart(2, '0')}</span>
                </span>
                <div className="relative h-px flex-grow bg-border">
                  <motion.div
                    style={{ width: fill }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent-2"
                  />
                  <div className="absolute inset-0 flex justify-between">
                    {stages.map((s, i) => (
                      <span
                        key={s.k}
                        className={`-mt-[3px] h-[7px] w-[7px] rounded-full transition-colors duration-300 ${
                          i <= active ? 'bg-accent' : 'bg-border-2'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}

      {/* Mobile (and reduced-motion): simple vertical stack */}
      <div className={`py-24 ${reduce ? '' : 'md:hidden'}`}>
        <Container>
          {Header}
          <div className="mt-10 space-y-4">
            {stages.map((stage) => (
              <div key={stage.k} style={{ minHeight: '220px' }}>
                <StageCard stage={stage} active />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
