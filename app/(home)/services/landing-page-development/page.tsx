import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

const LandingPageServices = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl text-blue-950 mb-2">Landing Pages</h2>
            <h3 className="text-5xl font-bold text-blue-950 mb-4">
              High-Converting Landing Page Development
            </h3>
            <p className="text-lg text-gray-600">
              At Slick, we specialize in creating high-converting landing pages designed to drive results. 
              Whether you&apos;re launching a product, promoting a service, or gathering leads, our landing pages 
              are built to capture attention, engage visitors, and maximize conversions.
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
              src="/images/services/landing-page.svg"
              alt="Landing Page Services"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Landing Page Development Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            Tailored Landing Page Development
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            We create landing pages that are visually appealing, fast, and optimized for conversions. 
            Our team works with you to understand your goals and audience, ensuring that every element 
            of the landing page is designed to deliver results, whether that&apos;s generating leads or increasing sales.
          </p>
          <p className="text-lg text-gray-600">
            We specialize in building mobile-responsive, SEO-friendly, and user-focused landing pages that 
            are tailored to meet your marketing objectives and create a seamless user experience.
          </p>
        </div>

        {/* Example Project Section */}
        <div className="mb-16 text-center">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">Example Project</h4>
          <p className="text-lg text-gray-600 mb-8">
            Check out one of our successful landing page projects that helped our client achieve their business goals.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <Image
              src="/images/projects/photographer.png"
              alt="Product Launch Landing Page"
              className="rounded-lg"
              objectFit="cover"
              objectPosition="top"
              width={400}
              height={250}
              style={{ maxHeight: "250px", objectFit: "cover" }}
            />
            <h5 className="text-xl font-bold text-blue-950 mt-4">Photographer Landing Page</h5>
            <p className="text-gray-600 mt-2">
              A landing page designed for a professional photographer to showcase their portfolio and book sessions.
            </p>
          </div>
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
                    Share your goals and requirements to kickstart your landing page project.
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
                    We design a visually stunning and functional layout that resonates with your target audience.
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
                    We develop your landing page with fast load times, optimized code, and a smooth user experience.
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
                    We optimize your landing page for search engines and ensure it performs well on all devices.
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
                    We launch your landing page and track its performance to ensure maximum conversion.
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

export default LandingPageServices;
