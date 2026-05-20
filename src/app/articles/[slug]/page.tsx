import type { Metadata } from 'next';
import ArticleSlugPageClient from './ArticleSlugPageClient';
import { articleSlugs } from '@/lib/slug-map';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articleSlugs[slug];

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
      alternates: { canonical: `https://astroinsighttools.com/articles/${slug}` },
      twitter: { card: 'summary' },
  openGraph: {
        url: `https://astroinsighttools.com/articles/${slug}`,
        title: 'Article Not Found — Astro Insight Tools',
      },
    };
  }

  const title = article.title;
  const description = article.description;
  const pageUrl = `https://astroinsighttools.com/articles/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    twitter: { card: 'summary' },
    openGraph: {
      url: pageUrl,
      title: `${title} | Astro Insight Tools`,
      description,
    },
  };
}

export default async function ArticleSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleSlugs[slug];
  const pageUrl = `https://astroinsighttools.com/articles/${slug}`;
  const articleTitle = article?.title ?? 'Article Not Found';
  const articleDescription = article?.description ?? 'The requested article could not be found.';
  const publishedDate = '2026-01-01';

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleTitle,
    description: articleDescription,
    url: pageUrl,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: { '@type': 'Organization', name: 'Astro Insight Tools', url: 'https://astroinsighttools.com' },
    publisher: { '@type': 'Organization', name: 'Astro Insight Tools', url: 'https://astroinsighttools.com' },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://astroinsighttools.com/' },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://astroinsighttools.com/articles' },
      { '@type': 'ListItem', position: 3, name: articleTitle, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ArticleSlugPageClient />
    </>
  );
}
