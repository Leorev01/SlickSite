import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    text: 'Slick Sites transformed my website, and now my business is thriving! Highly recommended!',
  },
  {
    name: 'John Smith',
    text: 'Amazing service! My new website loads fast and converts like crazy.',
  },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-blue-600 py-16 text-white">
      <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
      <div className="mt-8 flex flex-col items-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white text-gray-800 rounded-lg p-6 m-4 shadow-lg">
            <p className="italic">&quot;{testimonial.text}&quot;</p>
            <p className="mt-2 font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
