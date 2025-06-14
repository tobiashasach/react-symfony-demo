import type { ReactNode } from "react";
import { headlineStyles } from "./Headline.styles";
import type { VariantProps } from "cva";
import { twMerge } from "tailwind-merge";

export type HeadlineProps = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  intent?: VariantProps<typeof headlineStyles>["intent"];
  className?: string;
};

export function Headline({
  tag: Tag = "h2",
  intent,
  className,
  children,
}: HeadlineProps) {
  return (
    <Tag
      className={twMerge(
        headlineStyles({
          intent: intent || (Tag as HeadlineProps["intent"]),
        }),
        className
      )}
    >
      {children}
    </Tag>
  );
}
