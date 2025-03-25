'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Youtube } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({
  title,
  description,
  coverImage,
  githubUrl,
  liveUrl,
  youtubeUrl,
  techStack,
}) => {
  const [showMore, setShowMore] = useState(false);
  
  const truncatedDescription = description.length > 75 ? description.slice(0, 65) + "..." : description;
  
  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUp}
      viewport={{ once: false, amount: 0.5 }}
    >
      <Card className="group overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-neutral-700">
        {/* Cover Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {showMore ? description : truncatedDescription}
            {description.length > 75 && (
              <button
                className="ml-2 text-blue-500 underline hover:text-blue-400 hover:cursor-pointer"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}

          {youtubeUrl && (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            >
              <Youtube className="h-4 w-4" />
              <span>Preview</span>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
