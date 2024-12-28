import React from 'react';

const ComparisonSection = () => {
  const other = [
    'High upfront fees',
    'Rigid contracts',
    'Generic designs',
    'Limited post-launch support',
    'Hidden costs',
  ];

  const slick = [
    'No upfront fees',
    'Flexible, no long-term commitments',
    'Custom designs tailored to your brand',
    'Ongoing maintenance and support',
    'Transparent pricing with no hidden costs',
  ];

  return (
    <div className="bg-gray-100 py-16 text-gray-800">
      <h2 className="text-3xl font-bold text-center">Us vs. Other Agencies</h2>
      <div className="flex flex-col md:flex-row justify-center mt-8 gap-8">
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Other Agencies</h3>
          {other.map((item, index) => (
            <p key={index} className="text-lg my-2">❌ {item}</p>
          ))}
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Slick Sites</h3>
          {slick.map((item, index) => (
            <p key={index} className="text-lg my-2">✅ {item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
