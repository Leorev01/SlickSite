import React from "react";
import Image from "next/image";
import Link from "next/link";

const GraphicDesign = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl text-blue-950 mb-2">Graphic Design</h2>
            <h3 className="text-5xl font-bold text-blue-950 mb-4">
              Graphic Design Services
            </h3>
            <p className="text-lg text-gray-600">
              Welcome to Snapi, where visual identity meets unparalleled creativity. As a leading web development company, 
              we understand the significance of impactful graphic design in making your brand stand out. Explore our design 
              services, where we specialise in crafting memorable logos and eye-catching social media graphics that resonate 
              with your audience.
            </p>
            <Link href="/quote" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700">
                Get a Free Quote Today
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/images/services/graphic-design.svg"
              alt="Graphic Design Services"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Logo Design Section */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            Logo Design: Elevating Your Brand Identity
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            A logo is the visual cornerstone of your brand – it’s the first impression that lasts. At Snapi, our design 
            service is dedicated to creating unique and memorable logos that encapsulate the essence of your business. 
            Our process begins with a thorough understanding of your brand values, mission, and target audience, ensuring 
            that the final design aligns seamlessly with your identity.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            What sets us apart is our commitment to providing multiple logo options. We believe in collaboration, and by 
            presenting you with various concepts, we ensure that you have the freedom to choose a design that resonates 
            with your vision. Additionally, we offer unlimited changes and alterations, allowing you to refine the chosen 
            design until it perfectly reflects your brand identity.
          </p>
          <p className="text-lg text-gray-600">
            Contact us to discuss how our design service can elevate your brand’s visual identity.
          </p>
        </div>

        {/* Social Media Design Section */}
        <div>
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            Social Media Graphic Design: Captivating Your Audience
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            In the dynamic world of social media, eye-catching visuals are paramount. Our Social Media Design service is 
            tailored to create compelling graphics that not only grab attention but also tell your brand story effectively. 
            From engaging Facebook posts to stunning Instagram visuals, we have your social media presence covered.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Similar to our logo process, we provide multiple options for social media graphics. We believe in giving you 
            the flexibility to choose the design that aligns with your brand aesthetics. Moreover, our commitment to 
            client satisfaction ensures unlimited changes and alterations, allowing you to fine-tune the graphics until 
            they match your vision.
          </p>
          <p className="text-lg text-gray-600">
            Explore our <Link href="/work" className="text-blue-600 hover:underline">Design Portfolio</Link> 
            to see how we’ve transformed social media presence for clients across diverse industries.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-16 text-center">
          <h3 className="text-4xl font-bold text-blue-950 mb-6">Why Choose Snapi for Graphic Design?</h3>
          <ul className="text-lg text-gray-600 space-y-4">
            <li>
              <strong>Creativity Meets Strategy:</strong> Our design process combines creativity with a strategic approach, 
              ensuring that your visual elements align with your brand’s overall objectives.
            </li>
            <li>
              <strong>Multiple Options, Unlimited Changes:</strong> We provide you with multiple design options and unlimited 
              alterations, giving you the freedom to choose and refine until you are completely satisfied.
            </li>
            <li>
              <strong>Tailored Solutions:</strong> Every brand is unique, and our design services are tailored to meet the 
              specific needs and aspirations of your business.
            </li>
            <li>
              <strong>Proven Expertise:</strong> Visit our <Link href="/work" className="text-blue-600 hover:underline">Previous Works</Link> 
              page to witness the impact our designs have had on businesses like yours.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;
