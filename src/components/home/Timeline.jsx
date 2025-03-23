"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Circle } from "lucide-react";
import JobExperienceCard from "./JobExperienceCard";

const timelineData = [
  {
    date: "December 2023 - today",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/BrightChamps_logo.png",
    companyName: "BrightChamp Edtech",
    jobType: "Remote-CB",
    companyWebsite: "https://brightchamps.com",
    role: "Full Stack Developer",
    jobDescription:
      "I designed and built reusable, modular components using React and TailwindCSS, which improved development efficiency by 30% and reduced code redundancy. I also enhanced user experience by optimizing web performance, achieving a 40% faster load time, and ensuring responsive, cross-browser compatibility. Additionally, I collaborated with cross-functional teams to deliver intuitive UI/UX solutions, integrating RESTful APIs and improving overall application usability.",
    techSkills: [
      "React",
      "JavaScript",
      "MongoDB",
      "NodeJS",
      "Express",
      "AWS",
      "NextJS",
    ],
  },
  {
    date: "July 2021 - December 2023",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/BrightChamps_logo.png",
    companyName: "BrightChamp Edtech",
    jobType: "Remote",
    companyWebsite: "https://brightchamps.com",
    role: "Senior Code Instructor",
    jobDescription:
      "I mentored over 500+ students in improving their coding and problem-solving skills, teaching languages like JavaScript, Python, and React, and building a strong foundation in programming concepts. Within less than 6 months, I advanced from Junior to Senior Code Instructor by delivering high-quality training, improving student outcomes, and receiving exceptional feedback. I also designed and conducted engaging coding workshops, hands-on projects, and mentorship sessions, helping students achieve their career goals",
    techSkills: ["HTML", "CSS", "JavaScript", "Python", "Robotics", "3d-modeling"],
  },
];

const Timeline = () => {
  return (
    <div className=" w-full max-w-6xl mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
      <div className="relative flex flex-col items-start md:items-center">
        {/* Timeline line */}
        <div className="absolute w-1 bg-gray-300 dark:bg-gray-700 h-full left-6 md:left-1/2 transform -translate-x-1/2"></div>

        {timelineData.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 1, delay: index * 0.5 }} // Animation duration and delay
            viewport={{ once: false }} // Trigger animation every time the element comes into view
            className={`my-8 relative flex w-full md:w-1/2 ${
              index % 2 === 0
                ? "md:self-start text-left md:pr-8 md:text-right"
                : "md:self-end md:pl-8 text-left"
            }`}
          >
            {/* Event content with Circle */}
            <div
              className={`w-full flex ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-4 items-start`}
            >
              {/* Circle aligned with the timeline line */}
              <div
                className={`relative ${
                  index % 2 === 0 ? "md:-mr-8" : "md:-ml-8"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 -top-10">
                  <Circle
                    className="w-4 h-4 text-blue-500 "
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* Card content */}
              <div className="w-full">
                <Badge className="bg-blue-500 text-white mb-2">
                  {event.date}
                </Badge>
                <JobExperienceCard event={event} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
