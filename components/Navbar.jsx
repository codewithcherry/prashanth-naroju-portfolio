"use client";

import DarkModeToggle from "@/components/theme/DarkModeToggle";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Import shadcn Tooltip components
import Link from "next/link"; // Import Link from Next.js
import { usePathname } from "next/navigation"; // Import usePathname for active link styling
import { HiHome } from "react-icons/hi"; // Home icon
import { BiSolidUser } from "react-icons/bi"; // About icon
import { IoBriefcase } from "react-icons/io5"; // Work icon
import { BsStack } from "react-icons/bs"; // Tech Stack icon
import { IoChatbox } from "react-icons/io5"; // Contact icon

const Navbar = () => {
  // Get the current pathname using usePathname
  const pathname = usePathname();

  // Function to check active route (for styling active links)
  const isActive = (path) => {
    return pathname === path
      ? "text-blue-500 dark:text-blue-400"
      : "text-gray-800 dark:text-white";
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-6 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-xl rounded-lg w-[80vw]  transition-all duration-300 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="#"
                className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide hover:text-gray-600 dark:hover:text-gray-400 transition duration-300 transform hover:scale-105"
              >
                Prashanth
              </a>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex space-x-8">
              {["About", "Work", "Tech Stack", "Contact"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-lg font-semibold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Icons & Dark Mode Toggle */}
            <div className="flex items-center space-x-6">
              <TooltipProvider>
                {[
                  {
                    href: "https://twitter.com",
                    icon: <FaXTwitter />,
                    tooltip: "X (Twitter)",
                  },
                  {
                    href: "https://instagram.com",
                    icon: <FaInstagram />,
                    tooltip: "Instagram",
                  },
                  {
                    href: "https://github.com",
                    icon: <FaGithub />,
                    tooltip: "GitHub",
                  },
                  {
                    href: "https://linkedin.com",
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

      <div className="md:hidden fixed  top-6 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-xl rounded-xl w-full  transition-all duration-300 p-3 z-50 mx-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl mx-2 font-medium text-gray-800 dark:text-white tracking-wide hover:text-gray-600 dark:hover:text-gray-400 transition duration-300 transform hover:scale-105">
            <h1>Prashanth Naroju</h1>
          </Link>

          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-4 w-full mx-auto z-50">
        <div className="border border-[#d8d8d9] dark:border-[#57565A] rounded-xl py-3 h-16 bg-gray-300/70 dark:bg-black/10 backdrop-blur-2xl shadow-sm mx-2">
          <ul className="flex h-10 justify-center items-center px-2">
            <Link href="/" className={isActive("/")}>
              <li className="mx-4">
                <HiHome className="text-2xl" />
              </li>
            </Link>
            <Link href="/about" className={isActive("/about")}>
              <li className="mx-4">
                <BiSolidUser className="text-2xl" />
              </li>
            </Link>
            <Link href="/work" className={isActive("/work")}>
              <li className="mx-4">
                <IoBriefcase className="text-2xl" />
              </li>
            </Link>
            <Link href="/tech-stack" className={isActive("/tech-stack")}>
              <li className="mx-4">
                <BsStack className="text-2xl" />
              </li>
            </Link>
            <Link href="/contact" className={isActive("/contact")}>
              <li className="mx-4">
                <IoChatbox className="text-2xl" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
