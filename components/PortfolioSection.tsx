'use client'
import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component

const projects = [
  {
    id: "1",
    imageUrl: "/images/projects/photographer.png", // Replace with actual image URLs
    height: 400,
  },
  {
    id: "2",
    imageUrl: "/images/projects/sjdroofing.png",
    height: 350,
  },
  {
    id: "3",
    imageUrl: "/images/projects/surgemines.png",
    height: 500,
  },
  {
    id: "4",
    imageUrl: "/images/projects/travelblog.png",
    height: 450,
  },
  {
    id: "5",
    imageUrl: "/images/projects/webdev.png",
    height: 400,
  },
];

const Projects = () => {
  return (
    <div className="py-10 bg-gray-50" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Work</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Display projects in a grid */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
