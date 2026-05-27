import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://astroinsighttools.com';

  const toolSlugs = [
    'big-three-meaning',
    'planet-sign-meaning',
    'moon-sign-meaning',
    'venus-sign-love-style',
    'mars-sign-action-style',
    'mercury-sign-communication',
    'aspect-meaning',
    'planet-in-house',
    'rising-sign-estimator',
    'birth-chart-checklist',
    'zodiac-calculator',
    'moon-phase',
    'daily-horoscope',
    'horoscope-2026',
    'compatibility',
    'love-compatibility',
    'friendship-compatibility',
    'life-path',
    'name-numerology',
    'personal-year',
    'angel-number',
    'chinese-zodiac',
    'five-elements',
    'lucky-color',
    'lucky-number',
    'birthday-personality',
    'career-personality',
    'zodiac-money-style',
    'birth-time-unknown',
    'yes-no-tarot',
  ];

  const articleSlugs = [
    'big-three-guide',
    'planet-sign-placements',
    'astrology-aspects-guide',
    'astrology-houses-guide',
    'zodiac-signs-guide',
    'astrology-beginners-guide',
    'life-path-meanings',
    'chinese-zodiac-guide',
    'moon-sign-guide',
    'venus-sign-love-guide',
    'mars-sign-motivation-guide',
    'mercury-sign-communication-guide',
    'zodiac-compatibility-guide',
    'numerology-beginners-guide',
    'rising-sign-guide',
    'angel-numbers-guide',
    'chinese-five-elements-guide',
    'birth-chart-reading-guide',
    'fire-signs-guide',
    'earth-signs-guide',
    'air-signs-guide',
    'water-signs-guide',
    'love-compatibility-guide',
    'moon-phases-guide',
    'name-numerology-guide',
    'career-astrology-guide',
    'friendship-compatibility-guide',
    'jupiter-saturn-guide',
    'saturn-return-guide',
    'retrograde-planets-guide',
  ];

  const staticPages = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/tools', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/articles', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const toolPages: MetadataRoute.Sitemap = toolSlugs.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.path === '/' ? '' : page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [...staticEntries, ...toolPages, ...articlePages];
}
