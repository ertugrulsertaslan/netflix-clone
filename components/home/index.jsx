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
const MemoizedInfoModal = React.memo(InfoModal);

export default function HomeContainer() {
  const { data: movies = [], isLoading: moviesLoading } = useMovieList();
  const { data: favorites = [], isLoading: favoritesLoading } = useFavorites();
  const { isOpen, onClose } = useInfoModal();
  const trendingMovies = React.useMemo(() => movies.slice(0, 5), [movies]);
  const topSearches = React.useMemo(() => movies.slice(5, 10), [movies]);
  const isTrendingLoading = moviesLoading;
  const isTopSearchesLoading = moviesLoading;
  return (
    <>
      <MemoizedInfoModal visible={isOpen} onClose={onClose} />
      <MemoizedBillboardScreen />
      <div className="pb-40 md:pt-10 w-full space-y-8">
        <MemoizedMovieList
          title="Trending Now"
          data={trendingMovies}
          isLoading={isTrendingLoading}
          listId="trending-now"
        />
        <MemoizedMovieList
          title="Top Searches"
          data={topSearches}
          isLoading={isTopSearchesLoading}
          listId="top-searches"
        />
        {favorites.length > 0 && (
          <MemoizedMovieList
            title="My List"
            data={favorites}
            isLoading={favoritesLoading}
            listId="favorites"
          />
        )}
      </div>
    </>
  );
}
