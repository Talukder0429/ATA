import { Section } from "@/components/layout/Section";

const stats = [
	{
		id: "members",
		value: "500+",
		label: "Active Members",
		description: "Children and families served monthly",
	},
	{
		id: "programs",
		value: "20+",
		label: "Programs",
		description: "Diverse activities for all ages",
	},
	{
		id: "years",
		value: "10",
		label: "Years",
		description: "Serving our community",
	},
	{
		id: "satisfaction",
		value: "98%",
		label: "Satisfaction",
		description: "Parent approval rating",
	},
];

export function ImpactStats() {
	return (
		<Section className="bg-linear-to-br from-primary-500 to-primary-600 text-white">
			<div className="mb-12 text-center">
				<h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
					Our Impact
				</h2>
				<p className="mx-auto max-w-2xl text-lg text-primary-100">
					Making a difference in our community, one family at a time
				</p>
			</div>

			<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
				{stats.map((stat) => (
					<div key={stat.id} className="text-center">
						<div className="mb-2 font-heading text-4xl font-bold sm:text-5xl">
							{stat.value}
						</div>
						<div className="mb-1 text-xl font-semibold">{stat.label}</div>
						<div className="text-sm text-primary-100">{stat.description}</div>
					</div>
				))}
			</div>
		</Section>
	);
}
