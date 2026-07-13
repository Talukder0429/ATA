import { describe, expect, it } from "vitest";
import { validateProgram } from "@/data/validate-program";

const valid = {
	status: "published",
	order: 1,
	name: "Game Time",
	cardSummary: "After-school sports.",
	registrationUrl: "mailto:info@x.org",
	sections: [{ type: "prose", body: "Hello" }],
};

describe("validateProgram", () => {
	it("returns a Program with the slug attached", () => {
		const p = validateProgram(valid, "game-time");
		expect(p.slug).toBe("game-time");
		expect(p.name).toBe("Game Time");
	});

	it("throws when a required field is missing", () => {
		const { name, ...missingName } = valid;
		expect(() => validateProgram(missingName, "game-time")).toThrow(
			/game-time.*name/,
		);
	});

	it("throws on an invalid status", () => {
		expect(() =>
			validateProgram({ ...valid, status: "live" }, "game-time"),
		).toThrow(/status/);
	});

	it("throws on an unknown block type", () => {
		const bad = { ...valid, sections: [{ type: "carousel", items: [] }] };
		expect(() => validateProgram(bad, "game-time")).toThrow(/carousel/);
	});

	it("throws when a table row is not an array of strings", () => {
		const bad = {
			...valid,
			sections: [{ type: "table", columns: ["A"], rows: [["ok"], [1]] }],
		};
		expect(() => validateProgram(bad, "game-time")).toThrow(/table/);
	});

	it("accepts well-formed quickFacts and closing", () => {
		const p = validateProgram(
			{
				...valid,
				quickFacts: [{ label: "Ages", value: "3-12" }],
				closing: { heading: "Join", text: "Sign up today" },
			},
			"game-time",
		);
		expect(p.quickFacts?.[0].value).toBe("3-12");
		expect(p.closing?.heading).toBe("Join");
	});

	it("throws when quickFacts is not a list", () => {
		expect(() =>
			validateProgram({ ...valid, quickFacts: "Mon-Fri" }, "game-time"),
		).toThrow(/quickFacts/);
	});

	it("throws when a quickFacts entry is missing value", () => {
		const bad = { ...valid, quickFacts: [{ label: "Ages" }] };
		expect(() => validateProgram(bad, "game-time")).toThrow(/quickFacts/);
	});

	it("throws when closing is missing text", () => {
		const bad = { ...valid, closing: { heading: "Join" } };
		expect(() => validateProgram(bad, "game-time")).toThrow(/closing/);
	});
});
