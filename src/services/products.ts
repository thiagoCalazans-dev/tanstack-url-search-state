import { db } from "@/infra/supabase-db";
import { Product } from "@/schema/product-schema";
import { z } from "zod";

async function findAll({ name, color, size }: getAllParams) {
  if (color && size)
    return await db
      .from("products")
      .select()
      .like("name", `%${name || ""}%`)
      .eq("color", color)
      .eq("size", size);

  if (color && !size)
    return await db
      .from("products")
      .select()
      .like("name", `%${name || ""}%`)
      .eq("color", color);

  if (size && !color)
    return await db
      .from("products")
      .select()
      .like("name", `%${name || ""}%`)
      .eq("size", size);

  return await db
    .from("products")
    .select()
    .like("name", `%${name || ""}%`);
}

const getAllParams = z.object({
  name: z.string().optional(),
  color: z
    .string()
    .optional()
    .transform((color) => {
      if (color === "*") return undefined;
      return color;
    }),
  size: z
    .string()
    .optional()
    .transform((size) => {
      if (size === "*") return undefined;
      return size;
    }),
  page: z.string().optional(),
});

type getAllParams = z.infer<typeof getAllParams>;

async function getAll(params: getAllParams) {
  const props = getAllParams.parse(params);
  const dbProducts = await findAll(props);
  if (dbProducts.data === null) return [];
  const products = dbProducts.data.map((dbProduct) => Product.parse(dbProduct));
  return products;
}

export const ProductService = {
  getAll,
};
