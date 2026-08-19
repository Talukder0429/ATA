import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Horizontal content wrapper - centers content at the site's max width and
 * applies the standard responsive gutters (`px-4 sm:px-6 lg:px-8`), which scale
 * the side padding from mobile up. Replaces the repeated
 * `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` pattern across the site.
 */
export function Container({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
			{...props}
		/>
	);
}
