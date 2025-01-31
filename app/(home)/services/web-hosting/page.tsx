import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

const WebHosting = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl text-blue-950 mb-2">Web Hosting</h2>
            <h3 className="text-5xl font-bold text-blue-950 mb-4">
              Reliable Web Hosting Solutions for Your Business
            </h3>
            <p className="text-lg text-gray-600">
              At Slick, we understand that reliable, secure, and high-performing
              hosting is crucial to the success of your website. That&apos;s why we
              offer a range of hosting packages to meet the unique needs of your
              business. Whether you&apos;re starting a new website or looking to
              upgrade your current hosting, we have a plan that suits your
              requirements and budget. Our team of experts is here to provide
              you with top-tier service and support, ensuring your website runs
              smoothly and securely at all times.
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
              src="/images/services/hosting.svg"
              alt="Web Hosting Services"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Hosting Packages Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-6">
            Our Hosting Packages
          </h4>

          {/* Grid for responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Starter Package */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h5 className="text-2xl font-semibold text-blue-950 mb-2">Starter</h5>
              <p className="text-xl text-blue-600 mb-4">£25 per month</p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-3">
                <li>Speedy Hosting</li>
                <li>Seamless Site Migration</li>
                <li>Enhanced Security</li>
                <li>Regular Maintenance</li>
                <li>24/7 Support</li>
                <li className="line-through">Unlimited Changes</li>
                <li className="line-through">SEO Optimised Articles</li>
                <li className="line-through">Ongoing Keyword Research</li>
              </ul>
              <Link
                href="/quote"
                className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700"
              >
                Enquire Now
              </Link>
            </div>

            {/* Popular Package */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h5 className="text-2xl font-semibold text-blue-950 mb-2">Pro</h5>
              <p className="text-xl text-blue-600 mb-4">£50 per month</p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-3">
                <li>Speedy Hosting</li>
                <li>Seamless Site Migration</li>
                <li>Enhanced Security</li>
                <li>Regular Maintenance</li>
                <li>24/7 Support</li>
                <li>Limited Changes</li>
                <li className="line-through">SEO Optimised Articles</li>
                <li className="line-through">Ongoing Keyword Research</li>
              </ul>
              <Link
                href="/quote"
                className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700"
              >
                Enquire Now
              </Link>
            </div>

            {/* Skyrocket Package */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h5 className="text-2xl font-semibold text-blue-950 mb-2">Skyrocket</h5>
              <p className="text-xl text-blue-600 mb-4">£299 per month</p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-3">
                <li>Speedy Hosting</li>
                <li>Seamless Site Migration</li>
                <li>Enhanced Security</li>
                <li>Regular Maintenance</li>
                <li>24/7 Support</li>
                <li>Unlimited Changes</li>
                <li>SEO Optimised Articles</li>
                <li>Ongoing Keyword Research</li>
              </ul>
              <Link
                href="/quote"
                className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700"
              >
                Enquire Now
              </Link>
            </div>

          </div>
        </div>


        {/* CTA Section */}
        <CTA />
      </div>
    </section>
  );
};

export default WebHosting;
