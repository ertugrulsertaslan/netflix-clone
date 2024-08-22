"use client";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);
const useMovieList = () => {
  const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};
export default useMovieList;
