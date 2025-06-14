import type { ReactNode } from "react";
import { listStlyes } from "./List.styles";
import { twMerge } from "tailwind-merge";

type ListProps<T extends { key: string; element: ReactNode }> = {
  tag?: "ul" | "ol";
  items?: T[];
  className?: string;
  row?: boolean;
};

export function List<T extends { key: string; element: ReactNode }>({
  tag: Tag = "ul",
  items,
  className,
  row,
}: ListProps<T>) {
  return (
    <Tag className={twMerge(listStlyes({ row }), className)}>
      {items?.map((item) => (
        <li key={item.key}>{item.element}</li>
      ))}
    </Tag>
  );
}
