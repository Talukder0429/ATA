import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SchoolLocations } from "@/components/contact/SchoolLocations";

describe("SchoolLocations", () => {
	it("lists the schools", () => {
		render(<SchoolLocations />);
		expect(
			screen.getByRole("button", { name: /Mountain Ash Public School/ }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /St\. Raphael Elementary School/ }),
		).toBeInTheDocument();
	});

	it("points the map at the clicked school", () => {
		render(<SchoolLocations />);
		fireEvent.click(screen.getByRole("button", { name: /Shaw Public School/ }));
		const iframe = screen.getByTitle("Map showing Shaw Public School");
		expect(iframe.getAttribute("src")).toContain("Shaw");
	});
});
