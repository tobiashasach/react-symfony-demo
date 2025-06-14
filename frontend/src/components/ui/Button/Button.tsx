import type { ReactNode } from "react";
import { buttonStyles } from "./Button.styles";
import type { VariantProps } from "cva";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  intent?: VariantProps<typeof buttonStyles>["intent"];
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button(props: ButtonProps) {
  const { children, intent = "primary", type = "button", className } = props;

  return (
    <button
      {...props}
      type={type}
      className={twMerge(buttonStyles({ intent }), className)}
    >
      {children}
    </button>
  );
}
