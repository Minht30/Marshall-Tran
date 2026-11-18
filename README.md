# Minh Tran: portfolio

My portfolio, built with [Astro](https://astro.build). Live at https://minhcode.netlify.app.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm test           # Playwright: every page, 3 screen sizes, both themes, axe accessibility, interactions
npm run lighthouse # Lighthouse on every page (build first)
npm run format     # Prettier
```

Netlify builds the site with `npm run build` and publishes `dist/` (see `netlify.toml`).

## Change the content

You never need to touch page code for everyday updates.

| To change | Edit |
| --- | --- |
| Name, contact links, navigation | `src/data/site.ts` |
| A "More work" project, or add one | a file in `src/content/projects/` (copy an existing one). The body text is the summary. |
| A Story chapter | its file in `src/content/milestones/`. The text is the body; photos, quotes and facts are in the frontmatter. |
| A flagship card on the home page | its file in `src/content/work/` (its case study page is in `src/pages/work/`) |
| A role in the Experience section | its file in `src/content/experience/`. `size` sets how much space it gets: `feature`, `standard` or `compact`. |
| A credential, course list or reference | its file in `src/content/credentials/`. `featured: true` also shows it on the home page. |
| A PDF with a preview thumbnail | add the PDF to `public/docs/`, a first-page image to `Images/docs/`, and an entry in `src/data/docs.ts` |
| A technology logo | `src/data/tech.ts` maps a name to a brand logo in `src/icons/brands/` (Simple Icons, CC0) or a Phosphor icon |
| Colours, spacing, type sizes | `src/design/tokens.json` (shared with the design system; `tokens.css` is generated from it) |

Images live in `Images/` and are resized and converted to WebP automatically at build time. The build checks every content file: a missing date, image or alt text stops the build with a clear message.

## Structure

```
src/
  pages/          index, story, credentials, work/<case-study>, 404
  components/     home/ (one file per home section), CaseFacts, TechTag, DocPreview, DocReader, SocialBar, ProjectIndex, ...
  layouts/        Base.astro (head, SEO, theme, page transitions, motion)
  content/        projects/, milestones/, work/, experience/, credentials/  (validated by src/content.config.ts)
  data/           site.ts, tech.ts, docs.ts
  icons/brands/   vendored brand logos
  design/         tokens.json
  styles/         global.css, components.css, tokens.css (generated)
tests/            Playwright and axe tests
legacy/           the previous single-page site, kept for reference
```
