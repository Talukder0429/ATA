import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhyChooseUs } from "@/components/programs/WhyChooseUs";

describe("WhyChooseUs", () => {
	it("renders the four benefit headings", () => {
		render(<WhyChooseUs />);
		expect(screen.getByText("Multi-Sport Experience")).toBeInTheDocument();
		expect(screen.getByText("All Skill Levels Welcome")).toBeInTheDocument();
		expect(
			screen.getByText("Safe & Structured Environment"),
		).toBeInTheDocument();
		expect(
			screen.getByText("Build Confidence Beyond Sports"),
		).toBeInTheDocument();
	});
});
