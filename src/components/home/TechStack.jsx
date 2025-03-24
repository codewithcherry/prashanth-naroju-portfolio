"use client";

import React from "react";
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

  return (
    <div className="p-4 max-w-6xl w-[85vw] md-w-full overflow-hidden">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">Tech Stack</h1>
      <h1 className="text-2xl md:text-3xl font-medium text-center">MERN</h1>
      <div className="flex justify-center md:gap-6 p-6">
      <TooltipProvider>
        {mernStack.map((tech) => (
          <Tooltip key={tech.name}>
            <TooltipTrigger asChild>
              <div className="p-3 rounded-lg bg-gray-100 dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                {tech.icon}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tech.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto dark:bg-black md:gap-8">
        <Skills className="w-full md:w-1/2 " />
        <SkillCloud className="w-full md:w-1/2" />
      </div>
    </div>
  );
};

export default TechStack;