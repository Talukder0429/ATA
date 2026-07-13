import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PricingBlock } from "@/components/programs/blocks/PricingBlock";

describe("PricingBlock", () => {
	it("marks only the first item as most popular", () => {
		render(
			<PricingBlock
				block={{
					type: "pricing",
					items: [
						{ label: "With pickup", price: "$400" },
						{ label: "Program only", price: "$200" },
					],
				}}
			/>,
		);
		const badges = screen.getAllByText("Most popular");
		expect(badges).toHaveLength(1);
		expect(screen.getByText("With pickup")).toBeInTheDocument();
		expect(screen.getByText("$200")).toBeInTheDocument();
	});
});
