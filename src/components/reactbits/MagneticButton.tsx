import { type ReactNode, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  strength?: number;
}

interface LinkProps extends BaseProps {
  to: string;
  href?: never;
}
interface AnchorProps extends BaseProps {
  href: string;
  to?: never;
  external?: boolean;
}

type Props = LinkProps | AnchorProps;

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-colors duration-300 overflow-hidden select-none';

const variants: Record<Variant, string> = {
  primary:
    'text-base bg-gradient-to-r from-accent to-accent-2 shadow-[0_0_40px_-10px_var(--color-accent)] hover:shadow-[0_0_55px_-8px_var(--color-accent)]',
  secondary:
    'text-ink border border-border-2 bg-surface/60 backdrop-blur hover:border-accent/60 hover:text-white',
  ghost: 'text-ink-dim hover:text-white',
};

/** Magnetic hover + light sheen. Renders as a Link, anchor, depending on props. */
export default function MagneticButton(props: Props) {
  const { children, variant = 'primary', className = '', strength = 0.35 } = props;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18 });
  const sy = useSpring(y, { stiffness: 260, damping: 18 });

  function onMove(e: React.PointerEvent) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const inner = (
    <>
      {variant === 'primary' && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  const cls = `${base} ${variants[variant]} ${className}`;
  const isAnchor = 'href' in props && !!props.href;
  const openNewTab =
    isAnchor && (('external' in props && props.external) || props.href!.startsWith('http'));

  return (
    <motion.span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x: sx, y: sy, display: 'inline-flex' }}
      data-cursor="lg"
    >
      {'to' in props && props.to ? (
        <Link to={props.to} className={cls}>
          {inner}
        </Link>
      ) : (
        <a
          href={'href' in props ? props.href : undefined}
          className={cls}
          {...(openNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {inner}
        </a>
      )}
    </motion.span>
  );
}
