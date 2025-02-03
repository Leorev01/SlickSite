'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function QuoteDialog({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // New state to track form submission

  const [formData, setFormData] = useState({
    websiteDescription: '',
    firstName: '',
    email: '',
    phone: '',
    currentWebsite: '',
    hosting: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors(null); // Clear error when user types
  };

  const validateStep = () => {
    if (step === 0 && formData.websiteDescription.trim() === '') {
      setErrors("Please describe the website you want to build.");
      return false;
    }
    if (step === 1 && formData.firstName.trim() === '') {
      setErrors("Please enter your first name.");
      return false;
    }
    if (step === 2 && formData.email.trim() === '') {
      setErrors("Please enter a valid email.");
      return false;
    }
    if (step === 5 && formData.hosting.trim() === '') {
      setErrors("Please select an option for hosting.");
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setErrors(null); // Clear errors when going back
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure validation passes before submitting
    if (!validateStep()) return;  // Stop submission if validation fails

    setLoading(true); // Set loading state to true while submitting
    setErrors(null);  // Clear errors before submission

    try {
      const response = await fetch("/api/landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // After successful form submission, redirect to the success page
        router.push('/success'); // Navigate to the success page (assuming it's at /success)
      } else {
        setErrors("Something went wrong. Please try again.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrors("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Reset loading state once submission is complete
    }

    // Close the dialog after form submission
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div onClick={() => setIsOpen(true)}>{children}</div>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-lg p-8 max-w-md mx-auto border border-gray-300 shadow-xl">
        <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
          Register Your Interest
        </DialogTitle>
        <DialogDescription className="text-gray-600 mb-6">
          Fill out this quick form and we’ll get back to you within 24-48 hours.
        </DialogDescription>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="websiteDescription" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
                <textarea
                  name="websiteDescription"
                  placeholder="Describe the website you want to build"
                  value={formData.websiteDescription}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  rows={4}
                  required
                />
                {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
                <Button onClick={nextStep} type="button" className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 rounded-lg transition-all duration-300">
                  Next
                </Button>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="firstName" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
                <Input
                  name="firstName"
                  placeholder="What is your first name?"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
                {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
                <Button onClick={nextStep} type="button" className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 rounded-lg transition-all duration-300">
                  Next
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="email" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
                <Input
                  name="email"
                  placeholder="What is your email?"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
                {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
                <Button onClick={nextStep} type="button" className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 rounded-lg transition-all duration-300">
                  Next
                </Button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="phone" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
                <Input
                  name="phone"
                  placeholder="What is your phone number? (Optional)"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <Button onClick={nextStep} type="button" className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 rounded-lg transition-all duration-300">
                  Next
                </Button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="currentWebsite" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
                <Input
                  name="currentWebsite"
                  placeholder="Enter your current website (Optional)"
                  type="url"
                  value={formData.currentWebsite}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <Button onClick={nextStep} type="button" className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 rounded-lg transition-all duration-300">
                  Next
                </Button>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="hosting" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
                <p className="text-gray-800 font-medium mb-2">Do you already have hosting?</p>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="hosting" value="Yes" checked={formData.hosting === "Yes"} onChange={handleChange} className="accent-blue-500" />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="hosting" value="No" checked={formData.hosting === "No"} onChange={handleChange} className="accent-blue-500" />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
                {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}

                {loading ? (
                  <p className="text-blue-600 text-center mt-4">Submitting...</p>
                ) : (
                  <Button type="submit" className="mt-6 w-full bg-green-600 text-white hover:bg-green-700 font-semibold py-3 rounded-lg transition-all duration-300">
                    Submit
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {step > 0 && (
            <Button onClick={prevStep} type="button" className="mt-4 w-full bg-gray-500 text-white hover:bg-gray-600 font-semibold py-3 rounded-lg transition-all duration-300">
              Back
            </Button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
