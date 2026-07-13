import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProgramView } from "@/components/programs/ProgramView";
import { getProgram } from "@/data/programs";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/programs/$slug")({
	loader: ({ params }) => {
		const program = getProgram(params.slug);
		if (!program) throw notFound();
		return program;
	},
	head: ({ loaderData }) =>
		loaderData
			? seo({ title: loaderData.name, description: loaderData.cardSummary })
			: seo(),
	component: RouteComponent,
});

function RouteComponent() {
	const program = Route.useLoaderData();
	return <ProgramView program={program} />;
}
