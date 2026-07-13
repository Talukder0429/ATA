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
	"/about/mission": {
		title: "Mission & Values",
		description:
			"The mission, vision, and core values that guide everything we do.",
		stub: true,
		stubNote:
			"We're crafting a detailed overview of our mission, vision, and core values. Check back soon to learn more about our commitment to the community!",
	},
	"/about/team": {
		title: "Meet Our Team",
		description: "The people behind Active Together Activities.",
		stub: true,
		stubNote:
			"We're putting together profiles of the dedicated staff and volunteers who make our programs possible.",
	},
	"/about/testimonials": {
		title: "Testimonials",
		description: "Hear from the families and partners we serve.",
		stub: true,
		stubNote:
			"We're collecting stories from the families, youth, and partners who've been part of our community.",
	},
	"/about/partners": {
		title: "Funders & Partners",
		description: "The organizations that help make our work possible.",
		stub: true,
		stubNote:
			"We're assembling a directory of the funders and community partners who support our mission.",
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
	"/resources/parents": {
		title: "Parent Resources",
		description: "Guides and tools to support families in our programs.",
		stub: true,
		stubNote:
			"We're putting together a collection of resources to help parents get the most out of our programs.",
	},
	"/resources/schools": {
		title: "School Resources",
		description: "Partnership information and resources for schools.",
		stub: true,
		stubNote:
			"We're developing resources for our school partners. Check back soon for collaboration details.",
	},
	"/resources/safety": {
		title: "Safety Information",
		description: "Our safety policies, certifications, and procedures.",
		stub: true,
		stubNote:
			"We're documenting our safety policies and certifications so you know your family is in good hands.",
	},
	"/resources/faq": {
		title: "Frequently Asked Questions",
		description: "Answers to common questions about our programs.",
		stub: true,
		stubNote:
			"We're gathering the questions we hear most often and writing up clear answers.",
	},
	"/contact": {
		title: "Contact Us",
		description: "Get in touch with the Active Together Activities team.",
		stub: true,
		stubNote:
			"We're building an interactive contact form. In the meantime, you can reach us using the details below.",
	},
	"/register": {
		title: "Program Registration",
		description: "Sign up for Active Together Activities programs.",
		stub: true,
		stubNote:
			"We're developing our online registration system. For immediate registration needs, please contact us.",
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
