import { type ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

/** Seamless infinite marquee (duplicates content, translates -50%). */
export default function Marquee({ children, duration = 30, className = '' }: MarqueeProps) {
  return (
    <div className={`mask-fade-x overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee"
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
