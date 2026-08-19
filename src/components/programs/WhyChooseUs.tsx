import {
	HeartIcon,
	LayersIcon,
	type LucideIcon,
	ShieldCheckIcon,
	UsersIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/programs/SectionHeading";
import { Card } from "@/components/ui/card";

interface Benefit {
	icon: LucideIcon;
	title: string;
	text: string;
}

const benefits: Benefit[] = [
	{
		icon: LayersIcon,
		title: "Multi-Sport Experience",
		text: "Youth experience different sports instead of specializing too early.",
	},
	{
		icon: UsersIcon,
		title: "All Skill Levels Welcome",
		text: "Designed for beginners, recreational players, and developing athletes.",
	},
	{
		icon: ShieldCheckIcon,
		title: "Safe & Structured Environment",
		text: "Supervised programming led by trained youth leaders and recreation professionals.",
	},
	{
		icon: HeartIcon,
		title: "Build Confidence Beyond Sports",
		text: "Youth develop teamwork, leadership, communication, and friendships.",
	},
];

export const WhyChooseUs = () => (
	<section className="mt-16">
		<SectionHeading>Why Choose Us?</SectionHeading>
		<div className="grid gap-6 sm:grid-cols-2">
			{benefits.map(({ icon: Icon, title, text }) => (
				<Card key={title} className="flex flex-row items-start gap-4 p-6">
					<span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-100">
						<Icon className="size-5 text-primary" />
					</span>
					<div>
						<h3 className="font-heading font-semibold text-foreground">
							{title}
						</h3>
						<p className="mt-1 text-sm text-muted-foreground">{text}</p>
					</div>
				</Card>
			))}
		</div>
	</section>
);
