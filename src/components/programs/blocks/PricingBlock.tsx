import { SectionHeading } from "@/components/programs/SectionHeading";
import type { PricingBlock as PricingBlockData } from "@/data/program-types";
import { cn } from "@/lib/utils";

export const PricingBlock = ({ block }: { block: PricingBlockData }) => (
	<section>
		{block.heading ? <SectionHeading>{block.heading}</SectionHeading> : null}
		<div className="grid gap-4 sm:grid-cols-2">
			{block.items.map((item, i) => {
				const featured = i === 0;
				return (
					<div
						key={item.label}
						className={cn(
							"relative rounded-lg p-4",
							featured ? "bg-primary/5" : "bg-muted/40",
						)}
					>
						{featured ? (
							<span className="absolute -top-2 right-3 rounded-full bg-accent-400/90 px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wide text-secondary-900">
								Most popular
							</span>
						) : null}
						<h3 className="font-heading font-semibold text-foreground">
							{item.label}
						</h3>
						<p className="mt-1 text-2xl font-bold text-primary">{item.price}</p>
						{item.note ? (
							<p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
						) : null}
					</div>
				);
			})}
		</div>
		{block.note ? (
			<p className="mt-2 text-sm italic text-muted-foreground">{block.note}</p>
		) : null}
	</section>
);
