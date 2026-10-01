import type { ArticleBlock } from '@/content/blog-articles';

/** Renders structured article blocks as styled, semantic HTML. */
export default function ArticleRenderer({ body }: { body: ArticleBlock[] }) {
  return (
    <div className="space-y-6">
      {body.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={i} className="pt-6 font-display text-2xl leading-snug text-white sm:text-3xl">
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} className="pt-4 font-display text-xl text-white">
                {block.text}
              </h3>
            );
          case 'p':
            return (
              <p key={i} className="text-lg leading-relaxed text-ink-dim">
                {block.text}
              </p>
            );
          case 'ul':
            return (
              <ul key={i} className="space-y-3 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-lg leading-relaxed text-ink-dim">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-lg leading-relaxed text-ink-dim">
                    <span className="font-mono text-sm text-accent-soft">{String(j + 1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ol>
            );
          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-2 border-accent/60 py-2 pl-6 font-display text-xl italic leading-relaxed text-white sm:text-2xl"
              >
                {block.text}
              </blockquote>
            );
          case 'code':
            return (
              <div key={i} className="overflow-hidden rounded-xl border border-border bg-base-2">
                <div className="flex items-center justify-between border-b border-border px-4 py-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">{block.lang}</span>
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-border-2" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border-2" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border-2" />
                  </span>
                </div>
                <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
                  <code className="font-mono text-ink-dim">{block.code}</code>
                </pre>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
