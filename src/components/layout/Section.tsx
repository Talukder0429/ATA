import type { ComponentProps } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/**
 * Vertical page section with standard `py-16` rhythm. Nests a <Container> so
 * most sections need no extra wrapper.
 */
export function Section({
	className,
	children,
	...props
}: ComponentProps<"section">) {
	return (
		<section className={cn("py-16", className)} {...props}>
			<Container>{children}</Container>
		</section>
	);
}
