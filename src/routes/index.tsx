import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/home/CTA";
import { Hero } from "@/components/home/Hero";
import { ImpactStats } from "@/components/home/ImpactStats";
import { ProgramsGrid } from "@/components/home/ProgramsGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
	head: () =>
		seo({
			description:
				"Active Together Activities provides engaging programs that bring children, youth, and families together through fitness, learning, and community connection.",
		}),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Hero />
			<ProgramsGrid />
			<ImpactStats />
			<Testimonials />
			<CTA />
		</>
	);
}
