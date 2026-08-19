import { Link } from "@tanstack/react-router";
import { ShieldCheckIcon } from "lucide-react";
import logoUrl from "@/assets/full-logo.svg";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

/** Unsplash photo by Adria Crehuet Cano (@acrehuet98), free to use under the
 * Unsplash License. `?` params request a right-sized, optimized crop. */
const heroImage =
	"https://images.unsplash.com/photo-1606470542032-a9caa0be6e97";

export function Hero() {
	return (
		<section className="relative overflow-hidden bg-linear-to-b from-primary-50/60 to-background">
			{/* Subtle radial glow - replaces the busy blobs */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-24 right-0 size-128 rounded-full bg-primary-100/50 blur-3xl"
			/>

			<Container className="relative py-4 lg:py-8">
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

						<h1 className="my-6 font-heading text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
							Multi-Sport Programs Designed for Youth Who Want to{" "}
							<span className="bg-linear-to-r from-primary-600 to-accent-600 bg-clip-text pb-2 text-transparent">
								Play, Improve, and Connect
							</span>
						</h1>

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
								className="aspect-4/3 size-full object-cover"
							/>

							{/* Floating card - top left */}
							{/* <div className="absolute top-6 left-6 rounded-xl bg-background/95 p-3 shadow-lg backdrop-blur-sm">
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
							</div> */}

							{/* Floating card - bottom */}
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

						{/* Explanatory blurb */}
						<p className="mt-10 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
							Active Together Activities provides structured multi-sport
							programming for school-aged youth. We create a welcoming
							environment where youth of all skill levels can build confidence,
							stay active, and make new friends through sports.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
