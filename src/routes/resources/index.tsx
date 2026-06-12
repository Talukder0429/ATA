import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/layout/Page";
import { SectionOverview } from "@/components/SectionOverview";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/resources"];

export const Route = createFileRoute("/resources/")({
	head: () => seo({ title: page.title, description: page.description }),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Page title={page.title} description={page.description}>
			<SectionOverview section="/resources" />
		</Page>
	);
}
