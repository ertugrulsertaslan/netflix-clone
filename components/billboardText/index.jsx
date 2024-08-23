"use client";
import React, { useEffect, useState } from "react";
export default function BillboardText({ description }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    const collapseTimer = setTimeout(() => {
      setIsCollapsed(true);
    }, 3500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(collapseTimer);
    };
  }, []);
  return (
    <div
      className={`relative w-full max-w-md transition-all duration-2000 overflow-hidden ${
        isCollapsed ? "animate-collapse" : ""
      }`}
    >
      <p
        className={`text-[6px] text-white sm:text-sm md:text-base lg:text-xl mt-0 md:mt-3 w-[90%] md:w-[90%] lg:w-[80%] xl:w-[100%] drop-shadow-xl transition-opacity duration-2000 ${
          isVisible ? "animate-slideDown" : "opacity-0"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
