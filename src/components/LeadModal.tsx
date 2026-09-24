import { MailIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	buildLeadMailto,
	hasSeenLeadPopup,
	markLeadPopupSeen,
} from "@/lib/lead-popup";

const SCROLL_TRIGGER_RATIO = 0.3;

const fields = [
	{ id: "name", label: "Name", type: "text", autoComplete: "name" },
	{ id: "email", label: "Email", type: "email", autoComplete: "email" },
	{ id: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
	{
		id: "address",
		label: "Current address",
		type: "text",
		autoComplete: "street-address",
		optional: true,
	},
	{
		id: "school",
		label: "Attending school",
		type: "text",
		autoComplete: "off",
		optional: true,
	},
] as const;

export const LeadModal = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (hasSeenLeadPopup()) return;
		const onScroll = () => {
			if (window.scrollY < window.innerHeight * SCROLL_TRIGGER_RATIO) return;
			window.removeEventListener("scroll", onScroll);
			markLeadPopupSeen();
			setOpen(true);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const get = (key: string) => String(data.get(key) ?? "").trim();
		window.location.href = buildLeadMailto({
			name: get("name"),
			email: get("email"),
			phone: get("phone"),
			address: get("address"),
			school: get("school"),
		});
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="max-h-[calc(100dvh-2rem)] gap-6 overflow-y-auto sm:max-w-xl sm:p-10">
				<DialogHeader>
					<DialogTitle className="font-heading text-2xl font-bold sm:text-3xl">
						Join our waitlist today!
					</DialogTitle>
					<DialogDescription className="text-base">
						Limited spots available. Join the waitlist to get first access when
						registrations open for the season.
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={onSubmit} className="space-y-5">
					{fields.map(({ id, label, type, autoComplete, ...field }) => {
						const optional = "optional" in field;
						return (
							<div key={id} className="space-y-2">
								<Label htmlFor={`lead-${id}`}>
									{label}
									{optional && (
										<span className="font-normal text-muted-foreground">
											(optional)
										</span>
									)}
								</Label>
								<Input
									id={`lead-${id}`}
									name={id}
									type={type}
									autoComplete={autoComplete}
									required={!optional}
									className="h-10"
								/>
							</div>
						);
					})}
					<Button
						type="submit"
						size="lg"
						className="mt-2 h-11 w-full text-base"
					>
						<MailIcon aria-hidden="true" />
						Email Inquiry
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
};
