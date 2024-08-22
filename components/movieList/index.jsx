import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "../movieCard";
export default function MovieList({ data, title }) {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md  font-semibold mb-4">{title}</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
