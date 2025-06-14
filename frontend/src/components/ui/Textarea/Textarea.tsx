import { useId } from "react";
import {
  labelStyles,
  textareaElementStyles,
  textareaStyles,
} from "./Textarea.styles";

type TextareaProps = { label: string } & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "id"
>;

export function Textarea(props: TextareaProps) {
  const id = useId();
  return (
    <div className={textareaStyles()}>
      <label className={labelStyles()} htmlFor={id}>
        {props.label}
      </label>
      <textarea
        className={textareaElementStyles()}
        id={id}
        {...props}
      ></textarea>
    </div>
  );
}
