import { site } from "@/data/site";

export const LEAD_POPUP_KEY = "ata:lead-popup-shown";

export const hasSeenLeadPopup = () => {
	try {
		return localStorage.getItem(LEAD_POPUP_KEY) === "1";
	} catch {
		return false;
	}
};

export const markLeadPopupSeen = () => {
	try {
		localStorage.setItem(LEAD_POPUP_KEY, "1");
	} catch {}
};

export interface Lead {
	name: string;
	email: string;
	phone: string;
	address: string;
	school: string;
}

export const buildLeadMailto = ({
	name,
	email,
	phone,
	address,
	school,
}: Lead) => {
	const subject = "Waitlist request";
	const body = [
		"Hi, I'd like to join the waitlist.",
		"",
		`Name: ${name}`,
		`Email: ${email}`,
		`Phone: ${phone}`,
		`Current address: ${address || "Not provided"}`,
		`Attending school: ${school || "Not provided"}`,
	].join("\n");
	return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
