import { createRootRoute } from "@tanstack/react-router";
import { RootLayout } from "../pages/layout";

export const layoutRoute = createRootRoute({
  component: () => <RootLayout />,
});
