export const UNAVAILABLE_LABEL = "Currently full";

export const UnavailableBadge = () => (
	<span className="inline-flex items-center rounded-full bg-brand-red-500/10 px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wide text-brand-red-700">
		{UNAVAILABLE_LABEL}
	</span>
);
