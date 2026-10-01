import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'motion/react';

interface Props {
  text: string;
  className?: string;
  /** Words to tint with the accent gradient. */
  gradientWords?: number[];
}

function Word({
  children,
  progress,
  range,
  gradient,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  gradient: boolean;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className={`inline-block ${gradient ? 'text-gradient' : ''}`}>
      {children}
    </motion.span>
  );
}

/** A statement that lights up word-by-word, scrubbed to scroll position. */
export default function ScrollHighlightText({ text, className, gradientWords = [] }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = text.split(' ');

  if (reduce) {
    return (
      <p className={className}>
        {words.map((w, i) => (
          <span key={i} className={gradientWords.includes(i) ? 'text-gradient' : undefined}>
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Fragment key={i}>
            <Word progress={scrollYProgress} range={[start, end]} gradient={gradientWords.includes(i)}>
              {word}
            </Word>
            {i < words.length - 1 ? ' ' : ''}
          </Fragment>
        );
      })}
    </p>
  );
}
