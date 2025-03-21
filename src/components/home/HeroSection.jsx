"use client";

import React from "react";
import HeroIntro from "./HeroIntro";
import HeroCharacter from "./HeroCharacter";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-4/5 mx-auto gap-8">
      <HeroIntro />
      <HeroCharacter />
    </div>
  );
};

export default HeroSection;
