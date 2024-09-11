"use client";
import { React, useState } from "react";
import { useRouter } from "next/navigation";
import useMovie from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function WatchPage({ params }) {
  const router = useRouter();
  const { movieId } = params;
  const { data } = useMovie(movieId);
  const [isPlaying, setIsPlaying] = useState(true);
  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <div className="h-screen w-screen bg-black">
      <nav
        onClick={() => router.push("/")}
        className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70"
      >
        <AiOutlineArrowLeft className="text-white cursor-pointer" size={40} />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        onClick={handlePlay}
        className="w-full h-full lg:object-cover"
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        controls
        playsInline
        autoPlay={isPlaying}
      ></video>
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="md:hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <span className="text-white text-xl">Play</span>
        </button>
      )}
    </div>
  );
}
