// Structured content: services, case studies, skills, testimonials, stats.

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy for Your Business',
    description:
      'Practical AI adoption for teams and offline businesses, minus the hype. We find where AI actually saves time or makes money for you.',
    details: [
      'AI opportunity audit',
      'Build vs buy vs wait',
      'A realistic rollout roadmap',
      'Tool and vendor selection',
    ],
    featured: true,
  },
  {
    id: 'ai-dashboards',
    title: 'AI Business Dashboards',
    description:
      'Turn the systems you already run on, sales, operations, support, into one live AI dashboard that tells you what is actually happening in your business, in plain English.',
    details: [
      'Connect your existing tools and data',
      'Live, plain-language insights',
      'Ask questions, get real answers',
      'Alerts on what needs attention',
    ],
  },
  {
    id: 'mvp-validation',
    title: 'Is It Worth Building?',
    description:
      'An honest, expert read on your idea or MVP before you spend real money, including scope, cost, timeline, and the risks nobody warned you about.',
    details: [
      'Idea and market gut-check',
      'Realistic scope and budget',
      'Build, no-code, or buy',
      'What to build first',
    ],
  },
  {
    id: 'team-healthcheck',
    title: 'Tech Team Health Check',
    description:
      'Not sure if your developers or agency are on track? I review the team, the code, and the roadmap, then tell you straight.',
    details: [
      'Code and architecture review',
      'Team and process assessment',
      'Risk and red-flag report',
      'A clear action plan',
    ],
  },
  {
    id: 'fractional-cto',
    title: 'Fractional CTO',
    description:
      'Ongoing technical leadership to build, hire, and scale, without a full-time CTO salary.',
    details: [
      'Architecture and roadmap',
      'Hiring and mentoring',
      'Vendor and budget oversight',
      'Hands-on when it counts',
    ],
  },
];

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  challenge: string;
  process: string;
  outcome: string;
  stack: string[];
  acquired?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'glimpass',
    title: 'Glimpass',
    subtitle: 'From launch to a successful acquisition',
    role: 'Co-Founder',
    challenge: 'Lead the frontend and cloud infrastructure for a complex indoor-mapping platform.',
    process:
      'Built a dynamic React.js frontend backed by Docker and GCP for scalable infrastructure, with ArangoDB modelling the complex spatial data relationships.',
    outcome:
      'Successfully acquired, validating both the technical foundation and market fit. A full-cycle startup success.',
    stack: ['React.js', 'Docker', 'GCP', 'ArangoDB'],
    acquired: true,
  },
  {
    slug: 'markaible',
    title: 'markAIble',
    subtitle: 'Engineering real-time voice AI for production',
    role: 'Co-Founder & COO (Technology)',
    challenge: 'Build a real-time voice AI platform reliable enough for live customer conversations.',
    process:
      'Architected a voice-orchestration model over OpenAI, Deepgram and 11Labs, containerised with Docker and autoscaled on GCP with Kubernetes.',
    outcome:
      'A resilient platform that stayed fast and dependable under real production load, at 99.9% uptime.',
    stack: ['OpenAI', 'Deepgram', '11Labs', 'Kubernetes', 'Redis'],
  },
  {
    slug: 'neurolaw-ai',
    title: 'Neurolaw AI',
    subtitle: 'Building a vision from the ground up',
    role: 'CTO & Lead Technical Architect',
    challenge: 'Turn a complex legal-tech idea into a structured, scalable, market-ready product.',
    process:
      'Led a team of 12, defining the architecture, roadmap and agile process to execute the founder’s vision quickly.',
    outcome:
      'Launched a powerful product, demonstrating leadership from ideation through team management and delivery.',
    stack: ['LLMs', 'Node.js', 'GCP', 'Team of 12'],
  },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Leadership',
    items: [
      'Fractional CTO',
      'Team Building & Mentorship',
      'Technical Strategy',
      'Product Roadmapping',
    ],
  },
  {
    category: 'AI & Engineering',
    items: [
      'Large Language Models',
      'AI Integration',
      'Cloud Architecture (GCP)',
      'Docker & Kubernetes',
      'React.js',
      'Node.js',
      'Java',
    ],
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 30, suffix: '+', label: 'Businesses & startups advised' },
  { value: 12, suffix: '', label: 'Engineers led as CTO' },
  { value: 1, suffix: '', label: 'Startup acquired' },
  { value: 3, suffix: '+', label: 'Ventures co-founded' },
];

export const philosophy = [
  {
    title: 'Clarity from Chaos',
    body: 'Defining a clear technical path in the fast-paced startup world.',
  },
  {
    title: 'Impact over Perfection',
    body: 'Shipping value quickly, then iterating on real-world feedback.',
  },
  {
    title: 'Building Bold Teams',
    body: 'Empowering engineers to own innovation and grow into leaders.',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Devashish is an exceptional technical leader who brings both deep expertise and strategic vision. He turned a complex idea into a production-ready platform and delivered beyond expectations.',
    name: 'Shivang Jain',
    title: 'Founder & CEO',
  },
];

// Reusable "journey" steps for the pinned scroll animation.
export interface JourneyStage {
  k: string;
  phase: string;
  title: string;
  body: string;
}

export const launchJourney: JourneyStage[] = [
  {
    k: '01',
    phase: 'Validate',
    title: 'Pressure-test the idea',
    body: 'We map the technology, stress the assumptions, and figure out whether this is worth building, before a single rupee or dollar goes into code.',
  },
  {
    k: '02',
    phase: 'Plan',
    title: 'Shape the right build',
    body: 'A clear scope, a realistic budget and timeline, and the honest build-vs-buy-vs-wait calls that save you months.',
  },
  {
    k: '03',
    phase: 'Build',
    title: 'Ship a focused MVP',
    body: 'A tight product in real users’ hands, fast. Real feedback, real learning, no wasted quarters.',
  },
  {
    k: '04',
    phase: 'Scale',
    title: 'Grow without breaking',
    body: 'Architecture, team, and process that hold up as you grow, from first hire to serious load.',
  },
];

export const storyJourney: JourneyStage[] = [
  {
    k: '01',
    phase: 'Co-founded',
    title: 'Built from zero',
    body: 'Started companies as a founder, not a bystander. I know what it feels like to bet everything on a product.',
  },
  {
    k: '02',
    phase: 'Built AI',
    title: 'Real-time voice AI',
    body: 'Architected a real-time voice AI platform reliable enough for live customer conversations in production.',
  },
  {
    k: '03',
    phase: 'Led as CTO',
    title: 'Led the team',
    body: 'Ran a twelve-person engineering team through a complex, ground-up legal-tech build.',
  },
  {
    k: '04',
    phase: 'Exited',
    title: 'Clean acquisition',
    body: 'Took a startup all the way to a successful acquisition. Full cycle, start to finish.',
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Who is Devashish Jaiswal?',
    a: 'Devashish Jaiswal is a Fractional CTO and AI architect. He has co-founded startups, led engineering teams, built voice AI at scale, and taken a product all the way to acquisition. Today he helps founders and business owners make confident technology and AI decisions.',
  },
  {
    q: 'How can Devashish Jaiswal help my business?',
    a: 'Whether you want to build something new, bring in AI, check if your tech team is on track, or find out if your MVP is worth the investment, Devashish gives you clear, honest, expert guidance, and can lead the build when you need it.',
  },
  {
    q: 'I am not technical. Can you still help me?',
    a: 'Absolutely. Most of the founders and business owners I work with are not engineers. I translate technology and AI into plain language and decisions you can actually act on.',
  },
  {
    q: 'Can AI really help my offline or traditional business?',
    a: 'Often yes, but only in specific places. I help you cut through the hype and find where AI genuinely saves time or makes money for your business, then plan a realistic rollout.',
  },
  {
    q: 'How do I know if my tech team or agency is doing a good job?',
    a: 'I run an independent health check on your team, your code, and your roadmap, then give you a straight answer with a clear action plan, no jargon.',
  },
  {
    q: 'Is my idea or MVP worth building?',
    a: 'Before you spend real money, I give you an honest read on scope, cost, timeline, and risks, and tell you what to build first, or whether to build at all.',
  },
];
