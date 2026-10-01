import { type ReactNode } from 'react';
import SplitText from '@/components/reactbits/SplitText';
import { Aurora } from '@/components/three/HeroScene';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  gradientWords?: number[];
  intro?: string;
  children?: ReactNode;
}

/** Top-of-page header for inner routes, with a subtle aurora wash behind it. */
export function PageHero({ eyebrow, title, gradientWords, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-6 pt-36 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <Aurora />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(90% 70% at 50% 0%, transparent 40%, var(--color-base) 90%)' }}
      />
      <Container className="relative">
        <div className="max-w-3xl">
          <div className="mb-5">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <SplitText
            as="h1"
            text={title}
            gradientWords={gradientWords}
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.0]"
          />
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim">{intro}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2">
      <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent" />
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** word indices to highlight with the gradient */
  gradientWords?: number[];
  intro?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  gradientWords,
  intro,
  center,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`mb-4 ${center ? 'flex justify-center' : ''}`}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <SplitText
        as="h2"
        text={title}
        gradientWords={gradientWords}
        className="font-display text-3xl font-semibold leading-[1.05] sm:text-4xl md:text-5xl"
      />
      {intro && <p className="mt-5 text-lg leading-relaxed text-ink-dim">{intro}</p>}
    </div>
  );
}
