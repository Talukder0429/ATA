import { createFileRoute } from "@tanstack/react-router";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Page } from "@/components/layout/Page";
import { pages } from "@/data/pages";
import { site } from "@/data/site";
import { seo } from "@/lib/seo";

const page = pages["/contact"];

// const mapQuery = encodeURIComponent(
// 	`${site.contact.address.line1}, ${site.contact.address.line2}`,
// );
// const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
// const mapLinkHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export const Route = createFileRoute("/contact")({
	head: () => seo({ title: page.title, description: page.description }),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Page title={page.title} description={page.description}>
			<div className="grid gap-10 md:grid-cols-2">
				<div className="space-y-6">
					<a
						href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`}
						className="flex items-start gap-3 text-muted-foreground hover:text-foreground"
					>
						<PhoneIcon className="mt-0.5 size-5 shrink-0 text-primary" />
						<span>
							<span className="block font-heading font-semibold text-foreground">
								Phone
							</span>
							{site.contact.phone}
						</span>
					</a>

					<a
						href={`mailto:${site.contact.email}`}
						className="flex items-start gap-3 text-muted-foreground hover:text-foreground"
					>
						<MailIcon className="mt-0.5 size-5 shrink-0 text-primary" />
						<span>
							<span className="block font-heading font-semibold text-foreground">
								Email
							</span>
							{site.contact.email}
						</span>
					</a>

					{/* <a
						href={mapLinkHref}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-start gap-3 text-muted-foreground hover:text-foreground"
					>
						<MapPinIcon className="mt-0.5 size-5 shrink-0 text-primary" />
						<span>
							<span className="block font-heading font-semibold text-foreground">
								Address
							</span>
							{site.contact.address.line1}
							<br />
							{site.contact.address.line2}
						</span>
					</a> */}
				</div>

				{/* <div className="overflow-hidden rounded-xl border shadow-sm">
					<iframe
						title={`Map showing ${site.name} at ${site.contact.address.line1}`}
						src={mapEmbedSrc}
						className="h-72 w-full md:h-full"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						allowFullScreen
					/>
				</div> */}
			</div>
		</Page>
	);
}
