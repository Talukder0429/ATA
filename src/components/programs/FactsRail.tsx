import type { Program } from "@/data/program-types";

export const FactsRail = ({ program }: { program: Program }) => {
	if (!program.quickFacts?.length) return null;
	return (
		<div className="rounded-xl border bg-card p-5 shadow-sm">
			<dl className="space-y-3">
				{program.quickFacts.map((fact) => (
					<div
						key={fact.label}
						className="border-b border-dashed pb-3 last:border-0 last:pb-0"
					>
						<dt className="font-heading text-xs font-bold uppercase tracking-wide text-primary">
							{fact.label}
						</dt>
						<dd className="mt-1 font-heading font-semibold text-foreground">
							{fact.value}
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
};
