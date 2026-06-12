import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { Link } from "@tanstack/react-router";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { footerQuickLinks, legalLinks } from "@/data/navigation";
import { site } from "@/data/site";

const socialIcons = {
	facebook: SiFacebook,
	instagram: SiInstagram,
	x: SiX,
} as const;

export function Footer() {
	return (
		<footer className="bg-neutral-900 text-neutral-300">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					{/* About */}
					<div className="col-span-1 md:col-span-2">
						<div className="mb-4 flex items-center gap-2">
							<div className="flex size-10 items-center justify-center rounded-lg bg-linear-to-br from-primary-500 to-accent-500">
								<span className="text-xl font-bold text-white">
									{site.shortName}
								</span>
							</div>
							<span className="font-heading text-xl font-bold text-white">
								{site.name}
							</span>
						</div>
						<p className="mb-4 max-w-md text-sm text-neutral-400">
							{site.description}
						</p>
						<div className="flex gap-4">
							{site.socials.map((social) => {
								const Icon = socialIcons[social.icon];
								return (
									<a
										key={social.label}
										href={social.href}
										className="text-neutral-400 transition-colors hover:text-white"
										aria-label={social.label}
									>
										<Icon className="size-6" />
									</a>
								);
							})}
						</div>
					</div>

					{/* Quick links */}
					<div>
						<h2 className="mb-4 font-heading font-semibold text-white">
							Quick Links
						</h2>
						<ul className="space-y-2">
							{footerQuickLinks.map((link) => (
								<li key={link.to}>
									<Link
										to={link.to}
										className="text-sm transition-colors hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h2 className="mb-4 font-heading font-semibold text-white">
							Contact
						</h2>
						<ul className="space-y-2 text-sm">
							<li className="flex items-start gap-2">
								<MapPinIcon className="mt-0.5 size-5 shrink-0 text-primary-500" />
								<span>
									{site.contact.address.line1}
									<br />
									{site.contact.address.line2}
								</span>
							</li>
							<li className="flex items-center gap-2">
								<PhoneIcon className="size-5 shrink-0 text-primary-500" />
								<span>{site.contact.phone}</span>
							</li>
							<li className="flex items-center gap-2">
								<MailIcon className="size-5 shrink-0 text-primary-500" />
								<span>{site.contact.email}</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 border-t border-neutral-800 pt-8 text-sm text-neutral-400">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<p>
							&copy; {new Date().getFullYear()} {site.name}. All rights
							reserved.
						</p>
						<div className="flex gap-6">
							{legalLinks.map((link) => (
								<Link
									key={link.to}
									to={link.to}
									className="transition-colors hover:text-white"
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
