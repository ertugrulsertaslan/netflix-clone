"use client";
import { React } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
export default function PlayButton({ movieId }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/watch/${movieId}`)}
      className="cursor-pointer w-6 h-6 lg:w-11 lg:h-11 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
    >
      <BsFillPlayFill size={35} />
    </div>
  );
}
