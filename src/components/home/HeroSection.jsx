"use client";

import React from "react";
import HeroIntro from "./HeroIntro";
import HeroCharacter from "./HeroCharacter";
import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  // Function to handle smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };
  return (
    <div
      suppressHydrationWarning
      className="relative flex flex-col md:flex-row-reverse items-center md:justify-center w-4/5 mx-auto gap-8 h-screen"
    >
      <HeroCharacter className="order-1 md:order-2 md:flex-none" />
      <HeroIntro className="order-2 md:order-1 md:flex-1" />

      {/* Centered ArrowDown Icon */}
      <div className="absolute bottom-2 md:bottom-10 left-1/2 transform -translate-x-1/2">
        <Button  onClick={() => scrollToSection("About")} className="rounded-full animate-bounce">
            <ArrowDown  className="bg-black text-white w-10 h-10  " />
        </Button>  
      </div>
    </div>
  );
};

export default HeroSection;