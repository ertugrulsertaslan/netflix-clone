import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
export default function Bilboard() {
  return (
    <div className="relative h-[56.25vw]">
      <video autoPlay loop src="/videos/dark.mp4"></video>
      <div className="absolute top-2/5 left-14 w-1/3">
        <h2 className="text-9xl font-extrabold text-white">DARK</h2>
        <div className="flex space-x-4">
          <div className="flex items-center justify-center px-3 py-1 bg-white hover:bg-opacity-50 w-1/4 rounded-md">
            <FaPlay className="text-3xl" />
            <button className="ml-4 text-xl font-bold">Play</button>
          </div>
          <div className="flex items-center justify-center px-3 py-1 bg-gray-700 bg-opacity-40 hover:bg-opacity-20   text-white w-1/3 rounded-md">
            <IoIosInformationCircleOutline className="text-5xl" />
            <button className="ml-4 text-xl font-bold">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
