"use client";
import useCurrentUser from "@/hooks/useCurrentUser";
import useMovieList from "@/hooks/useMovieList";
import Billboard from "../billboard";
import Navbar from "../navbar";
import MovieList from "../movieList";

export default function HomeContainer() {
  const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();

  // <p className="text-white">Logged in as : {user?.name}</p>
  return (
    <>
      <Navbar user={user?.name} />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
    </>
  );
}
