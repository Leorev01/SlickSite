import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

const ECommerceServices = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl text-blue-950 mb-2">E-commerce</h2>
            <h3 className="text-5xl font-bold text-blue-950 mb-4">
              Bespoke E-commerce Solutions
            </h3>
            <p className="text-lg text-gray-600">
              At Slick, we understand the importance of having a robust, 
              user-friendly e-commerce platform to drive your business forward. 
              Whether you need a new online store, an upgrade to your existing 
              platform, or a custom solution tailored to your unique requirements, 
              we deliver powerful, secure, and optimized e-commerce websites.
            </p>
            <Link
              href="/quote"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700"
            >
              Get a Free Quote Today
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src="/images/services/e-commerce.svg"
              alt="E-commerce Services"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* E-commerce Development Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            Comprehensive E-commerce Development
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            Our e-commerce solutions are designed to provide a seamless shopping 
            experience for your customers while meeting the specific needs of your 
            business. From secure payment gateways to intuitive user interfaces 
            and scalable backend systems, we ensure every aspect of your online 
            store works perfectly.
          </p>
          <p className="text-lg text-gray-600">
            With expertise in platforms like Shopify, WooCommerce, and custom 
            development, our team is equipped to create a tailored solution that 
            drives sales and customer satisfaction.
          </p>
        </div>

        {/* Our Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h4 className="text-4xl font-bold text-blue-950 mb-6 text-center">
            Our Process
          </h4>
          <div className="flex flex-col space-y-8">
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex justify-center items-center">
                  <i className="fas fa-user-plus text-xl"></i> {/* Onboarding Icon */}
                </div>
                <div className="ml-4">
                  <h5 className="text-2xl font-bold text-blue-950">
                    Step 1: Onboarding
                  </h5>
                  <p className="text-gray-600 mt-2">
                    Share your goals and requirements to kickstart your e-commerce project.
                  </p>
                </div>
              </div>
              <div className="flex-1 hidden md:block">
                <i className="fas fa-arrow-right text-blue-600 text-2xl ml-6"></i>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex justify-center items-center">
                  <i className="fas fa-pencil-ruler text-xl"></i> {/* Design Icon */}
                </div>
                <div className="ml-4">
                  <h5 className="text-2xl font-bold text-blue-950">
                    Step 2: Design
                  </h5>
                  <p className="text-gray-600 mt-2">
                    We craft a visually appealing and intuitive design tailored 
                    to your brand.
                  </p>
                </div>
              </div>
              <div className="flex-1 hidden md:block">
                <i className="fas fa-arrow-right text-blue-600 text-2xl ml-6"></i>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex justify-center items-center">
                  <i className="fas fa-code text-xl"></i> {/* Development Icon */}
                </div>
                <div className="ml-4">
                  <h5 className="text-2xl font-bold text-blue-950">
                    Step 3: Development
                  </h5>
                  <p className="text-gray-600 mt-2">
                    Build a secure and scalable e-commerce platform with robust features.
                  </p>
                </div>
              </div>
              <div className="flex-1 hidden md:block">
                <i className="fas fa-arrow-right text-blue-600 text-2xl ml-6"></i>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex justify-center items-center">
                  <i className="fas fa-search text-xl"></i> {/* SEO Icon */}
                </div>
                <div className="ml-4">
                  <h5 className="text-2xl font-bold text-blue-950">
                    Step 4: Optimization
                  </h5>
                  <p className="text-gray-600 mt-2">
                    Optimize for performance, speed, and search engine rankings.
                  </p>
                </div>
              </div>
              <div className="flex-1 hidden md:block">
                <i className="fas fa-arrow-right text-blue-600 text-2xl ml-6"></i>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex justify-center items-center">
                  <i className="fas fa-rocket text-xl"></i> {/* Launch Icon */}
                </div>
                <div className="ml-4">
                  <h5 className="text-2xl font-bold text-blue-950">
                    Step 5: Launch
                  </h5>
                  <p className="text-gray-600 mt-2">
                    Launch your online store and start reaching customers worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CTA />
      </div>
    </section>
  );
};

export default ECommerceServices;
