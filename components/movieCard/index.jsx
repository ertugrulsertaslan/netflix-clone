import React from "react";
import { GrLike } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import FavoriteButton from "../favoriteButton.jsx";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import useInfoModal from "@/hooks/useInfoModal.js";

export default function MovieCard({ data }) {
  const router = useRouter();
  const { openModal } = useInfoModal();
  const handleOpenModal = () => {
    openModal(data?.id);
  };
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
        delay-300 w-96 scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        last:group-hover:-translate-x-[1vw]
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
                className="cursor-pointer w-6 h-6 lg:w-11 lg:h-11 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
              >
                <BsFillPlayFill size={35} />
              </div>
              <FavoriteButton movieId={data?.id} />
              <div className="cursor-pointer w-6 h-6 lg:w-11 lg:h-11  border-2 text-white border-gray-500  rounded-full flex justify-center items-center transition hover:bg-neutral-700">
                <GrLike size={17} />
              </div>
            </div>
            <div>
              <div
                onClick={handleOpenModal}
                className="cursor-pointer w-6 h-6 lg:w-11 lg:h-11  border-2 text-white border-gray-500  rounded-full flex justify-center items-center transition hover:bg-neutral-700"
              >
                <MdKeyboardArrowDown size={30} />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1 mt-5">
            <div className="w-10 h-5 border border-neutral-500 flex justify-center">
              <p className="text-sm text-neutral-400">18+</p>
            </div>
            <p className="text-base text-neutral-400">3 Season</p>
            <div className="w-7 h-4.5 border border-neutral-500 flex justify-center rounded-sm">
              <p className="text-xs text-neutral-400">HD</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1 mt-4 mb-2">
            <p className=" text-neutral-300">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
