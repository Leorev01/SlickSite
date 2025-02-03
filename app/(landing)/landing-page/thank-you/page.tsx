'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto py-10"
      >
        {/* Logo or Image */}
        <Image
          src="/images/trustpilot_white.png"
          alt="Trustpilot Logo"
          width={100}
          height={100}
          className="mx-auto mb-6"
        />

        {/* Confirmation Message */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Thank You for Your Submission!
        </motion.h1>

        <motion.p
          className="text-md md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          We&apos;ve received your information and will get back to you within 24-48 hours. We’re excited to help you create a professional website.
        </motion.p>

        {/* Referral Program Description */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Want to earn £50? Refer a friend and get £50 when their website is successfully built by us!
        </motion.p>

        {/* Referral Program Step-by-Step Guide */}
        <motion.div
          className="text-left mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">Here’s How It Works:</h3>

          <div className="flex flex-col space-y-6 items-center">
            {/* Step 1 */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full">
                <span className="text-2xl font-semibold">1</span>
              </div>
              <div className="text-left">
                <p className="text-md md:text-lg font-semibold">Tell your friend about our services and how we can help them build a professional website.</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-blue-600">
              <span>&#8595;</span>
            </div>

            {/* Step 2 */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-24 h-16 bg-blue-600 text-white rounded-full">
                <span className="text-2xl font-semibold">2</span>
              </div>
              <div className="text-left">
                <p className="text-md md:text-lg font-semibold">When your friend fills out the contact form, they simply need to mention your name (or who referred them) in the referral field.</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-blue-600">
              <span>&#8595;</span>
            </div>

            {/* Step 3 */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-20 h-16 bg-blue-600 text-white rounded-full">
                <span className="text-2xl font-semibold">3</span>
              </div>
              <div className="text-left">
                <p className="text-md md:text-lg font-semibold">If your friend is accepted as a customer and their website is successfully built by us, you’ll receive £50!</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-blue-600">
              <span>&#8595;</span>
            </div>

            {/* Step 4 */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full">
                <span className="text-2xl font-semibold">4</span>
              </div>
              <div className="text-left">
                <p className="text-md md:text-lg font-semibold">Enjoy your reward and help others get started with their own professional websites!</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Optional: Social Proof / Testimonials */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.p className="text-lg mb-3">
            ⭐⭐⭐⭐⭐ &quot;Working with this team was amazing! They delivered a fantastic website on time and on budget.&quot;
          </motion.p>
          <motion.p className="text-lg mb-6">
            - Happy Client
          </motion.p>
        </motion.div>

        {/* Button to Return Home */}
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white hover:bg-blue-700 text-lg md:text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Go Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
