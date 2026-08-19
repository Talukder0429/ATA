import { ExternalLinkIcon } from "lucide-react";
import { useState } from "react";
import { type School, schools } from "@/data/schools";
import { cn } from "@/lib/utils";

const mapQuery = (school: School) =>
	encodeURIComponent(`${school.name}, ${school.address}`);

const embedSrc = (school: School) =>
	`https://www.google.com/maps?q=${mapQuery(school)}&output=embed`;

const mapLink = (school: School) =>
	`https://www.google.com/maps/search/?api=1&query=${mapQuery(school)}`;

export const SchoolLocations = () => {
	const [selected, setSelected] = useState<School>(schools[0]);

	return (
		<div className="grid gap-6 md:grid-cols-2">
			<ul className="space-y-2">
				{schools.map((school) => {
					const active = school.name === selected.name;
					return (
						<li key={school.name}>
							<button
								type="button"
								onClick={() => setSelected(school)}
								aria-current={active || undefined}
								className={cn(
									"w-full rounded-lg border p-3 text-left transition-colors",
									active
										? "border-primary bg-primary/5"
										: "border-border hover:bg-muted/50",
								)}
							>
								<span className="block font-heading font-semibold text-foreground">
									{school.name}
								</span>
								<span className="mt-0.5 block text-sm text-muted-foreground">
									{school.address}
								</span>
							</button>
						</li>
					);
				})}
			</ul>

			<div className="space-y-2">
				<div className="overflow-hidden rounded-xl border shadow-sm">
					<iframe
						title={`Map showing ${selected.name}`}
						src={embedSrc(selected)}
						className="h-72 w-full md:h-96"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						allowFullScreen
					/>
				</div>
				<a
					href={mapLink(selected)}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
				>
					Open in Google Maps
					<ExternalLinkIcon className="size-4" />
				</a>
			</div>
		</div>
	);
};
