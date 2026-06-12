import { ConstructionIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Page } from "@/components/layout/Page";
import { Card, CardContent } from "@/components/ui/card";
import { getPage, type PagePath } from "@/data/pages";
import { site } from "@/data/site";

interface StubPageProps {
	path: PagePath;
	/** Show org phone/email below the notice (for contact/register pages). */
	showContact?: boolean;
}

/**
 * Renders a placeholder page from its `pages.ts` entry: standard heading via
 * <PageLayout> plus an "under construction" notice. Most stub routes are a
 * single <StubPage path="..." />.
 */
export function StubPage({ path, showContact = false }: StubPageProps) {
	const page = getPage(path);

	return (
		<Page title={page.title}>
			<Card className="border-primary/20 bg-primary/5">
				<CardContent className="flex gap-4">
					<ConstructionIcon className="size-6 shrink-0 text-primary" />
					<div className="space-y-2">
						<p className="font-semibold text-foreground">
							Page Under Construction
						</p>
						<p className="text-muted-foreground">
							{page.stubNote ?? page.description}
						</p>
					</div>
				</CardContent>
			</Card>
			{showContact ? (
				<div className="mt-6 space-y-2 text-muted-foreground">
					<a
						href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`}
						className="flex items-center gap-2 hover:text-foreground"
					>
						<PhoneIcon className="size-4 text-primary" />
						{site.contact.phone}
					</a>
					<a
						href={`mailto:${site.contact.email}`}
						className="flex items-center gap-2 hover:text-foreground"
					>
						<MailIcon className="size-4 text-primary" />
						{site.contact.email}
					</a>
				</div>
			) : null}
		</Page>
	);
}
