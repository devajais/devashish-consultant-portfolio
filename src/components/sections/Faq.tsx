import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Container, SectionHeading } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import { faqs } from '@/data/site-data';

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-2xl border border-border bg-surface/40 transition-colors hover:border-border-2">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-lg text-ink sm:text-xl">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-2 transition-all duration-300 ${
            open ? 'rotate-45 border-accent/60 text-accent' : 'text-muted'
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-ink-dim">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          center
          eyebrow="Common questions"
          title="Is this for me? Probably, yes."
          intro="Straight answers for founders and business owners weighing up their next move."
        />
        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 3) * 0.06}>
              <Item q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
