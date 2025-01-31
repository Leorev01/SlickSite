import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

const GraphicDesign = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl text-blue-950 mb-2">Graphic Design</h2>
            <h3 className="text-5xl font-bold text-blue-950 mb-4">
              Expert Graphic Design Services
            </h3>
            <p className="text-lg text-gray-600">
              Welcome to Slick, where creativity and strategy merge to build unforgettable brand visuals. As experts in web 
              development and graphic design, we focus on creating designs that leave a lasting impression. Our services are 
              tailored to deliver bespoke logos and stunning social media visuals that connect with your audience and reflect 
              your unique brand identity.
            </p>
            <Link href="/quote" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700">
              Request a Free Quote Today
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
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
            Logo Design: Build a Strong Brand Identity
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            A logo is the foundation of your brand&apos;s visual identity – a symbol that defines who you are. At Slick, we craft 
            logos that capture your brand&apos;s story, values, and mission. Each design begins with a deep understanding of your 
            business, ensuring the final product perfectly represents your brand.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            We provide multiple logo concepts to choose from and work closely with you to refine the design. Unlimited 
            revisions are included to guarantee your satisfaction and create a logo that truly reflects your brand&apos;s vision.
          </p>
          <p className="text-lg text-gray-600">
            Let’s discuss how we can enhance your brand identity through a custom logo design that leaves a memorable impression.
          </p>
        </div>

        {/* Social Media Design Section */}
        <div>
          <h4 className="text-3xl font-bold text-blue-950 mb-4">
            Social Media Graphics: Engage and Inspire
          </h4>
          <p className="text-lg text-gray-600 mb-4">
            In today&apos;s fast-paced digital world, impactful social media visuals are essential for engagement. Our social media 
            graphic design services are tailored to create visually striking content that tells your brand&apos;s story and connects 
            with your audience. Whether it&apos;s Instagram posts, Facebook banners, or Twitter graphics, we&apos;ve got you covered.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Similar to our logo design process, we offer multiple design options for your social media needs. You&apos;ll have the 
            opportunity to choose and refine the graphics until they align perfectly with your brand identity and marketing goals.
          </p>
          <p className="text-lg text-gray-600">
            Check out our <Link href="/work" className="text-blue-600 hover:underline">Design Portfolio</Link> to see how we&apos;ve 
            helped clients elevate their social media presence with compelling visuals.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-16 text-center">
          <h3 className="text-4xl font-bold text-blue-950 mb-6">Why Choose Slick for Graphic Design?</h3>
          <ul className="text-lg text-gray-600 space-y-4">
            <li>
              <strong>Creativity Meets Strategy:</strong> Our designs combine artistic creativity with a strategic approach 
              to align with your brand goals and messaging.
            </li>
            <li>
              <strong>Flexibility and Collaboration:</strong> We offer multiple design concepts and unlimited revisions, 
              ensuring you get the perfect design for your needs.
            </li>
            <li>
              <strong>Tailored Solutions:</strong> We customise every design to reflect your unique brand personality and 
              appeal to your target audience.
            </li>
            <li>
              <strong>Proven Expertise:</strong> Explore our <Link href="/work" className="text-blue-600 hover:underline">Previous Work</Link> to see how our designs have driven success for businesses across diverse industries.
            </li>
          </ul>
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default GraphicDesign;
