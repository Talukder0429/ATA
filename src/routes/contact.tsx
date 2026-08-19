import { createFileRoute } from "@tanstack/react-router";
import { MailIcon, PhoneIcon } from "lucide-react";
import { SchoolLocations } from "@/components/contact/SchoolLocations";
import { Page } from "@/components/layout/Page";
import { SectionHeading } from "@/components/programs/SectionHeading";
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
			</div>

			<section id="locations" className="mt-12 scroll-mt-24">
				<SectionHeading>Program Locations</SectionHeading>
				<p className="mb-6 text-muted-foreground">
					We run programs at schools across Brampton and Mississauga. Select a
					school to see it on the map.
				</p>
				<SchoolLocations />
			</section>
		</Page>
	);
}
