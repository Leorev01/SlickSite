'use client'
import Image from 'next/image';
import laptopImage from '@/public/images/laptop.png'; // Laptop Image (transparent background)
import iphoneImage from '@/public/images/iphone.png'; // iPhone Image (transparent background)
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LaptopSection() {

  return (
    <div className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-32">

        {/* Large ScreenImage Section */}
        <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0 sm:block hidden">
          {/* Container for laptop */}
          <div
            className="relative w-full lg:w-[600px] h-[350px] cursor-pointer"  // Explicit width and height
          >
            {/* Laptop Image */}
            <Image
              src={laptopImage}
              alt="Laptop Image"
              layout="fill"
              objectFit="contain" // Makes sure the laptop image scales responsively
              className="absolute z-10"
            />

            {/* Project Image Inside the Laptop */}
            <motion.div
              className="absolute sm:top-[9%] lg:left-[14.5%] md:left-[20.5%] left-[14%] z-20 w-[80%] h-[76%] max-w-[425px] max-h-[405px] overflow-hidden"
            >
              <motion.img
                src='/images/projects/sjdroofing.png'
                alt="Roofing image"
                className="w-full h-full object-cover transition-all duration-[2000ms]"
                loading="lazy"
                style={{
                  objectPosition: 'top',
                }}
                whileHover={{
                  objectPosition: 'bottom',
                }}
              />
            </motion.div>
          </div>
        </div>
 
        {/* Small Screen Image Section */}
        <div className="relative w-full lg:w-1/2  lg:mt-0 sm:hidden">
        {/* Container for iphone */}
        <div className="relative flex flex-col items-center">
          {/* Laptop Image */}
          <Image
            src={iphoneImage}
            alt="Iphone Image"
            width={300}
            height={300}
            layout="fixed" // Ensures the image stays at 400x400
            className="z-10"
          />
          <Image
            src='/images/projects/sjdroofing.png'
            alt="Roofing image"
            className="absolute top-6 left-1/2 transform -translate-x-1/2 h-[540px] object-cover z-0"
            width={255}
            height={150}
            loading="lazy"
            style={{
              objectPosition: 'top', // Ensures the top of the image is visible
            }}
          />
        </div>
      </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-blue-950">
          <h2 className="text-4xl font-bold mb-6">
            As a Service-Based Business Owner…
          </h2>
          <p className="text-lg mb-8">
            Your website plays a crucial role in generating the leads and inquiries that keep your business thriving. So, how do we make that happen? It’s simple.
            <br />
            <br />
            We start by completely redesigning your website to meet your needs, making unlimited revisions until you’re fully satisfied with the final result.
            <br />
            <br />
            Next, we optimize your site for SEO, ensuring it ranks highly on Google and attracts organic traffic without the need for costly ads. Additionally, we craft tailored, industry-specific content to engage and convert visitors.
            <br />
            <br />
            To learn more about how our websites can help your service-based business, visit our Services page.
          </p>
          <Link href='/services' className='text-purple-700 font-bold text-xl hover:text-purple-900'>
            🡢 READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
