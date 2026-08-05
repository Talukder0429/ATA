import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";

const adminHtml = fileURLToPath(
	new URL("../public/admin/index.html", import.meta.url),
);

/**
 * Dev-only: serve the Sveltia admin page for `/admin` and `/admin/`.
 *
 * Vite's dev server rewrites extension-less paths to the app's SPA entry, so a
 * bare `/admin/` request would otherwise render the main site instead of the
 * CMS. Static hosts (GitHub Pages) serve `admin/index.html` for `/admin/`
 * natively, so this only matters in dev — it makes dev match production.
 */
export const adminDev = (): Plugin => ({
	name: "ata-admin-dev",
	apply: "serve",
	configureServer(server) {
		server.middlewares.use((req, res, next) => {
			const path = req.url?.split("?")[0];
			if (path === "/admin" || path === "/admin/") {
				res.setHeader("Content-Type", "text/html");
				res.end(readFileSync(adminHtml, "utf8"));
				return;
			}
			next();
		});
	},
});
