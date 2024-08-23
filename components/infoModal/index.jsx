import { React, useEffect, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "../playButton";
import FavoriteButton from "../favoriteButton.jsx";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import VolumeButton from "../volumeButton";
export default function InfoModal({ visible, onClose }) {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);
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
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0">
      <div
        ref={modalRef}
        className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden"
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
          <div className="relative h-96">
            <video
              className="w-full brightness-[60%] object-cover h-full"
              autoPlay
              muted={!isSoundOn}
              loop
              poster={data?.thumbnailUrl}
              src="/videos/dark.mp4"
            ></video>
            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <AiOutlineClose className="text-white" size={20} />
            </div>
            <div className="absolute bottom-[10%] left-10 w-[88%]">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-4 items-center">
                  <PlayButton movieId={data?.id} />
                  <FavoriteButton movieId={data?.id} />
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
          <div className="px-12 py-8">
            <p className="text-green-400 font-semibold text-lg">New</p>
          </div>
        </div>
      </div>
    </div>
  );
}
