import Image from 'next/image';
import Link from 'next/link';

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
            src="/videos/landing.mp4" // Replace with your actual video link
          >
            Your browser does not support the video tag.
          </video>
          <p className='pt-3'>Watch the video to learn more</p>
        </div>

        {/* Call-to-Action Section */}
        <div className="flex flex-col items-center py-8">
          
          <Link
            href="quote"
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
        <h2 className="text-3xl font-bold text-blue-950">Don’t Overpay for a Website!</h2>
        <p className="mt-4 text-lg text-gray-700">
        Of Course, a Nice-Looking Website is Important, but it doesn’t need to cost you a fortune. At Slick, we believe in delivering  
    high-quality websites that not only look great but are also designed to grow your business—all at an affordable price.  
    Say goodbye to unnecessary expenses and hello to a website that works for you. 
        </p>
      </section>

      {/* Why Choose Slick Section */}  
      <section className="bg-gray-50 py-16 text-center">  
        <h2 className="text-3xl font-bold text-blue-950">Why Choose Slick?</h2>  
        <div className="mt-10 grid gap-8 md:grid-cols-3">  
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">  
            <div className="flex items-center gap-3">  
              <span className="text-3xl">💰</span>  
              <h3 className="text-xl font-semibold text-blue-950">Affordable Pricing</h3>  
            </div>  
            <p className="mt-3 text-gray-700">Starting at just £399, we deliver professional websites tailored to your budget without cutting corners.</p>  
          </div>  
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">  
            <div className="flex items-center gap-3">  
              <span className="text-3xl">🎨</span>  
              <h3 className="text-xl font-semibold text-blue-950">Custom Designs</h3>  
            </div>  
            <p className="mt-3 text-gray-700">Stand out from the competition with bespoke designs tailored to your brand&apos;s identity and goals.</p>  
          </div>  
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">  
            <div className="flex items-center gap-3">  
              <span className="text-3xl">📈</span>  
              <h3 className="text-xl font-semibold text-blue-950">SEO Optimized</h3>  
            </div>  
            <p className="mt-3 text-gray-700">Our websites are crafted to boost your search rankings, helping you attract more customers online.</p>  
          </div>  
        </div>  
      </section>  
 


      {/* Additional CTA Section */}  
      <section className="bg-blue-950 text-center py-16 text-white">  
        <div className="max-w-4xl mx-auto px-6">  
          <h2 className="text-4xl font-semibold">Ready to Take Your Business Online?</h2>  
          <p className="mt-4 text-lg">  
            Partner with Slick to build a website that works as hard as you do.  
            Start attracting leads, boosting inquiries, and driving your business forward today.  
          </p>  
          <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4">  
            <Link  
              href="/quote"  
              className="px-8 py-4 bg-yellow-500 text-blue-950 font-bold rounded-lg hover:bg-yellow-600 transition duration-300 text-xl"  
            >  
              Get a Free Quote  
            </Link>  
            <Link  
              href="/work"  
              className="px-8 py-4 border border-yellow-500 text-yellow-500 font-bold rounded-lg hover:bg-yellow-500 hover:text-blue-950 transition duration-300 text-xl"  
            >  
              View Our Work  
            </Link>  
          </div>  
        </div>  
        <div className="mt-12">  
          <Image  
            src="/images/trustpilot_white.png"  
            alt="TrustPilot Logo"  
            width={200}  
            height={200}  
            className="mx-auto hover:scale-105 transition duration-300"  
          />  
          <p className="mt-4 text-sm text-gray-400">Check out our reviews on TrustPilot!</p>  
        </div>  
      </section>  


      {/* Footer Section */}
    </section>
  );
};

export default LandingPage;
