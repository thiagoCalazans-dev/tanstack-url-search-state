import { z } from "zod";

export const Product = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().nonnegative(),
  color: z.string(),
  size: z.string(),
});

export type Product = z.infer<typeof Product>;
