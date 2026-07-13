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
	registrationUrl: "mailto:x@x.org",
};

describe("FactsRail", () => {
	it("renders each quick fact", () => {
		render(
			<FactsRail
				program={{ ...base, quickFacts: [{ label: "Ages", value: "3-12" }] }}
			/>,
		);
		expect(screen.getByText("Ages")).toBeInTheDocument();
		expect(screen.getByText("3-12")).toBeInTheDocument();
	});

	it("renders nothing when there are no facts", () => {
		const { container } = render(<FactsRail program={base} />);
		expect(container).toBeEmptyDOMElement();
	});
});
