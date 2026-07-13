import { describe, expect, it } from "vitest";
import { buildPrograms } from "@/data/build-programs";

const files = {
	"../content/programs/b.yaml": `status: published
order: 2
name: Bravo
cardSummary: Summary.
registrationUrl: "mailto:x@x.org"`,
	"../content/programs/a.yaml": `status: published
order: 1
name: Alpha
cardSummary: Summary.
registrationUrl: "mailto:x@x.org"`,
	"../content/programs/hidden.yaml": `status: hidden
order: 1
name: Hidden
cardSummary: Summary.
registrationUrl: "mailto:x@x.org"`,
	"../content/programs/draft.yaml": `status: draft
order: 1
name: Draft
cardSummary: Summary.
registrationUrl: "mailto:x@x.org"`,
};

describe("buildPrograms", () => {
	it("derives slug from filename and sorts by order", () => {
		const result = buildPrograms(files, { includeDrafts: false });
		expect(result.map((p) => p.slug)).toEqual(["a", "b"]);
	});

	it("always excludes hidden programs", () => {
		const result = buildPrograms(files, { includeDrafts: true });
		expect(result.find((p) => p.slug === "hidden")).toBeUndefined();
	});

	it("excludes drafts unless includeDrafts is true", () => {
		expect(
			buildPrograms(files, { includeDrafts: false }).some(
				(p) => p.slug === "draft",
			),
		).toBe(false);
		expect(
			buildPrograms(files, { includeDrafts: true }).some(
				(p) => p.slug === "draft",
			),
		).toBe(true);
	});

	it("throws a descriptive error naming the bad file", () => {
		const bad = {
			"../content/programs/oops.yaml": "status: nope\norder: 1\nname: X",
		};
		expect(() => buildPrograms(bad, { includeDrafts: false })).toThrow(/oops/);
	});
});
