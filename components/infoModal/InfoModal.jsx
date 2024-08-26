import { React, useEffect, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscTriangleDown } from "react-icons/vsc";
import PlayButton from "@/components/buttons/PlayButton";
import FavoriteButton from "@/components/buttons/FavoriteButton";
import LikeButton from "@/components/buttons/LikeButton";
import VolumeButton from "@/components/buttons/VolumeButton";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import Skeleton from "@/components/skeleton/index";
export default function InfoModal({ visible, onClose }) {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModal();
  const { data = {}, isLoading } = useMovie(movieId);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const modalRef = useRef(null);
  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, [300]);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="hidden z-50 transition duration-300 bg-black bg-opacity-80 sm:flex fixed inset-0 overflow-auto scrollbar-hidden">
      <div
        ref={modalRef}
        className="relative sm:w-10/12 md:w-10/12 lg:w-[70%] xl:w-[60%] 2xl:w-1/2 mt-8 mx-auto rounded-md"
      >
        <div
          className={`
       
        ${isVisible ? "scale-100" : "scale-0"}
        transform
        duration-300
        relative
        flex-auto
        bg-zinc-900
        drop-shadow-md
        `}
        >
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gray-800 bg-opacity-50 z-10">
              <Skeleton className="w-full h-full" />
            </div>
          )}
          <div className="relative h-1/2">
            <video
              className="w-full brightness-[60%] object-cover h-full"
              autoPlay
              muted={!isSoundOn}
              loop
              poster={data?.thumbnailUrl}
              src={data?.videoUrl}
            ></video>
            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-4 right-5 h-9 w-9 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <AiOutlineClose className="text-white" size={25} />
            </div>
            <div className="absolute bottom-[10%] left-12 w-[88%]">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-4 items-center">
                  <PlayButton movieId={data?.id} />
                  <FavoriteButton movieId={data?.id} />
                  <LikeButton />
                </div>
                <div className="flex flex-row">
                  <VolumeButton
                    isSoundOn={isSoundOn}
                    setIsSoundOn={setIsSoundOn}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="px-12 flex-col text-neutral-500 justify-between w-4/6">
              <div className="flex gap-2 items-start py-4">
                <p className="font-semibold text-lg">2022</p>
                <p className="font-semibold text-lg">3 Season</p>
                <div className="w-7 h-4.5 mt-1 border border-neutral-500 flex justify-center rounded-sm">
                  <p className="text-xs text-neutral-400">HD</p>
                </div>
              </div>
              <div className="flex text-neutral-500 items-center text-sm py-10">
                <p className="text-base text-white">{data?.description}</p>
              </div>
            </div>
            <div className="w-64 flex flex-col gap-4 py-4 text-sm">
              <div className="flex flex-row gap-1">
                <p className="text-neutral-700">Cast:</p>
                <p className="text-white">
                  lain Armitage, Zoe Perry, Lance Barber, more
                </p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-neutral-700">Genres:</p>
                <p className="text-white">
                  {data?.genre}, Sitcoms, TV Comedies
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between text-white px-12 mt-6">
            <div>
              <p className="text-2xl">Episodes</p>
              <div className="flex gap-2 items-center py-4">
                <p className="text-sm">Season 1:</p>
                <div className="w-10 h-5 border border-neutral-500 flex justify-center">
                  <p className="text-sm text-neutral-400">18+</p>
                </div>
                <p className="text-xs">language, suggestive content</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center py-4">
                <button className="flex items-center gap-4 border border-neutral-500 p-2 w-36 text-base px-4">
                  Season 1: <VscTriangleDown />
                </button>
              </div>
            </div>
          </div>
          <div className="px-12 p-5 text-white">
            <div className="w-full flex gap-6 items-center bg-neutral-800 px-10 py-5">
              <p className="text-2xl">1</p>
              <img
                src={data?.thumbnailUrl}
                alt=""
                className="w-40 h-20 rounded-md"
              />
              <div className="flex">
                <div className="w-full sm:w-11/12">
                  <p>Pilot</p>
                  <p className="text-sm text-neutral-400">
                    {data?.description}
                  </p>
                </div>
                <p>{data?.duration}</p>
              </div>
            </div>
          </div>
          <div className="px-12 p-5 text-white">
            <div className="w-full flex gap-6 items-center px-10">
              <p className="text-2xl">2</p>
              <img
                src={data?.thumbnailUrl}
                alt=""
                className="w-40 h-20 rounded-md"
              />
              <div className="flex">
                <div className="w-11/12">
                  <p>Shock and Delight</p>
                  <p className="text-sm text-neutral-400">
                    {data?.description}
                  </p>
                </div>
                <p>{data?.duration}</p>
              </div>
            </div>
          </div>
          <div className="px-12 p-5 text-white">
            <div className="w-full flex gap-6 items-center px-10">
              <p className="text-2xl">3</p>
              <img
                src={data?.thumbnailUrl}
                alt=""
                className="w-40 h-20 rounded-md"
              />
              <div className="flex">
                <div className="w-11/12">
                  <p>Art of the Swoon</p>
                  <p className="text-sm text-neutral-400">
                    {data?.description}
                  </p>
                </div>
                <p>{data?.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
