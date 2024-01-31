import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { ProductForm } from "../forms/filter-form";

export function SelectSize() {
  const form = useFormContext<ProductForm>();

  return (
    <Controller
      control={form.control}
      name="size"
      render={({ field: { onChange, value } }) => (
        <Select onValueChange={onChange} defaultValue={value}>
          <SelectTrigger className="min-w-[180px]">
            <SelectValue placeholder="choose your size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="*">All</SelectItem>
              <SelectItem value="s">Small</SelectItem>
              <SelectItem value="m">Medium</SelectItem>
              <SelectItem value="l">Large</SelectItem>
              <SelectItem value="xl">Extra Large</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}
