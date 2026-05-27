import type { Metadata } from 'next';
import ToolSlugPageClient from './ToolSlugPageClient';
import { toolSlugs } from '@/lib/slug-map';
import { toolContentData } from '@/lib/tool-content';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = toolSlugs[slug];

  if (!tool) {
    return {
      title: 'Tool Not Found',
      description: 'The requested tool could not be found.',
      alternates: { canonical: `https://astroinsighttools.com/tools/${slug}` },
      twitter: { card: 'summary' },
  openGraph: {
        url: `https://astroinsighttools.com/tools/${slug}`,
        title: 'Tool Not Found — Astro Insight Tools',
      },
    };
  }

  const title = tool.title;
  const pageUrl = `https://astroinsighttools.com/tools/${slug}`;
  return {
    title,
    description: tool.description,
    alternates: { canonical: pageUrl },
    twitter: { card: 'summary' },
    openGraph: {
      url: pageUrl,
      title: `${title} | Astro Insight Tools`,
      description: tool.description,
    },
  };
}

export default async function ToolSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = toolSlugs[slug];
  const pageUrl = `https://astroinsighttools.com/tools/${slug}`;
  const toolName = tool?.title ?? 'Tool Not Found';
  const description = tool?.description ?? 'The requested tool could not be found.';

  const webApplicationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolName,
    url: pageUrl,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://astroinsighttools.com/' },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://astroinsighttools.com/tools' },
      { '@type': 'ListItem', position: 3, name: toolName, item: pageUrl },
    ],
  };

  // FAQ JSON-LD
  const faqContent = toolContentData[slug];
  const faqJsonLd = faqContent ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqContent.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <ToolSlugPageClient />
    </>
  );
}
