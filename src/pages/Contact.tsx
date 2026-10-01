import { useState } from 'react';
import Seo, { personJsonLd } from '@/components/Seo';
import { Container, PageHero } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import { site } from '@/site';

const channels = [
  {
    label: 'Email',
    value: site.email,
    href: site.links.email,
    hint: 'Best for detailed project briefs',
  },
  {
    label: 'Book a 1:1 call',
    value: 'topmate.io/devashish_jaiswal',
    href: site.links.topmate,
    hint: 'Grab a slot on my calendar',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: '/in/devajais',
    href: site.links.linkedin,
    hint: 'Connect and say hello',
    external: true,
  },
  {
    label: 'See my work',
    value: 'work.devashishjaiswal.com',
    href: site.links.work,
    hint: 'The full portfolio',
    external: true,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry from ${form.name || 'a founder'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`,
    );
    window.location.href = `${site.links.email}?subject=${subject}&body=${body}`;
  }

  const field =
    'w-full rounded-xl border border-border bg-base/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60';

  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Get in touch with Devashish Jaiswal, Fractional CTO & AI Architect. Start a project, book a 1:1 call, or just say hello."
        jsonLd={personJsonLd}
      />

      <PageHero
        eyebrow="Contact"
        title="Let’s build the future."
        gradientWords={[2, 3]}
        intro="Tell me about your project, your strategy, or that idea you can’t stop thinking about. I read every message myself."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <form onSubmit={submit} className="rounded-3xl border border-border bg-surface/40 p-8 sm:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-ink-dim">Name</span>
                    <input
                      required
                      className={field}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-ink-dim">Email</span>
                    <input
                      required
                      type="email"
                      className={field}
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-2 block text-sm text-ink-dim">Company / Project</span>
                  <input
                    className={field}
                    placeholder="What are you building?"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </label>
                <label className="mt-5 block">
                  <span className="mb-2 block text-sm text-ink-dim">How can I help?</span>
                  <textarea
                    required
                    rows={5}
                    className={`${field} resize-none`}
                    placeholder="A few lines about where you are and what you need…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </label>
                <button
                  type="submit"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 font-medium text-base transition-shadow hover:shadow-[0_0_55px_-8px_var(--color-accent)]"
                >
                  Send message
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <p className="mt-4 text-center text-xs text-muted">
                  This opens your email client, pre-filled. Prefer direct? Use a channel on the right.
                </p>
              </form>
            </Reveal>

            <div className="space-y-4">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.06}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/50"
                  >
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-accent-soft">{c.label}</p>
                      <p className="mt-1.5 text-ink">{c.value}</p>
                      <p className="mt-0.5 text-sm text-muted">{c.hint}</p>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
