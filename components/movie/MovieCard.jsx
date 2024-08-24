import React from "react";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "@/components/buttons/FavoriteButton";
import LikeButton from "@/components/buttons/LikeButton";
import useInfoModal from "@/hooks/useInfoModal.js";

export default function MovieCard({ data }) {
  const router = useRouter();
  const { openModal } = useInfoModal();
  return (
    <div className="group bg-zinc-900 col-span relative h-[16vw] md:h-[9vw]">
      <img
        className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[16vw] md:h-[9vw]"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div
        className="
        opacity-0
        absolute top-0
        transition duration-200
        z-10 invisible sm:visible
        delay-300 sm:w-74 md:w-56 lg:w-74 xl:80 2xl:w-96 scale-0
        group-hover:scale-110
       
    
        group-hover:-translate-y-[6vw]
        md:last:group-hover:-translate-x-[1vw]
        group-hover:opacity-100
      "
      >
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full md:h-[12vw]"
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-1">
              <div
                onClick={() => router.push(`/watch/${data?.id}`)}
                className="cursor-pointer w-6 h-6 md:w-8 md:h-8 lg:w-11 lg:h-11 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 md:text-3xl lg:text-4xl"
              >
                <BsFillPlayFill />
              </div>
              <FavoriteButton movieId={data?.id} />
              <LikeButton />
            </div>
            <div>
              <div
                onClick={() => openModal(data?.id)}
                className="cursor-pointer w-6 h-6 md:w-8 md:h-8 lg:w-11 lg:h-11 border-2 text-white border-gray-500  rounded-full flex justify-center items-center transition hover:bg-neutral-700 md:text-2xl lg:text-4xl"
              >
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1 mt-5">
            <div className="md:w-7 lg:w-10 lg:h-5 border border-neutral-500 flex justify-center">
              <p className="text-xs lg:text-sm text-neutral-400">18+</p>
            </div>
            <p className="text-xs lg:text-base text-neutral-400">3 Season</p>
            <div className="w-7 h-4.5 border border-neutral-500 flex justify-center rounded-sm">
              <p className="text-xs lg:text-sm text-neutral-400">HD</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1 mt-4 mb-2">
            <p className="text-xs lg:text-base text-neutral-300">
              {data.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
