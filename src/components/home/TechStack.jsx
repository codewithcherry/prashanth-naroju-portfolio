"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillCloud from "./SkillCloud";
import Skills from "./Skills";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si"; // Icons for MERN stack

const TechStack = () => {
  const mernStack = [
    { name: "MongoDB", icon: <SiMongodb className="h-10 w-10 text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="h-10 w-10 text-gray-800 dark:text-gray-200" /> },
    { name: "React", icon: <SiReact className="h-10 w-10 text-blue-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="h-10 w-10 text-green-600" /> },
  ];

  // Slide-up animation variant
  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1,delay: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="p-4 max-w-6xl w-[90vw] md-w-full dark:bg-black overflow-hidden mt-10 scroll-m-28" id="Tech Stack">
      {/* Title */}
      <motion.h1 
        className="text-2xl md:text-4xl font-bold text-center mb-8"
        initial="hidden"
        whileInView="visible"
        variants={slideUp}
        viewport={{ once: false, amount: 0.5 }} // Trigger every time on scroll
      >
        Tech Stack
      </motion.h1>

      {/* MERN Stack Heading */}
      <motion.h2 
        className="text-2xl md:text-3xl font-medium text-center"
        initial="hidden"
        whileInView="visible"
        variants={slideUp}
        viewport={{ once: false, amount: 0.5 }} // Trigger every time on scroll
      >
        MERN
      </motion.h2>

      {/* MERN Stack Icons */}
      <motion.div 
        className="flex justify-center md:gap-6 p-6"
        initial="hidden"
        whileInView="visible"
        variants={slideUp}
        viewport={{ once: false, amount: 0.5 }} // Trigger every time on scroll
      >
        <TooltipProvider>
          {mernStack.map((tech) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger asChild>
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                  {tech.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </motion.div>

      {/* Skills and SkillCloud Section */}
      <motion.div 
        className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto md:gap-8"
        initial="hidden"
        whileInView="visible"
        variants={slideUp}
        viewport={{ once: false, amount: 0.2 }} // Trigger every time on scroll
      >
        {/* Skills Component */}
        <div className="w-full md:w-1/2">
          <Skills />
        </div>

        {/* SkillCloud Component */}
        <div className="w-full md:w-1/2">
          <SkillCloud />
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;