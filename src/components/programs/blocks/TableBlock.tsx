import { SectionHeading } from "@/components/programs/SectionHeading";
import type { TableBlock as TableBlockData } from "@/data/program-types";

export const TableBlock = ({ block }: { block: TableBlockData }) => (
	<section>
		{block.heading ? <SectionHeading>{block.heading}</SectionHeading> : null}
		<div className="overflow-x-auto rounded-lg border">
			<table className="w-full border-collapse text-left text-sm">
				<thead>
					<tr className="bg-secondary text-secondary-foreground">
						{block.columns.map((col) => (
							<th key={col} className="p-3 font-heading font-semibold">
								{col}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{block.rows.map((row) => (
						<tr key={row.cells.join("|")} className="border-t even:bg-muted/40">
							{row.cells.map((cell, i) => (
								<td
									key={`${block.columns[i] ?? i}-${cell}`}
									className="p-3 text-muted-foreground"
								>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
		{block.note ? (
			<p className="mt-2 text-sm italic text-muted-foreground">{block.note}</p>
		) : null}
	</section>
);
