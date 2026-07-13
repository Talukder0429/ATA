import { CheckIcon } from "lucide-react";
import { SectionHeading } from "@/components/programs/SectionHeading";
import type { ChecklistBlock as ChecklistBlockData } from "@/data/program-types";

export const ChecklistBlock = ({ block }: { block: ChecklistBlockData }) => (
	<section>
		{block.heading ? <SectionHeading>{block.heading}</SectionHeading> : null}
		<ul className="grid gap-3 sm:grid-cols-2">
			{block.items.map((item) => (
				<li key={item} className="flex items-start gap-2 text-muted-foreground">
					<CheckIcon className="mt-0.5 size-5 shrink-0 text-primary" />
					<span>{item}</span>
				</li>
			))}
		</ul>
	</section>
);
