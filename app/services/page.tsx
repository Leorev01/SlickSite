import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/CTA'

export default function ServicesPage() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 mt-20">

        {/* Introduction Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">What We Offer</h2>
          <h3 className="text-5xl font-semibold text-blue-950 mb-6">Our Services</h3>
          <p className="text-lg text-gray-600 mx-auto">
            Here at Snapi, we offer a range of custom web development solutions to meet your unique needs. Whether you’re looking for a complete website redesign, a new e-commerce platform, or an SEO redesign, we can help bring your vision to life.
          </p>
        </div>

        {/* First Row of 3 Service Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Web Design Section */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
              <h4 className="text-2xl font-semibold text-white z-10">Web Design</h4>
            </div>
            <Image
              src="/images/services/spwebdesign.png" 
              alt="Web Design"
              className="w-full h-32 object-cover"
              width={100}
              height={100}
            />
          </div>

          {/* Web Development Section */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
              <h4 className="text-2xl font-semibold text-white z-10">Web Development</h4>
            </div>
            <Image 
              src="/images/services/spwebdev.png" 
              alt="Web Development"
              className="w-full h-32 object-cover"
              width={100}
              height={100}
            />
          </div>

          {/* Digital Marketing Section */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
              <h4 className="text-2xl font-semibold text-white z-10">Digital Marketing</h4>
            </div>
            <Image 
              src="/images/services/spseo.png" 
              alt="Digital Marketing"
              className="w-full h-32 object-cover"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* General Description Section */}
        <div className="mb-16">
          <p className="text-lg text-gray-600 mx-auto">
          Alongside our web development services, we also specialize in search engine optimization (SEO) to enhance your website's visibility and drive more traffic. Our SEO strategies are customized to align with your business objectives, including keyword research, on-page optimization, link building, and more.
          <br/><br/>
          Additionally, we provide content creation services designed to position your brand as an industry leader. From high-quality blog posts to informative articles, we craft content that engages your audience and boosts website traffic.
          <br/><br/>
          We also offer reliable web hosting solutions to ensure your website operates seamlessly. Our hosting plans are flexible and tailored to meet your specific needs, with features like regular backups, security updates, and 24/7 technical support.
          <br/><br/>
          At Snapi, we're dedicated to delivering exceptional results and outstanding customer service. Get in touch with us today to learn how we can elevate your online presence.
          </p>
        </div>

        {/* Second Row of 3 Service Sections (identical to the first) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Design Section */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
              <h4 className="text-2xl font-semibold text-white z-10">Web Design</h4>
            </div>
            <img 
              src="/images/services/web-design.jpg" 
              alt="Web Design"
              className="w-full h-32 object-cover"
            />
          </div>

          {/* Web Development Section */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
              <h4 className="text-2xl font-semibold text-white z-10">Web Development</h4>
            </div>
            <img 
              src="/images/services/web-development.jpg" 
              alt="Web Development"
              className="w-full h-32 object-cover"
            />
          </div>

          {/* Digital Marketing Section */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
              <h4 className="text-2xl font-semibold text-white z-10">Digital Marketing</h4>
            </div>
            <img 
              src="/images/services/digital-marketing.jpg" 
              alt="Digital Marketing"
              className="w-full h-32 object-cover"
            />
          </div>
        </div>
        <CTA />
      </div>
    </section>
  );
}
