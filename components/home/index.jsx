"use client";
import React from "react";
import BillboardScreen from "@/components/billboard/BillboardScreen";
import MovieList from "@/components/movie/MovieList";
import InfoModal from "@/components/infoModal/InfoModal";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";

const MemoizedBillboardScreen = React.memo(BillboardScreen);
const MemoizedMovieList = React.memo(MovieList);

export default function HomeContainer() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, onClose } = useInfoModal();
  const trendingMovies = React.useMemo(() => movies.slice(0, 5), [movies]);
  const topSearches = React.useMemo(() => movies.slice(5, 10), [movies]);

  return (
    <>
      <InfoModal visible={isOpen} onClose={onClose} />
      <MemoizedBillboardScreen />
      <div className="pb-40">
        <MemoizedMovieList title="Trending Now" data={trendingMovies} />
        <MemoizedMovieList title="Top Searches" data={topSearches} />
        <MemoizedMovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
