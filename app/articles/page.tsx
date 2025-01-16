'use client';

import React from 'react';

const ArticlesPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="container mx-auto mt-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-950">Articles</h1>
          <p className="mt-4 text-lg text-gray-700 mx-auto">
            In today’s competitive digital landscape, having an effective online presence isn’t just a luxury—it’s a necessity. At <span className="font-semibold">Slick</span>, we’re here to empower businesses and individuals with actionable insights, proven strategies, and practical tips to help you unlock your website’s full potential.
          </p>
          <p className="mt-4 text-lg text-gray-700 mx-auto">
            Whether you’re looking to increase your website’s conversion rates, improve user experience, or master digital marketing strategies, our articles are designed to guide you every step of the way. Join us at <span className="font-semibold">Slick</span> as we explore how to turn your website into a powerful engine for growth and customer engagement.
          </p>
        </div>

        {/* Articles Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Article Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/articles/conversion.png"
              alt="Boosting Website Conversion Rates"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-950 mb-2">
                Boosting Website Conversion Rates
              </h2>
              <p className="text-gray-700 mb-4">
                Discover actionable strategies to turn website visitors into loyal customers with practical tips for improving conversion rates.
              </p>
              <a
                href="/articles/boost-conversion-rates"
                className="text-blue-600 hover:underline font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Article Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/articles/user-experience.png"
              alt="Creating a Seamless User Experience"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-950 mb-2">
                Creating a Seamless User Experience
              </h2>
              <p className="text-gray-700 mb-4">
                Learn the key principles of UX design that ensure your visitors enjoy every second they spend on your website.
              </p>
              <a
                href="/articles/seamless-user-experience"
                className="text-blue-600 hover:underline font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Article Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/articles/digital-marketing.png"
              alt="Effective Digital Marketing Strategies"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-950 mb-2">
                Effective Digital Marketing Strategies
              </h2>
              <p className="text-gray-700 mb-4">
                Explore techniques to amplify your brand’s reach and engagement through innovative digital marketing approaches.
              </p>
              <a
                href="/articles/digital-marketing-strategies"
                className="text-blue-600 hover:underline font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage;
