import { StarIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
	id: string;
	name: string;
	role: string;
	content: string;
	rating: number;
}

const testimonials: Testimonial[] = [
	{
		id: "1",
		name: "Sarah Johnson",
		role: "Parent",
		content:
			"My kids absolutely love the after-school program! The staff is amazing and the activities are always engaging. It's wonderful to see my children excited about staying active.",
		rating: 5,
	},
	{
		id: "2",
		name: "Michael Chen",
		role: "Parent",
		content:
			"The summer camps are the highlight of our year. Safe, fun, and educational - everything we could ask for. Highly recommend to any family!",
		rating: 5,
	},
	{
		id: "3",
		name: "Emily Rodriguez",
		role: "Parent",
		content:
			"Active Together Activities has been a game-changer for our family. The nutrition workshops helped us develop healthier eating habits together.",
		rating: 5,
	},
];

export function Testimonials() {
	return (
		<Section className="bg-muted">
			<div className="mb-12 text-center">
				<h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
					What Families Say
				</h2>
				<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
					Hear from parents and families who have experienced our programs
				</p>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
				{testimonials.map((testimonial) => (
					<Card key={testimonial.id}>
						<CardContent className="flex flex-col grow">
							<div className="mb-4 flex gap-1">
								{Array.from(
									{ length: testimonial.rating },
									(_, i) => i + 1,
								).map((starNum) => (
									<StarIcon
										key={`${testimonial.id}-star-${starNum}`}
										className="size-5 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div>

							<p className="mb-6 text-muted-foreground italic grow">
								&ldquo;{testimonial.content}&rdquo;
							</p>

							<div className="border-t border-border pt-4">
								<p className="font-semibold text-foreground">
									{testimonial.name}
								</p>
								<p className="text-sm text-muted-foreground">
									{testimonial.role}
								</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	);
}
