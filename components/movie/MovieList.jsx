import React from "react";
import MovieCard from "./MovieCard";
import Skeleton from "../skeleton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MovieList({
  data,
  title,
  isLoading,
  listId = "default",
}) {
  const settings = {
    infinite: data.length <= 1 ? true : false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipe: true,
    touchMove: true,
  };
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="hidden md:grid md:grid-cols-5 gap-2">
          {listId && !isLoading
            ? data.map((movie) => (
                <div key={movie.id} className="w-full h-full">
                  <MovieCard data={movie} isLoading={isLoading} />
                </div>
              ))
            : Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-full h-full">
                  <Skeleton className="w-full h-44 rounded-md" />
                </div>
              ))}
        </div>

        <div className="grid grid-cols-1 gap-2 md:hidden">
          <div className="relative w-full h-32 overflow-hidden">
            <Slider {...settings}>
              {listId && !isLoading
                ? data.map((movie) => (
                    <div key={movie.id} className="w-full h-full">
                      <MovieCard data={movie} isLoading={isLoading} />
                    </div>
                  ))
                : Array.from({ length: 5 }).map((_, index) => (
                    <div key={index}>
                      <Skeleton className="w-full h-44 rounded-md" />
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
