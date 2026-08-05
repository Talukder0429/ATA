import { createFileRoute } from "@tanstack/react-router";
import { CheckIcon } from "lucide-react";
import { Page } from "@/components/layout/Page";
import { SectionHeading } from "@/components/programs/SectionHeading";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/resources/code-of-conduct"];

const participantExpectations = [
	"Treat others with kindness and respect.",
	"Listen to coaches and staff.",
	"Show good sportsmanship, whether winning or losing.",
	"Include others and be supportive teammates.",
	"Take care of equipment and facilities.",
	"Use appropriate language and behaviour.",
	"Try their best and have fun.",
];

const parentExpectations = [
	"Treat staff, volunteers, participants, and other families with respect.",
	"Support positive sportsmanship from the sidelines.",
	"Ensure participants arrive prepared and are picked up on time.",
	"Keep emergency contact and medical information up to date.",
	"Speak with staff respectfully if any concerns arise.",
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

export const Route = createFileRoute("/resources/code-of-conduct")({
	head: () => seo({ title: page.title, description: page.description }),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Page title={page.title} description={page.description}>
			<div className="space-y-12">
				<section>
					<SectionHeading>Participants</SectionHeading>
					<p className="mb-4 leading-relaxed text-muted-foreground">
						We ask all participants to:
					</p>
					<CheckList items={participantExpectations} />
					<p className="mt-4 leading-relaxed text-muted-foreground">
						Bullying, fighting, harassment, discrimination, vandalism, or
						behaviour that puts others at risk will not be tolerated.
					</p>
				</section>

				<section>
					<SectionHeading>Parents &amp; Guardians</SectionHeading>
					<p className="mb-4 leading-relaxed text-muted-foreground">
						We ask parents and guardians to:
					</p>
					<CheckList items={parentExpectations} />
				</section>

				<section>
					<SectionHeading>Staff &amp; Volunteers</SectionHeading>
					<p className="leading-relaxed text-muted-foreground">
						Our staff and volunteers are committed to creating a safe,
						inclusive, and supportive environment for every participant. They
						are expected to lead by example, treat everyone fairly, and always
						put the well-being of participants first.
					</p>
				</section>

				<section>
					<SectionHeading>If Expectations Aren't Met</SectionHeading>
					<p className="leading-relaxed text-muted-foreground">
						If a participant's behaviour becomes disruptive or unsafe, staff
						will work with them to correct it. Depending on the situation, this
						may include a reminder, a conversation with parents or guardians,
						temporary removal from an activity, or, in serious cases, suspension
						or removal from the program.
					</p>
				</section>
			</div>
		</Page>
	);
}
