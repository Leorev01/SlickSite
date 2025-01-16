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
            <li className="text-xl font-medium text-blue-950">
              Fully SEO Optimised Website
            </li>
            <li className="text-xl font-medium text-blue-950">
              Designed and launched within 2 weeks
            </li>
            <li className="text-xl font-medium text-blue-950">
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
        </div>

        {/* Call-to-Action Section */}
        <div className="flex flex-col items-center py-16">
          <p>Watch the video to learn more</p>
          <Link
            href="quote"
            type="button"
            className="text-center py-8 px-6 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-300"
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
              className="mx-auto"
            />
          </Link>
        </div>
      </section>

      {/* Trustpilot Section */}
      <section className="text-center py-16 bg-gray-50"></section>

      {/* "Don’t Overpay for a Website" Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-blue-950">Don’t Overpay for a Website!</h2>
        <p className="mt-4 text-lg text-gray-700">
          At Slick, we offer high-quality websites at prices that make sense for small businesses.
          No hidden fees, no gimmicks. Just the best value for your investment.
        </p>
      </section>

      {/* Features Section - Additional Section */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-950">Why Choose Slick?</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-950">Affordable Pricing</h3>
            <p className="mt-3 text-gray-700">We offer affordable rates without compromising on quality.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-950">Custom Designs</h3>
            <p className="mt-3 text-gray-700">Your website is built to match your brand and vision.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-950">SEO Optimized</h3>
            <p className="mt-3 text-gray-700">Our websites are designed to rank well on search engines.</p>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="bg-blue-950 text-center py-16 text-white">
        <h2 className="text-3xl font-semibold">Get Started Today!</h2>
        <p className="mt-4 text-lg">
          Start building your dream website with Slick. Fast, affordable, and reliable.
        </p>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-blue-950 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
          Get Started
        </button>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Slick Site. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-4 text-lg">
              Privacy Policy
            </a>
            <a href="#" className="mx-4 text-lg">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default LandingPage;
