import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

const WebDevelopmentServices = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl text-blue-950 mb-2">Web Development</h2>
            <h3 className="text-5xl font-bold text-blue-950 mb-4">
              Bespoke Web Development Services
            </h3>
            <p className="text-lg text-gray-600">
              At Slick, we know that every business is unique. That&apos;s why we 
              provide bespoke web development services tailored to your specific needs. 
              Whether you&apos;re revamping your existing website, launching a new 
              e-commerce platform, or creating a portfolio page, we bring your 
              vision to life with modern, responsive, and optimized designs.
            </p>
            <Link href="/quote" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700">
              Get a Free Quote Today
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src="/images/services/web-dev.svg"
              alt="Web Development Services"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Bespoke Web Development Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            Bespoke Web Development
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            A tailored approach to web development ensures that your website 
            meets the unique demands of your business. At Slick, we focus on 
            creating responsive, secure, and user-friendly websites that align 
            with your brand identity and drive business objectives.
          </p>
          <p className="text-lg text-gray-600">
            From improving functionality to delivering SEO-optimized solutions, 
            our bespoke services are designed to provide a seamless and 
            engaging user experience.
          </p>
        </div>

        {/* Example Projects Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">Example Projects</h4>
          <p className="text-lg text-gray-600 mb-8">
            Explore some of the projects we&apos;ve completed to see how we&apos;ve helped 
            businesses succeed online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="relative w-full h-[250px]">
              <Image
                src="/images/projects/sjdroofing.png"
                alt="SJD Roofing"
                className="rounded-lg"
                objectFit="cover"
                objectPosition="top"
                layout="fill" // Ensures image fills the container
              />
            </div>
            <h5 className="text-xl font-bold text-blue-950 mt-4">SJD Roofing</h5>
            <p className="text-gray-600 mt-2">
              Built a responsive website for a UK-based company specializing in roofing and exterior cleaning.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="relative w-full h-[250px]">
              <Image
                src="/images/projects/plasterer.png"
                alt="Plasterer Website"
                className="rounded-lg"
                objectFit="cover"
                objectPosition="top"
                layout="fill" // Ensures image fills the container
              />
            </div>
            <h5 className="text-xl font-bold text-blue-950 mt-4">Plasterer Website</h5>
            <p className="text-gray-600 mt-2">
              Developed a sleek website for a plasterer, showcasing their professional skills, services and portfolio.
            </p>
          </div>
        </div>

        </div>

        {/* Our Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h4 className="text-4xl font-bold text-blue-950 mb-6 text-center">Our Process</h4>
          <div className="flex flex-col space-y-8">
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex justify-center items-center">
                  <i className="fas fa-user-plus text-xl"></i> {/* Onboarding Icon */}
                </div>
                <div className="ml-4">
                  <h5 className="text-2xl font-bold text-blue-950">Step 1: Onboarding</h5>
                  <p className="text-gray-600 mt-2">
                    Fill out our onboarding form and share your resources to get started.
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
                  <h5 className="text-2xl font-bold text-blue-950">Step 2: Design</h5>
                  <p className="text-gray-600 mt-2">
                    Our team creates a custom design based on your business needs and vision.
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
                  <h5 className="text-2xl font-bold text-blue-950">Step 3: Development</h5>
                  <p className="text-gray-600 mt-2">
                    We bring your ideas to life, developing a fully functional website.
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
                  <i className="fas fa-search text-xl"></i> {/* SEO Strategy Icon */}
                </div>
                <div className="ml-4">
                  <h5 className="text-2xl font-bold text-blue-950">Step 4: SEO Strategy</h5>
                  <p className="text-gray-600 mt-2">
                    Discuss and implement a tailored SEO strategy to optimize your website.
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
                  <h5 className="text-2xl font-bold text-blue-950">Step 5: Launch</h5>
                  <p className="text-gray-600 mt-2">
                    We handle everything to ensure your new website goes live smoothly.
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

export default WebDevelopmentServices;
