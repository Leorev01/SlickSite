import React from 'react';
import SalesButton from './SalesButton';

const OfferSection = () => {
  return (
    <div className="bg-purple-600 text-white text-center py-16">
      <h2 className="text-3xl font-bold">
        Ready to Take Your Business to the Next Level?
      </h2>
      <p className="mt-4 text-lg">
        Book your FREE 15-minute strategy call today and get started with zero risk.
      </p>
      <SalesButton />
    </div>
  );
};

export default OfferSection;
