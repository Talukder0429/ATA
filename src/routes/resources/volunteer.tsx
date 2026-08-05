import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckIcon } from "lucide-react";
import { Page } from "@/components/layout/Page";
import { SectionHeading } from "@/components/programs/SectionHeading";
import { Button } from "@/components/ui/button";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/resources/volunteer"];

const opportunities = [
	"Leading sports and recreational activities",
	"Setting up and cleaning up equipment",
	"Supporting coaches and program staff",
	"Supervising games and group activities",
	"Welcoming participants and assisting with registration",
	"Helping with special events and tournaments",
	"Taking photos and videos for social media (where appropriate)",
	"Providing general support throughout the program",
];

const benefits = [
	"Earn community involvement hours",
	"Develop leadership and communication skills",
	"Gain experience working with children and youth",
	"Meet new people and build lasting connections",
	"Strengthen your resume or post-secondary applications",
	"Make a positive impact in your community",
];

const requirements = [
	"Be reliable, respectful, and professional",
	"Follow our Code of Conduct and organizational policies",
	"Attend any required orientation or training",
	"Communicate with staff if they are unable to attend a scheduled shift",
];

const CheckList = ({ items }: { items: readonly string[] }) => (
	<ul className="grid gap-3 sm:grid-cols-2">
		{items.map((item) => (
			<li key={item} className="flex items-start gap-2 text-muted-foreground">
				<CheckIcon className="mt-0.5 size-5 shrink-0 text-primary" />
				<span>{item}</span>
			</li>
		))}
	</ul>
);

export const Route = createFileRoute("/resources/volunteer")({
	head: () => seo({ title: page.title, description: page.description }),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Page title={page.title} description="Make a Difference in Your Community">
			<div className="space-y-12">
				<section>
					<p className="leading-relaxed text-muted-foreground">
						At Active Together Activities, our volunteers play an important role
						in creating fun, safe, and memorable experiences for youth. Whether
						you're looking to give back to your community, gain leadership
						experience, or earn volunteer hours, we'd love to have you join our
						team.
					</p>
				</section>

				<section>
					<SectionHeading>Who Can Volunteer?</SectionHeading>
					<p className="leading-relaxed text-muted-foreground">
						We welcome enthusiastic, responsible, and positive individuals who
						enjoy working with children and being part of a team. High school
						students, college and university students, and community members are
						encouraged to apply.
					</p>
				</section>

				<section>
					<SectionHeading>Volunteer Opportunities</SectionHeading>
					<p className="mb-4 leading-relaxed text-muted-foreground">
						Depending on the program and your interests, volunteers may assist
						with:
					</p>
					<CheckList items={opportunities} />
				</section>

				<section>
					<SectionHeading>Why Volunteer With Us?</SectionHeading>
					<p className="mb-4 leading-relaxed text-muted-foreground">
						Volunteering is a great way to:
					</p>
					<CheckList items={benefits} />
				</section>

				<section>
					<SectionHeading>Volunteer Requirements</SectionHeading>
					<p className="mb-4 leading-relaxed text-muted-foreground">
						To help ensure a safe and positive environment for everyone,
						volunteers are expected to:
					</p>
					<CheckList items={requirements} />
					<p className="mt-4 leading-relaxed text-muted-foreground">
						Some volunteer positions may require additional documentation, such
						as a Police Vulnerable Sector Check, depending on the volunteer's
						age, role, and responsibilities.
					</p>
				</section>

				<section className="rounded-lg bg-muted/40 p-6">
					<SectionHeading>Ready to Get Involved?</SectionHeading>
					<div className="space-y-4 leading-relaxed text-muted-foreground">
						<p>
							We're always looking for passionate volunteers who want to
							inspire, support, and encourage the next generation.
						</p>
						<p>
							Interested in volunteering? Contact us to learn more about
							upcoming opportunities.
						</p>
					</div>
					<Button asChild className="mt-6">
						<Link to="/contact">Contact Us to Volunteer</Link>
					</Button>
				</section>
			</div>
		</Page>
	);
}
