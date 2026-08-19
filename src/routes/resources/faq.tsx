import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Page } from "@/components/layout/Page";
import { pages } from "@/data/pages";
import { site } from "@/data/site";
import { seo } from "@/lib/seo";

const page = pages["/resources/faq"];

const locationsLink = (label: string) => (
	<Link
		to="/contact"
		hash="locations"
		className="font-medium text-primary hover:underline"
	>
		{label}
	</Link>
);

const faqs: { q: string; a: ReactNode }[] = [
	{
		q: "What age group are the programs for?",
		a: "Our programs are designed for school-aged youth, generally spanning Grades 3-13. Exact age and grade divisions vary by program, so check the individual program page for the details that apply.",
	},
	{
		q: "What kind of activities do you offer?",
		a: "Across our programs we offer a variety of sports and recreational activities, including soccer, basketball, volleyball, badminton, dodgeball, flag football, fitness challenges, and team-building games. The focus is on participation, teamwork, and staying active in a structured environment.",
	},
	{
		q: "Where do the programs take place?",
		a: (
			<>
				Programs are held at{" "}
				{locationsLink(
					"local public schools in Brampton and surrounding areas",
				)}
				. These locations provide safe and accessible spaces for youth from
				different schools to come together.
			</>
		),
	},
	{
		q: "Do participants need to register in advance?",
		a: "Yes. Registration is required in advance for all programs to ensure proper planning, supervision, and group organization. Registration formats differ by program - some use a monthly membership, others a one-time weekly sign-up - so refer to the program page for how to enroll.",
	},
	{
		q: "What makes your programs different from other sports programs?",
		a: "Our programs connect youth from different schools, giving participants the chance to build friendships beyond their own school community while taking part in structured sports and recreation.",
	},
	{
		q: "Is transportation provided?",
		a: (
			<>
				Transportation depends on the program. Some programs offer{" "}
				{locationsLink("organized school pickup")} for designated routes within
				Brampton and surrounding areas, while others rely on parent drop-off and
				pickup. Check the program page to see what is available.
			</>
		),
	},
	{
		q: "What should participants bring?",
		a: "Participants should bring comfortable athletic clothing, running shoes, and a water bottle. Some programs also recommend a nut-free snack or lunch and weather-appropriate outerwear - the program page lists a full what-to-bring checklist.",
	},
	{
		q: "Are these competitive sports programs?",
		a: "No. Our programs focus on participation, recreation, and skill development rather than competitive team selection. Friendly competitions and tournaments are part of the fun, but everyone is welcome regardless of skill level.",
	},
	{
		q: "How do I get more information?",
		a: `For anything not covered here, reach out to our team at ${site.contact.email} or ${site.contact.phone} and we'll be happy to help.`,
	},
];

export const Route = createFileRoute("/resources/faq")({
	head: () => seo({ title: page.title, description: page.description }),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Page title={page.title} description={page.description}>
			<dl className="space-y-8">
				{faqs.map((faq) => (
					<div key={faq.q}>
						<dt className="font-heading text-lg font-semibold text-foreground">
							{faq.q}
						</dt>
						<dd className="mt-2 leading-relaxed text-muted-foreground">
							{faq.a}
						</dd>
					</div>
				))}
			</dl>
		</Page>
	);
}
