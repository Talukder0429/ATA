import { Link } from "@tanstack/react-router";
import { ArrowRightIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EventItem {
	id: string;
	/** Short month abbreviation for the date badge, e.g. "JUN". */
	month: string;
	day: string;
	title: string;
	time: string;
	location: string;
}

const events: EventItem[] = [
	{
		id: "summer-kickoff",
		month: "JUL",
		day: "12",
		title: "Summer Camp Kick-Off",
		time: "9:00 AM - 12:00 PM",
		location: "Community Drive Field",
	},
	{
		id: "family-fun-day",
		month: "JUL",
		day: "26",
		title: "Family Fun Day",
		time: "11:00 AM - 3:00 PM",
		location: "Riverside Park",
	},
	{
		id: "youth-sports-night",
		month: "AUG",
		day: "08",
		title: "Youth Sports Night",
		time: "6:00 PM - 8:30 PM",
		location: "ATA Main Gym",
	},
];

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

			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{events.map((event) => (
					<Card key={event.id} className="h-full">
						<CardContent className="flex items-start gap-4">
							{/* Date badge */}
							<div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-xl bg-primary text-primary-foreground">
								<span className="text-xs font-semibold tracking-wide">
									{event.month}
								</span>
								<span className="font-heading text-2xl font-bold leading-none">
									{event.day}
								</span>
							</div>

							<div className="min-w-0">
								<h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
									{event.title}
								</h3>
								<p className="flex items-center gap-2 text-sm text-muted-foreground">
									<ClockIcon className="size-4 shrink-0 text-primary" />
									{event.time}
								</p>
								<p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
									<MapPinIcon className="size-4 shrink-0 text-primary" />
									{event.location}
								</p>
							</div>
						</CardContent>
					</Card>
				))}
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
