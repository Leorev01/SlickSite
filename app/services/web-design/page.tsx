import React from "react";
import Image from "next/image";
import Link from "next/link";
import graphicImage from "@/public/images/services/graphic-design.svg";
import webImage from "@/public/images/services/web-design2.svg";

const DesignServices = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Page Header */}
        <h2 className="text-2xl text-blue-950 mb-4">Custom Digital Design</h2>
        <h3 className="text-5xl font-bold text-blue-950 mb-6">Design Services</h3>
        <p className="text-lg text-gray-600 mb-12">
          We turn digital dreams into stunning realities through our exceptional custom design services. 
          As a leading web development company, we specialize in two main areas that elevate your online 
          presence and captivate your audience: Web Design and Graphic Design.
        </p>

        {/* Design Services Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Web Design */}
          <Link href='/' className="flex flex-col items-center hover:mt-[-1rem] transform duration-300">
            <Image
              src={webImage}
              alt="Custom Web Design"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
            <h4 className="text-3xl font-bold text-blue-950 mt-6">Custom Web Design</h4>
            <p className="text-lg text-gray-600 mt-4">
              In today&apos;s fast-paced digital landscape, your website is the first impression of your business. 
              Our custom web design services ensure your site is visually stunning, user-friendly, and optimized 
              for all devices. We focus on crafting modern, conversion-driven designs tailored to your unique brand identity.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Explore our 
              <Link href="/work" className="text-blue-600 hover:underline">
                Web Design Portfolio
              </Link> 
              to see how we've brought clients' visions to life through innovative designs.
            </p>
          </Link>

          {/* Graphic Design */}
          <Link href='/services/graphic-design' className="flex flex-col items-center hover:mt-[-1rem] transform duration-300">
            <Image
              src={graphicImage}
              alt="Custom Graphic Design"
              className="rounded-lg shadow-lg"
              width={400}
              height={300}
            />
            <h4 className="text-3xl font-bold text-blue-950 mt-6">Custom Graphic Design</h4>
            <p className="text-lg text-gray-600 mt-4">
              Your brand identity is essential to creating a memorable impression. Our custom graphic design services 
              include everything from logos to social media banners, ensuring your visual communication is cohesive, 
              professional, and resonates with your target audience.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Check out our
              <Link href="/portfolio/graphic-design" className="text-blue-600 hover:underline">
                Graphic Design Portfolio
              </Link> 
              to discover how we've helped businesses stand out with impactful designs.
            </p>
          </Link>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-4xl font-bold text-blue-950 mb-6">Why Choose Us?</h3>
          <ul className="text-lg text-gray-600 space-y-4">
            <li>
              <strong>Expertise:</strong> Our team of experienced designers excels at creating impactful digital solutions tailored to your goals.
            </li>
            <li>
              <strong>Versatility:</strong> From web design to graphics, we offer a comprehensive suite of services to meet all your needs.
            </li>
            <li>
              <strong>Innovation:</strong> We stay ahead of design trends to bring fresh, cutting-edge ideas to every project.
            </li>
            <li>
              <strong>Client-Centric Approach:</strong> Your satisfaction is our top priority. We work closely with you to ensure exceptional results.
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h4 className="text-3xl font-bold text-blue-950">Ready to elevate your digital presence?</h4>
          <p className="text-lg text-gray-600 mt-4">
            Contact us today to discuss your project or browse our detailed portfolios to learn more about our work.
          </p>
          <Link href="/quote" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700">
              Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DesignServices;
