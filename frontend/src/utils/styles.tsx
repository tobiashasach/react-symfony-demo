import { twMerge } from "tailwind-merge";
import { cva } from "cva";

export function styles<T>(...args: Parameters<typeof cva<T>>) {
  const styles = cva(...args);

  return (...args: Parameters<typeof styles>) => twMerge(styles(...args));
}
