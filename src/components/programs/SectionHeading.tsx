import type { ReactNode } from "react";

export const SectionHeading = ({ children }: { children: ReactNode }) => (
	<h2 className="mb-4 font-heading text-2xl font-bold text-foreground">
		{children}
	</h2>
);
