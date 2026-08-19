export type ProgramStatus = "published" | "hidden" | "draft";

export interface QuickFactLine {
	text: string;
	unavailable?: boolean;
}

export interface QuickFact {
	label: string;
	lines: QuickFactLine[];
}

export interface PricingItem {
	label: string;
	price: string;
	note?: string;
	includes?: string[];
	unavailable?: boolean;
}

export interface CardItem {
	icon?: string;
	title: string;
	text?: string;
}

export interface ProseBlock {
	type: "prose";
	heading?: string;
	body: string;
}

export interface ChecklistBlock {
	type: "checklist";
	heading?: string;
	items: string[];
}

export interface CardsBlock {
	type: "cards";
	heading?: string;
	items: CardItem[];
}

export interface TableRow {
	cells: string[];
}

export interface TableBlock {
	type: "table";
	heading?: string;
	note?: string;
	columns: string[];
	rows: TableRow[];
}

export interface PricingBlock {
	type: "pricing";
	heading?: string;
	note?: string;
	items: PricingItem[];
}

export type ProgramBlock =
	| ProseBlock
	| ChecklistBlock
	| CardsBlock
	| TableBlock
	| PricingBlock;

export const BLOCK_TYPES = [
	"prose",
	"checklist",
	"cards",
	"table",
	"pricing",
] as const;

export interface ProgramClosing {
	heading: string;
	text: string;
	buttonLabel?: string;
}

/** Shape of a program YAML file (slug is derived from the filename). */
export interface ProgramFrontmatter {
	status: ProgramStatus;
	order: number;
	name: string;
	tagline?: string;
	subtitle?: string;
	cardSummary: string;
	cardImage?: string;
	/** Optional dedicated hero image (URL). Falls back to cardImage, then a text hero. */
	heroImage?: string;
	registrationLabel?: string;
	quickFacts?: QuickFact[];
	sections?: ProgramBlock[];
	closing?: ProgramClosing;
}

export interface Program extends ProgramFrontmatter {
	slug: string;
}
