'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      image: '/images/projects/photographer.png',
      title: 'Photographer Portfolio',
      description: 'A stunning portfolio website for a professional photographer.',
    },
    {
      id: 2,
      image: '/images/projects/sjdroofing.png',
      title: 'SJD Roofing',
      description: 'A modern website for a roofing company, showcasing their services and projects.',
    },
    {
      id: 3,
      image: '/images/projects/travelblog.png',
      title: 'Travel Blog',
      description: 'A vibrant travel blog with beautiful imagery and engaging content.',
    },
    {
      id: 4,
      image: '/images/projects/webdev.png',
      title: 'Web Development Agency',
      description: 'A sleek website for a web development agency, highlighting their expertise.',
    },
    {
      id: 5,
      image: '/images/projects/surgemines.png',
      title: 'Surgemines',
      description: 'A professional website for a mining consultancy firm.',
    },
    {
      id: 6,
      image: '/images/projects/plasterer.png',
      title: 'Plasterer Portfolio',
      description: 'A clean and professional website for a plastering contractor.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 md:py-8 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h1>
        <motion.p
          className="text-md md:text-lg mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Explore the websites we’ve built for businesses like yours.
        </motion.p>
      </header>

      {/* Projects Container */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-4 p-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-full max-w-4xl relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Full-Size Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={1200} // Adjust based on your image dimensions
                height={800} // Adjust based on your image dimensions
                className="rounded-lg shadow-lg"
                quality={100}
                priority={index === 0} // Prioritize loading the first image
              />

              {/* Overlay with Project Details */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <motion.div
                  className="text-white max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {project.title}
                  </h2>
                  <p className="text-md md:text-lg mb-6">{project.description}</p>
                  <Link
                    href="/landing-page"
                    className="inline-block bg-white text-blue-600 hover:bg-gray-100 text-lg md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    Get Your Website
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/landing-page"
          className="bg-blue-600 text-white hover:bg-blue-700 text-lg md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}