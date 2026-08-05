import {
	BLOCK_TYPES,
	type Program,
	type ProgramBlock,
	type ProgramStatus,
} from "@/data/program-types";

const STATUSES: ProgramStatus[] = ["published", "hidden", "draft"];

const fail = (slug: string, msg: string): never => {
	throw new Error(`Invalid program "${slug}": ${msg}`);
};

const isObject = (v: unknown): v is Record<string, unknown> =>
	typeof v === "object" && v !== null && !Array.isArray(v);

const isStringArray = (v: unknown): v is string[] =>
	Array.isArray(v) && v.every((x) => typeof x === "string");

const validateBlock = (
	block: unknown,
	slug: string,
	i: number,
): ProgramBlock => {
	if (!isObject(block)) return fail(slug, `section ${i} is not an object`);
	const type = block.type;
	if (typeof type !== "string" || !BLOCK_TYPES.includes(type as never)) {
		return fail(slug, `section ${i} has unknown type "${String(type)}"`);
	}
	switch (type) {
		case "prose":
			if (typeof block.body !== "string")
				fail(slug, `prose section ${i} needs a string "body"`);
			break;
		case "checklist":
			if (!isStringArray(block.items))
				fail(slug, `checklist section ${i} needs string "items"`);
			break;
		case "cards": {
			const items = block.items as unknown;
			if (!Array.isArray(items)) fail(slug, `cards section ${i} needs "items"`);
			for (const item of items as unknown[]) {
				if (!isObject(item) || typeof item.title !== "string") {
					fail(slug, `cards section ${i} items each need a string "title"`);
				}
			}
			break;
		}
		case "table":
			if (!isStringArray(block.columns))
				fail(slug, `table section ${i} needs string "columns"`);
			if (
				!Array.isArray(block.rows) ||
				!block.rows.every((row) => isObject(row) && isStringArray(row.cells))
			) {
				fail(
					slug,
					`table section ${i} needs "rows", each an object with string "cells"`,
				);
			}
			break;
		case "pricing": {
			const items = block.items as unknown;
			if (!Array.isArray(items))
				fail(slug, `pricing section ${i} needs "items"`);
			for (const item of items as unknown[]) {
				if (
					!isObject(item) ||
					typeof item.label !== "string" ||
					typeof item.price !== "string"
				) {
					fail(
						slug,
						`pricing section ${i} items each need string "label" and "price"`,
					);
				}
			}
			break;
		}
	}
	return block as unknown as ProgramBlock;
};

export const validateProgram = (data: unknown, slug: string): Program => {
	if (!isObject(data)) return fail(slug, "file is empty or not a mapping");

	if (
		typeof data.status !== "string" ||
		!STATUSES.includes(data.status as ProgramStatus)
	) {
		fail(slug, `"status" must be one of ${STATUSES.join(", ")}`);
	}
	if (typeof data.order !== "number") fail(slug, `"order" must be a number`);
	if (typeof data.name !== "string") fail(slug, `"name" is required`);
	if (typeof data.cardSummary !== "string")
		fail(slug, `"cardSummary" is required`);
	if (typeof data.registrationUrl !== "string")
		fail(slug, `"registrationUrl" is required`);

	if (data.quickFacts !== undefined) {
		if (!Array.isArray(data.quickFacts))
			fail(slug, `"quickFacts" must be a list`);
		for (const fact of data.quickFacts as unknown[]) {
			if (
				!isObject(fact) ||
				typeof fact.label !== "string" ||
				typeof fact.value !== "string"
			) {
				fail(slug, `each "quickFacts" entry needs string "label" and "value"`);
			}
		}
	}

	if (data.closing !== undefined) {
		if (
			!isObject(data.closing) ||
			typeof data.closing.heading !== "string" ||
			typeof data.closing.text !== "string"
		) {
			fail(slug, `"closing" needs string "heading" and "text"`);
		}
	}

	if (data.sections !== undefined) {
		if (!Array.isArray(data.sections)) fail(slug, `"sections" must be a list`);
		(data.sections as unknown[]).forEach((b, i) => {
			validateBlock(b, slug, i);
		});
	}

	return { ...(data as unknown as Program), slug };
};
