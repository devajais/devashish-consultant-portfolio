// Single source of truth for identity, links and SEO defaults.

export const site = {
  name: 'Devashish Jaiswal',
  givenName: 'Devashish',
  familyName: 'Jaiswal',
  role: 'Fractional CTO & AI Architect',
  url: 'https://devashishjaiswal.com',
  email: 'contact@devashishjaiswal.com',
  motto: 'Decide, Commit, Succeed.',
  tagline:
    'I help founders and business owners, technical or not, make confident decisions about what to build, how to use AI, and whether their idea is actually worth it.',
  // Long form: used in JSON-LD and Open Graph where there is no length cap.
  description:
    'Devashish Jaiswal is a Fractional CTO and AI architect who helps founders and business owners, technical or not, decide what to build, adopt AI that actually pays off, check whether their tech team is on track, and find out if an MVP is worth building.',
  // Short form: the <meta name="description"> Google shows. Keep under 155 characters, name first.
  metaDescription:
    'Devashish Jaiswal is a Fractional CTO & AI Architect who helps founders and business owners decide what to build, adopt AI that pays off, and validate MVPs.',
  // Plain-language bio reused across the site and in structured data.
  bio: 'Devashish Jaiswal is a Fractional CTO and AI architect. He has co-founded startups, led engineering teams, built real-time voice AI, turned running businesses into live AI dashboards, and taken a product all the way to a successful acquisition. Today he helps founders and business owners, most of them non-technical, make smart calls about technology and AI: what to build, whether to build it, whether their team is on track, and where AI genuinely moves the needle.',
  location: 'India · Working globally',
  ogImage: 'https://devashishjaiswal.com/og.png',
  profileImage: '/devashish.png',
  // Site-wide keywords; pages can append their own via <Seo keywords={[...]} />.
  keywords: [
    'Devashish Jaiswal',
    'Devashish Jaiswal Fractional CTO',
    'Devashish Jaiswal AI Architect',
    'Devashish Jaiswal markAIble',
    'Devashish Jaiswal Glimpass',
    'devajais',
    'Fractional CTO',
    'AI Architect',
    'Fractional CTO India',
    'AI consultant for startups',
    'AI strategy for business',
    'AI business dashboards',
    'MVP validation',
    'tech team health check',
    'startup technology advisor',
    'CTO for hire',
    'voice AI',
    'LLM products',
  ],
  links: {
    work: 'https://work.devashishjaiswal.com',
    linkedin: 'https://www.linkedin.com/in/devajais/',
    topmate: 'https://topmate.io/devashish_jaiswal',
    email: 'mailto:contact@devashishjaiswal.com',
  },
} as const;

export interface NavItem {
  label: string;
  to: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: site.links.work, external: true },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
];
