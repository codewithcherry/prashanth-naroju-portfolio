"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    id: "0",
    title: "MyUniReview",
    description:
      "MyUniReview is an online platform built to empower students dreaming of studying in top destinations like the US, UK, Canada, and Australia — by giving them direct, unfiltered access to those who’ve already been there.",
    coverImage: "./munireview-cover.jpg",
    githubUrl: "https://github.com/codewithcherry/myunireview",
    liveUrl: "https://myunireview.vercel.app/",
    // youtubeUrl: "https://youtube.com/watch?v=example",
    techStack: [
      "Next",
      "React",
      "Node.js",
      "MongoDB",
      "Shadcn",
      "NextJS",
      "Oauth",
      "Tailwind CSS",
    ],
  },
  {
    id: "1",
    title: "NaroEstate",
    description:
      "NaroEstate is a modern real estate platform built with Next.js & MERN stack, featuring sleek UI via shadcn and smooth animations with Framer Motion. Users can rent, buy, or list properties, with seamless booking and secure transactions. A fast, responsive, and user-friendly solution for all property needs! 🏡✨",
    coverImage: "./naro-estate-cover.png",
    githubUrl: "https://github.com/codewithcherry/NaroEstate",
    liveUrl: "https://naro-estate.vercel.app/",
    // youtubeUrl: "https://youtube.com/watch?v=example",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Shadcn",
      "NextJS",
      "Framer Motion",
      "Tailwind CSS",
    ],
  },
  {
    id: "2",
    title: "MyShop an E-commerce Site",
    description:
      "MyShop is a modern e-commerce platform built with the MERN stack and RESTful APIs, offering a seamless online shopping experience. Users can browse, purchase, and manage orders effortlessly with a sleek UI, secure transactions, and a fast, responsive design. The perfect solution for all your shopping needs! 🛒✨",
    coverImage: "./myshop-cover.png",
    githubUrl: "https://github.com/codewithcherry/Shopping-Website",
    // liveUrl: "https://shopping-website-liard-zeta.vercel.app/",
    // youtubeUrl: "https://youtube.com/watch?v=example",
    techStack: [
      "React",
      "MongoDB",
      "NodeJs",
      "JWT",
      "Tailwind CSS",
      "RESTful API",
      "MailGun",
    ],
  },
  {
    id: "3",
    title: "3D-Portfolio",
    description:
      "My Portfolio is a cutting-edge 3D portfolio website built with Next.js and the MERN stack, featuring stunning 3D animations powered by Three.js. With a sleek UI using shadcn and smooth interactions via Framer Motion, it offers an immersive and dynamic way to showcase your work. Fast, responsive, and visually captivating! 🚀🎨",
    coverImage: "./portofolio-cover.png",
    githubUrl: "https://github.com/codewithcherry/prashanth-naroju-portfolio",
    liveUrl: "https://prashanth-naroju-portfolio.vercel.app/",
    // youtubeUrl: "https://youtube.com/watch?v=example",
    techStack: [
      "React",
      "NextJs",
      "Shadcn",
      "ThreeJS",
      "Tailwind CSS",
      "Framer Motion",
    ],
  }, // Add more projects as needed
];

const Projects = () => {
  // Slide-up animation variant
  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full max-w-6xl px-4 md:px-8  py-8 mx-auto scroll-m-20" id="Projects">
      {/* Title */}
      <motion.h1
        className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8"
        initial="hidden"
        whileInView="visible"
        variants={slideUp}
        viewport={{ once: false, amount: 0.5 }}
      >
        Projects
      </motion.h1>
      <motion.p 
        className="text-base md:text-xl font-medium text-gray-700 dark:text-gray-300 text-center mb-8 md:mb-12"
        initial="hidden"
        whileInView="visible"
        variants={slideUp}
        viewport={{ once: false, amount: 0.5 }}
      >
        Explore my latest work and Projects
      </motion.p>
      <div>
        {projects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <h3 className="text-lg md:text-xl font-medium">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
