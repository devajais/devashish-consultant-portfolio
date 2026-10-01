import Seo, { personJsonLd } from '@/components/Seo';
import { Container, PageHero, SectionHeading } from '@/components/Section';
import Reveal from '@/components/reactbits/Reveal';
import CountUp from '@/components/reactbits/CountUp';
import ScrollJourney from '@/components/sections/ScrollJourney';
import CtaBanner from '@/components/sections/CtaBanner';
import { philosophy, skillGroups, stats, storyJourney } from '@/data/site-data';
import { site } from '@/site';

export default function About() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="Who is Devashish Jaiswal? A Fractional CTO and AI architect who has co-founded startups, led teams, scaled voice AI, and exited, and now helps founders and business owners make confident tech and AI decisions."
        jsonLd={personJsonLd}
      />

      <PageHero
        eyebrow="About"
        title="Meet Devashish Jaiswal."
        gradientWords={[1, 2]}
        intro="The technical partner founders and business owners trust to tell them the truth, make the right calls, and build what actually matters."
      />

      {/* Bio + portrait */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-5 md:items-center">
            <Reveal className="md:col-span-2">
              <div className="group relative mx-auto w-fit">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent-2/40 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-90" />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-border-2 bg-surface">
                  <img
                    src={site.profileImage}
                    alt="Devashish Jaiswal, Fractional CTO & AI Architect"
                    width={480}
                    height={560}
                    className="h-auto w-full max-w-sm object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>

            <div className="space-y-5 text-lg leading-relaxed text-ink-dim md:col-span-3">
              <p className="font-display text-2xl leading-snug text-ink sm:text-[1.7rem]">
                “Most people will tell you what you want to hear.{' '}
                <span className="text-gradient">I’ll tell you what’s worth building,</span> and then I
                build it.”
              </p>
              <p>
                I’m Devashish Jaiswal. I’ve architected real-time voice AI, turned running
                businesses into live AI dashboards, led a twelve-person team as CTO, and taken a
                startup all the way to a clean acquisition. I’ve lived the full arc of building
                technology, from the first line of code to the signed deal.
              </p>
              <p>
                But here’s the thing: most of the people I help aren’t technical. They’re founders
                and business owners who need a trustworthy expert to tell them what to build,
                whether it’s worth it, if their team is on the right track, and where AI genuinely
                fits, in plain language, with no hype.
              </p>
              <p>
                I don’t just advise from the sidelines. I roll up my sleeves: shaping the
                architecture, setting the roadmap, mentoring the team, and making the hard calls.
                Think of me as the technical co-founder you can plug in exactly when you need one.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-surface/40 p-6 text-center">
                  <div className="font-display text-4xl text-gradient">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Track record (pinned scroll journey) */}
      <ScrollJourney eyebrow="Track record" title="The short version of my story." stages={storyJourney} />

      {/* Philosophy */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading center eyebrow="Philosophy" title="The principles I build by." gradientWords={[3]} />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-surface/40 p-8">
                  <span className="font-mono text-xs text-accent-soft">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                  <p className="mt-3 text-ink-dim">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="pb-8">
        <Container>
          <SectionHeading eyebrow="Toolkit" title="Skills & expertise." gradientWords={[1]} />
          <div className="mt-12 space-y-6">
            {skillGroups.map((group, gi) => (
              <Reveal key={group.category} delay={gi * 0.08}>
                <div className="rounded-2xl border border-border bg-surface/40 p-8">
                  <h3 className="font-display text-lg text-accent-soft">{group.category}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-base/60 px-4 py-2 text-sm text-ink-dim transition-colors hover:border-accent/50 hover:text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
