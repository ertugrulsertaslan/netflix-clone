"use client";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import BillboardText from "@/components/billboardText";
import useBillboard from "@/hooks/useBillboard";
export default function Billboard() {
  const { data } = useBillboard();
  //console.log(data);
  //{data?.videoUrl}
  return (
    <div className="relative h-[56.25vw] ">
      <video
        autoPlay
        loop
        muted
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
          <div className="bg-white flex items-center justify-center py-1 sm:py-1 md:py-2 px-2 lg:px-3 hover:bg-opacity-50  xl:w-36  rounded-md">
            <FaPlay className="text-xs lg:text-2xl xl:text-3xl" />
            <button className="ml-1 md:ml-4 text-[8px] sm:text-sm lg:text-lg xl:text-xl md:font-bold">
              Play
            </button>
          </div>
          <div className="bg-gray-700 flex items-center justify-center py-1 sm:py-1 md:py-4 px-2 lg:px-2 bg-opacity-40 hover:bg-opacity-20 text-white  xl:w-52  rounded-md">
            <IoIosInformationCircleOutline className="text-xs md:text-sm lg:text-xl xl:text-3xl" />
            <div className="ml-1 md:ml-4 text-[8px] sm:text-xs md:text-xs lg:text-sm xl:text-xl  md:font-bold">
              More Info
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 w-11 h-11 absolute top-[60%] rounded-full right-36"></div>
    </div>
  );
}
