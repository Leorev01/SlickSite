'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function QuoteDialog({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false); // Close the dialog after submission
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 max-w-md mx-auto border-0 shadow-2xl">
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
      </DialogContent>
    </Dialog>
  );
}