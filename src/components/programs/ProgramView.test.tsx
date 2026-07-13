import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProgramView } from "@/components/programs/ProgramView";
import type { Program } from "@/data/program-types";

const base: Program = {
	slug: "x",
	status: "published",
	order: 1,
	name: "Test Program",
	cardSummary: "s",
	registrationUrl: "mailto:x@x.org",
};

const bgOf = (el: Element | null) => el?.getAttribute("style") ?? "";

describe("ProgramView hero", () => {
	it("renders an image banner using cardImage when no heroImage", () => {
		const { container } = render(
			<ProgramView program={{ ...base, cardImage: "https://img/card.jpg" }} />,
		);
		expect(
			screen.getByRole("heading", { level: 1, name: "Test Program" }),
		).toBeInTheDocument();
		const layer = container.querySelector("[data-hero-image]");
		expect(bgOf(layer)).toContain("https://img/card.jpg");
	});

	it("prefers heroImage over cardImage", () => {
		const { container } = render(
			<ProgramView
				program={{
					...base,
					cardImage: "https://img/card.jpg",
					heroImage: "https://img/hero.jpg",
				}}
			/>,
		);
		const layer = container.querySelector("[data-hero-image]");
		expect(bgOf(layer)).toContain("https://img/hero.jpg");
		expect(bgOf(layer)).not.toContain("card.jpg");
	});

	it("renders a text hero (no image layer) when neither is set", () => {
		const { container } = render(<ProgramView program={base} />);
		expect(
			screen.getByRole("heading", { level: 1, name: "Test Program" }),
		).toBeInTheDocument();
		expect(container.querySelector("[data-hero-image]")).toBeNull();
	});
});
