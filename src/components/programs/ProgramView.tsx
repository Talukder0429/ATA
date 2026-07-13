import { Section } from "@/components/layout/Section";
import { FactsRail } from "@/components/programs/FactsRail";
import { ProgramSection } from "@/components/programs/ProgramSection";
import { Button } from "@/components/ui/button";
import type { Program } from "@/data/program-types";

export const ProgramView = ({ program }: { program: Program }) => {
	const sections = program.sections ?? [];
	const heroImage = program.heroImage ?? program.cardImage;
	const registerLabel = program.registrationLabel ?? "Register Now";

	return (
		<article>
			{/* Hero */}
			{heroImage ? (
				<div className="relative min-h-88 bg-secondary-900 sm:min-h-104">
					<div
						data-hero-image
						className="absolute inset-0 bg-cover bg-center blur-[2px]"
						style={{ backgroundImage: `url("${heroImage}")` }}
					/>
					<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/45 to-black/30" />
					<div className="relative mx-auto flex min-h-88 max-w-5xl flex-col justify-center px-6 py-14 sm:min-h-104 sm:px-8">
						{program.subtitle ? (
							<p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.14em] text-accent-300">
								{program.subtitle}
							</p>
						) : null}
						<h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
							{program.name}
						</h1>
						{program.tagline ? (
							<p className="mt-3 text-xl font-semibold text-accent-400">
								{program.tagline}
							</p>
						) : null}
						<p className="mt-3 max-w-2xl text-lg text-white/85">
							{program.cardSummary}
						</p>
						<Button asChild size="lg" className="mt-6 w-fit">
							<a href={program.registrationUrl}>{registerLabel}</a>
						</Button>
					</div>
				</div>
			) : (
				<div className="bg-[radial-gradient(ellipse_at_top_left,var(--color-accent-100),var(--color-background)_62%)]">
					<div className="mx-auto max-w-5xl px-6 py-14 sm:px-8">
						{program.subtitle ? (
							<p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.14em] text-accent-600">
								{program.subtitle}
							</p>
						) : null}
						<h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
							{program.name}
						</h1>
						{program.tagline ? (
							<p className="mt-3 text-xl font-semibold text-primary">
								{program.tagline}
							</p>
						) : null}
						<p className="mt-3 max-w-2xl text-lg text-muted-foreground">
							{program.cardSummary}
						</p>
						<Button asChild size="lg" className="mt-6">
							<a href={program.registrationUrl}>{registerLabel}</a>
						</Button>
					</div>
				</div>
			)}

			{/* Body */}
			<Section>
				<div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_260px]">
					<main className="min-w-0 space-y-12">
						{sections.map((block, i) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: sections lack unique IDs; type+index is stable
							<div key={`${block.type}-${i}`}>
								<ProgramSection block={block} />
								{i === 0 ? (
									<div className="mt-12 lg:hidden">
										<FactsRail program={program} />
									</div>
								) : null}
							</div>
						))}
						{sections.length === 0 ? (
							<div className="lg:hidden">
								<FactsRail program={program} />
							</div>
						) : null}
					</main>

					<aside className="hidden lg:block">
						<div className="sticky top-20">
							<FactsRail program={program} />
						</div>
					</aside>
				</div>
			</Section>

			{/* Closing */}
			{program.closing ? (
				<Section className="pt-0">
					<div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-secondary px-6 py-12 text-center text-secondary-foreground sm:px-12">
						<h2 className="font-heading text-2xl font-bold sm:text-3xl">
							{program.closing.heading}
						</h2>
						<p className="mx-auto mt-3 max-w-2xl text-secondary-foreground/85">
							{program.closing.text}
						</p>
						<Button asChild size="lg" className="mt-6">
							<a href={program.registrationUrl}>
								{program.closing.buttonLabel ?? "Register Today"}
							</a>
						</Button>
					</div>
				</Section>
			) : null}
		</article>
	);
};
