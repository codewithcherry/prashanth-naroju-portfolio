"use client";

import DarkModeToggle from "@/components/theme/DarkModeToggle";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome, HiFolder } from "react-icons/hi"; // Added HiFolder
import { BiSolidUser } from "react-icons/bi";
import { IoBriefcase } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { IoChatbox } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["About", "Work", "Tech Stack", "Projects", "Contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check active section (for styling mobile nav items)
  const isActive = (section) => {
    return activeSection === section 
      ? "text-blue-500 dark:text-blue-400" 
      : "text-gray-800 dark:text-white";
  };

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
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-6 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-xl rounded-lg w-[80vw] transition-all duration-300 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide hover:text-gray-600 dark:hover:text-gray-400 transition duration-300 transform hover:scale-105"
              >
                Prashanth
              </a>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex space-x-8">
              {["About", "Work", "Tech Stack", "Projects", "Contact"].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item)}
                  className={`text-lg font-semibold ${activeSection === item ? "text-blue-500 dark:text-blue-400" : "text-gray-800 dark:text-white"} hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Icons & Dark Mode Toggle */}
            <div className="flex items-center space-x-6">
              <TooltipProvider>
                {[
                  {
                    href: "https://x.com/PrashanthNaroju",
                    icon: <FaXTwitter />,
                    tooltip: "X (Twitter)",
                  },
                  {
                    href: "https://www.instagram.com/idonutcode/?hl=en",
                    icon: <FaInstagram />,
                    tooltip: "Instagram",
                  },
                  {
                    href: "https://github.com/codewithcherry",
                    icon: <FaGithub />,
                    tooltip: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/prashanth-naroju/",
                    icon: <FaLinkedin />,
                    tooltip: "LinkedIn",
                  },
                ].map((social, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                      >
                        {social.icon}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>

              {/* Divider */}
              <span className="border-r-2 dark:border-white border-gray-500 h-6 mx-3"></span>

              {/* Dark Mode Toggle */}
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navbar */}
      <div className="md:hidden fixed top-6 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-xl rounded-xl w-[94vw] transition-all duration-300 p-3 z-50 dark:border-1 dark:border-gray-500">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl mx-2 font-medium text-gray-800 dark:text-white tracking-wide hover:text-gray-600 dark:hover:text-gray-400 transition duration-300 transform hover:scale-105">
            <h1>Prashanth Naroju</h1>
          </a>
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-4 w-full mx-auto z-50">
        <div className="border border-[#d8d8d9] dark:border-[#57565A] rounded-xl py-3 h-16 bg-gray-300/70 dark:bg-black/10 backdrop-blur-2xl shadow-sm mx-2">
          <ul className="flex h-10 justify-center items-center px-2">
            {[
              { id: "About", icon: <BiSolidUser className="text-2xl" /> },
              { id: "Work", icon: <IoBriefcase className="text-2xl" /> },
              { id: "Tech Stack", icon: <BsStack className="text-2xl" /> },
              { id: "Projects", icon: <HiFolder className="text-2xl" /> }, // Changed from HiHome to HiFolder
              { id: "Contact", icon: <IoChatbox className="text-2xl" /> },
            ].map((item) => (
              <li 
                key={item.id}
                className={`mx-4 cursor-pointer ${isActive(item.id)}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;