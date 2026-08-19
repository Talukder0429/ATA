import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/layout/Page";
import { ProgramGrid } from "@/components/programs/ProgramGrid";
import { WhyChooseUs } from "@/components/programs/WhyChooseUs";
import { pages } from "@/data/pages";
import { visiblePrograms } from "@/data/programs";
import { seo } from "@/lib/seo";

const page = pages["/programs"];

export const Route = createFileRoute("/programs/")({
	head: () => seo({ title: page.title, description: page.description }),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Page title={page.title} description={page.description}>
			<ProgramGrid programs={visiblePrograms} />
			<WhyChooseUs />
		</Page>
	);
}
