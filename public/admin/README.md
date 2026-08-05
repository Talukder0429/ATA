# Content Admin (Sveltia CMS)

A form-based editor for the program content at `src/content/programs/*.yaml`.
Editors don't touch code — they fill in fields, hit save, and the site rebuilds
and redeploys automatically.

- **Live URL:** `https://<your-domain>/ATA/admin/`
- **What it edits:** the Programs collection (add / edit / reorder / hide / delete)
- **How changes go live:** saving commits to the `master` branch → the GitHub
  Pages workflow rebuilds → live in ~1–2 minutes.

## One-time setup: GitHub OAuth app

Sveltia authenticates editors against GitHub using its **hosted** OAuth relay,
so there's no server for us to run. You only need to register an OAuth app once.

1. Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
   (org-level or personal — it must have access to the `Talukder0429/ATA` repo).
2. Fill in:
   - **Application name:** `ATA Content Admin`
   - **Homepage URL:** `https://<your-domain>/ATA/admin/`
   - **Authorization callback URL:** `https://auth.sveltia.dev/callback`
3. Create it, then copy the **Client ID** and generate a **Client Secret**.
4. Register the credentials with the Sveltia auth relay (or self-host the tiny
   relay if you prefer full control): see
   <https://github.com/sveltia/sveltia-cms#configuring-the-github-backend>.
5. Give each editor a GitHub account with **write access** to the repo
   (Repo → Settings → Collaborators), or add them to a team that has it.

## Editor access

- Editors log in at `/admin/` with **Login with GitHub**.
- They need write access to the repo (step 5 above). No local setup, no CLI.

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
