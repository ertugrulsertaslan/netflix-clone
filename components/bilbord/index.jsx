import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import BilboardText from "@/components/bliboardText";
export default function Bilboard() {
  return (
    <div className="relative h-[56.25vw] ">
      <video
        autoPlay
        loop
        muted
        src="/videos/dark.mp4"
        className="brightness-[70%]"
      ></video>
      <div className="absolute top-[40%] left-6 md:left-14 w-1/2 lg:w-1/2 xl:w-1/3">
        <p className="text-5xl sm:text-6xl md:text-7xl xl:text-9xl font-extrabold text-white">
          DARK
        </p>
        <BilboardText />
        <div className="flex space-x-1 md:space-x-4 mt-1 md:mt-5">
          <div className="flex items-center justify-center md:px-3 md:py-1 bg-white hover:bg-opacity-50 px-2 py-0 sm:w-2/5 md:w-1/2 lg:w-[25%] xl:w-[35%] 2xl:w-1/4 rounded-md">
            <FaPlay className="text-xs lg:text-2xl xl:text-3xl" />
            <button className="ml-4 text-xs sm:text-xs lg:text-lg xl:text-xl md:font-bold">
              Play
            </button>
          </div>
          <div className="flex items-center justify-center px-3 py-1 bg-gray-700 bg-opacity-40 hover:bg-opacity-20 text-white w-[60%] sm:w-1/2 sm:px-0   md:w-1/2 lg:w-[25%]  xl:w-[40%] 2xl:w-1/3 rounded-md">
            <IoIosInformationCircleOutline className="md:text-xs lg:text-2xl xl:text-5xl" />
            <button className="ml-2 md:ml-4 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-xl  md:font-bold">
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className="border-2 w-10 h-10 absolute top-[60%] rounded-full right-20"></div>
    </div>
  );
}
