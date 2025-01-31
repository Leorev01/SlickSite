import React from 'react';
import Image from 'next/image';
import CTA from '@/components/CTA';

const WorkSection = () => {
  const portfolioItems = [
    {
      title: 'SJD Roofing',
      description:
        'A professional and visually striking website for a roofing company, designed to showcase their services and completed projects while generating client inquiries.',
      imageUrl: '/images/projects/sjdroofing.png',
    },
    {
      title: 'Photographer Portfolio',
      description:
        'An elegant portfolio website for a professional photographer, highlighting their work through stunning galleries and client testimonials.',
      imageUrl: '/images/projects/photographer.png',
    },
    {
      title: 'SurgeMines',
      description:
        'A modern, dynamic website for a cryptocurrency mining company, emphasizing their innovative solutions and secure platforms.',
      imageUrl: '/images/projects/surgemines.png',
    },
    {
      title: 'Travel Blog',
      description:
        'A captivating and immersive blog platform for travel enthusiasts, designed with engaging visuals and easy navigation for an exceptional user experience.',
      imageUrl: '/images/projects/travelblog.png',
    },
    {
      title: 'Web Development Agency',
      description:
        'A clean and responsive website showcasing a web development agency’s expertise, portfolio, and comprehensive digital solutions.',
      imageUrl: '/images/projects/webdev.png',
    },
    {
      title: 'Plasterers Website',
      description:
        'A user-friendly website tailored for a plastering service, featuring local SEO optimization to boost visibility and online appointment bookings.',
      imageUrl: '/images/projects/plasterer.png',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Portfolio Header */}
        <h2 className="text-2xl text-blue-950 mb-4">PORTFOLIO</h2>
        <h3 className="text-5xl font-bold text-blue-950 mb-6">Our Work</h3>
        <p className="text-lg text-gray-600 mb-12">
          Our portfolio demonstrates our expertise in delivering innovative web solutions. Explore a selection of our recent projects, designed for diverse industries such as e-commerce, home improvements, and more.
        </p>

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="w-full h-48 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 px-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default WorkSection;
