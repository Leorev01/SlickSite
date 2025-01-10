'use client'
import { motion } from "framer-motion";
import "react-calendar/dist/Calendar.css";
import AppointmentForm from "./components/AppointmentForm";
import Image from 'next/image';

const Home = () => {

  const projects = [
    {
      id: "1",
      imageUrl: "/images/projects/sjdroofing.png",
      description: "A clean and modern website designed for a roofing business to effectively communicate services, expertise, and contact details.",
    },
    {
      id: "2",
      imageUrl: "/images/projects/plasterer.png", // Replace with actual image URLs
      description: "A professional website designed for a plastering business, showcasing services, expertise, and a gallery of completed projects. The site is built to instill trust and demonstrate high-quality workmanship with easy navigation and a strong call-to-action for customer inquiries."
    },
    {
      id: "3",
      imageUrl: "/images/projects/photographer.png",
      description: "A professional portfolio showcasing a photographer's best work, designed with an elegant layout to make the photos the focal point.",
    },   
  ];

  
    const testimonials = [
        {
          name: "A Simba",
          review: `I couldn't be happier at how my website turned out! A big thank you to Leo and the team at slick-site for being attentive and accommodating throughout the design process. I'm a small service-based business and finally have the perfect website to showcase my projects. Thanks again, Alawi.`,
        },
        {
          name: "S Dowey",
          review: `Over the moon with the website design, which I have no clue about but wasn’t worried one bit due to how convenient this company made me feel. Honestly just left him to it, and within a week, I had a fully designed website at affordable prices. Would recommend this company to anyone and will be from now on. Many thanks, Shane.`,
        },
        {
          name: "T Williams",
          review: `They did an amazing job of developing my website. They captured the essence of my photography and made it marketable to give me a wider audience. Amazing work.`,
        },
      ];

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Transform Your Home Improvement Website Into a Lead-Generating Machine!
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg md:text-xl"
          >
            Custom web development tailored to the home improvement industry—boost your online presence and grow your business.
          </motion.p>
          <motion.a
            href="#contact"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mt-16 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
          >
            Get Your Free Website Audit Today!
          </motion.a>
        </div>
      </section>

      {/* Problem Statement Section */}
        <section className="py-16 px-6 bg-gray-50">
        <motion.div
            className="container mx-auto text-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-gray-800"
            >
            Is Your Website Costing You Customers?
            </motion.h2>
            <motion.p
            variants={fadeIn}
            className="mt-4 text-lg text-gray-600"
            >
            We understand the struggles of a poorly performing website. Here’s what might be holding you back:
            </motion.p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                {
                icon: "🚫",
                text: "Outdated design that doesn’t inspire trust.",
                },
                {
                icon: "📱",
                text: "Poor mobile performance leading to lost leads.",
                },
                {
                icon: "🔍",
                text: "Ineffective SEO holding back your visibility.",
                },
                {
                icon: "📉",
                text: "Low conversion rates on site visitors.",
                },
            ].map((problem, idx) => (
                <motion.div
                key={idx}
                variants={fadeIn}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <p className="text-gray-700 font-medium">{problem.text}</p>
                </motion.div>
            ))}
            </div>
        </motion.div>
        </section>


      {/* Solution Section */}
      <section className="py-16 px-6 bg-white">
        <motion.div
            className="container mx-auto text-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
            A Website That Works as Hard as You Do
            </motion.h2>
            <motion.p variants={fadeIn} className="mt-6 text-lg text-gray-700">
            Your website is the cornerstone of your online presence, and we believe it should be more than just a digital brochure. It should actively work to generate leads, convert visitors, and reflect your business’s quality. That’s where we come in.
            </motion.p>
            <motion.p variants={fadeIn} className="mt-4 text-lg text-gray-600">
            Our custom websites are designed with purpose: to increase conversions, drive more traffic, and make a lasting impression. From intuitive design to seamless performance, we craft websites that grow with your business.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10 flex justify-center">
            <motion.button
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
            >
                Let’s Build Your Lead-Generating Website
            </motion.button>
            </motion.div>
        </motion.div>
        </section>


      {/* Features & Benefits Section */}
    <section className="py-16 px-6 bg-gray-50">
        <motion.div
            className="container mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800"
            >
            Why Choose Us? Here’s What You Get
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {[
                {
                title: "Custom Website Design",
                description:
                    "We create beautiful, user-friendly websites that represent your brand and resonate with your audience. Tailored to your needs, each website is a unique design built to convert.",
                icon: "🖌️",
                },
                {
                title: "SEO Optimization",
                description:
                    "Every website we build is optimized for search engines, making sure your business ranks well and gets noticed by the right people at the right time.",
                icon: "🔍",
                },
                {
                title: "Mobile-Responsive Design",
                description:
                    "In today’s mobile world, your website needs to perform across all devices. We ensure your website looks great and functions flawlessly on desktops, tablets, and smartphones.",
                icon: "📱",
                },
                {
                title: "Fast Loading Speed",
                description:
                    "We optimize our websites for speed, ensuring your visitors have a seamless browsing experience. Faster loading times lead to happier users and higher conversion rates.",
                icon: "⚡",
                },
                {
                title: "Lead-Generating Forms",
                description:
                    "Our websites come with lead-generation forms, helping you capture and convert your site visitors into customers quickly and easily.",
                icon: "📈",
                },
                {
                title: "Ongoing Support",
                description:
                    "We’re here for you long after the website is live. Our team offers ongoing support and updates to ensure your website stays fresh and functional.",
                icon: "🔧",
                },
            ].map((feature, idx) => (
                <motion.div
                key={idx}
                variants={fadeIn}
                className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition"
                >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl text-blue-600">{feature.title}</h3>
                <p className="mt-4 text-gray-600">{feature.description}</p>
                </motion.div>
            ))}
            </div>
        </motion.div>
        </section>
      
      {/* Projects Section */}
      <section className="py-10 bg-gray-50" id="portfolio">
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold mb-4"
          >
            Our Work
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative flex-shrink-0 bg-gray-300 rounded-lg shadow-md overflow-hidden"
              style={{
                width: '100%',
                height: '400px', // Set a consistent height for all images
                overflow: 'hidden',
              }}
            >
              <Image
                src={project.imageUrl}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{
                  objectPosition: 'top', // Ensure we only show the top of the image
                }}
                layout="fill"
              />

              {/* Hover Description */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center px-4 py-2 text-lg">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* Testimonials Section */}
        <section className="py-16 px-6 bg-gray-100">
        <motion.div
            className="container mx-auto text-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold"
            >
            Don’t Just Take Our Word for It
            </motion.h2>
            <motion.p
            variants={fadeIn}
            className="mt-6 text-lg"
            >
            Here’s what our clients have to say:
            </motion.p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
                <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                <p className="text-lg italic text-gray-700">
                    “{testimonial.review}”
                </p>
                <footer className="mt-4 text-blue-600 font-semibold">
                    — {testimonial.name}
                </footer>
                </motion.div>
            ))}
            </div>
        </motion.div>
        </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Our Pricing</h2>
            <p className="mt-4 text-lg text-gray-600">Affordable solutions tailored to your business needs.</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                name: "Basic",
                price: "£500",
                features: [
                    "Up to 5 custom-designed pages",
                    "Mobile-responsive layout",
                    "Basic SEO setup",
                    "Fast-loading design",
                    "Contact form integration",
                ],
                description: "Perfect for small businesses looking for a professional online presence.",
                },
                {
                name: "Standard",
                price: "£999",
                features: [
                    "Up to 10 custom-designed pages",
                    "Advanced SEO optimization",
                    "Analytics and performance tracking",
                    "Basic blog setup",
                    "Content management system (CMS) training",
                ],
                description: "Ideal for growing businesses that need a scalable and optimized website.",
                },
                {
                name: "Premium",
                price: "£1499",
                features: [
                    "Unlimited pages",
                    "Custom animations and interactive elements",
                    "E-commerce integration with payment gateway setup",
                    "Comprehensive SEO audit and strategy",
                    "Priority support and maintenance for 6 months",
                ],
                description: "Best for businesses ready to dominate their market with a feature-packed site.",
                },
            ].map((plan, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="font-bold text-xl text-blue-600">{plan.name}</h3>
                <p className="mt-2 text-2xl font-extrabold">{plan.price}</p>
                <p className="mt-4 text-gray-600 italic">{plan.description}</p>
                <ul className="mt-6 text-gray-600 space-y-2 text-left">
                    {plan.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                    ))}
                </ul>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
                    Choose {plan.name}
                </button>
                </div>
            ))}
            </div>
        </div>
        </section>

      {/* Contact Section with Calendar */}
      <section id='contact' className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Transform Your Website?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-lg"
          >
            Book a free consultation or send us a message to get started!
          </motion.p>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-50">
        <AppointmentForm />
      </section>
    </div>
  );
};

export default Home;
