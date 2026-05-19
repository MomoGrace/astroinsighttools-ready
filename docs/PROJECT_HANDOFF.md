# Astro Insight Tools — Project Handoff Notes

## Current package status

This package is a cleaned version of the uploaded project archive, prepared on 2026-05-19.

## Page inventory

- Tools: 30
- Articles: 30
- Core pages: homepage, tools index, articles index, about, contact, privacy, terms, disclaimer
- Sitemap total URLs: 68

## Tool slugs

- `/tools/big-three-meaning`
- `/tools/planet-sign-meaning`
- `/tools/moon-sign-meaning`
- `/tools/venus-sign-love-style`
- `/tools/mars-sign-action-style`
- `/tools/mercury-sign-communication`
- `/tools/aspect-meaning`
- `/tools/planet-in-house`
- `/tools/rising-sign-estimator`
- `/tools/birth-chart-checklist`
- `/tools/zodiac-calculator`
- `/tools/moon-phase`
- `/tools/daily-horoscope`
- `/tools/horoscope-2026`
- `/tools/compatibility`
- `/tools/love-compatibility`
- `/tools/friendship-compatibility`
- `/tools/life-path`
- `/tools/name-numerology`
- `/tools/personal-year`
- `/tools/angel-number`
- `/tools/chinese-zodiac`
- `/tools/five-elements`
- `/tools/lucky-color`
- `/tools/lucky-number`
- `/tools/birthday-personality`
- `/tools/career-personality`
- `/tools/zodiac-money-style`
- `/tools/birth-time-unknown`
- `/tools/yes-no-tarot`

## Article slugs

- `/articles/big-three-guide`
- `/articles/planet-sign-placements`
- `/articles/astrology-aspects-guide`
- `/articles/astrology-houses-guide`
- `/articles/zodiac-signs-guide`
- `/articles/astrology-beginners-guide`
- `/articles/life-path-meanings`
- `/articles/chinese-zodiac-guide`
- `/articles/moon-sign-guide`
- `/articles/venus-sign-love-guide`
- `/articles/mars-sign-motivation-guide`
- `/articles/mercury-sign-communication-guide`
- `/articles/zodiac-compatibility-guide`
- `/articles/numerology-beginners-guide`
- `/articles/rising-sign-guide`
- `/articles/angel-numbers-guide`
- `/articles/chinese-five-elements-guide`
- `/articles/birth-chart-reading-guide`
- `/articles/fire-signs-guide`
- `/articles/earth-signs-guide`
- `/articles/air-signs-guide`
- `/articles/water-signs-guide`
- `/articles/love-compatibility-guide`
- `/articles/moon-phases-guide`
- `/articles/name-numerology-guide`
- `/articles/career-astrology-guide`
- `/articles/friendship-compatibility-guide`
- `/articles/jupiter-saturn-guide`
- `/articles/saturn-return-guide`
- `/articles/retrograde-planets-guide`

## Suggested next checks before final AdSense submission

1. Deploy to Vercel and test these pages live:
   - `/`
   - `/tools`
   - `/articles`
   - `/tools/big-three-meaning`
   - `/articles/big-three-guide`
   - `/privacy`
   - `/contact`
2. Open `/sitemap.xml` and `/ads.txt` live.
3. Submit `https://astroinsighttools.com/sitemap.xml` in Google Search Console.
4. Inspect 2–3 tool URLs and 2–3 article URLs in GSC to confirm they are indexable.
5. Avoid major redesign during AdSense review unless there is a broken link or technical issue.

## Notes for Codex / Z.ai

Do not convert the site back to hash routes. Keep real Next.js routes because they are important for indexing.
Do not remove compliance pages from navigation/footer.
Do not delete `public/sitemap.xml`, `public/robots.txt`, or `public/ads.txt`.
If adding new tools/articles, update both `src/lib/slug-map.ts` and `public/sitemap.xml`.
