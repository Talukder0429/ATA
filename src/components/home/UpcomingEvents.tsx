import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function UpcomingEvents() {
	return (
		<Section className="bg-secondary-50">
			<div className="mb-12 text-center">
				<h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
					Upcoming Events
				</h2>
				<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
					Join us at our next community gathering - everyone's welcome
				</p>
			</div>

			<div className="rounded-xl border border-dashed bg-card p-12 text-center">
				<p className="font-heading text-xl font-semibold text-foreground">
					Full schedules coming soon!
				</p>
			</div>

			<div className="mt-12 text-center">
				<Button asChild size="lg">
					<Link to="/register">
						Register for an Event
						<ArrowRightIcon className="size-4" />
					</Link>
				</Button>
			</div>
		</Section>
	);
}
