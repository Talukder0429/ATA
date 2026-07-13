import { buildPrograms } from "@/data/build-programs";
import type { Program } from "@/data/program-types";

const files = import.meta.glob("../content/programs/*.yaml", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

export const visiblePrograms: Program[] = buildPrograms(files, {
	includeDrafts: import.meta.env.DEV,
});

export const getProgram = (slug: string): Program | undefined =>
	visiblePrograms.find((p) => p.slug === slug);
