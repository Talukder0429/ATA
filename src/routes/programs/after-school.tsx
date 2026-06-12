import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/programs/after-school"];

export const Route = createFileRoute("/programs/after-school")({
	head: () => seo({ title: page.title, description: page.description }),
	component: () => <StubPage path="/programs/after-school" />,
});
