import { createRoute } from "@tanstack/react-router";
import { layoutRoute } from "./layout";
import { About } from "../pages/about";

export const aboutRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/about",
  component: () => <About />,
});
