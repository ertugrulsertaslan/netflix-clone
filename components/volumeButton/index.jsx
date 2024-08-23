import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

export default function VolumeButton({ setIsSoundOn, isSoundOn }) {
  const Icon = isSoundOn ? HiOutlineSpeakerWave : HiOutlineSpeakerXMark;
  return (
    <div
      onClick={() => setIsSoundOn(!isSoundOn)}
      className="border-2 w-11 h-11 rounded-full flex justify-center items-center"
    >
      <Icon className="text-white" size={23} />
    </div>
  );
}
