import { Head } from 'vite-react-ssg';
import { site } from '@/site';

interface SeoProps {
  /** Page title; rendered as "<title> · Devashish Jaiswal". */
  title?: string;
  /** Full <title> used verbatim, for pages that need the name positioned differently. */
  absoluteTitle?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  /** JSON-LD structured data object(s). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  publishedTime?: string;
  modifiedTime?: string;
  /** Extra keywords appended to the site-wide list. */
  keywords?: string[];
  /** Set to true for pages that should not be indexed (e.g. 404). */
  noIndex?: boolean;
}

export default function Seo({
  title,
  absoluteTitle,
  description = site.metaDescription,
  path = '/',
  image = site.ogImage,
  type = 'website',
  jsonLd,
  publishedTime,
  modifiedTime,
  keywords = [],
  noIndex = false,
}: SeoProps) {
  const fullTitle = absoluteTitle ?? (title ? `${title} · ${site.name}` : `${site.name} · ${site.role}`);
  const canonical = `${site.url}${path === '/' ? '' : path}`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const allKeywords = [...new Set([...site.keywords, ...keywords])].join(', ');
  const robots = noIndex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={site.name} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <link rel="canonical" href={canonical} />
      <link rel="author" href={`${site.url}/about`} />
      <link rel="alternate" type="text/plain" href={`${site.url}/llms.txt`} title="LLM-readable summary of this site" />

      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${site.name} · ${site.role}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {type === 'profile' && <meta property="profile:first_name" content={site.givenName} />}
      {type === 'profile' && <meta property="profile:last_name" content={site.familyName} />}
      {type === 'article' && <meta property="article:author" content={`${site.url}/about`} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {(modifiedTime || publishedTime) && (
        <meta property="article:modified_time" content={modifiedTime ?? publishedTime} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${site.name} · ${site.role}`} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
}

/** Stable identifiers so every schema on the site points at the same Person / WebSite node. */
export const PERSON_ID = `${site.url}/#person`;
export const WEBSITE_ID = `${site.url}/#website`;

/** Person schema reused across the site. Rich enough to own the "Devashish Jaiswal" query. */
export const personJsonLd: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: site.name,
  givenName: site.givenName,
  familyName: site.familyName,
  alternateName: ['Devashish', 'Devashish Jaiswal, Fractional CTO', 'devajais'],
  url: site.url,
  mainEntityOfPage: `${site.url}/about`,
  image: {
    '@type': 'ImageObject',
    url: `${site.url}${site.profileImage}`,
    caption: `${site.name}, ${site.role}`,
  },
  jobTitle: site.role,
  description: site.bio,
  email: `mailto:${site.email}`,
  nationality: { '@type': 'Country', name: 'India' },
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  workLocation: { '@type': 'Place', name: 'Remote · Worldwide' },
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'Fractional CTO',
      occupationLocation: { '@type': 'Country', name: 'Worldwide' },
      description:
        'Part-time, hands-on technical leadership for startups and businesses that need a CTO without a full-time CTO salary.',
    },
    {
      '@type': 'Occupation',
      name: 'AI Architect',
      occupationLocation: { '@type': 'Country', name: 'Worldwide' },
      description:
        'Designs and ships practical AI systems: LLM products, real-time voice AI, and AI business dashboards.',
    },
  ],
  sameAs: [site.links.linkedin, site.links.topmate, site.links.work],
  knowsAbout: [
    'Fractional CTO',
    'AI Strategy for Business',
    'AI for Non-Technical Founders',
    'AI Business Dashboards',
    'MVP Validation',
    'Tech Team Audit',
    'Large Language Models',
    'Real-time Voice AI',
    'Cloud Architecture',
    'Google Cloud Platform',
    'Kubernetes',
    'React.js',
    'Node.js',
    'Startup Technology Strategy',
    'Engineering Leadership',
  ],
  knowsLanguage: ['en', 'hi'],
  makesOffer: [
    'AI Strategy for Business',
    'AI Business Dashboards',
    'MVP Validation',
    'Tech Team Health Check',
    'Fractional CTO services',
  ].map((name) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name, provider: { '@id': PERSON_ID } },
  })),
};

/** WebSite schema so search engines can show the site name + sitelinks search box. */
export const websiteJsonLd: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: site.name,
  alternateName: `${site.name} · ${site.role}`,
  url: site.url,
  description: site.description,
  inLanguage: 'en',
  about: { '@id': PERSON_ID },
  publisher: { '@id': PERSON_ID },
  copyrightHolder: { '@id': PERSON_ID },
};

/** ProfilePage schema: tells Google the About page is the canonical page about this person. */
export const profilePageJsonLd: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${site.url}/about#profile`,
  url: `${site.url}/about`,
  name: `About ${site.name}`,
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: { '@id': PERSON_ID },
};

/** FAQ schema for rich results on name + intent searches. */
export function faqJsonLd(items: { q: string; a: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Breadcrumb trail for subpages. `trail` is ordered from the home page outward. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]): Record<string, unknown> {
  const items = [{ name: 'Home', path: '/' }, ...trail];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === '/' ? '' : item.path}`,
    })),
  };
}
