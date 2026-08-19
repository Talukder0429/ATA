/**
 * Single source of truth for organization-wide info (name, contact, socials).
 * Referenced by the Header, Footer, contact/register pages, and SEO defaults -
 * change it here, not inline in components.
 */
export const site = {
	name: "Active Together Activities",
	shortName: "ATA",
	description:
		"Building healthier communities through inclusive programs that bring families together. We provide safe, engaging activities for children, youth, and families to thrive.",
	url: "https://activetogetheractivities.org",
	contact: {
		email: "info@activetogetheractivities.org",
		phone: "647-289-3981",
		address: {
			line1: "29 Major Oaks Dr",
			line2: "Brampton, ON L6V 3K1",
		},
	},
	socials: [
		{ label: "Facebook", href: "https://facebook.com", icon: "facebook" },
		{ label: "Instagram", href: "https://instagram.com", icon: "instagram" },
		{ label: "Twitter", href: "https://twitter.com", icon: "x" },
	],
} as const;

export type Site = typeof site;
