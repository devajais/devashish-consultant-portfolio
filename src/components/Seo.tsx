import { Head } from 'vite-react-ssg';
import { site } from '@/site';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  /** JSON-LD structured data object(s). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  publishedTime?: string;
}

export default function Seo({
  title,
  description = site.description,
  path = '/',
  image = site.ogImage,
  type = 'website',
  jsonLd,
  publishedTime,
}: SeoProps) {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.role}`;
  const canonical = `${site.url}${path === '/' ? '' : path}`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
}

/** Person schema reused across the site. Rich enough to own the "Devashish Jaiswal" query. */
export const personJsonLd: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  alternateName: 'Devashish',
  url: site.url,
  image: `${site.url}${site.profileImage}`,
  jobTitle: site.role,
  description: site.bio,
  email: site.email,
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  sameAs: [site.links.linkedin, site.links.topmate, site.links.work],
  knowsAbout: [
    'Fractional CTO',
    'AI Strategy for Business',
    'AI for Non-Technical Founders',
    'MVP Validation',
    'Tech Team Audit',
    'Large Language Models',
    'Cloud Architecture',
    'Startup Technology Strategy',
  ],
  makesOffer: [
    'AI Strategy for Business',
    'AI Business Dashboards',
    'MVP Validation',
    'Tech Team Health Check',
    'Fractional CTO services',
  ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
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

/** WebSite schema so search engines can show the site name + sitelinks search box. */
export const websiteJsonLd: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: site.url,
  description: site.description,
  publisher: { '@type': 'Person', name: site.name },
};
