import { Link } from 'react-router-dom';
import TiltCard from '@/components/reactbits/TiltCard';
import type { CaseStudy, Service } from '@/data/site-data';
import type { BlogArticle } from '@/content/blog-articles';

export function ServiceCard({
  service,
  index,
  compact = false,
}: {
  service: Service;
  index: number;
  compact?: boolean;
}) {
  return (
    <TiltCard
      intensity={5}
      className="group h-full rounded-2xl border border-border bg-surface/40 p-7 transition-colors duration-300 hover:border-border-2"
    >
      <div className="flex h-full flex-col">
        <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="mt-4 font-display text-xl leading-snug">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-dim">{service.description}</p>
        {!compact && (
          <ul className="mt-6 space-y-2 border-t border-border pt-5">
            {service.details.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {d}
              </li>
            ))}
          </ul>
        )}
      </div>
    </TiltCard>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <TiltCard
      intensity={4}
      className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/50 p-8 transition-colors duration-300 hover:border-border-2"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl text-gradient">{study.title}</h3>
          <p className="mt-1 text-sm font-medium text-ink">{study.subtitle}</p>
        </div>
        {study.acquired && (
          <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
            Acquired
          </span>
        )}
      </div>

      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">{study.role}</p>

      <dl className="mt-6 space-y-4 border-t border-border pt-6 text-sm">
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-accent-soft">Challenge</dt>
          <dd className="mt-1 text-ink-dim">{study.challenge}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-accent-soft">Outcome</dt>
          <dd className="mt-1 text-ink-dim">{study.outcome}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-2">
        {study.stack.map((t) => (
          <span key={t} className="rounded-full border border-border bg-base/60 px-3 py-1 text-xs text-muted">
            {t}
          </span>
        ))}
      </div>
    </TiltCard>
  );
}

export function BlogCard({ post }: { post: BlogArticle }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 p-7 transition-all duration-300 hover:border-border-2 hover:bg-surface"
    >
      <div className="flex items-center gap-3 font-mono text-xs text-muted">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </time>
        <span className="h-1 w-1 rounded-full bg-border-2" />
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-4 font-display text-xl leading-snug transition-colors group-hover:text-white">
        {post.title}
      </h3>
      <p className="mt-3 flex-grow text-sm leading-relaxed text-ink-dim">{post.excerpt}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((t) => (
          <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted">
            {t}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-soft">
        Read article
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
