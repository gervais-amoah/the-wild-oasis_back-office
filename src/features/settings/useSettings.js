import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  const settings = isLoading ? null : data[0];

  return {
    settings,
    isLoading,
    error,
  };
}
