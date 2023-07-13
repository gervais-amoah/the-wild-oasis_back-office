import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useCreateCabin({ reset }) {
  const queryClient = useQueryClient();

  const { isLoading: isWorking, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
      toast.success("Cabin created successfully");
    },
    onError: (err) => {
      toast.error(err);
      console.error("Error while creating a new cabin:\n", err);
    },
  });

  return { isWorking, createCabin };
}
