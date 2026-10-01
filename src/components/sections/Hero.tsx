import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import HeroScene from '@/components/three/HeroScene';
import MagneticButton from '@/components/reactbits/MagneticButton';
import { Container } from '@/components/Section';
import { site } from '@/site';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // As the hero scrolls away, text lifts + fades and the scene recedes.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
          transition: { duration: 0.9, delay, ease },
        };

  // Masked line reveal for the headline (works great on phones too).
  const line = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { y: '115%' },
          animate: { y: '0%' },
          transition: { duration: 0.95, delay, ease },
        };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { scale: sceneScale, opacity: sceneOpacity }}
      >
        <HeroScene />
      </motion.div>

      {/* vignette so text stays legible over the scene */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(130% 95% at 50% 25%, transparent 38%, var(--color-base) 86%)',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          className="max-w-3xl"
          style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        >
          <motion.p {...rise(0.05)} className="eyebrow mb-6 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.name} · {site.role}
          </motion.p>

          <h1 className="font-display text-[clamp(2.35rem,7.5vw,5.25rem)] font-semibold leading-[1.02] tracking-tight sm:leading-[0.98]">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span {...line(0.12)} className="block">
                The technical{' '}
                <span className="text-gradient" style={{ filter: 'drop-shadow(0 0 24px rgba(34,211,238,0.35))' }}>
                  co-founder
                </span>{' '}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span {...line(0.24)} className="block">
                you wish you had{' '}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span {...line(0.36)} className="block">
                from <span className="text-gradient">day one.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p {...rise(0.52)} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-dim">
            Not sure what to build, whether it’s worth it, if your team is delivering, or where AI
            actually fits? I give founders and business owners a straight answer, and the hands to
            build it.
          </motion.p>

          <motion.div {...rise(0.64)} className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <MagneticButton to="/contact" variant="primary">
              Start a project
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
            <MagneticButton href={site.links.work} external variant="secondary">
              View my work
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
          </motion.div>

          {/* trust / social proof */}
          <motion.div {...rise(0.78)} className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="flex gap-0.5 text-accent" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                </svg>
              ))}
            </span>
            <span className="text-ink-dim">
              Trusted by <span className="font-medium text-ink">30+ founders &amp; businesses</span>, from
              first idea to acquisition.
            </span>
          </motion.div>
        </motion.div>
      </Container>

      {/* scroll cue (now visible on phones too) */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { opacity: cueOpacity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border-2 p-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-accent"
            animate={reduce ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
