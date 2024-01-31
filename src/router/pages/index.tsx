import { FilterForm } from "@/components/forms/filter-form";
import { ProductTable } from "@/components/tables/product-tables";
import { Product } from "@/schema/product-schema";
import { ProductService } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";

export function Index() {
  const { name, color, size, page } = useSearch({
    from: "/",
  });

  const { data: products } = useQuery<Product[]>({
    queryKey: ["products", name, color, size, page],
    queryFn: async () =>
      await ProductService.getAll({
        name,
        color,
        size,
      }),
  });

  return (
    <main className="h-full mx-auto py-8">
      <div className="container space-y-4">
        <FilterForm />
        <ProductTable products={products} />
      </div>
    </main>
  );
}
