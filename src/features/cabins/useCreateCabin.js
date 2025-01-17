import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useCreateCabin(param) {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin created successfully");
      param?.reset?.();
      param?.closeModal?.();
    },
    onError: (err) => {
      toast.error(err);
      console.error("Error while creating a new cabin:\n", err);
    },
  });

  return { isCreating, createCabin };
}
