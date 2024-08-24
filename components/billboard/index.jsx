"use client";
import { useState, useEffect } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import BillboardText from "@/components/billboardText";
import useBillboard from "@/hooks/useBillboard";
import useInfoModal from "@/hooks/useInfoModal";
import PlayButton from "../playButton";
import VolumeButton from "../volumeButton";
export default function Billboard() {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const { data } = useBillboard();
  const { openModal, isOpen } = useInfoModal();

  const handleOpenModal = () => {
    openModal(data?.id);
  };

  useEffect(() => {
    if (isOpen) {
      setIsSoundOn(false);
    } else {
      setIsSoundOn(true);
    }
  }, [isOpen]);
  return (
    <div className="relative h-[56.25vw] ">
      <video
        autoPlay
        muted={!isSoundOn}
        loop
        poster={data?.thumbnail}
        src="/videos/dark.mp4"
        className="brightness-[70%]"
      ></video>
      <div className="absolute top-[50%] left-6 md:left-14 w-1/2 lg:w-1/2 xl:w-1/3">
        <p className="text-xl sm:text-4xl  lg:text-5xl xl:text-5xl  font-extrabold text-white">
          {data?.title}
        </p>
        <BillboardText description={data?.description} />
        <div className="flex space-x-1 md:space-x-4 mt-1 md:mt-5">
          <PlayButton movieId={data?.id} />
          <div
            onClick={handleOpenModal}
            className="bg-gray-700 flex items-center justify-center py-1 sm:py-1 md:py-2 px-2 lg:px-2 bg-opacity-40 hover:bg-opacity-20 text-white  xl:w-52 rounded-md cursor-pointer"
          >
            <IoIosInformationCircleOutline className="text-xs md:text-sm lg:text-xl xl:text-3xl" />
            <div className="ml-1 md:ml-4 text-[8px] sm:text-xs md:text-xs lg:text-sm xl:text-xl  md:font-bold">
              More Info
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[60%] right-20 sm:right-28 md:right-32 lg:right-36">
        <VolumeButton isSoundOn={isSoundOn} setIsSoundOn={setIsSoundOn} />
      </div>
    </div>
  );
}
