import { CheckIcon } from "lucide-react";
import { SectionHeading } from "@/components/programs/SectionHeading";
import type { PricingBlock as PricingBlockData } from "@/data/program-types";

export const PricingBlock = ({ block }: { block: PricingBlockData }) => (
	<section>
		{block.heading ? <SectionHeading>{block.heading}</SectionHeading> : null}
		<div className="grid items-start gap-4 sm:grid-cols-2">
			{block.items.map((item) => (
				<div key={item.label} className="rounded-lg bg-muted/40 p-4">
					<h3 className="font-heading font-semibold text-foreground">
						{item.label}
					</h3>
					<p className="mt-1 text-2xl font-bold text-primary">{item.price}</p>
					{item.note ? (
						<p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
					) : null}
					{item.includes && item.includes.length > 0 ? (
						<ul className="mt-3 grid gap-2 border-t border-border pt-3">
							{item.includes.map((entry) => (
								<li
									key={entry}
									className="flex items-start gap-2 text-sm text-muted-foreground"
								>
									<CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
									<span>{entry}</span>
								</li>
							))}
						</ul>
					) : null}
				</div>
			))}
		</div>
		{block.note ? (
			<p className="mt-2 text-sm italic text-muted-foreground">{block.note}</p>
		) : null}
	</section>
);
