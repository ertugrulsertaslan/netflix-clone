import React from "react";
import { HiOutlineSpeakerXMark, HiOutlineSpeakerWave } from "react-icons/hi2";

const VolumeButton = React.memo(({ isSoundOn, setIsSoundOn }) => {
  const Icon = isSoundOn ? HiOutlineSpeakerWave : HiOutlineSpeakerXMark;
  return (
    <div
      onClick={() => setIsSoundOn(!isSoundOn)}
      className="hover:text-white hover:border-white text-neutral-500 border-neutral-500 border md:border-2 w-5 h-5 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full flex justify-center items-center"
    >
      <Icon className="text-sm sm:text-2xl md:text-3xl" />
    </div>
  );
});
export default VolumeButton;
