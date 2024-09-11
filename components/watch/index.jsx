"use client";
import { React, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useMovie from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function WatchPage({ params }) {
  const router = useRouter();
  const { movieId } = params;
  const { data } = useMovie(movieId);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handlePlay = () => {
    const videoElement = document.getElementById("video-player");
    if (videoElement) {
      videoElement.play();
      setIsMobile(false);
    }
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
        id="video-player"
        onClick={handlePlay}
        className="w-full h-full lg:object-cover"
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        controls
        playsInline
        autoPlay={!isMobile}
      ></video>
      {isMobile && (
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
