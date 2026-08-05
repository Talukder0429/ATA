# Active Together Activities

Marketing and program site for Active Together Activities. Built with Vite +
React + TanStack Router, deployed as a static site to GitHub Pages.

## Development

```bash
pnpm install
pnpm dev        # local dev server
pnpm test       # unit tests (vitest)
pnpm lint       # type-check + biome
pnpm build      # production build to dist/
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. The build also emits `robots.txt` and a `sitemap.xml`
(generated from the live routes and published programs; see
`scripts/sitemap-plugin.ts`).

## Editing content

Programs live as YAML files in `src/content/programs/` (schema:
`src/data/program-types.ts`, validated at build time by
`src/data/validate-program.ts`). There are two ways to edit them:

- **Admin UI (no code):** the Sveltia CMS at `/admin/` gives editors a form-based
  interface that commits changes back to GitHub and triggers a redeploy. Setup
  and access instructions live in [`public/admin/README.md`](public/admin/README.md).
- **Directly:** edit the YAML files and open a PR. Keep indentation consistent;
  a malformed file fails the build.

Set a program's `status` to `draft` or `hidden` to keep it off the live site.
