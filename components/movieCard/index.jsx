import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrLike } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import FavoriteButton from "../favoriteButton.jsx";
export default function MovieCard({ data }) {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[9vw]"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div
        className="
        opacity-0
        absolute top-0
        transition duration-200
        z-10 invisible sm:visible
        delay-300 w-56 scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:opacity-100
      "
      >
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-1">
              <div className="cursor-pointer w-6 h-6 lg:w-7 lg:h-7 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                <BsFillPlayFill size={25} />
              </div>
              <FavoriteButton movieId={data?.id} />
              <div className="cursor-pointer w-6 h-6 lg:w-7 lg:h-7 border-2 text-white border-gray-500  rounded-full flex justify-center items-center transition hover:bg-neutral-700">
                <GrLike size={13} />
              </div>
            </div>
            <div>
              <div className="cursor-pointer w-6 h-6 lg:w-7 lg:h-7 border-2 text-white border-gray-500  rounded-full flex justify-center items-center transition hover:bg-neutral-700">
                <MdKeyboardArrowDown size={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1 mt-3">
            <div className="w-7 h-4 border border-neutral-500 flex justify-center">
              <p className="text-[10px] text-neutral-400">18+</p>
            </div>
            <p className="text-[10px] text-neutral-400">3 Season</p>
            <div className="w-5 h-3.5 border border-neutral-500 flex justify-center rounded-sm">
              <p className="text-[8px] text-neutral-400">HD</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1 mt-2">
            <p className="text-[10px] text-neutral-300">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
