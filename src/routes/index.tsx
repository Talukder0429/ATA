import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/home/CTA";
import { Hero } from "@/components/home/Hero";
import { ProgramsGrid } from "@/components/home/ProgramsGrid";
// import { Testimonials } from "@/components/home/Testimonials";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
	head: () =>
		seo({
			description:
				"Active Together Activities provides structured multi-sport programming for school-aged youth, where all skill levels can build confidence, stay active, and make new friends through sports.",
		}),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Hero />
			<ProgramsGrid />
			<UpcomingEvents />
			{/* <Testimonials /> */}
			<CTA />
		</>
	);
}
