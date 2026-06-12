import { Link } from "@tanstack/react-router";
import { CheckIcon, HeartHandshakeIcon, ShieldCheckIcon } from "lucide-react";
import logoUrl from "@/assets/logo.webp";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

/** Unsplash photo by Adrià Crehuet Cano (@acrehuet98), free to use under the
 * Unsplash License. `?` params request a right-sized, optimized crop. */
const heroImage =
	"https://images.unsplash.com/photo-1609422644211-a85c36ee36a7?auto=format&fit=crop&w=900&q=80";

/** Quick trust signals shown beneath the hero CTAs. */
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
						<div className="flex justify-center lg:justify-start">
							<img
								src={logoUrl}
								alt={`${site.name} logo`}
								className="w-full max-w-xs object-contain sm:max-w-sm mx-auto"
							/>
						</div>

						<h1 className="my-6 flex flex-wrap justify-center gap-x-3 font-heading text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
							<span>Play.</span>
							<span>Learn.</span>
							<span className="bg-linear-to-r from-primary-600 to-accent-600 bg-clip-text pb-2 text-transparent">
								Belong.
							</span>
						</h1>

						<p className="mx-auto mb-8 max-w-4xl text-lg text-muted-foreground sm:text-xl lg:mx-0">
							Engaging programs that bring children, youth, and families
							together through fitness, learning, and community connection.
						</p>

						<div className="flex flex-col justify-center gap-4 sm:flex-row">
							<Button asChild size="lg">
								<Link to="/programs">Explore Programs</Link>
							</Button>
							<Button asChild size="lg" variant="outline">
								<Link to="/register">Register Today</Link>
							</Button>
						</div>
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
				</div>
			</Container>
		</section>
	);
}
