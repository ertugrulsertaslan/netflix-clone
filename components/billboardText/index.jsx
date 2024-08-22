"use client";
import React, { useEffect, useState } from "react";
export default function BillboardText() {
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    const collapseTimer = setTimeout(() => {
      setIsCollapsed(true);
    }, 3000);

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
        className={`text-[8px] text-white md:text-lg mt-3 md:mt-3 w-[50%] md:w-[30%] lg:w-[50%] xl:w-[80%] drop-shadow-xl transition-opacity duration-2000 ${
          isVisible ? "animate-slideDown" : "opacity-0"
        }`}
      >
        Friends Proog and Emo journey inside the folds of a seemingly infinite
        Machine, exploring the dark and twisted complex of wires
      </p>
    </div>
  );
}
