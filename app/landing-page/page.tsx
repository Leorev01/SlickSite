import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

const LandingPage = () => {
  return (
    <section className="overflow-hidden">
      {/* Main Caption Section */}
      <section className="bg-white text-center py-12 px-6">
        <h1 className="text-4xl font-bold text-blue-950">
          Construction/Trade websites from as little as £399
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Affordable, high-quality websites for your business. Get started today!
        </p>
      </section>

      {/* Features List Section */}
      <section className="text-start pb-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            <li className="text-xl font-medium text-blue-950 flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="30"
              height="30"
            >
              <circle cx="50" cy="50" r="50" fill="#007BFF" />
              
              <path
                d="M30 50 L45 65 L70 35"
                stroke="white"
                stroke-width="8"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
              Fully SEO Optimised Website
            </li>
            <li className="text-xl font-medium text-blue-950 flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="30"
              height="30"
            >
              <circle cx="50" cy="50" r="50" fill="#007BFF" />
              
              <path
                d="M30 50 L45 65 L70 35"
                stroke="white"
                stroke-width="8"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
              Designed and launched within 2 weeks
            </li>
            <li className="text-xl font-medium text-blue-950 flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="30"
              height="30"
            >
              <circle cx="50" cy="50" r="50" fill="#007BFF" />
              
              <path
                d="M30 50 L45 65 L70 35"
                stroke="white"
                stroke-width="8"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
              Specifically designed to convert leads
            </li>
          </ul>
        </div>
      </section>

      {/* Video Section */}
      <section className="text-center py-8">
        <div className="max-w-4xl mx-auto">
          <video
            width="100%"
            controls
            className="rounded-lg shadow-lg"
            src="/videos/landing2.mp4" // Replace with your actual video link
          >
            Your browser does not support the video tag.
          </video>
          <p className='pt-3'>Watch the video to learn more</p>
        </div>

        {/* Call-to-Action Section */}
        <div className="flex flex-col items-center py-8">
          
          <Link
            href="#contact"
            type="button"
            className="text-center py-8 px-6 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-300 md:w-[55rem] w-full"
          >
            <h4 className="text-3xl font-bold">Get a Price Today</h4>
            <p className="mt-2">Book In A 15 Minute Phone Call</p>
          </Link>

          <Link href="portfolio">
            <Image
              src="/images/trustpilot.png"
              alt="Trustpilot Logo"
              width={300}
              height={300}
              className="mx-auto hover:scale-105 transition duration-300 cursor-pointer"
            />
          </Link>
        </div>
      </section>

      {/* "Don’t Overpay for a Website" Section */}
      <section className="text-center py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-950">Don&apos;t Overpay for a Website!</h2>
        <p className="mt-4 md:text-2xl text-lg text-gray-700">
        We all know that having a professional, well-designed website is crucial for growing your business, generating leads, and showcasing your work.
        <br/><br/>
        But here&apos;s the thing—it doesn&apos;t have to cost you thousands of pounds with an expensive agency.
        <br/><br/>
        At Slick Websites, we specialize in creating fast, affordable, and high-converting websites for the home improvement and trade industries.
        <br/><br/>
        We build websites that don&apos;t just look great—they actually work to turn clicks into customers. Plus, we do it all without charging a fortune.
        <br/><br/>
        If you&apos;re looking for an affordable, high-performing website for your trade business, book a call below, and we&apos;ll provide you with a personalized price!
        </p>
        <div className="flex flex-col items-center py-8">
          <Link
              href="#contact"
              type="button"
              className="text-center py-8 px-6 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-300 md:w-[55rem] w-full"
            >
              <h4 className="text-3xl font-bold">Get a Price Today</h4>
              <p className="mt-2">Book In A 15 Minute Phone Call</p>
          </Link>
        </div>
      </section>

      {/* Portfolio Section */}  
    <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-950 text-center">Our Portfolio...</h2>
        <div className="mt-8 space-y-8 max-w-4xl mx-auto">
          {/* Review 1 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0">
              <video
                src="/videos/sjdroofing.mp4" // Replace with your actual video path
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="rounded-lg object-cover w-full mx-auto video-no-controls"
              />
            </div>

            <div className="md:ml-6 text-center md:text-left">
              <p>⭐⭐⭐⭐⭐</p>
              <p className="font-bold text-xl">Shane - SJD Roofing</p>
              <p className="mt-2 text-gray-700 md:text-xl">
                &quot;The team at Slick is incredibly efficient and completed my website on time, even when we faced a major issue
                with our old hosting provider. They turned it around quickly and even took over our hosting seamlessly. I highly
                recommend them!&quot;
              </p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 w-full md:w-1/2 h-60 overflow-hidden mb-4 md:mb-0">
              <Image
                src="/images/projects/surgemines.png"
                alt="Surgemines"
                width={800}
                height={600}
                className="w-full h-full object-cover object-top rounded-md mx-auto"
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <p>⭐⭐⭐⭐⭐</p>
              <p className="font-bold text-xl">Alawi - Surgemines</p>
              <p className="mt-2 text-gray-700 md:text-xl">
                &quot;Slick transformed my outdated self-built site into a professional, modern website. They integrated my social
                media, Trustpilot, and everything else seamlessly. Excellent job all around!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <h4 className='text-4xl font-bold text-blue-950 text-center py-10' id='contact'>Book In Your Call</h4>
      <AppointmentForm />
    </section>
  );
};

export default LandingPage;
