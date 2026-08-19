import type { Program } from "@/data/program-types";
import { cn } from "@/lib/utils";

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
						<dd className="mt-1 space-y-0.5 font-heading font-semibold text-foreground">
							{fact.lines.map((line) => (
								<span
									key={line.text}
									aria-disabled={line.unavailable || undefined}
									className={cn(
										"block",
										line.unavailable && "text-muted-foreground line-through",
									)}
								>
									{line.text}
								</span>
							))}
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
};
