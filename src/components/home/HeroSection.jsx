"use client";

import React from "react";
import HeroIntro from "./HeroIntro";
import HeroCharacter from "./HeroCharacter";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      suppressHydrationWarning
      className="relative flex flex-col md:flex-row-reverse items-center md:justify-center w-4/5 mx-auto gap-8 h-screen"
    >
      <HeroCharacter className="order-1 md:order-2 md:flex-none" />
      <HeroIntro className="order-2 md:order-1 md:flex-1" />

      {/* Centered ArrowDown Icon */}
      <div className="absolute bottom-2 md:bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#aboutme" className="block">
          <ArrowDown className="bg-black text-white w-10 h-10 p-1 rounded-full animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;