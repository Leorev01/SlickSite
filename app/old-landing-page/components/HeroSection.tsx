import React from 'react';
import SalesButton from './SalesButton';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-16">
      <h1 className="text-4xl font-extrabold">
        Get a Website That Grows Your Business
      </h1>
      <p className="mt-4 text-lg">
        Custom, high-converting websites built with your business goals in mind. No upfront fees, no hassle.
      </p>
      <SalesButton />
      <p className="mt-4 text-sm italic">Limited-time offer: Ends January 7th</p>
    </div>
  );
};

export default HeroSection;
