import { cva } from "cva";

export const headerStyles = cva(
  "py-8 px-10 fixed top-0 left-0 right-0 shadow-xs bg-white/60 backdrop-blur-sm"
);

export const titleStyles = cva("text-2xl flex gap-1 font-bold");

export const highligthTitleStyles = cva("text-green-600");
