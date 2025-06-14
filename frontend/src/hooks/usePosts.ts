import { useQuery } from "@tanstack/react-query";
import type { Post } from "../types/Post";

export function usePosts<
  A extends string | undefined = undefined,
  T = A extends string ? Post : Post[]
>(id?: A) {
  const result = useQuery<T>({
    queryKey: postQueryKey(id),
    queryFn: () => {
      return fetch(
        import.meta.env.VITE_BACKEND_URL + "/post" + (id ? "/" + id : "")
      ).then((res) => res.json());
    },
  });

  return result;
}

export const postQueryKey = (id?: string) => {
  const queryKey = ["posts", id].filter((value) => value);

  return queryKey;
};
