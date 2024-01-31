import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "../ui/table";
import { Link, useSearch } from "@tanstack/react-router";
import { Product } from "@/schema/product-schema";

interface ProdcutTableProps {
  products?: Product[];
}

export function ProductTable({ products }: ProdcutTableProps) {
  const { page } = useSearch({
    from: "/",
  });

  return (
    <Table className="rounded-md  overflow-hidden border-collapse">
      {products && products.length < 1 && (
        <TableCaption>A list of your products.</TableCaption>
      )}
      <TableHeader className="border">
        <TableRow className="bg-muted/50">
          <TableHead className="text-primary">Produto</TableHead>
          <TableHead className="text-primary">Tamanho</TableHead>
          <TableHead className="text-primary">Cor</TableHead>
          <TableHead className="text-primary">Preço</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-x">
        {products?.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.size}</TableCell>
            <TableCell>{product.color}</TableCell>
            <TableCell className="font-medium">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="border">
        <TableRow className="">
          <TableCell colSpan={4}>
            <Pagination className="">
              <PaginationContent className="flex flex-1 justify-center">
                <PaginationItem>
                  <Button
                    asChild
                    variant="link"
                    className="h-8 w-auto p-2 text-muted-foreground"
                  >
                    <Link
                      search={(prev) => ({
                        ...prev,
                        page: page && page > 1 ? page - 1 : 1,
                      })}
                    >
                      <ChevronLeft />
                    </Link>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    disabled
                    asChild
                    variant="outline"
                    className="h-8 w-auto px-4 hover:bg-background "
                  >
                    <span>{page || 1}</span>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    asChild
                    variant="link"
                    className="h-8 w-auto p-2 text-muted-foreground"
                  >
                    <Link
                      search={(prev) => ({
                        ...prev,
                        page: page ? page + 1 : 1 + 1,
                      })}
                    >
                      <ChevronRight />
                    </Link>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
