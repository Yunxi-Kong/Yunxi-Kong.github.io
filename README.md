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
Writing checks also exercise the evidence example with mouse and keyboard, without
JavaScript, and in print layout.

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

## Writing Design

The academic homepage and Writing use separate layouts. Article typography and
figures live in `src/styles/writing.css`; the shared layout is `NoteLayout.astro`.
Add a self-hosted image with intrinsic dimensions and descriptive alt text to each
entry in `src/data/writing.ts` for the index and social preview. In the Markdown
body, use an HTML `figure.article-figure` with a source caption and full-size link.

Only use real, approved project artifacts as evidence. Label conceptual examples
as illustrations, not measurements or study results. The simulation note uses
native radio controls and CSS to compare three artifacts; no client script, API,
tracking, or backend is required. Hidden panels retain their layout space to avoid
shifting the following text, and all panels are visible when printed.

Editorial references (not copied templates):
- [Distill: Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/)
- [Josh W. Comeau: An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
- [Bartosz Ciechanowski: Mechanical Watch](https://ciechanow.ski/mechanical-watch/)
