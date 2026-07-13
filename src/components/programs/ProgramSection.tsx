import { CardsBlock } from "@/components/programs/blocks/CardsBlock";
import { ChecklistBlock } from "@/components/programs/blocks/ChecklistBlock";
import { PricingBlock } from "@/components/programs/blocks/PricingBlock";
import { ProseBlock } from "@/components/programs/blocks/ProseBlock";
import { TableBlock } from "@/components/programs/blocks/TableBlock";
import type { ProgramBlock } from "@/data/program-types";

export const ProgramSection = ({ block }: { block: ProgramBlock }) => {
	switch (block.type) {
		case "prose":
			return <ProseBlock block={block} />;
		case "checklist":
			return <ChecklistBlock block={block} />;
		case "cards":
			return <CardsBlock block={block} />;
		case "table":
			return <TableBlock block={block} />;
		case "pricing":
			return <PricingBlock block={block} />;
		default:
			return null;
	}
};
