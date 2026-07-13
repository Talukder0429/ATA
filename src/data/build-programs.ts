import * as yaml from "js-yaml";
import type { Program } from "@/data/program-types";
import { validateProgram } from "@/data/validate-program";

const slugFromPath = (path: string): string =>
	path
		.split("/")
		.pop()
		?.replace(/\.ya?ml$/, "") ?? path;

export const buildPrograms = (
	files: Record<string, string>,
	opts: { includeDrafts: boolean },
): Program[] => {
	const programs = Object.entries(files).map(([path, raw]) => {
		const slug = slugFromPath(path);
		let data: unknown;
		try {
			data = yaml.load(raw);
		} catch (error) {
			const msg = error instanceof Error ? error.message : String(error);
			throw new Error(
				`Invalid program "${slug}": failed to parse YAML — ${msg}`,
			);
		}
		return validateProgram(data, slug);
	});

	return programs
		.filter((p) => {
			if (p.status === "hidden") return false;
			if (p.status === "draft") return opts.includeDrafts;
			return true;
		})
		.sort((a, b) => a.order - b.order);
};
