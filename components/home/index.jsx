"use client";
import BillboardScreen from "@/components/billboard/BillboardScreen";
import MovieList from "@/components/movie/MovieList";
import InfoModal from "@/components/infoModal/InfoModal";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";

export default function HomeContainer() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, onClose } = useInfoModal();
  const trendingMovies = movies.slice(0, 5);
  const topSearches = movies.slice(5, 10);
  return (
    <>
      <InfoModal visible={isOpen} onClose={onClose} />
      <BillboardScreen />
      <div className="pb-40">
        <MovieList title="Trending Now" data={trendingMovies} />
        <MovieList title="Top Searches" data={topSearches} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
