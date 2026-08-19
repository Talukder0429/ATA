import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/layout/Page";
import { SectionHeading } from "@/components/programs/SectionHeading";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/about"];

const values = [
	{
		name: "Connection",
		text: "Bringing together youth from different schools to build friendships and community",
	},
	{
		name: "Inclusion",
		text: "Ensuring all skill levels and backgrounds feel welcome",
	},
	{
		name: "Active lifestyle",
		text: "Promoting regular physical activity and healthy habits",
	},
	{
		name: "Respect",
		text: "Encouraging positive behaviour, teamwork, and sportsmanship",
	},
	{
		name: "Safety",
		text: "Providing structured, supervised environments for all participants",
	},
];

export const Route = createFileRoute("/about/")({
	head: () => seo({ title: page.title, description: page.description }),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Page title={page.title} description={page.description}>
			<div className="space-y-12">
				<section>
					<SectionHeading>Our Story</SectionHeading>
					<div className="space-y-4 leading-relaxed text-muted-foreground">
						<p>
							Founded by recreation professionals with over 15 years of
							experience working with youth in community recreation, Active
							Together Activities was created to give every young athlete an
							opportunity to participate, improve, and belong.
						</p>
					</div>
					<blockquote className="mt-6 border-l-4 border-primary bg-primary-50/60 py-4 pr-4 pl-6 font-heading text-lg font-semibold text-foreground italic">
						Not every youth makes a competitive team - but every youth deserves
						a place to play.
					</blockquote>
				</section>

				<section>
					<SectionHeading>Mission &amp; Values</SectionHeading>
					<div className="space-y-4 leading-relaxed text-muted-foreground">
						<p>
							Active Together Activities Inc. is a youth drop-in sports program
							designed to connect students from different schools through
							structured physical activity, teamwork, and recreation. Our
							mission is to create a safe, inclusive, and engaging environment
							where youth can stay active after school while building
							friendships beyond their own school communities.
						</p>
						<p>
							We aim to reduce separation between school communities by bringing
							youth together in shared sports and group activities that promote
							teamwork, confidence, and positive social development.
						</p>
					</div>
					<div className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
						{values.map((value) => (
							<div key={value.name} className="rounded-lg bg-muted/40 p-4">
								<h3 className="font-heading font-semibold text-foreground">
									{value.name}
								</h3>
								<p className="mt-1 text-sm text-muted-foreground">
									{value.text}
								</p>
							</div>
						))}
					</div>
				</section>

				<section>
					<SectionHeading>Our Team</SectionHeading>
					<div className="space-y-4 leading-relaxed text-muted-foreground">
						<p>
							Active Together Activities Inc. is led by experienced
							professionals with over 15 years of experience working with
							children and youth in sports, recreation, and community
							programming environments.
						</p>
						<p>
							The leadership team is responsible for program development, daily
							operations, staff coordination, and ensuring a safe and structured
							environment for all participants.
						</p>
						<p>
							Our team also includes trained program staff and youth leaders who
							support daily activities, supervise groups, and encourage positive
							engagement between participants from different schools.
						</p>
					</div>
				</section>

				<section>
					<SectionHeading>Program Access &amp; Transportation</SectionHeading>
					<div className="space-y-4 leading-relaxed text-muted-foreground">
						<p>
							To make participation easier for families, Active Together
							Activities Inc. provides organized school pickup from
							participating schools at the end of the school day. This allows
							youth to transition directly from school into the program in a
							safe and structured way.
						</p>
						<p>
							This system helps reduce transportation challenges for parents
							while ensuring participants arrive safely and on time to program
							locations held at local public schools in Brampton and surrounding
							areas.
						</p>
					</div>
				</section>
			</div>
		</Page>
	);
}
