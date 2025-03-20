'use client';

import DarkModeToggle from '@/components/theme/DarkModeToggle';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Import shadcn Tooltip components

const Navbar = () => {
  return (
    <nav className="absolute top-6 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-xl rounded-lg w-[80vw] z-10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide hover:text-gray-600 dark:hover:text-gray-400 transition duration-300 transform hover:scale-105">
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
                { href: "https://twitter.com", icon: <FaXTwitter />, tooltip: "X (Twitter)" },
                { href: "https://instagram.com", icon: <FaInstagram />, tooltip: "Instagram" },
                { href: "https://github.com", icon: <FaGithub />, tooltip: "GitHub" },
                { href: "https://linkedin.com", icon: <FaLinkedin />, tooltip: "LinkedIn" }
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
            <span className='border-r-2 dark:border-white border-gray-500 h-6 mx-3'></span>

            {/* Dark Mode Toggle */}
            <DarkModeToggle />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;