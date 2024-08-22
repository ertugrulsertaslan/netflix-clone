"use client";

import { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import NavbarItem from "../navbarItem";
import MobileMenu from "../mobileMenu";

import ProfileSettingMenu from "../profileSettingMenu";
const TOP_OFFSET = 5;
export default function Navbar({ user }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileSetting, setShowProfileSetting] = useState(false);
  const [ShowBackground, setShowBackground] = useState(false);
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
          className={`px-4 md:px-7 py-1 md:py-1 flex flex-row items-center transition duration-500 ${
            ShowBackground ? "bg-zinc-900 bg-opacity-90" : ""
          }`}
        >
          <img className="h-5 lg:h-7" src="/images/logo.png" alt="Logo" />
          <div className="flex-row ml-5 gap-3 hidden lg:flex">
            <NavbarItem label="Home" />
            <NavbarItem label="Tv Shows" />
            <NavbarItem label="Films" />
            <NavbarItem label="New & Popular" />
            <NavbarItem label="My List" />
            <NavbarItem label="Browse by languages" />
          </div>
          <div
            onClick={toogleMobileMenu}
            className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
          >
            <p className="text-white text-sm font-thin">Browse</p>
            <BsChevronDown className="text-white transition" size={12} />
            <MobileMenu visible={showMobileMenu} size={12} />
          </div>
          <div className="flex flex-row ml-auto gap-4 items-center">
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
              <BsSearch size={12} />
            </div>
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
              <FaRegBell size={12} />
            </div>
            <div className="flex flex-row items-center gap-1 cursor-pointer relative">
              <div className="w-5 h-5 lg:w-5 lg-h-5 rounded-md overflow-hidden">
                <img src="/images/default-blue.png" alt="" />
              </div>
              <VscTriangleDown
                size={8}
                className="text-white transition"
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
