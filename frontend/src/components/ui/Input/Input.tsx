import type React from "react";
import { useId } from "react";
import { inputElementStyles, inputStyles, labelStyles } from "./Input.styles";

type InputProps = { label: string } & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "id"
>;

export function Input(props: InputProps) {
  const id = useId();

  return (
    <div className={inputStyles()}>
      <label className={labelStyles()} htmlFor={id}>
        {props.label}
      </label>
      <input className={inputElementStyles()} id={id} {...props}></input>
    </div>
  );
}
