import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Program } from "@/data/program-types";

const imageParams = "?auto=format&fit=crop&w=600&h=400&q=70";

export const ProgramGrid = ({ programs }: { programs: Program[] }) => (
	<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{programs.map((program) => (
			<Link
				key={program.slug}
				to="/programs/$slug"
				params={{ slug: program.slug }}
				className="group"
			>
				<Card className="h-full gap-0 overflow-hidden py-0 transition-shadow duration-300 hover:shadow-lg">
					{program.cardImage ? (
						<div className="relative aspect-3/2 overflow-hidden">
							<img
								src={`${program.cardImage}${imageParams}`}
								alt={program.name}
								loading="lazy"
								className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
					) : null}
					<div className="flex grow flex-col p-6">
						<h3 className="mb-2 font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
							{program.name}
						</h3>
						<p className="grow text-sm text-muted-foreground">
							{program.cardSummary}
						</p>
						<div className="mt-4 flex items-center text-sm font-semibold text-primary transition-all group-hover:gap-2">
							Learn more
							<ArrowRightIcon className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
						</div>
					</div>
				</Card>
			</Link>
		))}
	</div>
);
