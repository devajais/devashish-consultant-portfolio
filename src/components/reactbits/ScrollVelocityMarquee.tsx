import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from 'motion/react';

/** Wrap a value into the [min, max) range. */
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

interface Props {
  items: string[];
  baseVelocity?: number;
  className?: string;
}

/** Infinite marquee whose speed + direction react to scroll velocity. */
export default function ScrollVelocityMarquee({ items, baseVelocity = 2.5, className }: Props) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const skew = useTransform(smoothVelocity, [-2000, 0, 2000], [-6, 0, 6], { clamp: true });

  // four copies -> wrap across a quarter of the track
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_t, delta) => {
    if (reduce) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-8 font-display text-[clamp(2rem,6vw,5rem)] font-semibold text-ink/90">
            {item}
          </span>
          <span className="text-2xl text-accent">✦</span>
        </span>
      ))}
    </div>
  );

  if (reduce) {
    return (
      <div className={`overflow-hidden ${className ?? ''}`}>
        <div className="flex whitespace-nowrap">{row}</div>
      </div>
    );
  }

  return (
    <motion.div className={`overflow-hidden ${className ?? ''}`} style={{ skewX: skew }}>
      <motion.div className="flex w-max flex-nowrap whitespace-nowrap" style={{ x }}>
        {row}
        {row}
        {row}
        {row}
      </motion.div>
    </motion.div>
  );
}
