import type { LinkProps } from "@tanstack/react-router";
import { visiblePrograms } from "@/data/programs";

export interface NavLink {
	label: string;
	to: LinkProps["to"];
	params?: { slug: string };
}

export interface NavGroup {
	label: string;
	/** Landing page for the section (the group label links here). */
	to: LinkProps["to"];
	items: NavLink[];
}

/**
 * Primary navigation tree — consumed by the desktop Header dropdowns, the
 * mobile nav sheet, and the Footer. One source of truth for site links.
 */
export const navGroups: NavGroup[] = [
	{
		label: "Programs",
		to: "/programs",
		items: [
			{ label: "All Programs", to: "/programs" },
			...visiblePrograms.map((p) => ({
				label: p.name,
				to: "/programs/$slug" as const,
				params: { slug: p.slug },
			})),
		],
	},
	{
		label: "About",
		to: "/about",
		items: [
			{ label: "About Us", to: "/about" },
			{ label: "Mission & Values", to: "/about/mission" },
			{ label: "Meet Our Team", to: "/about/team" },
			{ label: "Testimonials", to: "/about/testimonials" },
			{ label: "Funders & Partners", to: "/about/partners" },
		],
	},
	{
		label: "Resources",
		to: "/resources",
		items: [
			{ label: "All Resources", to: "/resources" },
			{ label: "Parent Resources", to: "/resources/parents" },
			{ label: "School Resources", to: "/resources/schools" },
			{ label: "Safety Information", to: "/resources/safety" },
			{ label: "FAQ", to: "/resources/faq" },
		],
	},
];

/** Standalone top-level links (not dropdown groups). */
export const navLinks: NavLink[] = [
	{ label: "Home", to: "/" },
	{ label: "Contact", to: "/contact" },
];

/** Condensed link set for the footer "Quick Links" column. */
export const footerQuickLinks: NavLink[] = [
	{ label: "Programs", to: "/programs" },
	{ label: "About Us", to: "/about" },
	{ label: "Resources", to: "/resources" },
];

/** Legal links shown in the footer bottom bar. */
export const legalLinks: NavLink[] = [
	{ label: "Privacy Policy", to: "/privacy" },
	{ label: "Terms of Service", to: "/terms" },
];
