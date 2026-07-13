import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { useState } from "react";
import logoUrl from "@/assets/logo-image.svg";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { navGroups } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

function Logo() {
	return (
		<Link to="/" className="flex items-center gap-2 shrink">
			<img
				src={logoUrl}
				alt={`${site.name} logo`}
				className="size-10 shrink-0 rounded-lg object-contain sm:size-12"
			/>
			<span className="font-heading text-base font-bold leading-tight text-foreground sm:text-xl shrink min-w-0 overflow-y-hidden">
				{site.name}
			</span>
		</Link>
	);
}

/** Shared classes for top-level nav links; active route gets a primary accent. */
const navLinkClass =
	"font-medium text-muted-foreground transition-colors hover:text-primary data-[status=active]:font-semibold data-[status=active]:text-primary";

export function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });

	return (
		<header className="sticky top-0 z-50 bg-background shadow-sm">
			<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="shrink">
						<Logo />
					</div>

					{/* Desktop navigation */}
					<div className="hidden items-center gap-6 md:flex">
						<Link
							to="/"
							activeOptions={{ exact: true }}
							className={navLinkClass}
						>
							Home
						</Link>

						{navGroups.map((group) => {
							const groupActive = pathname.startsWith(group.to as string);
							return (
								<DropdownMenu key={group.label} modal={false}>
									<DropdownMenuTrigger
										className={cn(
											"flex items-center gap-1 outline-none",
											navLinkClass,
											groupActive && "font-semibold text-primary",
										)}
									>
										{group.label}
										<ChevronDownIcon className="size-4" />
									</DropdownMenuTrigger>
									<DropdownMenuContent align="start">
										{group.items.map((item) => (
											<DropdownMenuItem
												key={item.params?.slug ?? (item.to as string)}
												asChild
											>
												<Link
													to={item.to}
													params={item.params as never}
													activeOptions={{ exact: true }}
													className="data-[status=active]:font-semibold data-[status=active]:text-primary"
												>
													{item.label}
												</Link>
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>
							);
						})}

						<Link to="/about" className={navLinkClass}>
							About Us
						</Link>

						<Link to="/contact" className={navLinkClass}>
							Contact Us
						</Link>
					</div>

					{/* Right-side actions */}
					<div className="flex items-center gap-3">
						<Button asChild className="hidden md:inline-flex">
							<Link to="/register">Register Now</Link>
						</Button>

						{/* Mobile menu */}
						<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="md:hidden"
									aria-label="Open menu"
								>
									<MenuIcon className="size-5" />
								</Button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="w-80 overflow-y-auto"
								aria-describedby={undefined}
							>
								<SheetHeader>
									<SheetTitle>
										<SheetClose asChild>
											<Button asChild>
												<Link to="/register">Register Now</Link>
											</Button>
										</SheetClose>
									</SheetTitle>
								</SheetHeader>
								<nav className="flex flex-col gap-1 px-4 pb-6 text-right">
									<SheetClose asChild>
										<Link
											to="/"
											activeOptions={{ exact: true }}
											className="rounded-md px-3 py-2 font-medium hover:bg-accent data-[status=active]:bg-accent data-[status=active]:font-semibold data-[status=active]:text-primary-700"
										>
											Home
										</Link>
									</SheetClose>
									<SheetClose asChild>
										<Link
											to="/contact"
											activeOptions={{ exact: true }}
											className="rounded-md px-3 py-2 font-medium hover:bg-accent data-[status=active]:bg-accent data-[status=active]:font-semibold data-[status=active]:text-primary-700"
										>
											Contact Us
										</Link>
									</SheetClose>
									<SheetClose asChild>
										<Link
											to="/about"
											activeOptions={{ exact: true }}
											className="rounded-md px-3 py-2 font-medium hover:bg-accent data-[status=active]:bg-accent data-[status=active]:font-semibold data-[status=active]:text-primary-700"
										>
											About
										</Link>
									</SheetClose>

									{navGroups.map((group) => (
										<div key={group.label} className="mt-4 text-right">
											<p className="px-3 py-1 text-sm font-bold text-black">
												{group.label}
											</p>
											{group.items.map((item) => (
												<SheetClose
													asChild
													key={item.params?.slug ?? (item.to as string)}
												>
													<Link
														to={item.to}
														params={item.params as never}
														activeOptions={{ exact: true }}
														className="block rounded-md px-3 py-2 text-sm hover:bg-accent data-[status=active]:bg-accent data-[status=active]:font-semibold data-[status=active]:text-primary-700"
													>
														{item.label}
													</Link>
												</SheetClose>
											))}
										</div>
									))}
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</nav>
		</header>
	);
}
