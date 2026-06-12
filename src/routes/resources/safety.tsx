import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/resources/safety"];

export const Route = createFileRoute("/resources/safety")({
	head: () => seo({ title: page.title, description: page.description }),
	component: () => <StubPage path="/resources/safety" />,
});
