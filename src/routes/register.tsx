import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/layout/Page";
import { pages } from "@/data/pages";
import { seo } from "@/lib/seo";

const page = pages["/register"];

const formUrl =
	"https://docs.google.com/forms/d/e/1FAIpQLSeE2mlqkVSUZc2I1iLYWq6ACZyS4c5A3PfWuoa5cf3_w4jONw/viewform?embedded=true";

export const Route = createFileRoute("/register")({
	head: () => seo({ title: page.title, description: page.description }),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Page title={page.title} description={page.description}>
			<div className="overflow-hidden rounded-xl border shadow-sm">
				<iframe
					title="Program registration form"
					src={formUrl}
					className="h-[calc(100dvh-32rem)] min-h-140 w-full"
					loading="lazy"
				>
					Loading…
				</iframe>
			</div>
			<p className="mt-4 text-sm text-muted-foreground">
				Having trouble with the form?{" "}
				<a
					href={formUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="font-medium text-primary underline-offset-4 hover:underline"
				>
					Open it in a new tab
				</a>
				.
			</p>
		</Page>
	);
}
