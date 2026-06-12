import { Link, type LinkProps } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { navGroups } from "@/data/navigation";
import { getPage, type PagePath } from "@/data/pages";

interface SectionOverviewProps {
	/** The section landing path, e.g. "/programs" — its nav group's children
	 * (minus the "All …" self-link) are rendered as overview cards. */
	section: Extract<PagePath, "/programs" | "/about" | "/resources">;
}

/**
 * Card grid summarizing a section's child pages. Pulls the child links from the
 * shared `navGroups` tree and their titles/descriptions from `pages.ts`, so the
 * three section landing pages stay in sync with navigation and SEO copy.
 */
export function SectionOverview({ section }: SectionOverviewProps) {
	const group = navGroups.find((g) => g.to === section);
	if (!group) return null;

	const children = group.items.filter((item) => item.to !== section);

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
			{children.map((item) => {
				const page = getPage(item.to as PagePath);
				return (
					<Link key={item.to} to={item.to as LinkProps["to"]} className="group">
						<Card className="h-full transition-shadow duration-300 hover:shadow-lg">
							<CardContent>
								<h2 className="mb-2 font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
									{page.title}
								</h2>
								<p className="text-sm text-muted-foreground">
									{page.description}
								</p>
								<div className="mt-4 flex items-center text-sm font-semibold text-primary">
									Learn more
									<ArrowRightIcon className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
								</div>
							</CardContent>
						</Card>
					</Link>
				);
			})}
		</div>
	);
}
