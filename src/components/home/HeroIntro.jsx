import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Download, Mail } from "lucide-react";

const HeroIntro = () => {
  // Array of roles to display
  const roles = [
    "Full Stack Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [showRoles, setShowRoles] = useState(false); // Control when roles appear
  const [showParagraph, setShowParagraph] = useState(false); // Control when paragraph appears
  const [showButtons,setShowButtons]=useState(false);  //control when buttons appears

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

  const handleDownload = () => {
    // Replace with your actual PDF file path
    const pdfUrl = '/PrashanthNarojuResume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'PrashanthNarojuResume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to cycle through roles
  useEffect(() => {
    if (!showRoles) return; // Don't start the roles animation until greeting is done

    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [roles.length, showRoles]);

  // Function to show paragraph after roles appear
  useEffect(() => {
    if (!showRoles) return; // Don't show paragraph until roles are visible

    const timeout = setTimeout(() => {
      setShowParagraph(true); // Show paragraph after a delay
    }, 1500); // 1.5-second delay after roles appear

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [showRoles]);

  // Function to show paragraph after roles appear
  useEffect(() => {
    if (!showParagraph) return; // Don't show paragraph until roles are visible

    const timeout = setTimeout(() => {
      setShowButtons(true); // Show paragraph after a delay
    }, 1500); // 1.5-second delay after roles appear

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [showParagraph]);

  return (
    <div className="dark:text-gray-100 transition-colors duration-300 flex flex-col items-center justify-center ">
      {/* Greeting Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
        animate={{ opacity: 1, y: 0 }} // Fade in and slide up
        transition={{ duration: 0.8, delay: 0.5 }} // Smooth transition with a slight delay
        onAnimationComplete={() => setShowRoles(true)} // Start roles animation after greeting
        className="flex justify-center items-center gap-2 mx-auto w-full"
      >
        <h2 className="text-2xl md:text-4xl font-medium text-gray-800 dark:text-gray-100">
          Hi
        </h2>
        <motion.img
          src="/waving-hand.svg"
          alt="Waving Hand"
          animate={{
            rotate: [0, 15, -15, 0, 15, -15, 0], // Wave twice
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.6, 0.75, 0.9, 1],
            repeatDelay: 1,
          }}
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <h2 className="text-2xl md:text-4xl font-medium text-gray-800 dark:text-gray-100 whitespace-nowrap">
          , I'm{" "}
          <span className="text-blue-500 dark:text-green-500 whitespace-nowrap">
            Prashanth Naroju
          </span>
        </h2>
      </motion.div>

      {/* Roles and Paragraph Container */}
      <div className="relative mt-4 w-full text-center h-32">
        {" "}
        {/* Fixed height to prevent layout shifts */}
        {/* Rotating Roles Section */}
        <AnimatePresence>
          {showRoles && ( // Only render roles after greeting animation is complete
            <motion.div
              key="roles"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }} // Slight delay after greeting
              className="w-full"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-2xl md:text-3xl font-medium text-green-500 dark:text-blue-500 whitespace-nowrap"
                >
                  {roles[currentRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Paragraph Section */}
        <AnimatePresence>
          {showParagraph && ( // Only render paragraph after roles animation is complete
            <motion.p
              key="paragraph"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }} // Slight delay after roles
              onAnimationComplete={()=>setShowButtons(true)}
              className="w-full max-w-md md:max-w-lg mx-auto text-gray-600 dark:text-gray-200 text-md md:text-xl mt-4"
            >
              I am a Full Stack Web Developer specializing in the MERN stack,
              building projects that focus on problem-solving and delivering
              efficient solutions.
            </motion.p>
          )}
        </AnimatePresence>
        {/* Button Section - Appears after paragraph */}
        <AnimatePresence>
          {showButtons && (
            <motion.div
              key="button-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-4 mt-2 p-4"
            >
              {/* Contact Me Button */}
              <Button variant="default" className="flex items-center gap-2"  onClick={() => scrollToSection("Contact")}>
                <Mail size={18} />
                Hire Me
              </Button>

              {/* Download CV Button with Tooltip */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="p-2" onClick={handleDownload}>
                    <Download size={18} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download CV</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroIntro;
