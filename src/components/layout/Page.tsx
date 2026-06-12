import type { ReactNode } from "react";
import { Section } from "@/components/layout/Section";

interface PageLayoutProps {
	title: string;
	/** Optional lede paragraph rendered under the heading. */
	description?: string;
	children?: ReactNode;
}

/**
 * Standard interior-page shell: consistent vertical rhythm and heading
 * treatment. Every non-home route renders through this so spacing and the <h1>
 * style stay uniform site-wide.
 */
export function Page({ title, description, children }: PageLayoutProps) {
	return (
		<Section>
			<h1 className="font-heading text-4xl font-bold text-foreground">
				{title}
			</h1>
			{description ? (
				<p className="mt-4 text-lg text-muted-foreground">{description}</p>
			) : null}
			{children ? <div className="mt-8">{children}</div> : null}
		</Section>
	);
}
