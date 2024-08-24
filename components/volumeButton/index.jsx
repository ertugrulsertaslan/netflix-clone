import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

export default function VolumeButton({ isSoundOn, setIsSoundOn }) {
  const Icon = isSoundOn ? HiOutlineSpeakerWave : HiOutlineSpeakerXMark;
  return (
    <div
      onClick={() => setIsSoundOn(!isSoundOn)}
      className="border md:border-2 w-5 h-5 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full flex justify-center items-center"
    >
      <Icon className="text-white text-sm sm:text-2xl md:text-3xl" />
    </div>
  );
}
