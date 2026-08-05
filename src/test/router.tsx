import {
	createMemoryHistory,
	createRootRoute,
	createRouter,
	RouterProvider,
} from "@tanstack/react-router";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";

/**
 * Renders `ui` inside a minimal in-memory router so components using <Link>
 * have the router context they need. Returns the same handle as `render`.
 */
export const renderWithRouter = (ui: ReactNode) => {
	const rootRoute = createRootRoute({ component: () => ui });
	const router = createRouter({
		routeTree: rootRoute,
		history: createMemoryHistory({ initialEntries: ["/"] }),
	});
	// biome-ignore lint/suspicious/noExplicitAny: test router instance type mismatch is irrelevant here
	return render(<RouterProvider router={router as any} />);
};
