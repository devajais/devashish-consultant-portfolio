import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { navItems, site } from '@/site';

function ArrowUpRight() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="opacity-60">
      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'px-3.5 py-1.5 rounded-full text-sm transition-colors duration-300';

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[94vw] max-w-5xl -translate-x-1/2 md:top-6">
      <nav
        className={`flex items-center justify-between gap-2 rounded-full border px-2 py-2 transition-all duration-500 ${
          scrolled
            ? 'border-border-2 bg-base/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl'
            : 'border-border bg-surface/40 backdrop-blur-lg'
        }`}
      >
        <Link to="/" className="group flex items-center gap-2 pl-2 pr-1" aria-label="Home">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-[13px] font-bold text-base">
            DJ
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            Devashish<span className="text-muted"> Jaiswal</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkBase} inline-flex items-center gap-1 text-muted hover:text-white`}
              >
                {item.label}
                <ArrowUpRight />
              </a>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? 'bg-white/5 text-white' : 'text-muted hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </div>

        <div className="flex items-center gap-1">
          <Link
            to="/contact"
            className="hidden rounded-full bg-white/[0.06] px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-border-2 transition-all hover:bg-white/10 hover:ring-accent/50 md:inline-block"
          >
            Let’s talk
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span className={`h-px w-full bg-current transition-transform duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`h-px w-full bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`h-px w-full bg-current transition-transform duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 rounded-3xl border border-border-2 bg-base/90 p-3 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.to}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-ink-dim hover:bg-white/5 hover:text-white"
                  >
                    {item.label} <ArrowUpRight />
                  </a>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 ${isActive ? 'bg-white/5 text-white' : 'text-ink-dim hover:bg-white/5 hover:text-white'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
              <Link
                to="/contact"
                className="mt-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-4 py-3 text-center font-medium text-base"
              >
                Let’s talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
