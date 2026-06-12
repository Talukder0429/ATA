import {
	createRootRoute,
	HeadContent,
	Link,
	Outlet,
} from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { seo } from "@/lib/seo";

export const Route = createRootRoute({
	head: () => seo(),
	component: RootComponent,
	notFoundComponent: NotFound,
	errorComponent: ErrorComponent,
});

function Shell({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
			>
				Skip to content
			</a>
			<Header />
			<main id="main-content" className="flex-1">
				{children}
			</main>
			<Footer />
		</div>
	);
}

function RootComponent() {
	return (
		<>
			<HeadContent />
			<Shell>
				<Outlet />
			</Shell>
		</>
	);
}

function NotFound() {
	return (
		<div className="py-24 text-center">
			<p className="font-heading text-6xl font-bold text-primary">404</p>
			<h1 className="mt-4 font-heading text-3xl font-bold text-foreground">
				Page not found
			</h1>
			<p className="mt-2 text-muted-foreground">
				Sorry, we couldn't find the page you were looking for.
			</p>
			<Button asChild className="mt-8">
				<Link to="/">Back to home</Link>
			</Button>
		</div>
	);
}

function ErrorComponent({ error }: { error: Error }) {
	return (
		<div className="py-24 text-center">
			<h1 className="font-heading text-3xl font-bold text-foreground">
				Something went wrong
			</h1>
			<p className="mt-2 text-muted-foreground">
				An unexpected error occurred. Please try again.
			</p>
			{import.meta.env.DEV ? (
				<pre className="mx-auto mt-6 max-w-2xl overflow-auto rounded-md bg-muted p-4 text-left text-sm text-muted-foreground">
					{error.message}
				</pre>
			) : null}
			<Button asChild className="mt-8">
				<Link to="/">Back to home</Link>
			</Button>
		</div>
	);
}
