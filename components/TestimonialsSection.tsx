'use client'
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'C Smith',
    quote: 'This agency completely transformed our website! Our conversions have skyrocketed.',
  },
  {
    id: 2,
    name: 'S Johnson',
    quote: 'Incredible design team! They understood our needs and delivered ahead of schedule.',
  },
  {
    id: 3,
    name: 'A Thompson',
    quote: 'We love our new site! The results are amazing, and the process was seamless.',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const { name, quote } = testimonials[currentIndex];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div>
              <p className="text-xl font-semibold text-gray-800">{name}</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 italic">&quot;{quote}&quot;</p>
          <div className="flex justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
