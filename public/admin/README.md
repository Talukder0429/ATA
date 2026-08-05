# Content Admin (Sveltia CMS)

A form-based editor for the program content at `src/content/programs/*.yaml`.
Editors don't touch code — they fill in fields, hit save, and the site rebuilds
and redeploys automatically.

- **Live URL:** `https://<your-domain>/ATA/admin/`
- **What it edits:** the Programs collection (add / edit / reorder / hide / delete)
- **How changes go live:** saving commits to the `master` branch → the GitHub
  Pages workflow rebuilds → live in ~1–2 minutes.

## Login: GitHub Personal Access Token

Login is **token-only** (`auth_methods: [token]` in `config.yml`). There is no
OAuth app and no OAuth client server to deploy — editors sign in by pasting a
GitHub Personal Access Token. This suits a small team of trusted editors.

**One-time, per editor:**

1. The editor needs a GitHub account with **write access** to `Talukder0429/ATA`
   (Repo → Settings → Collaborators), or membership in a team that has it.
2. Go to `/admin/` and click **Sign In with Token**.
3. Follow the link in the dialog — it opens GitHub's token page with the needed
   scopes pre-selected. Generate the token (a fine-grained token scoped to just
   this repo is ideal), then paste it back into the dialog.

The token is stored in the browser's local storage for future API requests, so
each editor pastes it once per browser. No local setup, no CLI.

> Prefer to keep tokens short-lived? Set an expiry on the PAT; editors just
> re-paste a fresh one when it lapses.

## Notes & limits

- **Rebuild lag:** edits are not instant — they flow through the build. Fine for
  program info; not for anything real-time.
- **Validation:** the form catches the common mistakes at save time — required
  fields, the icon dropdown (no typos), and URL format checks on the image and
  registration fields (`pattern` rules in `config.yml`). Deeper structural rules
  in `src/data/validate-program.ts` run at *build* time; if one trips, the deploy
  fails and the site keeps serving the last good build until it's fixed. Sveltia
  cannot run that TypeScript validator in-browser, so the two layers are kept in
  sync by hand — when the schema changes, update both.
- **Images:** the image fields take full `https://` URLs. Editors can also upload
  files (they land in `public/uploads/`), but pasting a hosted URL is simplest.
- **`config.yml`** in this folder is the single source of truth for the editor
  form. If the program schema in `src/data/program-types.ts` changes, update the
  matching field here too.
