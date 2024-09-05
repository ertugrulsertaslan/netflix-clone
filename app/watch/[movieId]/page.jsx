"use client";
import { React } from "react";
import { useRouter } from "next/navigation";
import useMovie from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Watch({ params }) {
  const router = useRouter();
  const { movieId } = params;
  const { data } = useMovie(movieId);
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
        autoPlay
        className="w-full h-full object-cover"
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        controls
        playsInline
      ></video>
    </div>
  );
}
