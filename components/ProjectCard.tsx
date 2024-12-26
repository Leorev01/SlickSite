'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project }) => (
  <motion.div
    key={project.id}
    className="flex-shrink-0 bg-gray-300 rounded-lg shadow-md overflow-hidden"
    style={{
      width: '100%',
      height: '300px',
      overflow: 'hidden',
    }}
  >
    <motion.img
      src={project.imageUrl}
      alt={`Project ${project.id}`}
      className="w-full h-full object-cover transition-all duration-[2000ms]"
      loading="lazy" // Lazy load images
      style={{
        objectPosition: 'top',
      }}
      whileHover={{
        objectPosition: 'bottom',
      }}
    />
  </motion.div>
));

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
