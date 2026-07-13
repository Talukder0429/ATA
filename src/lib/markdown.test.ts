import { describe, expect, it } from "vitest";
import { renderMarkdown } from "@/lib/markdown";

describe("renderMarkdown", () => {
	it("renders bold and links", () => {
		const html = renderMarkdown("**hi** [x](https://a.org)");
		expect(html).toContain("<strong>hi</strong>");
		expect(html).toContain('href="https://a.org"');
	});

	it("strips script tags", () => {
		const html = renderMarkdown("ok<script>alert(1)</script>");
		expect(html).not.toContain("<script>");
		expect(html).toContain("ok");
	});
});
