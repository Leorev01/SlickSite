'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SubHeading from './SubHeading';

const testimonials = [
  {
    id: 1,
    name: "A Simba",
    review: `I couldn't be happier at how my website turned out! A big thank you to Leo and the team at slick-site for being attentive and accommodating throughout the design process. I'm a small service-based business and finally have the perfect website to showcase my projects. Thanks again, Alawi.`,
    rating: 5, // Rating added
  },
  {
    id: 2,
    name: "S Dowey",
    review: `Over the moon with the website design, which I have no clue about but wasn’t worried one bit due to how convenient this company made me feel. Honestly just left him to it, and within a week, I had a fully designed website at affordable prices. Would recommend this company to anyone and will be from now on. Many thanks, Shane.`,
    rating: 4, // Rating added
  },
  {
    id: 3,
    name: "T Williams",
    review: `They did an amazing job of developing my website. They captured the essence of my photography and made it marketable to give me a wider audience. Amazing work.`,
    rating: 5, // Rating added
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(autoScroll); // Cleanup interval on unmount
  }, []);

  const variants = {
    enter: { x: 300, opacity: 0 }, // Start from the right
    center: { x: 0, opacity: 1 }, // Center position
    exit: { x: -300, opacity: 0 }, // Exit to the left
  };

  const { name, review, rating } = testimonials[currentIndex];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-6">
        <SubHeading title="TESTIMONIALS" text="What Our Clients Say" />
        <div
          className="max-w-2xl mx-auto bg-white shadow-xl shadow-blue-950 rounded-lg p-6 relative overflow-hidden"
        >
          <div className="relative sm:h-[250px] h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
                className="absolute w-full h-full flex flex-col items-center justify-center"
              >
                <p className="text-xl font-semibold text-gray-800">{name}</p>
                <p className="text-lg text-gray-700 italic text-center mt-4 max-w-[90%]">
                  &quot;{review}&quot;
                </p>
                {/* Display 5-star rating */}
                <div className="flex mt-4">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>⭐</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
