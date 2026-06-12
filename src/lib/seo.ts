import { site } from "@/data/site";

interface SeoInput {
	title?: string;
	description?: string;
}

/**
 * Builds the `head` object for a route's document metadata. Pass a page title
 * and description; returns `<title>` + `<meta name="description">` for
 * TanStack Router's `head` option (rendered via <HeadContent /> in __root).
 */
export function seo({ title, description }: SeoInput = {}) {
	const fullTitle = title ? `${title} | ${site.name}` : site.name;
	const desc = description ?? site.description;

	return {
		meta: [{ title: fullTitle }, { name: "description", content: desc }],
	};
}
