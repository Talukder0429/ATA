import { Link, type LinkProps } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Program {
	id: string;
	title: string;
	description: string;
	/** Unsplash CDN base URL (no query); sized via params at render. */
	image: string;
	to: LinkProps["to"];
}

/**
 * Home-page showcase of our four core programs. Titles, copy, and routes mirror
 * the real program pages in `pages.ts` / `navGroups` — every card links to a
 * page that exists. Photos are Unsplash (free to use under the Unsplash
 * License).
 */
const programs: Program[] = [
	{
		id: "youth",
		title: "Youth Programs",
		description:
			"Leadership development, social activities, and skill-building for older youth.",
		image: "https://images.unsplash.com/photo-1569617084133-26942bb441f2",
		to: "/programs/youth",
	},
	{
		id: "after-school",
		title: "After School Programs",
		description:
			"Safe, supervised activities with homework support and recreation.",
		image: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
		to: "/programs/after-school",
	},
	{
		id: "summer-camp",
		title: "Summer Camp",
		description:
			"Week-long adventures with outdoor activities, crafts, and field trips.",
		image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5",
		to: "/programs/summer-camp",
	},
	{
		id: "sports",
		title: "Sports Programs",
		description:
			"Fun movement activities including circuit training, sports, and coordination games.",
		image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368",
		to: "/programs/sports",
	},
];

const imageParams = "?auto=format&fit=crop&w=600&h=400&q=70";

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

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{programs.map((program) => (
					<Link key={program.id} to={program.to} className="group">
						<Card className="h-full gap-0 overflow-hidden py-0 transition-shadow duration-300 hover:shadow-lg">
							{/* Photo banner */}
							<div className="relative aspect-3/2 overflow-hidden">
								<img
									src={`${program.image}${imageParams}`}
									alt={program.title}
									loading="lazy"
									className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-secondary-900/40 to-transparent" />
							</div>

							<div className="flex grow flex-col p-6">
								<h3 className="mb-2 font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
									{program.title}
								</h3>
								<p className="grow text-sm text-muted-foreground">
									{program.description}
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
