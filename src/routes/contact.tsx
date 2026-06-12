import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/contact"];

export const Route = createFileRoute("/contact")({
	head: () => seo({ title: page.title, description: page.description }),
	component: () => <StubPage path="/contact" showContact />,
});
