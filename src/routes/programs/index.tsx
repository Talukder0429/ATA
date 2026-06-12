import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/layout/Page";
import { SectionOverview } from "@/components/SectionOverview";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/programs"];

export const Route = createFileRoute("/programs/")({
	head: () => seo({ title: page.title, description: page.description }),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Page title={page.title} description={page.description}>
			<SectionOverview section="/programs" />
		</Page>
	);
}
