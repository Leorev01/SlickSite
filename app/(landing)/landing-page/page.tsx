'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import arrow icons
import QuoteDialog from '../components/QuoteDialog';
import Link from 'next/link';
export default function LandingPage() {

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      carouselRef.current.scrollTo({
        left: scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      carouselRef.current.scrollTo({
        left: scrollLeft - clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center pt-32 pb-72 px-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <Image
            src="/images/trustpilot_white.png"
            alt="Trustpilot Logo"
            width={100}
            height={100}
            className="mx-auto mb-5 transition duration-300 cursor-pointer"
          />
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4" 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get A Professional Websites from <span className="text-yellow-300">Just £399</span>
          <br/>And JumpStart Your Business
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Affordable, fast, and tailored to your business needs. Let’s build your dream website today!
        </motion.p>
        <QuoteDialog>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl">
            Apply In 2 Minutes
          </Button>
        </QuoteDialog>
      </section>

      {/* Carousel Section */}
      <section className="py-20 px-5 bg-gray-50 relative z-20">

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto -mt-72">
          {/* Left Arrow */}
          <button
            onClick={scrollToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 p-3 rounded-full shadow-lg z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Carousel Wrapper */}
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {[
              '/images/projects/photographer.png',
              '/images/projects/sjdroofing.png',
              '/images/projects/travelblog.png',
              '/images/projects/webdev.png',
              '/images/projects/surgemines.png',
              '/images/projects/plasterer.png',
            ].map((image, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 w-full snap-start relative"
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {/* Image Container */}
                <div className="h-[35rem] overflow-hidden relative">
                  <img 
                    src={image} 
                    alt={`Project ${index + 1}`} 
                    className="w-full h-full object-cover object-top rounded-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 p-3 rounded-full shadow-lg z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </section>
      
      {/* New Section: Why a Website is Critical */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Image and Text Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image on the Left */}
            <motion.div 
              className="w-full h-96 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/computer.jpg"
                alt="Professional Website"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text on the Right */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold" 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A Professional Website Can Transform Your Business
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                With a professional website, potential clients are <span className="font-bold">76% more likely</span> to choose your business.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                That’s right—a website isn’t just a luxury; it’s a necessity. It builds trust, establishes credibility, and helps you stand out in a crowded market.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                But here’s the catch: hiring a web agency can cost you anywhere from $5,000 to $20,000. For many entrepreneurs, that’s simply out of reach.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                That’s where we come in. We’ve helped thousands of business owners get a professional website—without breaking the bank. With our affordable solutions, you can have a stunning website for your business starting at just £399.
              </motion.p>
              <QuoteDialog>
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-xl">
                  Apply In 2 Minutes
                </Button>
              </QuoteDialog>
            </motion.div>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { title: 'Customer Satisfaction', value: '100%' },
              { title: 'Average Agency Cost', value: '£3,698' },
              { title: 'Our Starting Price', value: '£399' },
            ].map((stat, index) => (
              <motion.div 
                key={stat.title} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border border-gray-200 rounded-xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    {/* Value */}
                    <h3 className="text-4xl font-bold text-blue-600 mb-4">
                      {stat.value}
                    </h3>
                    {/* Title */}
                    <p className="text-lg text-gray-700 font-semibold">
                      {stat.title}
                    </p>
                    {/* Decorative Line */}
                    <div className="w-16 h-1 bg-blue-400 mx-auto mt-6 rounded-full"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New Section: Secret to Success */}
      <section className="py-20 px-5 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We&apos;re Going to Let You in on a Huge Secret...
          </motion.h2>

          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            If you don’t have a professional website, your business is more than 80% less likely to succeed.
          </motion.p>

          {/* Key Statistic */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg inline-block mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl font-bold text-gray-800">
              Businesses without a professional website fail at <span className="text-red-600">8x the normal rate</span>.
            </p>
          </motion.div>

          {/* Call-to-Action Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <QuoteDialog>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl">
                Apply to Get Your Website Built by Professionals — From Just 399!
              </Button>
            </QuoteDialog>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hear from the entrepreneurs who’ve transformed their businesses with us.
          </motion.p>
          <Image
            src="/images/trustpilot.png"
            alt="Trustpilot Logo"
            width={300}
            height={300}
            className="mx-auto mb-12"
          />
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Shane D',
                role: 'SJD Roofing',
                testimonial: 'The team was incredibly professional and delivered exactly what we needed. Truly a game-changer!',
                avatar: 'https://user-images.trustpilot.com/67385f14f51377b07c221efb/73x73.png',
              },
              {
                name: 'Alawi S',
                role: 'Surgemines',
                testimonial: 'Fast, reliable, and affordable. Our new website has already boosted our sales by 30%!',
                avatar: 'https://user-images.trustpilot.com/67351fd8eb5e089d74a2bbef/73x73.png',
              },
              {
                name: 'Tishaun W',
                role: 'Tishaun Photography',
                testimonial: 'Amazing service! Our website looks stunning and performs even better. Highly recommend!',
                avatar: 'https://user-images.trustpilot.com/6479a4b13971b70017320755/73x73.png',
              },
            ].map((testimonial, index) => (
              <motion.div 
                key={testimonial.name} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {/* Testimonial Content */}
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  {/* Name and Role */}
                  <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                  {/* Testimonial Text */}
                  <p className="text-gray-600 italic">
                    &quot;{testimonial.testimonial}&quot;
                  </p>
                  {/* Rating */}
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <QuoteDialog>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-xl mt-8">
            Apply to Get Your Website Built by Professionals — From Just 399!
            </Button>
          </QuoteDialog>
        </div>
      </section>
      
      {/* New Section: Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Our Websites?</h2>
          <p className="text-gray-600 mt-2">Fast, secure, and beautifully designed for success.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            
            <div className="group bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-50">
              <img src="https://cdn-icons-png.flaticon.com/512/8488/8488732.png" alt="Mobile Optimized" className="w-12 mx-auto"/>
              <h3 className="text-xl font-semibold mt-4">Mobile Optimized</h3>
              <p className="text-gray-600 mt-2">Over 50% of traffic is mobile. We make sure your site looks perfect on any screen.</p>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-50">
              <img src="https://cdn-icons-png.flaticon.com/512/922/922699.png" alt="Stunning Designs" className="w-12 mx-auto"/>
              <h3 className="text-xl font-semibold mt-4">Stunning Designs</h3>
              <p className="text-gray-600 mt-2">We use the latest cutting-edge designs built by expert graphic designers.</p>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-50">
              <img src="https://cdn-icons-png.flaticon.com/512/1356/1356479.png" alt="SEO Ready" className="w-12 mx-auto"/>
              <h3 className="text-xl font-semibold mt-4">SEO Ready</h3>
              <p className="text-gray-600 mt-2">Your site will be fully optimized to rank high on Google and other search engines.</p>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-50">
              <img src="https://cdn-icons-png.flaticon.com/512/1455/1455324.png" alt="Maximum Speed" className="w-12 mx-auto"/>
              <h3 className="text-xl font-semibold mt-4">Maximum Speed</h3>
              <p className="text-gray-600 mt-2">We ensure your visitors never wait longer than they have to.</p>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-50">
              <img src="https://cdn-icons-png.flaticon.com/512/2592/2592317.png" alt="Security" className="w-12 mx-auto"/>
              <h3 className="text-xl font-semibold mt-4">Cutting-Edge Security</h3>
              <p className="text-gray-600 mt-2">Automated daily backups and top-tier security features for protection.</p>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-50">
              <img src="https://cdn-icons-png.flaticon.com/512/16534/16534273.png" alt="Easy Customization" className="w-12 mx-auto"/>
              <h3 className="text-xl font-semibold mt-4">Easily Customizable</h3>
              <p className="text-gray-600 mt-2">We’ll show you how to edit your own site, so you never need a developer.</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* New Section: Our Work */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Take a Look at Some of Our Work</h2>
          <p className="text-white mt-2">Explore our success stories and see full-size examples of websites we&apos;ve built for businesses like yours.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Link href='/landing-page/projects' className="group bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="/images/projects/sjdroofing.png" alt="SJD Roofing" className="w-full h-64 object-cover object-top"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold">SJD Roofing</h3>
                <p className="text-gray-600">See full-size example websites</p>
              </div>
            </Link>
            <Link href='/landing-page/projects' className="group bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="/images/projects/travelblog.png" alt="Travel Crush" className="w-full h-64 object-cover object-top"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Travel Crush</h3>
                <p className="text-gray-600">See full-size example websites</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Left Column (Text) */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
              Why We Do This
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Unlike many agencies, we charge a <strong>minimum of £399</strong> for professional, high-quality websites. Here’s why:
            </p>
            <p className="text-gray-600 text-lg mb-4">
              This is our way of ensuring that your investment leads to measurable results. Our goal is to build long-term relationships with businesses, so as your company grows, we can continue providing you with top-tier digital solutions.
            </p>
            <p className="text-gray-600 text-lg">
              Over 95% of our clients have been incredibly satisfied with the results, and many return for more services or refer us to others.
            </p>
          </div>

          {/* Right Column (Image - Receipt) */}
          <div className="md:w-1/2 text-center">
            <div className="bg-white p-6 shadow-lg rounded-lg max-w-xs mx-auto md:max-w-md">
              <img src="https://your-image-url.com" alt="Receipt showing £399 after discount" className="w-full rounded-lg shadow-md mb-4" />
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-800 mb-2">Total: £3999</p>
                <p className="text-sm text-gray-500 line-through">Original Price: £3999</p>
                <p className="text-xl font-semibold text-green-600 mt-2">Discounted Price: £399</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* New Section: We Won't Charge You (Adjusted for Paid Services) */}
      <section className="py-20 px-5 bg-white">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-center" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Affordable, High-Quality Websites
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl mb-6 text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          We build professional websites that other agencies charge thousands for, starting from just £399.
        </motion.p>
        <div className="text-center">
        <QuoteDialog>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl">
            Apply In 2 Minutes
          </Button>
        </QuoteDialog>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-5 bg-gray-100">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-center" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'John Doe', testimonial: 'Amazing service! Our website looks stunning and performs even better.' },
            { name: 'Jane Smith', testimonial: 'Highly professional team. They delivered exactly what we needed.' },
            { name: 'Mike Johnson', testimonial: 'Fast and reliable. Highly recommend their web development services.' },
          ].map((testimonial, index) => (
            <motion.div 
              key={testimonial.name} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="text-gray-600 italic">&quot;{testimonial.testimonial}&quot;</p>
                  <p className="mt-4 font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-20 px-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your Online Presence?
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl mb-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Contact us today for a free consultation!
        </motion.p>
        <QuoteDialog>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl">
            Apply In 2 Minutes
          </Button>
        </QuoteDialog>
      </section>
    </div>
  );
}