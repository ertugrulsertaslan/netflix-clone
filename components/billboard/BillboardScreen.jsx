"use client";
import { useState, useRef, useEffect } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiOutlineSpeakerXMark, HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";
import BillboardText from "@/components/billboard/BillboardText";
import PlayButton from "@/components/buttons/PlayButton";
import Skeleton from "@/components/skeleton/index";
import useBillboard from "@/hooks/useBillboard";
import useInfoModal from "@/hooks/useInfoModal";
import Image from "next/image";

export default function Billboard() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const {
    openModal,
    billboardVoice,
    setBillboardVoice,
    isBillboardVideoPlaying,
  } = useInfoModal();

  const { data, isLoading } = useBillboard();
  const videoRef = useRef(null);
  const router = useRouter();

  const Icon = billboardVoice ? HiOutlineSpeakerWave : HiOutlineSpeakerXMark;

  useEffect(() => {
    if (videoRef.current) {
      if (isBillboardVideoPlaying) {
        setIsVideoEnded(false);
        videoRef.current
          .play()
          .catch((error) => console.error("Playback error:", error));
      } else {
        setIsVideoEnded(true);
        videoRef.current.pause();
      }
    }
  }, [isBillboardVideoPlaying]);

  const handleOpenModal = () => {
    setBillboardVoice(false);
    openModal(data?.id);
  };
  const handleVideoEnded = () => {
    setIsVideoEnded(true);
  };
  return (
    <>
      <div className="relative h-[56.25vw] w-full hidden sm:flex">
        {!isLoading ? (
          <video
            autoPlay
            playsInline
            ref={videoRef}
            muted={!billboardVoice}
            poster={data?.thumbnailUrl}
            src={data?.videoUrl}
            onEnded={handleVideoEnded}
            className={`w-full h-full object-cover brightness-[70%] ${
              isVideoEnded ? "hidden" : "block"
            }`}
          ></video>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gray-800 bg-opacity-50 z-10">
            <Skeleton className="w-full h-full" />
          </div>
        )}

        {data?.thumbnailUrl ? (
          <Image
            fill
            src={data?.thumbnailUrl}
            alt="Poster"
            className={`${isVideoEnded ? "block" : "hidden"}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        ) : (
          <Skeleton className="w-full h-full" />
        )}
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
          <div
            onClick={() => setBillboardVoice(!billboardVoice)}
            className="border md:border-2 w-5 h-5 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full flex justify-center items-center"
          >
            <Icon className="text-white text-sm sm:text-2xl md:text-3xl" />
          </div>
        </div>
      </div>
      <div className="relative w-full h-[80vh] p-10 flex sm:hidden">
        <div className="relative w-full h-full">
          {data?.thumbnailUrl ? (
            <Image
              fill
              src={data.thumbnailUrl}
              alt="Poster"
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          ) : (
            <Skeleton className="w-full h-full" />
          )}

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-8">
            <div
              onClick={() => router.push(`/watch/${data?.id}`)}
              className="bg-white flex w-28 items-center justify-center py-1 px-2 hover:bg-opacity-50 rounded-md cursor-pointer"
            >
              <FaPlay className="text-sm" />
              <button className="ml-3">Play</button>
            </div>
            <div className="bg-neutral-800 w-28 ml-5 text-white flex items-center justify-center py-1 px-2 hover:bg-opacity-50 rounded-md cursor-pointer">
              <IoIosInformationCircleOutline className="text-lg" />
              <button className="ml-3">My List</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
