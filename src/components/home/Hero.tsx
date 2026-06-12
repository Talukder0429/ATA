import { Link } from "@tanstack/react-router";
import {
	CheckIcon,
	HeartHandshakeIcon,
	ShieldCheckIcon,
	SparklesIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

/** Unsplash photo by Adrià Crehuet Cano (@acrehuet98), free to use under the
 * Unsplash License. `?` params request a right-sized, optimized crop. */
const heroImage =
	"https://images.unsplash.com/photo-1609422644211-a85c36ee36a7?auto=format&fit=crop&w=900&q=80";

/** Quick trust signals — qualitative, so they don't duplicate the numeric
 * <ImpactStats> section that follows the hero on the home page. */
const highlights = [
	"Safe & inclusive for all ages",
	"Qualified, caring staff",
	"Affordable for every family",
	"Year-round programs & camps",
];

export function Hero() {
	return (
		<section className="relative overflow-hidden bg-linear-to-b from-primary-50/60 to-background">
			{/* Subtle radial glow — replaces the busy blobs */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-24 right-0 size-128 rounded-full bg-primary-100/50 blur-3xl"
			/>

			<Container className="relative py-20 lg:py-32">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					{/* Content */}
					<div className="text-center lg:text-left">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
							<SparklesIcon className="size-4" />
							Building Healthier Communities Together
						</div>

						<h1 className="mb-6 font-heading text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
							<span className="block">Play.</span>
							<span className="block">Learn.</span>
							<span className="block bg-linear-to-r from-primary-600 to-accent-600 bg-clip-text pb-2 text-transparent">
								Belong.
							</span>
						</h1>

						<p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:mx-0">
							Engaging programs that bring children, youth, and families
							together through fitness, learning, and community connection.
						</p>

						<div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
							<Button asChild size="lg">
								<Link to="/programs">Explore Programs</Link>
							</Button>
							<Button asChild size="lg" variant="outline">
								<Link to="/register">Register Today</Link>
							</Button>
						</div>

						{/* Trust highlights */}
						<ul className="mt-10 grid grid-cols-1 gap-3 border-t border-border pt-8 sm:grid-cols-2">
							{highlights.map((highlight) => (
								<li
									key={highlight}
									className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground lg:justify-start"
								>
									<span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary-100">
										<CheckIcon className="size-3 text-secondary-600" />
									</span>
									{highlight}
								</li>
							))}
						</ul>
					</div>

					{/* Visual */}
					<div className="relative hidden lg:block">
						<div className="relative overflow-hidden rounded-2xl shadow-2xl">
							<img
								src={heroImage}
								alt="Children playing soccer together outdoors"
								loading="eager"
								className="aspect-4/3 size-full object-cover scale-x-[-1]"
							/>

							{/* Floating card — top left */}
							<div className="absolute top-6 left-6 rounded-xl bg-background/95 p-3 shadow-lg backdrop-blur-sm">
								<div className="flex items-center gap-3">
									<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-100">
										<HeartHandshakeIcon className="size-5 text-accent-600" />
									</div>
									<div>
										<p className="text-sm font-semibold text-foreground">
											500+ Families
										</p>
										<p className="text-xs text-muted-foreground">
											in our community
										</p>
									</div>
								</div>
							</div>

							{/* Floating card — bottom */}
							<div className="absolute right-6 bottom-6 left-6 rounded-xl bg-background p-4 shadow-lg">
								<div className="flex items-center gap-3">
									<div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary-500">
										<ShieldCheckIcon className="size-6 text-white" />
									</div>
									<div className="flex-1">
										<p className="font-semibold text-foreground">
											Certified Programs
										</p>
										<p className="text-sm text-muted-foreground">
											Safe &amp; inclusive for all ages
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
