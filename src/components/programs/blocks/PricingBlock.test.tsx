import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PricingBlock } from "@/components/programs/blocks/PricingBlock";

describe("PricingBlock", () => {
	it("renders each tier's label and price without a badge", () => {
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
		expect(screen.queryByText("Most popular")).toBeNull();
		expect(screen.getByText("With pickup")).toBeInTheDocument();
		expect(screen.getByText("$200")).toBeInTheDocument();
	});

	it("lists per-tier includes when provided", () => {
		render(
			<PricingBlock
				block={{
					type: "pricing",
					items: [
						{
							label: "Monthly Membership",
							price: "$350/month",
							includes: ["Multi-sport activities", "Equipment provided"],
						},
					],
				}}
			/>,
		);
		expect(screen.getByText("Multi-sport activities")).toBeInTheDocument();
		expect(screen.getByText("Equipment provided")).toBeInTheDocument();
	});
});
