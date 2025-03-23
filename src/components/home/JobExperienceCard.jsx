'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const JobExperienceCard = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate job description to 100 characters
  const truncatedDescription = event.jobDescription.slice(0, 170) + '...';

  return (
    <Card className="shadow-lg dark:bg-black dark:border dark:border-gray-800 text-left">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          {/* Company Logo */}
          <a href={event.companyWebsite} target="_blank" rel="noopener noreferrer">
            <Avatar className="h-12 w-12">
              <AvatarImage src={event.companyLogo} alt={event.companyName} />
              <AvatarFallback>{event.companyName[0]}</AvatarFallback>
            </Avatar>
          </a>

          {/* Company Name and Role */}
          <div className="w-full">
            <a href={event.companyWebsite} target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg font-semibold text-pink-500 hover:underline">
                {event.companyName}
              </h3>
            </a>
            <div className="flex gap-4 items-center w-full">
              <p className="text-gray-600 dark:text-gray-300">{event.role} </p>
              <span>-</span>
              <p className="text-blue-500 dark:text-gray-300">{event.jobType}</p>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          {isExpanded ? event.jobDescription : truncatedDescription}
          {event.jobDescription.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-500 hover:underline ml-2 focus:outline-none"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          )}
        </p>

        {/* Tech Skills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {event.techSkills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-sm dark:bg-white dark:text-black bg-gray-100">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default JobExperienceCard;