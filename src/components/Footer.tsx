import { Link } from 'react-router-dom';
import { navItems, site } from '@/site';

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="eyebrow mb-3">{site.motto}</p>
            <h3 className="max-w-sm font-display text-2xl leading-tight">
              Have an idea worth building? <span className="text-gradient">Let’s make it real.</span>
            </h3>
            <a
              href={site.links.email}
              className="mt-5 inline-block border-b border-accent/40 pb-0.5 text-ink-dim transition-colors hover:border-accent hover:text-white"
            >
              {site.email}
            </a>
          </div>

          <nav className="flex flex-col gap-2.5 text-sm">
            <p className="eyebrow mb-1.5">Navigate</p>
            {navItems.map((item) =>
              item.external ? (
                <a key={item.to} href={item.to} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">
                  {item.label} ↗
                </a>
              ) : (
                <Link key={item.to} to={item.to} className="text-muted hover:text-white">
                  {item.label}
                </Link>
              ),
            )}
            <Link to="/contact" className="text-muted hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-2.5 text-sm">
            <p className="eyebrow mb-1.5">Elsewhere</p>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">
              LinkedIn ↗
            </a>
            <a href={site.links.topmate} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">
              Book a 1:1 ↗
            </a>
            <a href={site.links.work} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">
              Selected Work ↗
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. Built with intent.
          </p>
          <div className="flex items-center gap-3">
            <Social href={site.links.linkedin} label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Social>
            <Social href={site.links.topmate} label="Topmate">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M8 2v3M16 2v3M3.5 9h17M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" strokeLinecap="round" />
              </svg>
            </Social>
          </div>
        </div>
      </div>
    </footer>
  );
}
