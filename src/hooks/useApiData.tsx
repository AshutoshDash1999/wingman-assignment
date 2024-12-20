"use client";

import axios from "axios";
import useSWR, { SWRConfiguration } from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useApiData<T>(url: string, options?: SWRConfiguration) {
  const { data, error, isLoading, mutate } = useSWR<T>(url, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    ...options,
  });

  const refetch = () => {
    mutate();
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}
