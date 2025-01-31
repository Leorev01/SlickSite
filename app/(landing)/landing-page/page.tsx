'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import arrow icons
export default function LandingPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        websiteType: '',
        budget: '',
        timeline: '',
        features: '',
        additionalInfo: ''
      });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add your form submission logic here (e.g., API call)
  };

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
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl">
              Apply In 2 Minutes
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 max-w-md mx-auto border-0 shadow-2xl">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <DialogTitle className="text-2xl font-bold text-white mb-2">
      Register Your Interest
    </DialogTitle>
    <DialogDescription className="text-gray-200 mb-6">
      Fill out the form below, and we’ll get back to you within 24 hours.
    </DialogDescription>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input 
        name="name" 
        placeholder="Your Name" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      <Input 
        name="email" 
        placeholder="Your Email" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="email"
        required
      />
      <Input 
        name="phone" 
        placeholder="Your Phone Number" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="tel"
        required
      />
      <Input 
        name="company" 
        placeholder="Company Name" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <Input 
        name="websiteType" 
        placeholder="Type of Website (e.g., Business, E-commerce, Portfolio)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      <Input 
        name="budget" 
        placeholder="Project Budget" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        required
      />
      <Input 
        name="timeline" 
        placeholder="Project Timeline (e.g., 3 months)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        required
      />
      <textarea 
        name="features" 
        placeholder="Specific Features or Functionalities (e.g., User login, Payment gateway)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
        required
      />
      <textarea 
        name="additionalInfo" 
        placeholder="Any Additional Information or Requirements" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
      />
      <Button 
        type="submit" 
        className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-all duration-300"
      >
        Submit
      </Button>
    </form>
  </motion.div>
</DialogContent>
        </Dialog>
      </section>

      {/* Carousel Section */}
      <section className="py-20 px-5 bg-white relative z-20">

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
      <section className="py-20 px-5 bg-white">
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-xl">
                    Apply In 2 Minutes
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 max-w-md mx-auto border-0 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DialogTitle className="text-2xl font-bold text-white mb-2">
            Register Your Interest
          </DialogTitle>
          <DialogDescription className="text-gray-200 mb-6">
            Fill out the form below, and we’ll get back to you within 24 hours.
          </DialogDescription>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input 
              name="name" 
              placeholder="Your Name" 
              onChange={handleChange} 
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <Input 
              name="email" 
              placeholder="Your Email" 
              onChange={handleChange} 
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="email"
              required
            />
            <Input 
              name="phone" 
              placeholder="Your Phone Number" 
              onChange={handleChange} 
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="tel"
              required
            />
            <Input 
              name="company" 
              placeholder="Company Name" 
              onChange={handleChange} 
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Input 
              name="websiteType" 
              placeholder="Type of Website (e.g., Business, E-commerce, Portfolio)" 
              onChange={handleChange} 
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <Input 
              name="budget" 
              placeholder="Project Budget" 
              onChange={handleChange} 
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              required
            />
            <Input 
              name="timeline" 
              placeholder="Project Timeline (e.g., 3 months)" 
              onChange={handleChange} 
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              required
            />
            <textarea 
              name="features" 
              placeholder="Specific Features or Functionalities (e.g., User login, Payment gateway)" 
              onChange={handleChange} 
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              required
            />
            <textarea 
              name="additionalInfo" 
              placeholder="Any Additional Information or Requirements" 
              onChange={handleChange} 
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            />
            <Button 
              type="submit" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-all duration-300"
            >
              Submit
            </Button>
          </form>
        </motion.div>
      </DialogContent>
              </Dialog>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-xl">
                  Apply to Get Your Website Built by Professionals — From Just 399!
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 max-w-md mx-auto border-0 shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <DialogTitle className="text-2xl font-bold text-white mb-2">
                    Register Your Interest
                  </DialogTitle>
                  <DialogDescription className="text-gray-200 mb-6">
                    Fill out the form below, and we’ll get back to you within 24 hours.
                  </DialogDescription>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input 
                      name="name" 
                      placeholder="Your Name" 
                      onChange={handleChange} 
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <Input 
                      name="email" 
                      placeholder="Your Email" 
                      onChange={handleChange} 
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      type="email"
                      required
                    />
                    <Input 
                      name="phone" 
                      placeholder="Your Phone Number" 
                      onChange={handleChange} 
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      type="tel"
                      required
                    />
                    <Input 
                      name="company" 
                      placeholder="Company Name" 
                      onChange={handleChange} 
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Input 
                      name="websiteType" 
                      placeholder="Type of Website (e.g., Business, E-commerce, Portfolio)" 
                      onChange={handleChange} 
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <Input 
                      name="budget" 
                      placeholder="Project Budget" 
                      onChange={handleChange} 
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      type="text"
                      required
                    />
                    <Input 
                      name="timeline" 
                      placeholder="Project Timeline (e.g., 3 months)" 
                      onChange={handleChange} 
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      type="text"
                      required
                    />
                    <textarea 
                      name="features" 
                      placeholder="Specific Features or Functionalities (e.g., User login, Payment gateway)" 
                      onChange={handleChange} 
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows={4}
                      required
                    />
                    <textarea 
                      name="additionalInfo" 
                      placeholder="Any Additional Information or Requirements" 
                      onChange={handleChange} 
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows={4}
                    />
                    <Button 
                      type="submit" 
                      className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-all duration-300"
                    >
                      Submit
                    </Button>
                  </form>
                </motion.div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-5 bg-white">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-center" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🚀', title: 'Fast Delivery', description: 'Get your website live in just 7 days!' },
            { icon: '💻', title: 'Modern Design', description: 'Sleek, responsive, and user-friendly designs.' },
            { icon: '💰', title: 'Affordable Pricing', description: 'High-quality websites starting from just £399.' },
          ].map((feature, index) => (
            <motion.div 
              key={feature.title} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-5 bg-gray-100">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-center" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transparent Pricing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Basic Website', price: '£399', features: ['1-3 Pages', 'Responsive Design', 'Basic SEO'] },
            { title: 'Business Website', price: '£699', features: ['Up to 5 Pages', 'Custom Design', 'Advanced SEO'] },
            { title: 'E-commerce Website', price: '£999', features: ['Up to 10 Products', 'Payment Integration', 'Advanced SEO'] },
          ].map((plan, index) => (
            <motion.div 
              key={plan.title} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <p className="text-2xl font-bold mb-4">{plan.price}</p>
                  <ul className="text-gray-600 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2">{feature}</li>
                    ))}
                  </ul>
                  <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Your Free Quote
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 max-w-md mx-auto border-0 shadow-2xl">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <DialogTitle className="text-2xl font-bold text-white mb-2">
      Register Your Interest
    </DialogTitle>
    <DialogDescription className="text-gray-200 mb-6">
      Fill out the form below, and we’ll get back to you within 24 hours.
    </DialogDescription>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input 
        name="name" 
        placeholder="Your Name" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      <Input 
        name="email" 
        placeholder="Your Email" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="email"
        required
      />
      <Input 
        name="phone" 
        placeholder="Your Phone Number" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="tel"
        required
      />
      <Input 
        name="company" 
        placeholder="Company Name" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <Input 
        name="websiteType" 
        placeholder="Type of Website (e.g., Business, E-commerce, Portfolio)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      <Input 
        name="budget" 
        placeholder="Project Budget" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        required
      />
      <Input 
        name="timeline" 
        placeholder="Project Timeline (e.g., 3 months)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        required
      />
      <textarea 
        name="features" 
        placeholder="Specific Features or Functionalities (e.g., User login, Payment gateway)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
        required
      />
      <textarea 
        name="additionalInfo" 
        placeholder="Any Additional Information or Requirements" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
      />
      <Button 
        type="submit" 
        className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-all duration-300"
      >
        Submit
      </Button>
    </form>
  </motion.div>
</DialogContent>
        </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Section: Why a Website is Critical */}
      <section className="py-20 px-5 bg-gray-100">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-center" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why a Professional Website is Critical
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl mb-6 text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Businesses without a professional website are <span className="font-bold">80% less likely</span> to succeed. A Facebook or Instagram page just isn’t enough.
        </motion.p>
        <div className="text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Your Free Quote
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 max-w-md mx-auto border-0 shadow-2xl">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <DialogTitle className="text-2xl font-bold text-white mb-2">
      Register Your Interest
    </DialogTitle>
    <DialogDescription className="text-gray-200 mb-6">
      Fill out the form below, and we’ll get back to you within 24 hours.
    </DialogDescription>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input 
        name="name" 
        placeholder="Your Name" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      <Input 
        name="email" 
        placeholder="Your Email" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="email"
        required
      />
      <Input 
        name="phone" 
        placeholder="Your Phone Number" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="tel"
        required
      />
      <Input 
        name="company" 
        placeholder="Company Name" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <Input 
        name="websiteType" 
        placeholder="Type of Website (e.g., Business, E-commerce, Portfolio)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      <Input 
        name="budget" 
        placeholder="Project Budget" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        required
      />
      <Input 
        name="timeline" 
        placeholder="Project Timeline (e.g., 3 months)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        required
      />
      <textarea 
        name="features" 
        placeholder="Specific Features or Functionalities (e.g., User login, Payment gateway)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
        required
      />
      <textarea 
        name="additionalInfo" 
        placeholder="Any Additional Information or Requirements" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
      />
      <Button 
        type="submit" 
        className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-all duration-300"
      >
        Submit
      </Button>
    </form>
  </motion.div>
</DialogContent>
        </Dialog>
        </div>
      </section>

      {/* New Section: Rated Higher Than Wix and Squarespace */}
      <section className="py-20 px-5 bg-white">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-center" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rated Higher Than Wix and Squarespace
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl mb-6 text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          With thousands of five-star reviews, we’re the highest-rated web development service in the world.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { rating: '5.0', platform: 'Clutch' },
            { rating: '4.9', platform: 'G2' },
            { rating: '5.0', platform: 'TrustPilot' },
          ].map((review, index) => (
            <motion.div 
              key={review.platform} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">★★★★★</div>
                  <h3 className="text-2xl font-bold mb-2">{review.rating}/5</h3>
                  <p className="text-gray-600">{review.platform}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Section: A Professional Website That You'll Love */}
      <section className="py-20 px-5 bg-gray-100">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-center" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Professional Website That You&apos;ll Love
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '📱', title: 'Mobile Optimized', description: 'Over 50% of internet traffic comes from mobile devices. We ensure your site looks great on all screens.' },
            { icon: '🎨', title: 'Stunning Designs', description: 'We use cutting-edge designs built by leading graphic designers.' },
            { icon: '🔒', title: 'Cutting-Edge Security', description: 'All our websites include automated daily backups and top-tier security features.' },
          ].map((feature, index) => (
            <motion.div 
              key={feature.title} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Your Free Quote
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 max-w-md mx-auto border-0 shadow-2xl">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <DialogTitle className="text-2xl font-bold text-white mb-2">
      Register Your Interest
    </DialogTitle>
    <DialogDescription className="text-gray-200 mb-6">
      Fill out the form below, and we’ll get back to you within 24 hours.
    </DialogDescription>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input 
        name="name" 
        placeholder="Your Name" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      <Input 
        name="email" 
        placeholder="Your Email" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="email"
        required
      />
      <Input 
        name="phone" 
        placeholder="Your Phone Number" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="tel"
        required
      />
      <Input 
        name="company" 
        placeholder="Company Name" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <Input 
        name="websiteType" 
        placeholder="Type of Website (e.g., Business, E-commerce, Portfolio)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      <Input 
        name="budget" 
        placeholder="Project Budget" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        required
      />
      <Input 
        name="timeline" 
        placeholder="Project Timeline (e.g., 3 months)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        required
      />
      <textarea 
        name="features" 
        placeholder="Specific Features or Functionalities (e.g., User login, Payment gateway)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
        required
      />
      <textarea 
        name="additionalInfo" 
        placeholder="Any Additional Information or Requirements" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
      />
      <Button 
        type="submit" 
        className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-all duration-300"
      >
        Submit
      </Button>
    </form>
  </motion.div>
</DialogContent>
        </Dialog>
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
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Your Free Quote
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 max-w-md mx-auto border-0 shadow-2xl">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <DialogTitle className="text-2xl font-bold text-white mb-2">
      Register Your Interest
    </DialogTitle>
    <DialogDescription className="text-gray-200 mb-6">
      Fill out the form below, and we’ll get back to you within 24 hours.
    </DialogDescription>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input 
        name="name" 
        placeholder="Your Name" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      <Input 
        name="email" 
        placeholder="Your Email" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="email"
        required
      />
      <Input 
        name="phone" 
        placeholder="Your Phone Number" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="tel"
        required
      />
      <Input 
        name="company" 
        placeholder="Company Name" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <Input 
        name="websiteType" 
        placeholder="Type of Website (e.g., Business, E-commerce, Portfolio)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      <Input 
        name="budget" 
        placeholder="Project Budget" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        required
      />
      <Input 
        name="timeline" 
        placeholder="Project Timeline (e.g., 3 months)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        required
      />
      <textarea 
        name="features" 
        placeholder="Specific Features or Functionalities (e.g., User login, Payment gateway)" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
        required
      />
      <textarea 
        name="additionalInfo" 
        placeholder="Any Additional Information or Requirements" 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
      />
      <Button 
        type="submit" 
        className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-all duration-300"
      >
        Submit
      </Button>
    </form>
  </motion.div>
</DialogContent>
        </Dialog>
      </section>
    </div>
  );
}