import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/privacy"];

export const Route = createFileRoute("/privacy")({
	head: () => seo({ title: page.title, description: page.description }),
	component: () => <StubPage path="/privacy" />,
});
