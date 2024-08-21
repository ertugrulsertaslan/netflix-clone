"use client";

import { useState } from "react";

import { VscTriangleDown } from "react-icons/vsc";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import NavbarItem from "../navbarItem";
import MobileMenu from "../mobileMenu";

import ProfileSettingMenu from "../profileSettingMenu";
import LogoutButton from "@/components/LogoutButton";
export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileSetting, setShowProfileSetting] = useState(false);
  const toogleMobileMenu = () => {
    setShowMobileMenu((current) => !current);
  };
  const toogleProfileSetting = () => {
    setShowProfileSetting((current) => !current);
  };

  return (
    <>
      <LogoutButton />
      <nav className="w-full fixed z-10">
        <div className="px-4 md:px-12 py-2 md:py-3 flex flex-row items-center transition duration-500 bg-zinc-900  bg-opacity-40">
          <img className="h-5 lg:h-12" src="/images/logo.png" alt="Logo" />
          <div className="flex-row ml-8 gap-7 hidden lg:flex">
            <NavbarItem label="Home" />
            <NavbarItem label="Series" />
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
            <BsChevronDown className="text-white transition" />
            <MobileMenu visible={showMobileMenu} />
          </div>
          <div className="flex flex-row ml-auto gap-7 items-center">
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
              <BsSearch />
            </div>
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
              <BsBell />
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer relative">
              <div className="w-8 h-8 lg:w-10 lg-h-10 rounded-md overflow-hidden">
                <img src="/images/default-blue.png" alt="" />
              </div>
              <VscTriangleDown
                className="text-white transition"
                onClick={toogleProfileSetting}
              />
              <ProfileSettingMenu visible={showProfileSetting} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
