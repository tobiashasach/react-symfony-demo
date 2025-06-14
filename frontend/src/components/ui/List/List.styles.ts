import { cva } from "cva";

export const listStlyes = cva("flex flex-col gap-4", {
  variants: {
    row: {
      true: "flex-row gap-0",
    },
  },
});
