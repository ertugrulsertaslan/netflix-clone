"use client";
import BillboardScreen from "@/components/billboard/BillboardScreen";
import Navbar from "@/components/navbar/Navbar";
import MovieList from "@/components/movie/MovieList";
import InfoModal from "@/components/infoModal/InfoModal";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import useMovieList from "@/hooks/useMovieList";

export default function HomeContainer() {
  const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, onClose } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={onClose} />
      <Navbar user={user?.name} />
      <BillboardScreen />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
