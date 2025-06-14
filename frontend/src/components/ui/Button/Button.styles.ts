import { cva } from "cva";

export const buttonStyles = cva(
  "px-6 py-2 font-bold cursor-pointer rounded-lg",
  {
    variants: {
      intent: {
        primary: "bg-green-600 text-white",
        inline: "!p-0 !font-normal text-neutral-500",
      },
    },
  }
);
