"use client";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);
const useBillboard = () => {
  const { data, error, isLoading } = useSWR("/api/random", fetcher, {
    revalidateIfScale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};
export default useBillboard;
