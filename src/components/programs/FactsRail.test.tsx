import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FactsRail } from "@/components/programs/FactsRail";
import type { Program } from "@/data/program-types";

const base: Program = {
	slug: "x",
	status: "published",
	order: 1,
	name: "X",
	cardSummary: "s",
};

describe("FactsRail", () => {
	it("renders each quick fact line", () => {
		render(
			<FactsRail
				program={{
					...base,
					quickFacts: [{ label: "Ages", lines: [{ text: "3-12" }] }],
				}}
			/>,
		);
		expect(screen.getByText("Ages")).toBeInTheDocument();
		expect(screen.getByText("3-12")).toBeInTheDocument();
	});

	it("renders nothing when there are no facts", () => {
		const { container } = render(<FactsRail program={base} />);
		expect(container).toBeEmptyDOMElement();
	});

	it("marks only the flagged line as unavailable", () => {
		render(
			<FactsRail
				program={{
					...base,
					quickFacts: [
						{
							label: "Transportation",
							lines: [
								{ text: "School pickup available", unavailable: true },
								{ text: "Parent pickup at 8 PM" },
							],
						},
					],
				}}
			/>,
		);
		expect(screen.getByText("School pickup available")).toHaveClass(
			"line-through",
		);
		expect(screen.getByText("Parent pickup at 8 PM")).not.toHaveClass(
			"line-through",
		);
	});
});
