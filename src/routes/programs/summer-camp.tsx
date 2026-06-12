import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/programs/summer-camp"];

export const Route = createFileRoute("/programs/summer-camp")({
	head: () => seo({ title: page.title, description: page.description }),
	component: () => <StubPage path="/programs/summer-camp" />,
});
