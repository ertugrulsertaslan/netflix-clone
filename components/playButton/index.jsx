"use client";
import { React } from "react";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function PlayButton({ movieId }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/watch/${movieId}`)}
      className="bg-white flex items-center justify-center py-1 sm:py-1 md:py-3 px-2 lg:px-3 hover:bg-opacity-50  xl:w-36  rounded-md cursor-pointer"
    >
      <FaPlay className="text-xs lg:text-2xl xl:text-3xl" />
      <button className="ml-1 md:ml-4 text-[8px] sm:text-sm lg:text-lg xl:text-xl md:font-bold">
        Play
      </button>
    </div>
  );
}
