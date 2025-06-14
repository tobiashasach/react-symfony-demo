import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/Button/Button";
import { postQueryKey } from "../../hooks/usePosts";

type PostDeleteProps = {
  id: number;
};

export function PostDelete({ id }: PostDeleteProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => {
      return fetch(import.meta.env.VITE_BACKEND_URL + "/post/" + id, {
        method: "delete",
      });
    },
    onSuccess() {
      queryClient.refetchQueries({ queryKey: postQueryKey() });
    },
  });

  return (
    <Button intent="inline" onClick={() => mutate()}>
      Delete
    </Button>
  );
}
