import React from "react";
import Image from "next/image";
import Link from "next/link";
import webDevImage from "@/public/images/services/web-dev.svg";
import ecomImage from "@/public/images/services/e-commerce.svg";
import landingPageImage from "@/public/images/services/landing-page.svg";

const WebDevelopment = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Page Header */}
        <h2 className="text-2xl text-blue-950 mb-4">Innovative Web Solutions</h2>
        <h3 className="text-5xl font-bold text-blue-950 mb-6">Web Development Services</h3>
        <p className="text-lg text-gray-600 mb-12">
          Transform your online presence with our tailored web development services. We specialize in creating 
          dynamic, user-friendly, and performance-driven websites that help your business thrive in the digital landscape.
        </p>

        {/* Web Development Services Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          {/* Web Development */}
          <Link href="/services/custom-webdev" className="flex flex-col items-center hover:scale-105 transform duration-300">
            <div className="w-full h-60 relative">
              <Image
                src={webDevImage}
                alt="Web Development"
                className="rounded-lg shadow-lg object-cover"
                fill
              />
            </div>
            <h4 className="text-3xl font-bold text-blue-950 mt-6">Custom Web Development</h4>
            <p className="text-lg text-gray-600 mt-4">
              Whether you need a corporate website, a portfolio, or a fully dynamic platform, our custom web 
              development services are designed to meet your unique requirements. We combine cutting-edge 
              technology with creative solutions to build websites that are both functional and visually engaging.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              View our <Link href="/work" className="text-blue-600 hover:underline">
                Web Development Portfolio
              </Link> to see the impactful solutions we’ve delivered.
            </p>
          </Link>

          {/* E-commerce Development */}
          <Link href="/services/ecommerce-development" className="flex flex-col items-center hover:scale-105 transform duration-300">
            <div className="w-full h-60 relative">
              <Image
                src={ecomImage}
                alt="E-commerce Development"
                className="rounded-lg shadow-lg object-cover"
                fill
              />
            </div>
            <h4 className="text-3xl font-bold text-blue-950 mt-6">E-commerce Development</h4>
            <p className="text-lg text-gray-600 mt-4">
              Take your business online with our comprehensive e-commerce development services. We build secure, scalable, 
              and user-friendly online stores tailored to your products and customer needs, ensuring an exceptional shopping experience.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Discover more in our <Link href="/work" className="text-blue-600 hover:underline">
                E-commerce Portfolio
              </Link> and see how we’ve helped clients succeed online.
            </p>
          </Link>

          {/* Landing Page Development */}
          <Link href="/services/landing-page-development" className="flex flex-col items-center hover:scale-105 transform duration-300">
            <div className="w-full h-60 relative">
              <Image
                src={landingPageImage}
                alt="Landing Page Development"
                className="rounded-lg shadow-lg object-cover"
                fill
              />
            </div>
            <h4 className="text-3xl font-bold text-blue-950 mt-6">Landing Page Development</h4>
            <p className="text-lg text-gray-600 mt-4">
              Maximize your marketing campaigns with high-converting landing pages. Our landing page development 
              services are focused on creating visually compelling and strategically optimized pages to boost engagement and drive results.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Browse our <Link href="/work" className="text-blue-600 hover:underline">
                Landing Page Portfolio
              </Link> to explore examples of our work.
            </p>
          </Link>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-4xl font-bold text-blue-950 mb-6">Why Choose Us?</h3>
          <ul className="text-lg text-gray-600 space-y-4">
            <li>
              <strong>Custom Solutions:</strong> Our websites are tailored to your specific needs, ensuring unique and effective results.
            </li>
            <li>
              <strong>Scalability:</strong> We build websites that grow with your business, offering seamless scalability for future needs.
            </li>
            <li>
              <strong>Latest Technology:</strong> We use modern tools and frameworks to deliver cutting-edge web solutions.
            </li>
            <li>
              <strong>Proven Expertise:</strong> With years of experience, we’ve helped businesses across industries achieve their digital goals.
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h4 className="text-3xl font-bold text-blue-950">Ready to build your next big idea?</h4>
          <p className="text-lg text-gray-600 mt-4">
            Contact us today to discuss your project or explore our detailed portfolios to see our work in action.
          </p>
          <Link href="/quote" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
