import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProgramView } from "@/components/programs/ProgramView";
import type { Program } from "@/data/program-types";
import { renderWithRouter } from "@/test/router";

const base: Program = {
	slug: "x",
	status: "published",
	order: 1,
	name: "Test Program",
	cardSummary: "s",
};

const bgOf = (el: Element | null) => el?.getAttribute("style") ?? "";

describe("ProgramView hero", () => {
	it("renders an image banner using cardImage when no heroImage", async () => {
		const { container } = renderWithRouter(
			<ProgramView program={{ ...base, cardImage: "https://img/card.jpg" }} />,
		);
		await screen.findByRole("heading", { level: 1, name: "Test Program" });
		const layer = container.querySelector("[data-hero-image]");
		expect(bgOf(layer)).toContain("https://img/card.jpg");
	});

	it("prefers heroImage over cardImage", async () => {
		const { container } = renderWithRouter(
			<ProgramView
				program={{
					...base,
					cardImage: "https://img/card.jpg",
					heroImage: "https://img/hero.jpg",
				}}
			/>,
		);
		await screen.findByRole("heading", { level: 1, name: "Test Program" });
		const layer = container.querySelector("[data-hero-image]");
		expect(bgOf(layer)).toContain("https://img/hero.jpg");
		expect(bgOf(layer)).not.toContain("card.jpg");
	});

	it("renders a text hero (no image layer) when neither is set", async () => {
		const { container } = renderWithRouter(<ProgramView program={base} />);
		await screen.findByRole("heading", { level: 1, name: "Test Program" });
		expect(container.querySelector("[data-hero-image]")).toBeNull();
	});
});
