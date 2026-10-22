# Yunxi Kong Academic Website

Personal academic website for Yunxi Kong, built with Astro and deployed to GitHub Pages.

## Development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
npm run check
npm test
```

For browser checks, start `npm run preview -- --host 127.0.0.1 --port 4321`, then
run `npm run test:browser`. On Windows this uses installed Chrome; elsewhere run
`npx playwright install chromium` first. `TEST_URL` and `BROWSER_CHANNEL` can override
these defaults. Checks cover all routes at 1440, 768, 390, and 320 pixels, keyboard
navigation, citations, image loading, and automated WCAG accessibility checks.

## Deployment

The site is deployed through GitHub Actions to GitHub Pages.

## Content Maintenance

- `src/data/site.ts`: current identity, education, news, and update date.
- `src/data/recent-projects.ts`: recent work, individual contributions, status, and scope.
- `src/data/projects.ts`: earlier projects and the shared project schema.
- `src/data/publications.ts`: verified publications, public preprints, and BibTeX.
- `src/data/writing.ts` and `src/pages/writing/*.md`: research notes and their metadata.
- `public/assets/project-thumbnails/`: real project screenshots and paper figures.

The original March 20, 2026 PDF is intentionally preserved as an archive. The web CV
contains the October update. Do not label the old PDF as current or replace it silently.

Keep projects distinct from publications and preprints distinct from peer-reviewed work.
Describe individual contributions separately from team-level results. Manuscripts and
research notes do not imply submission, acceptance, or completed human-subject studies.

Only publish approved, non-sensitive material. Do not commit source conversations,
private proposals, participant records, raw clinical data, credentials, or local paths.
Private working notes belong in the ignored `.local-notes/` directory. The site uses
no trackers, remote fonts, forms, cookies, or executable client-side JavaScript.

New routes must appear in the generated sitemap. Before publishing, run the checks
above, review desktop and mobile layouts, inspect new images, and verify external links.
