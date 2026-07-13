import { getProgramIcon } from "@/components/programs/icons";
import { SectionHeading } from "@/components/programs/SectionHeading";
import type { CardsBlock as CardsBlockData } from "@/data/program-types";

export const CardsBlock = ({ block }: { block: CardsBlockData }) => (
	<section>
		{block.heading ? <SectionHeading>{block.heading}</SectionHeading> : null}
		<div className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
			{block.items.map((item) => {
				const Icon = item.icon ? getProgramIcon(item.icon) : null;
				return Icon ? (
					<div key={item.title} className="flex items-start gap-3">
						<Icon className="mt-0.5 size-5 shrink-0 text-primary" />
						<div>
							<h3 className="font-heading font-semibold text-foreground">
								{item.title}
							</h3>
							{item.text ? (
								<p className="mt-1 text-sm text-muted-foreground">
									{item.text}
								</p>
							) : null}
						</div>
					</div>
				) : (
					<div key={item.title} className="rounded-lg bg-muted/40 p-4">
						<h3 className="font-heading font-semibold text-foreground">
							{item.title}
						</h3>
						{item.text ? (
							<p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
						) : null}
					</div>
				);
			})}
		</div>
	</section>
);
