'use client';

import React from 'react';
import DarkModeToggle from "@/components/theme/DarkModeToggle";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-14 md:mb-2'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
        {/* Made with love */}
        <div className='text-sm text-gray-600 dark:text-gray-400'>
          <p>Handcrafted by Prashanth with <span className='text-red-500'>&hearts;</span> using Next.js</p>
        </div>
        
        {/* Social links and dark mode toggle */}
        <div className="flex items-center space-x-6">
          <TooltipProvider>
            {[
              {
                href: "https://x.com/PrashanthNaroju",
                icon: <FaXTwitter className="w-5 h-5" />,
                tooltip: "Follow me on X (Twitter)",
              },
              {
                href: "https://www.instagram.com/idonutcode/?hl=en",
                icon: <FaInstagram className="w-5 h-5" />,
                tooltip: "Follow me on Instagram",
              },
              {
                href: "https://github.com/codewithcherry",
                icon: <FaGithub className="w-5 h-5" />,
                tooltip: "Check my GitHub",
              },
              {
                href: "https://www.linkedin.com/in/prashanth-naroju/",
                icon: <FaLinkedin className="w-5 h-5" />,
                tooltip: "Connect on LinkedIn",
              },
            ].map((social, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    aria-label={social.tooltip}
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
          <span className="border-r-2 dark:border-gray-600 border-gray-300 h-6 mx-1"></span>

          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </div>
      </div>
      
      {/* Horizontal divider */}
      <div className='w-full border-t border-gray-200 dark:border-gray-800 my-4'></div>
      
      {/* Copyright */}
      <div className='text-center text-xs text-gray-500 dark:text-gray-500'>
        <p>&copy; {currentYear} Prashanth. All rights reserved.</p>
        <p className='mt-1'>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer