"use client";
import useCurrentUser from "@/hooks/useCurrentUser";
import useMovieList from "@/hooks/useMovieList";
import Billboard from "../billboard";
import Navbar from "../navbar";
import MovieList from "../movieList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "../infoModal";
import useInfoModal from "@/hooks/useInfoModal";

export default function HomeContainer() {
  const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, onClose } = useInfoModal();
  return (
    <>
      <InfoModal visible={isOpen} onClose={onClose} />
      <Navbar user={user?.name} />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
