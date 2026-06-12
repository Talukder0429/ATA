import { Link } from "@tanstack/react-router";
import { CheckIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

const benefits = [
	"Safe, supervised activities",
	"Qualified, caring staff",
	"Affordable programs for all families",
];

export function CTA() {
	return (
		<Section className="bg-linear-to-br from-secondary-600 to-secondary-700">
			<div className="relative overflow-hidden rounded-3xl p-8 text-white sm:p-12">
				<div className="relative grid items-center gap-8 lg:grid-cols-2">
					<div>
						<h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
							Ready to Get Started?
						</h2>
						<p className="mb-6 text-lg text-secondary-50">
							Join our community today and give your family access to amazing
							programs, events, and a supportive network of active families.
						</p>
						<ul className="mb-8 space-y-3">
							{benefits.map((benefit) => (
								<li key={benefit} className="flex items-center gap-3">
									<CheckIcon
										aria-hidden="true"
										className="size-6 shrink-0 text-secondary-200"
									/>
									<span>{benefit}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
						<Button
							asChild
							className="p-4 flex-1 bg-white text-base text-secondary-700 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-neutral-50"
						>
							<Link to="/register">Register Now</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							className="p-4 flex-1 border-2 border-white bg-transparent text-base text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
						>
							<Link to="/contact">Contact Us</Link>
						</Button>
					</div>
				</div>
			</div>
		</Section>
	);
}
