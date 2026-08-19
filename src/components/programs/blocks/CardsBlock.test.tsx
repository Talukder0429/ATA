import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardsBlock } from "@/components/programs/blocks/CardsBlock";

describe("CardsBlock", () => {
	it("shows an icon when item.icon is set", () => {
		const { container } = render(
			<CardsBlock
				block={{
					type: "cards",
					items: [{ icon: "shield-check", title: "Safe" }],
				}}
			/>,
		);
		expect(screen.getByText("Safe")).toBeInTheDocument();
		expect(container.querySelector("svg")).toBeTruthy();
	});

	it("renders no icon for an iconless item (age divisions)", () => {
		const { container } = render(
			<CardsBlock
				block={{
					type: "cards",
					items: [{ title: "Junior Division", text: "Grades 3-5" }],
				}}
			/>,
		);
		expect(screen.getByText("Junior Division")).toBeInTheDocument();
		expect(screen.getByText("Grades 3-5")).toBeInTheDocument();
		expect(container.querySelector("svg")).toBeNull();
	});
});
