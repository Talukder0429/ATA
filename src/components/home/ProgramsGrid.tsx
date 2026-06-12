import { Link, type LinkProps } from "@tanstack/react-router";
import {
	ArrowRightIcon,
	BookOpenIcon,
	type LucideIcon,
	SunIcon,
	UsersIcon,
	ZapIcon,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Program {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	color: string;
	to: LinkProps["to"];
}

/**
 * Home-page showcase of our four core programs. Titles, copy, and routes mirror
 * the real program pages in `pages.ts` / `navGroups` — every card links to a
 * page that exists.
 */
const programs: Program[] = [
	{
		id: "youth",
		title: "Youth Programs",
		description:
			"Leadership development, social activities, and skill-building for older youth.",
		color: "from-blue-500 to-blue-600",
		icon: UsersIcon,
		to: "/programs/youth",
	},
	{
		id: "after-school",
		title: "After School Programs",
		description:
			"Safe, supervised activities with homework support and recreation.",
		color: "from-green-500 to-green-600",
		icon: BookOpenIcon,
		to: "/programs/after-school",
	},
	{
		id: "summer-camp",
		title: "Summer Camp",
		description:
			"Week-long adventures with outdoor activities, crafts, and field trips.",
		color: "from-yellow-500 to-orange-500",
		icon: SunIcon,
		to: "/programs/summer-camp",
	},
	{
		id: "sports",
		title: "Sports Programs",
		description:
			"Fun movement activities including circuit training, sports, and coordination games.",
		color: "from-red-500 to-red-600",
		icon: ZapIcon,
		to: "/programs/sports",
	},
];

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
				{programs.map((program) => {
					const Icon = program.icon;
					return (
						<Link key={program.id} to={program.to} className="group">
							<Card className="h-full transition-shadow duration-300 hover:shadow-lg">
								<CardContent className="flex flex-col grow">
									<div
										className={`mb-4 flex size-16 items-center justify-center rounded-xl bg-linear-to-br ${program.color} text-white transition-transform duration-300 group-hover:scale-110`}
									>
										<Icon className="size-8" />
									</div>
									<h3 className="mb-2 font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
										{program.title}
									</h3>
									<p className="text-sm text-muted-foreground grow">
										{program.description}
									</p>
									<div className="mt-4 flex items-center text-sm font-semibold text-primary transition-all group-hover:gap-2">
										Learn more
										<ArrowRightIcon className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
									</div>
								</CardContent>
							</Card>
						</Link>
					);
				})}
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
