import { createRoute } from "@tanstack/react-router";
import { z } from "zod";
import { layoutRoute } from "./layout";
import { Index } from "../pages";

const indexSearch = z.object({
  page: z.coerce.number().default(1).optional(),
  name: z.string().optional(),
  color: z
    .enum(["white", "black", "blue", "red", "yellow", "green", "*", ""])
    .optional(),
  size: z.enum(["s", "m", "l", "xl", "*", ""]).optional(),
});

type indexSearch = z.infer<typeof indexSearch>;

export const indexRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  validateSearch: (search) => indexSearch.parse(search),
  component: () => <Index />,
});
