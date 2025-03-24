"use client";
import React from 'react';
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = {
    backend: [
      "ExpressJS",
      "TensorFlow",
      "MySQL",
      "NodeJS",
      "Redis",
      "AWS",
      "MongoDB",
      "CI/CD",
      "HTTP/2",
      "RESTful APIs",
      "GraphQL APIs",
      "WebSockets",
      "MVC"
    ],
    frontend: [
      "HTML",
      "CSS",
      "JS",
      "TailwindCss",
      "React",
      "Material UI",
      "Redux",
      "TypeScript",
      "Next",
      "Bootstrap"
    ],
    Tools: [
      "JUnit",
      "NUnit",
      "Jest",
      "Mocha",
      "Scrum",
      "Agile",
      "GIT",
      "GITLab",
      "GitHub",
      "Docker",
      "Kubernetes"
    ],
    libraries: [
      "shadcn",
      "socket.io",
      "magic UI",
      "axios",
      "lodash",
      "moment.js",
      "chart.js",
      "three.js",
      "gsap",
      "formik",
      "yup",
      "react-query",
      "swr",
      "zustand",
      "framer-motion"
    ]
  };

  return (
    <div className="px-4 py-4 mx-2">
      <div className=" mx-auto">
        <h1 className='text-3xl font-medium text-center py-2 text-black dark:text-white'>Skills</h1>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category}>
              <h2 className="text-xl md:text-2xl font-semibold capitalize mb-4 text-gray-800 dark:text-gray-200">
                {category}
              </h2>
              <div className="flex flex-wrap gap-2 overflow-hidden">
                {skillsList.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-sm font-medium  bg-gray-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;