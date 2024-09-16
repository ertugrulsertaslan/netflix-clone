import React, { useEffect, useState, useRef } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineSpeakerXMark, HiOutlineSpeakerWave } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import FavoriteButton from "@/components/buttons/FavoriteButton";
import LikeButton from "@/components/buttons/LikeButton";
import useInfoModal from "@/hooks/useInfoModal.js";
import Image from "next/image";

const MovieCard = React.memo(({ data }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const {
    isVideoMuted,
    toggleVideoMute,
    openModal,
    isOpen,
    setIsBillboardVideoPlaying,
    setBillboardVoice,
    setMovieCardVoice,
  } = useInfoModal();

  useEffect(() => {
    setMovieCardVoice(data.id, false);

    return () => {
      setMovieCardVoice(data.id, false);
    };
  }, [data.id, setMovieCardVoice]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isVideoMuted;
    }
  }, [isVideoMuted]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsBillboardVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Playback error:", error);
      });
    }
    setMovieCardVoice(data.id, true);
    setBillboardVoice(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      setIsBillboardVideoPlaying(true);
      videoRef.current.pause();
    }
    setMovieCardVoice(data.id, false);
    if (isOpen) {
      setBillboardVoice(false);
    } else {
      setBillboardVoice(true);
    }
  };
  const handleOpenModal = () => {
    setBillboardVoice(false);
    openModal(data?.id);
  };
  const Icon = !isVideoMuted ? HiOutlineSpeakerWave : HiOutlineSpeakerXMark;
  return (
    <div className="group bg-zinc-900 col-span relative h-[26vw] md:h-[9vw]">
      <Image
        fill
        onClick={() => router.push(`/watch/${data.id}`)}
        className="object-cover cursor-pointer transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300"
        src={data?.thumbnailUrl}
        alt="Thumbnail"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
        <video
          onClick={() => router.push(`/watch/${data.id}`)}
          className="w-full h-full object-cover cursor-pointer"
          src={data?.videoUrl}
          ref={videoRef}
          loop
          muted={isVideoMuted}
        ></video>
        <div className="absolute right-5 bottom-5 z-10 cursor-pointer">
          <div
            onClick={toggleVideoMute}
            className="hover:text-white hover:border-white text-neutral-500 border-neutral-500 border md:border-2 w-5 h-5 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full flex justify-center items-center"
          >
            <Icon className="text-sm sm:text-2xl md:text-3xl" />
          </div>
        </div>
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
                onClick={handleOpenModal}
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
});

export default MovieCard;
