# Astro Insight Tools — Clean Code Package

This is a cleaned deployment-ready package for **AstroInsightTools.com**.

## What is included

- Next.js + TypeScript + Tailwind project
- 30 astrology / zodiac / numerology tools
- 30 long-form guide article routes
- Real non-hash routes for SEO: `/tools/[slug]` and `/articles/[slug]`
- Compliance pages: About, Contact, Privacy, Terms, Disclaimer
- `public/sitemap.xml`
- `public/robots.txt`
- `public/ads.txt`
- Audit notes and reference source files in `docs/`

## What was cleaned out

- `.git/` history
- local `.env` containing machine-specific path
- Z.ai temporary scripts / PID files
- logs, caches, and runtime folders
- bulky scraped report source folder
- template example websocket/mini-service folders
- root-level reference JSON files were moved into `docs/reference-source/`

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Build check

```bash
npm run build
```

## Production start after build

```bash
npm run start
```

## Vercel deployment

1. Upload this package to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. No special output directory is required for Vercel.

## Important files

- Homepage: `src/app/page.tsx`
- Layout / metadata: `src/app/layout.tsx`
- Header / footer: `src/components/site-layout.tsx`
- Tools index: `src/app/tools/page.tsx`
- Individual tool route: `src/app/tools/[slug]/page.tsx`
- Articles index: `src/app/articles/page.tsx`
- Individual article route: `src/app/articles/[slug]/page.tsx`
- Slug list: `src/lib/slug-map.ts`
- Tool data: `src/lib/tool-data.ts`
- Astrology data: `src/lib/astro-data.ts`
- Compliance content: `src/components/compliance.tsx`

## SEO / AdSense notes

- The sitemap currently contains 68 URLs: home, indexes, legal pages, 30 tools and 30 articles.
- `ads.txt` uses publisher ID `pub-5952834143682557`.
- If the publisher ID changes, update `public/ads.txt` before deployment.
- Keep all trust pages visible in header/footer before applying for AdSense.
