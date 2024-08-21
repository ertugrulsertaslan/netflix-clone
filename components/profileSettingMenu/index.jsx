import { FaRegUser } from "react-icons/fa";
import { PiPencil } from "react-icons/pi";
import { FaRegFaceGrinWide } from "react-icons/fa6";
import { FiHelpCircle } from "react-icons/fi";
import { VscTriangleUp } from "react-icons/vsc";
import LogoutButton from "@/components/LogoutButton";

export default function ProfileSettingMenu({ visible, user }) {
  if (!visible) {
    return null;
  }
  return (
    <>
      <div className="absolute top-9 right-9">
        <VscTriangleUp className="text-white" />
      </div>
      <div className="bg-black w-56 absolute top-12 right-0 py-5 flex-col bg-opacity-50 flex text-xs">
        <div className="flex flex-col gap-7 text-white">
          <div className="px-3 text-center hover:underline flex flex-row items-center">
            <div className="w-8 h-8 lg:w-10 lg-h-10 rounded-md overflow-hidden mr-4">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <p>{user}</p>
          </div>
          <div className="px-3 text-center hover:underline flex flex-row items-center">
            <PiPencil className=" text-2xl mr-6 ml-2" />
            Manage Profile
          </div>
          <div className="px-3 text-center hover:underline flex flex-row items-center">
            <FaRegFaceGrinWide className="text-2xl mr-6 ml-2" />
            Transfer Profile
          </div>
          <div className="px-3 text-center hover:underline flex flex-row items-center">
            <FaRegUser className="text-2xl mr-6 ml-2" />
            Account
          </div>
          <div className="px-3 text-center hover:underline flex flex-row items-center">
            <FiHelpCircle className="text-2xl mr-6 ml-2" />
            Help center
          </div>
          <LogoutButton />
        </div>
      </div>
    </>
  );
}
