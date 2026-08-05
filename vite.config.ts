import { fileURLToPath } from "node:url";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { adminDev } from "./scripts/admin-dev-plugin";
import { sitemap } from "./scripts/sitemap-plugin";

// Deployed to https://<user>.github.io/ATA/ — served from a sub-path in CI,
// but from the root during local dev.
const base = process.env.GITHUB_ACTIONS ? "/ATA/" : "/";

// https://vite.dev/config/
export default defineConfig({
	base,
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	plugins: [
		tailwindcss(),
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		react(),
		babel({ presets: [reactCompilerPreset()] }),
		sitemap(),
		adminDev(),
	],
});
