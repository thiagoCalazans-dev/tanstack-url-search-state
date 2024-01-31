import { Label } from "../ui/label";
import { Search } from "lucide-react";
import { SelectColor } from "../select-buttons/select-color";
import { SelectSize } from "../select-buttons/select-size";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm, FormProvider } from "react-hook-form";
import { router } from "@/router/route-tree";
import { useSearch } from "@tanstack/react-router";
import { z } from "zod";

const ProductForm = z.object({
  name: z.string(),
  color: z.string().optional(),
  size: z.string().optional(),
});

export type ProductForm = z.infer<typeof ProductForm>;

export function FilterForm() {
  const { color, size } = useSearch({
    from: "/",
  });

  const form = useForm<ProductForm>({
    defaultValues: {
      name: "",
      color: color,
      size: size,
    },
  });

  function onSubmit(value: ProductForm) {
    console.log(value);
    router.navigate({
      search: {
        name: value.name,
        color: value.color,
        size: value.size,
      },
    });
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-end gap-4 "
      >
        <Label className="flex flex-col gap-1 w-full">
          Product:
          <Input {...form.register("name")} />
        </Label>
        <Label className="flex flex-col gap-1 w-full min-w-[100px]">
          Sizes:
          <SelectSize />
        </Label>
        <Label className="flex flex-col gap-1 w-full min-w-[100px]">
          Colors
          <SelectColor />
        </Label>
        <Button className="w-fit" size="default">
          <Search className="w-10 h-10" />
        </Button>
      </form>
    </FormProvider>
  );
}
