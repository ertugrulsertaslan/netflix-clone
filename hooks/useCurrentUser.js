"use client";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);
const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);
  //console.log("USECURRENT", data);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
export default useCurrentUser;
