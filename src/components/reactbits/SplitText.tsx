import { type ElementType, Fragment, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface SplitTextProps {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
  /** Highlight these words (0-indexed) with the accent gradient. */
  gradientWords?: number[];
}

const ease = [0.16, 1, 0.3, 1] as const;

/** Word-by-word masked reveal driven by a single reliable in-view observer. */
export default function SplitText({
  text,
  className,
  as: TagProp = 'h2',
  delay = 0,
  stagger = 0.045,
  gradientWords = [],
}: SplitTextProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const words = text.split(' ');
  const Tag = TagProp as React.ElementType as any;

  if (reduce) {
    return (
      <Tag className={className}>
        {words.map((w, i) => (
          <span key={i} className={gradientWords.includes(i) ? 'text-gradient' : undefined}>
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              className={`inline-block ${gradientWords.includes(i) ? 'text-gradient' : ''}`}
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : { y: '110%' }}
              transition={{ duration: 0.7, delay: delay + i * stagger, ease }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </Tag>
  );
}
