import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/programs/youth"];

export const Route = createFileRoute("/programs/youth")({
	head: () => seo({ title: page.title, description: page.description }),
	component: () => <StubPage path="/programs/youth" />,
});
