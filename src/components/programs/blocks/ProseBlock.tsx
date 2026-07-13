import { SectionHeading } from "@/components/programs/SectionHeading";
import type { ProseBlock as ProseBlockData } from "@/data/program-types";
import { renderMarkdown } from "@/lib/markdown";

export const ProseBlock = ({ block }: { block: ProseBlockData }) => (
	<section>
		{block.heading ? <SectionHeading>{block.heading}</SectionHeading> : null}
		<div
			className="prose max-w-none leading-relaxed text-muted-foreground"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized by renderMarkdown
			dangerouslySetInnerHTML={{ __html: renderMarkdown(block.body) }}
		/>
	</section>
);
