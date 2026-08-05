/**
 * Per-route page metadata: heading copy and SEO title/description. Keyed by
 * pathname. Consumed by <PageLayout> (heading) and the route `head` config
 * (SEO). Filling in real content later = editing this map.
 */
export interface PageMeta {
	/** <h1> text + basis for the document <title>. */
	title: string;
	/** Lede shown under the heading and used as the meta description. */
	description: string;
	/** Whether this page is still a placeholder (renders the stub notice). */
	stub?: boolean;
	/** Optional longer copy for the under-construction notice. */
	stubNote?: string;
}

export const pages = {
	"/about": {
		title: "About Us",
		description:
			"Learn more about Active Together Activities — who we are, what drives us, and the community we serve.",
	},
	"/programs": {
		title: "Our Programs",
		description:
			"Explore our wide range of programs designed to keep your family active, engaged, and thriving.",
	},
	"/resources": {
		title: "Resources",
		description:
			"Helpful information and resources for parents, schools, and the community.",
	},
	"/resources/faq": {
		title: "Frequently Asked Questions",
		description: "Answers to common questions about our programs.",
	},
	"/resources/volunteer": {
		title: "Volunteer With Us",
		description: "Make a difference in your community by volunteering with us.",
	},
	"/resources/code-of-conduct": {
		title: "Code of Conduct",
		description:
			"The expectations we hold for participants, families, staff, and volunteers.",
	},
	"/contact": {
		title: "Contact Us",
		description: "Get in touch with the Active Together Activities team.",
	},
	"/register": {
		title: "Program Registration",
		description: "Sign up for Active Together Activities programs.",
	},
	"/privacy": {
		title: "Privacy Policy",
		description: "How we collect, use, and protect your information.",
		stub: true,
		stubNote:
			"We're finalizing our comprehensive Privacy Policy. Check back soon for complete details on our privacy practices.",
	},
	"/terms": {
		title: "Terms of Service",
		description: "The terms governing use of our services.",
		stub: true,
		stubNote:
			"We're finalizing our Terms of Service. Check back soon for complete terms and conditions.",
	},
} as const satisfies Record<string, PageMeta>;

export type PagePath = keyof typeof pages;

/** Typed accessor — widens the narrow `as const` entry back to PageMeta. */
export function getPage(path: PagePath): PageMeta {
	return pages[path];
}
