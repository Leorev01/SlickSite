import React from "react";
import Image from "next/image";
import Link from "next/link";
import seoImage from "@/public/images/services/seo.svg";
import articlesImage from "@/public/images/services/articles.svg";
import hostingImage from "@/public/images/services/hosting.svg";

const DigitalMarketingServices = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Page Header */}
        <h2 className="text-2xl text-blue-950 mb-4">Enhance Your Online Presence</h2>
        <h3 className="text-5xl font-bold text-blue-950 mb-6">Digital Marketing Services</h3>
        <p className="text-lg text-gray-600 mb-12">
          Unlock the full potential of your business with our comprehensive digital marketing services. From SEO to content creation and hosting, we provide the strategies and tools to help your brand succeed in the digital landscape.
        </p>

        {/* Digital Marketing Services Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* SEO */}
          <Link href="/services/seo" className="flex flex-col items-center hover:scale-105 transform duration-300">
            <div className="w-full h-60 relative">
              <Image
                src={seoImage}
                alt="SEO Services"
                className="rounded-lg shadow-lg object-cover"
                fill
              />
            </div>
            <h4 className="text-3xl font-bold text-blue-950 mt-6">SEO</h4>
            <p className="text-lg text-gray-600 mt-4">
              Boost your visibility and drive organic traffic to your website with our tailored SEO strategies.
            </p>
          </Link>

          {/* Articles */}
          <Link href="/services/articles" className="flex flex-col items-center hover:scale-105 transform duration-300">
            <div className="w-full h-60 relative">
              <Image
                src={articlesImage}
                alt="Articles"
                className="rounded-lg shadow-lg object-cover"
                fill
              />
            </div>
            <h4 className="text-3xl font-bold text-blue-950 mt-6">Articles</h4>
            <p className="text-lg text-gray-600 mt-4">
              Engage your audience with high-quality content that builds trust and establishes your authority.
            </p>
          </Link>

          {/* Web Hosting */}
          <Link href="/services/web-hosting" className="flex flex-col items-center hover:scale-105 transform duration-300">
            <div className="w-full h-60 relative">
              <Image
                src={hostingImage}
                alt="Web Hosting"
                className="rounded-lg shadow-lg object-cover"
                fill
              />
            </div>
            <h4 className="text-3xl font-bold text-blue-950 mt-6">Web Hosting</h4>
            <p className="text-lg text-gray-600 mt-4">
              Enjoy secure, reliable, and fast hosting solutions to keep your website running smoothly.
            </p>
          </Link>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-4xl font-bold text-blue-950 mb-6">Why Choose Slick for Digital Marketing?</h3>
          <ul className="text-lg text-gray-600 space-y-4">
            <li>
              <strong>Customized Strategies:</strong> Tailored approaches that align with your business goals.
            </li>
            <li>
              <strong>Proven Expertise:</strong> Our experienced team delivers measurable results across industries.
            </li>
            <li>
              <strong>Comprehensive Services:</strong> From SEO to hosting, we cover all aspects of digital marketing.
            </li>
            <li>
              <strong>Data-Driven Insights:</strong> We optimize your campaigns based on real-time data and analytics.
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h4 className="text-3xl font-bold text-blue-950">Ready to Elevate Your Digital Presence?</h4>
          <p className="text-lg text-gray-600 mt-4">
            Contact us today to discuss your digital marketing needs and explore how we can help your business thrive.
          </p>
          <Link href="/quote" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingServices;
