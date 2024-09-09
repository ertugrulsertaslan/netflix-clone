"use client";
import { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import NavbarItem from "@/components/navbar/NavbarItem";
import MobileMenu from "@/components/navbar/MobileMenu";
import ProfileSettingMenu from "@/components/navbar/ProfileSettingMenu";
import { useRouter } from "next/navigation";
const TOP_OFFSET = 5;

export default function Navbar({ user }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileSetting, setShowProfileSetting] = useState(false);
  const [ShowBackground, setShowBackground] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toogleMobileMenu = () => {
    setShowMobileMenu((current) => !current);
  };
  const toogleProfileSetting = () => {
    setShowProfileSetting((current) => !current);
  };

  return (
    <>
      <nav className="w-full fixed z-10">
        <div
          className={`px-4 md:px-12 py-1 md:py-2.5 flex flex-row items-center transition duration-500 ${
            ShowBackground ? "bg-zinc-900 bg-opacity-90" : ""
          }`}
        >
          <img
            onClick={() => router.push("/")}
            className="h-5 lg:h-12 cursor-pointer"
            src="/images/logo.png"
            alt="Logo"
          />
          <div className="flex-row ml-5 gap-6 hidden lg:flex">
            <NavbarItem label="Home" href="/" />
            <NavbarItem label="TV Shows" href="/" />
            <NavbarItem label="Films" href="/" />
            <NavbarItem label="New & Popular" href="/" />
            <NavbarItem label="My List" href="mylist" />
            <NavbarItem label="Browse by languages" href="/" />
          </div>
          <div
            onClick={toogleMobileMenu}
            className="lg:hidden flex flex-row items-center gap-4 ml-8 cursor-pointer relative"
          >
            <p className="text-white text-[8px] ">Browse</p>
            <BsChevronDown className="text-white transition" size={12} />
            <MobileMenu visible={showMobileMenu} size={12} />
          </div>
          <div className="flex flex-row ml-auto gap-6 items-center">
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer text-sm md:text-xl">
              <BsSearch />
            </div>
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer text-sm md:text-xl">
              <FaRegBell />
            </div>
            <div className="flex flex-row items-center gap-1 cursor-pointer relative">
              <div className="w-5 h-5 lg:w-8 lg:h-8 rounded-md overflow-hidden">
                <img src="/images/default-blue.png" alt="" />
              </div>
              <VscTriangleDown
                className="text-white transition text-xs md:text-base"
                onClick={toogleProfileSetting}
              />
              <ProfileSettingMenu user={user} visible={showProfileSetting} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
