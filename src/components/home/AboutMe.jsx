'use client';

import React from "react";
import { motion } from "framer-motion";
import { Code, Lightbulb, Smile } from "lucide-react";

const AboutMe = () => {
  // Animation variants for paragraphs
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black my-10 z-10 rounded-md shadow-lg border scroll-mt-24 mt-24"  id="About"
    >
      <div className="max-w-5xl mx-auto text-center"  >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.2 }} // Triggers when 20% of the element is in view
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <div className="text-lg text-gray-600 dark:text-gray-300 space-y-6">
          {/* Paragraph 1 */}
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }} // Triggers when 20% of the element is in view
          >
            Hi, I’m Prashanth Naroju, a self-taught full-stack web developer with a
            passion for building problem-solving and efficient web applications.
            My expertise lies in the <span className="font-semibold text-indigo-500 dark:text-indigo-400">MERN</span> stack (MongoDB, Express.js, React, and
            Node.js), and I love turning ideas into functional, user-friendly
            digital experiences.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }} // Triggers when 20% of the element is in view
            transition={{ delay: 0.2 }} // Slight delay for smooth sequencing
          >
            I started my journey by teaching coding for two years, where I
            helped aspiring developers learn the fundamentals and grow their
            skills. For the past year, I’ve been working as a full stack
            developer, focusing on creating clean, responsive, and intuitive
            interfaces that deliver seamless user experiences.
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }} // Triggers when 20% of the element is in view
            transition={{ delay: 0.4 }} // Slight delay for smooth sequencing
          >
            Beyond coding,, I’ve built a social presence on instagram under
            the name <span className="font-semibold text-indigo-500 dark:text-indigo-400">idonutcode</span>,
            where I connect with a community of over 10,000 followers. Through
            this platform, I share insights, tips, and my journey in tech,
            inspiring others to learn and grow.
          </motion.p>

          {/* Paragraph 4 */}
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }} // Triggers when 20% of the element is in view
            transition={{ delay: 0.6 }} // Slight delay for smooth sequencing
          >
            I’m now looking to join a collaborative and innovative team where
             I can contribute my skills, continue learning, and create impactful solutions together.
              Let’s build something amazing!
          </motion.p>
        </div>

        {/* Icons Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }} // Triggers when 20% of the element is in view
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <Code className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
            <span>MERN Stack</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <Lightbulb className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
            <span>Problem Solver</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <Smile className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
            <span>10k+ Followers</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;