import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

const SEOServices = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl text-blue-950 mb-2">SEO Services</h2>
            <h3 className="text-5xl font-bold text-blue-950 mb-4">
              Welcome to Slick: Elevate Your Online Presence
            </h3>
            <p className="text-lg text-gray-600">
              Welcome to Slick, your gateway to a robust online presence through
              our comprehensive SEO services. As a premier web development
              company, we understand that a well-optimised website is key to
              achieving visibility, attracting organic traffic, and ultimately,
              driving success in the digital landscape. Explore our dedicated
              SEO offerings today to begin skyrocketing your website traffic.
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
              src="/images/services/seo.svg"
              alt="SEO Services"
              className="rounded-lg shadow-lg"
              width={400}
              height={300}
            />
          </div>
        </div>

        {/* Technical and On-Page SEO Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            Technical and On-Page SEO: The Bedrock of Digital Success
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            At Slick, we believe that a website’s success begins with a strong
            foundation of Technical and On-Page SEO. Our expert team ensures
            that every website we build is equipped with the latest technical
            optimizations to enhance performance and user experience. From
            website speed to mobile responsiveness, we leave no stone unturned.
          </p>
          <p className="text-lg text-gray-600">
            On-page SEO is an integral part of our development process,
            ensuring that your website’s content is strategically crafted to
            align with search engine algorithms. From keyword optimization to
            meta tags, we employ industry best practices to boost your website’s
            visibility on search engine results pages (SERPs).
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Contact us to discuss how our Technical and On-Page SEO services can
            elevate your website’s performance and visibility.
          </p>
        </div>

        {/* Dedicated SEO Location Pages Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            Dedicated SEO Location Pages: Dominate Your Local Market
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            For businesses targeting local audiences, our dedicated SEO Location
            Pages are the secret sauce to dominating local search results. We
            create strategically crafted pages that not only showcase your
            products or services but also geographically target specific areas.
            This ensures that your business appears prominently in local
            searches, driving relevant traffic to your website.
          </p>
          <p className="text-lg text-gray-600">
            Whether you have a single storefront or multiple locations, our SEO
            Location Pages are designed to enhance your local online presence
            and attract customers in your target areas.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Explore our Previous Works to see how our dedicated Location Pages
            have successfully boosted the local visibility of businesses like
            yours.
          </p>
        </div>

        {/* SEO Optimized Articles Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            SEO Optimized Articles: Fuel for Traffic Growth
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            Our SEO Optimised Articles service is designed to propel your
            website’s traffic to new heights. Our team of content creators
            crafts engaging and relevant articles tailored to your industry.
            These articles not only serve as valuable resources for your
            audience but also contribute to improved search engine rankings.
          </p>
          <p className="text-lg text-gray-600">
            From industry insights to how-to guides, our articles are
            strategically aligned with search engine algorithms, ensuring
            increased visibility and traffic for your website.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Ready to boost your website traffic with compelling content? Explore
            our Blog to see examples of our SEO-Optimized Articles or contact us
            to discuss your content strategy.
          </p>
        </div>

        {/* CTA Section */}
        <CTA />
      </div>
    </section>
  );
};

export default SEOServices;
