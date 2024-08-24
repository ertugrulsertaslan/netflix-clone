import { FaRegUser } from "react-icons/fa";
import { PiPencil } from "react-icons/pi";
import { FaRegFaceGrinWide } from "react-icons/fa6";
import { FiHelpCircle } from "react-icons/fi";
import { VscTriangleUp } from "react-icons/vsc";
import LogoutButton from "@/components/navbar/LogoutButton";

export default function ProfileSettingMenu({ visible, user }) {
  if (!visible) {
    return null;
  }
  return (
    <>
      <div className="absolute top-6 right-5 md:top-8 md:right-6">
        <VscTriangleUp className="text-white text-xs md:text-xl" />
      </div>
      <div className="bg-black w-28 md:w-56 absolute top-8 right-3 md:top-12 md:right-0 py-3 md:py-5 flex-col bg-opacity-80 flex text-[6px] md:text-xs">
        <div className="flex flex-col gap-3 md:gap-7 text-white">
          <div className="px-3 text-center hover:underline flex flex-row items-center">
            <div className="w-4 h-4 lg:w-10 lg:h-10 rounded-md overflow-hidden mr-2.5 md:mr-4">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <p>{user}</p>
          </div>
          <div className="px-3 text-center hover:underline flex flex-row items-center">
            <PiPencil className="text-sm md:text-2xl mr-3  md:mr-6 md:ml-2" />
            Manage Profile
          </div>
          <div className="px-3 text-center hover:underline flex flex-row items-center">
            <FaRegFaceGrinWide className="text-sm md:text-2xl mr-3  md:mr-6 md:ml-2" />
            Transfer Profile
          </div>
          <div className="px-3 text-center hover:underline flex flex-row items-center">
            <FaRegUser className="text-sm md:text-2xl mr-3 md:mr-6 md:ml-2" />
            Account
          </div>
          <div className="px-3 text-center hover:underline flex flex-row items-center">
            <FiHelpCircle className="text-sm md:text-2xl mr-3  md:mr-6 md:ml-2" />
            Help center
          </div>
          <LogoutButton />
        </div>
      </div>
    </>
  );
}
