"use client";
import MovieList from "@/components/movie/MovieList";
import useFavorites from "@/hooks/useFavorites";

export default function MyList() {
  const { data: favorites = [] } = useFavorites();
  return (
    <>
      <div className="absolute top-20 left-2">
        <p className="text-white text-md md:text-4xl mb-32 ml-12">My List</p>
        <MovieList data={favorites} />
      </div>
    </>
  );
}
