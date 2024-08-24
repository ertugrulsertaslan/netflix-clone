"use client";
import { GrLike } from "react-icons/gr";
export default function LikeButton() {
  return (
    <div className="cursor-pointer w-6 h-6 md:w-8 md:h-8 lg:w-11 lg:h-11  border-2 text-white border-gray-500  rounded-full flex justify-center items-center transition hover:bg-neutral-700 md:text-base lg:text-2xl">
      <GrLike />
    </div>
  );
}
