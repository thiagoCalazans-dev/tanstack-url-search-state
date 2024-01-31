import { createRouter } from "@tanstack/react-router";
import { layoutRoute } from "./routes/layout";
import { indexRoute } from "./routes";
import { aboutRoute } from "./routes/about";

const routeTree = layoutRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
