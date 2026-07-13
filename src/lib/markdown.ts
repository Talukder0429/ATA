import DOMPurify from "dompurify";
import { marked } from "marked";

export const renderMarkdown = (md: string): string => {
	const raw = marked.parse(md, { async: false }) as string;
	return DOMPurify.sanitize(raw);
};
