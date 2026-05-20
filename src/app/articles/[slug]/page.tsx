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

  return {
    title,
    description,
    alternates: { canonical: `https://astroinsighttools.com/articles/${slug}` },
    twitter: { card: 'summary' },
  openGraph: {
      url: `https://astroinsighttools.com/articles/${slug}`,
      title,
      description,
    },
  };
}

export default function ArticleSlugPage() {
  return <ArticleSlugPageClient />;
}
