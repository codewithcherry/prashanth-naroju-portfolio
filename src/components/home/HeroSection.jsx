"use client";

import React from "react";
import HeroIntro from "./HeroIntro";
import HeroCharacter from "./HeroCharacter";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center w-4/5 mx-auto gap-8">
      <HeroIntro />
      <HeroCharacter />
      <ArrowDown className="bg-black text-white w-10 h-10 p-1 rounded-full animate-bounce absolute bottom-10"/>
    </div>
  );
};

export default HeroSection;
