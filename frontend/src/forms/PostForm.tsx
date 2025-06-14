import { twMerge } from "tailwind-merge";
import { Button } from "../components/ui/Button/Button";
import { Headline } from "../components/ui/Headline/Headline";
import { Input } from "../components/ui/Input/Input";
import { Textarea } from "../components/ui/Textarea/Textarea";
import {
  headlineStyles,
  postFormStyles,
  submitStyles,
} from "./PostForm.styles";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Post } from "../types/Post";
import { postQueryKey } from "../hooks/usePosts";

type PostFormProps = {
  className?: string;
};

export function PostForm({ className }: PostFormProps) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();

  const { mutate } = useMutation({
    mutationFn: ({ text, title }: Pick<Post, "title" | "text">) => {
      return fetch(import.meta.env.VITE_BACKEND_URL + "/post", {
        method: "post",
        body: JSON.stringify({ text, title }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess() {
      queryClient.refetchQueries({ queryKey: postQueryKey() });
      reset();
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        mutate({ text: data.text, title: data.title });
      })}
      className={twMerge(postFormStyles(), className)}
    >
      <Headline className={headlineStyles()}>Create a new post</Headline>
      <Input {...register("title")} label="Title" />
      <Textarea {...register("text")} label="Text" />
      <Button className={submitStyles()} type="submit">
        Create
      </Button>
    </form>
  );
}
