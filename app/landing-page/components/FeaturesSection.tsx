import React from 'react';

const features = [
  'No upfront fees – risk-free!',
  'SEO-optimized designs to grow your traffic.',
  'Mobile-friendly and lightning-fast loading.',
  'Full transparency with no hidden fees.',
  '30-day satisfaction guarantee.',
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16 text-gray-800">
      <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
      <div className="mt-8 flex flex-col items-center">
        {features.map((feature, index) => (
          <p key={index} className="text-lg my-2">✅ {feature}</p>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
