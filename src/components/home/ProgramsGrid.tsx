import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { ProgramGrid } from "@/components/programs/ProgramGrid";
import { Button } from "@/components/ui/button";
import { visiblePrograms } from "@/data/programs";

export function ProgramsGrid() {
	return (
		<Section className="bg-background">
			<div className="mb-12 text-center">
				<h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
					Our Programs
				</h2>
				<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
					Discover a wide range of activities designed to keep your family
					active, engaged, and thriving
				</p>
			</div>

			<ProgramGrid programs={visiblePrograms} />

			<div className="mt-12 text-center">
				<Button asChild size="lg" variant="outline">
					<Link to="/programs">
						View all programs
						<ArrowRightIcon className="size-4" />
					</Link>
				</Button>
			</div>
		</Section>
	);
}
