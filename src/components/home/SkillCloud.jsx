import React from "react";
import { IconCloud } from "../magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "mongodb",
  "mongoosedotws",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "shadcnui",
  "mysql",
];

const SkillCloud = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex size-full items-center justify-center overflow-hidden w-full  scale-125 md:scale-150">
        {/* Scale down for mobile, reset for larger screens */}
        
          <IconCloud images={images} />
        
      </div>
    </div>
  );
};

export default SkillCloud;