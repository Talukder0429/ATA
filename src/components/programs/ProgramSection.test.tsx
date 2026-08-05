import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProgramSection } from "@/components/programs/ProgramSection";

describe("ProgramSection", () => {
	it("renders a prose block with a heading and markdown body", () => {
		render(
			<ProgramSection
				block={{ type: "prose", heading: "Overview", body: "**bold**" }}
			/>,
		);
		expect(
			screen.getByRole("heading", { name: "Overview" }),
		).toBeInTheDocument();
		expect(screen.getByText("bold")).toBeInTheDocument();
	});

	it("renders checklist items", () => {
		render(<ProgramSection block={{ type: "checklist", items: ["A", "B"] }} />);
		expect(screen.getByText("A")).toBeInTheDocument();
		expect(screen.getByText("B")).toBeInTheDocument();
	});

	it("renders a table with columns and rows", () => {
		render(
			<ProgramSection
				block={{
					type: "table",
					columns: ["Day", "Theme"],
					rows: [{ cells: ["Mon", "Sports"] }],
				}}
			/>,
		);
		expect(screen.getByText("Day")).toBeInTheDocument();
		expect(screen.getByText("Sports")).toBeInTheDocument();
	});

	it("renders pricing items", () => {
		render(
			<ProgramSection
				block={{ type: "pricing", items: [{ label: "Full", price: "$400" }] }}
			/>,
		);
		expect(screen.getByText("Full")).toBeInTheDocument();
		expect(screen.getByText("$400")).toBeInTheDocument();
	});

	it("renders nothing for an unknown block type", () => {
		const { container } = render(
			<ProgramSection block={{ type: "mystery" } as never} />,
		);
		expect(container).toBeEmptyDOMElement();
	});
});
