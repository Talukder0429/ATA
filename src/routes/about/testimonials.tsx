import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/about/testimonials"];

export const Route = createFileRoute("/about/testimonials")({
	head: () => seo({ title: page.title, description: page.description }),
	component: () => <StubPage path="/about/testimonials" />,
});
