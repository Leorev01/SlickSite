'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic'; // For dynamic imports

// Dynamically import QuoteDialog to reduce initial bundle size
const QuoteDialog = dynamic(() => import('../components/QuoteDialog'), {
  ssr: false,
});

export default function LandingPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const newScrollLeft = scrollLeft + clientWidth;
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
      setCurrentSlide((prev) => (prev + 1) % 6); // 6 is the number of slides
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const newScrollLeft = scrollLeft - clientWidth;
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
      setCurrentSlide((prev) => (prev - 1 + 6) % 6); // 6 is the number of slides
    }
  };

  const goToSlide = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
      setCurrentSlide(index);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center pt-20 md:pt-32 pb-40 md:pb-72 px-4 md:px-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <Image
          src="/images/trustpilot_white.png"
          alt="Trustpilot Logo"
          width={100}
          height={100}
          className="mx-auto mb-5"
          loading="lazy" // Lazy load non-critical image
        />
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get A Professional Website for <span className="text-yellow-300">Free</span>
          <br className="hidden md:block" /> And JumpStart Your Business
        </motion.h1>
        <motion.p
          className="text-md md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Affordable, fast, and tailored to your business needs. Let’s build your dream website today—completely free!
        </motion.p>
        <QuoteDialog>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg md:text-xl py-4 md:py-6 px-8 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Apply In 2 Minutes
          </Button>
        </QuoteDialog>
      </section>

      {/* Carousel Section */}
      <section className="py-10 md:py-20 px-4 md:px-5 bg-gray-50 relative z-20">
        <div className="relative w-full max-w-6xl mx-auto -mt-32 md:-mt-72">
          {/* Left Arrow */}
          <button
            onClick={scrollToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 p-2 md:p-3 rounded-full shadow-lg z-10"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
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
                <div className="h-[20rem] md:h-[35rem] overflow-hidden relative">
                  <Image
                    src={image}
                    alt={`Project ${index + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover object-top rounded-lg md:rounded-2xl"
                    loading="lazy" // Lazy load images
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 p-2 md:p-3 rounded-full shadow-lg z-10"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Why a Website is Critical Section */}
      <section className="py-10 md:py-20 px-4 md:px-5 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Image and Text Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image on the Left */}
            <motion.div
              className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/computer.jpg"
                alt="Professional Website"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy" // Lazy load image
              />
            </motion.div>

            {/* Text on the Right */}
            <motion.div
              className="space-y-4 md:space-y-6 flex flex-col items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="text-2xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A Professional Website Can Transform Your Business
              </motion.h2>
              <motion.p
                className="text-md md:text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                With a professional website, potential clients are <span className="font-bold">76% more likely</span> to choose your business.
              </motion.p>
              <motion.p
                className="text-md md:text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                That’s right—a website isn’t just a luxury; it’s a necessity. It builds trust, establishes credibility, and helps you stand out in a crowded market.
              </motion.p>
              <motion.p
                className="text-md md:text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                But here’s the catch: hiring a web agency can cost you anywhere from $5,000 to $20,000. For many entrepreneurs, that’s simply out of reach.
              </motion.p>
              <motion.p
                className="text-md md:text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                That’s where we come in. We’ve helped thousands of business owners get a professional website—without breaking the bank. With our free solutions, you can have a stunning website for your business at no cost.
              </motion.p>
              
              {/* Center the button */}
              <div className="w-full flex justify-center">
                <QuoteDialog>
                  <Button
                    size="lg"
                    className="bg-blue-600 text-white hover:bg-blue-700 text-lg md:text-xl py-4 md:py-6 px-8 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    Apply In 2 Minutes
                  </Button>
                </QuoteDialog>
              </div>
            </motion.div>
          </div>


          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { title: 'Customer Satisfaction', value: '100%' },
              { title: 'Average Agency Cost', value: '£3,698' },
              { title: 'Our Starting Price', value: 'Free' },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border border-gray-200 rounded-xl overflow-hidden">
                  <CardContent className="p-6 md:p-8 text-center">
                    {/* Value */}
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
                      {stat.value}
                    </h3>
                    {/* Title */}
                    <p className="text-md md:text-lg text-gray-700 font-semibold">
                      {stat.title}
                    </p>
                    {/* Decorative Line */}
                    <div className="w-16 h-1 bg-blue-400 mx-auto mt-4 md:mt-6 rounded-full"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Secret to Success Section */}
      <section className="py-10 md:py-20 px-4 md:px-5 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Heading */}
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We&apos;re Going to Let You in on a Huge Secret...
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-md md:text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            If you don’t have a professional website, your business is more than 80% less likely to succeed.
          </motion.p>

          {/* Key Statistic */}
          <motion.div
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg inline-block mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-xl md:text-3xl font-bold text-gray-800">
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
              <Button
                className="bg-white text-blue-600 hover:bg-gray-100 text-sm md:text-lg lg:text-xl py-8 px-4 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mt-8 whitespace-normal text-center"
              >
                Apply to Get Your Free Website Built by Professionals!
              </Button>
            </QuoteDialog>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 md:py-20 px-4 md:px-5 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-md md:text-xl text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hear from the entrepreneurs who’ve transformed their businesses with us.
          </motion.p>
          <Image
            src="/images/trustpilot.png"
            alt="Trustpilot Logo"
            width={200}
            height={200}
            className="mx-auto mb-8 md:mb-12"
          />
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4"
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
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700 text-sm md:text-lg lg:text-xl py-8 px-4 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mt-8 whitespace-normal text-center"
            >
              Apply to Get Your Free Website Built by Professionals!
            </Button>
          </QuoteDialog>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 md:py-16 bg-gray-100">
        <div className="container mx-auto text-center px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Why Choose Our Websites?</h2>
          <p className="text-gray-600 mt-2">Fast, secure, and beautifully designed for success.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
            {[
              {
                icon: 'https://cdn-icons-png.flaticon.com/512/8488/8488732.png',
                title: 'Mobile Optimized',
                description: 'Over 50% of traffic is mobile. We make sure your site looks perfect on any screen.',
              },
              {
                icon: 'https://cdn-icons-png.flaticon.com/512/922/922699.png',
                title: 'Stunning Designs',
                description: 'We use the latest cutting-edge designs built by expert graphic designers.',
              },
              {
                icon: 'https://cdn-icons-png.flaticon.com/512/1356/1356479.png',
                title: 'SEO Ready',
                description: 'Your site will be fully optimized to rank high on Google and other search engines.',
              },
              {
                icon: 'https://cdn-icons-png.flaticon.com/512/1455/1455324.png',
                title: 'Maximum Speed',
                description: 'We ensure your visitors never wait longer than they have to.',
              },
              {
                icon: 'https://cdn-icons-png.flaticon.com/512/2592/2592317.png',
                title: 'Cutting-Edge Security',
                description: 'Automated daily backups and top-tier security features for protection.',
              },
              {
                icon: 'https://cdn-icons-png.flaticon.com/512/16534/16534273.png',
                title: 'Easily Customizable',
                description: 'We’ll show you how to edit your own site, so you never need a developer.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-50"
              >
                <img src={feature.icon} alt={feature.title} className="w-12 mx-auto" />
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto text-center px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Take a Look at Some of Our Work</h2>
          <p className="text-white mt-2">Explore our success stories and see full-size examples of websites we&apos;ve built for businesses like yours.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
          <motion.div
            className="group bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }} // Subtle scale effect on hover
            transition={{ duration: 0.3 }} // Scale transition duration
          >
            <motion.div
              className="w-full h-48 md:h-64 overflow-hidden"
              style={{
                position: 'relative',
              }}
            >
              <motion.img
                src="/images/projects/sjdroofing.png"
                alt="SJD Roofing Website"
                className="w-full h-full object-cover transition-all"
                loading="lazy"
                initial={{ objectPosition: 'top' }}
                whileHover={{
                  objectPosition: 'bottom',
                }}
                style={{ transitionDuration: '2s' }} // <-- Fix: Force transition duration
              />
            </motion.div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold">SJD Roofing</h3>
              <p className="text-gray-600">Roofing Company</p>
            </div>
          </motion.div>

          <motion.div
            className="group bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }} // Subtle scale effect on hover
            transition={{ duration: 0.3 }} // Scale transition duration
          >
            <motion.div
              className="w-full h-48 md:h-64 overflow-hidden"
              style={{
                position: 'relative',
              }}
            >
              <motion.img
                src="/images/projects/travelblog.png"
                alt="Travel Blog Website"
                className="w-full h-full object-cover transition-all"
                loading="lazy"
                initial={{ objectPosition: 'top' }}
                whileHover={{
                  objectPosition: 'bottom',
                }}
                style={{ transitionDuration: '2s' }} // <-- Fix: Force transition duration
              />
            </motion.div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold">Travel Crush</h3>
              <p className="text-gray-600">Travel Blog Website</p>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Why We Do This Section */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 px-4 md:px-0">
          {/* Left Column (Text) */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
              Why We Do This
            </h2>
            <p className="text-gray-600 text-md md:text-lg mb-4">
              Unlike many agencies, we offer <strong>completely free websites</strong> for professional, high-quality websites. Here’s why:
            </p>
            <p className="text-gray-600 text-md md:text-lg mb-4">
              This is our way of ensuring that your investment leads to measurable results. Our goal is to build long-term relationships with businesses, so as your company grows, we can continue providing you with top-tier digital solutions.
            </p>
            <p className="text-gray-600 text-md md:text-lg">
              Over 95% of our clients have been incredibly satisfied with the results, and many return for more services or refer us to others.
            </p>
          </div>

          {/* Right Column (Image - Receipt) */}
          <img src="/images/pricing.png" alt="Receipt showing £399 after discount" className="w-full md:w-1/2 rounded-lg shadow-xl mb-4" />
        </div>
        <div className="text-center mt-8 md:mt-12">
          <QuoteDialog>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-lg md:text-xl py-4 md:py-6 px-8 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Apply Now
            </Button>
          </QuoteDialog>
        </div>
      </section>

      {/* Our Application Process Section */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 px-4 md:px-0">
          {/* Left Section: Reviews */}
          <div className="md:w-1/2 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Sam S.</h3>
              <p className="text-gray-600 mt-2">&quot;I kept thinking there had to be a catch—but there wasn&apos;t! I still can&apos;t believe I got such an amazing website at no cost!&quot;</p>
              <p className="text-yellow-500 mt-2">★★★★★</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Ade N.</h3>
              <p className="text-gray-600 mt-2">&quot;The whole process was smooth and stress-free. I&apos;m not very tech-savvy, and building a website seemed daunting, but they guided me every step of the way!&quot;</p>
              <p className="text-yellow-500 mt-2">★★★★★</p>
            </div>
          </div>

          {/* Right Section: Application Process Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-gray-600 text-md md:text-lg mb-4">Here&apos;s how you can get started:</p>
            <div className="space-y-4">
              <p className="text-gray-600 text-md md:text-lg">1. <strong>Fill out our quick application form.</strong> It&apos;ll only take <strong>2 minutes</strong>.</p>
              <p className="text-gray-600 text-md md:text-lg">2. <strong>Our team reviews your application</strong> and contacts you within 24-48 hours.</p>
              <p className="text-gray-600 text-md md:text-lg">3. <strong>We assign you a Senior Developer</strong> to begin building your website!</p>
            </div>
            <QuoteDialog>
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-lg md:text-xl py-4 md:py-6 px-8 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mt-8">
                Apply Now
              </Button>
            </QuoteDialog>
          </div>
        </div>
      </section>

      {/* We Guide You Every Step of the Way Section */}
      <section className="py-10 md:py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 px-4 md:px-0">
          {/* Left Section: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">We Guide You Every Step of the Way</h2>
            <p className="text-gray-600 text-md md:text-lg mb-4">
              You don&apos;t need to be tech-savvy. We&apos;ll take care of everything while you stay informed every step of the way with easy-to-follow instructions and helpful videos.
            </p>
            <p className="text-gray-600 text-md md:text-lg">
              From startup founders to elderly business owners, we&apos;ve successfully helped clients from all walks of life get their online presence up and running.
            </p>
          </div>

          {/* Right Section: Image */}
          <img src="/images/guy-on-laptop.jpg" alt="Guide Process" className="w-full rounded-lg shadow-md md:w-1/2" />
        </div>

        {/* CTA Button Centered */}
        <div className="flex justify-center mt-8 md:mt-12">
          <QuoteDialog>
            <Button className="bg-blue-600 text-white text-lg md:text-2xl font-semibold py-4 md:py-6 px-8 md:px-12 rounded-xl shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all">
              Get Started Today
            </Button>
          </QuoteDialog>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Your Professional Website Starts Here</h2>
          <p className="text-gray-200 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
            Take the first step towards a stunning, high-performance website that sets your business apart.
            <br />
            Apply today, and our team will review your application within <span className="font-semibold">24-48 hours</span>.
            <br />
            If you&apos;re approved, we&apos;ll match you with a Senior Developer to bring your vision to life.
          </p>
          <div className="text-center mt-6 md:mt-10">
            <QuoteDialog>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg md:text-2xl font-semibold py-4 md:py-6 px-8 md:px-14 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Apply Now
              </Button>
            </QuoteDialog>
          </div>
        </div>
      </section>
    </div>
  );
}