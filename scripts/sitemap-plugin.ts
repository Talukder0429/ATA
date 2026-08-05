import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import * as yaml from "js-yaml";
import type { Plugin } from "vite";

const SITE_URL = "https://activetogetheractivities.org";

/** Static routes worth indexing (admin + legal stubs deliberately excluded). */
const STATIC_PATHS = [
	"/",
	"/about",
	"/programs",
	"/resources",
	"/resources/volunteer",
	"/resources/code-of-conduct",
	"/resources/faq",
	"/contact",
	"/register",
];

const programsDir = fileURLToPath(
	new URL("../src/content/programs", import.meta.url),
);

/** Slugs of programs that appear on the live site (published only). */
const publishedProgramSlugs = (): string[] =>
	readdirSync(programsDir)
		.filter((f) => /\.ya?ml$/.test(f))
		.filter((f) => {
			const data = yaml.load(readFileSync(`${programsDir}/${f}`, "utf8")) as {
				status?: string;
			} | null;
			return data?.status === "published";
		})
		.map((f) => f.replace(/\.ya?ml$/, ""));

const buildSitemap = (): string => {
	const paths = [
		...STATIC_PATHS,
		...publishedProgramSlugs().map((slug) => `/programs/${slug}`),
	];
	const urls = paths
		.map((p) => `\t<url>\n\t\t<loc>${SITE_URL}${p}</loc>\n\t</url>`)
		.join("\n");
	return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

/** Emits sitemap.xml into the build output, listing static + published pages. */
export const sitemap = (): Plugin => ({
	name: "ata-sitemap",
	apply: "build",
	generateBundle() {
		this.emitFile({
			type: "asset",
			fileName: "sitemap.xml",
			source: buildSitemap(),
		});
	},
});
