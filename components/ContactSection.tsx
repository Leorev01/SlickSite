'use client';
import React, { useState } from 'react';
import SubHeading from './SubHeading';

const ContactCTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>(''); // State to track message type

  const handleChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('Submitting...');
    setMessageType(''); // Reset message type

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Your message has been sent! We will get back to you soon.');
        setMessageType('success');
      } else {
        const errorData = await response.json();
        console.log('Error response:', errorData); // Log the error response for better insight
        setSubmitMessage(errorData.error || 'There was an error submitting the form.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Form submit error:', error); // Log any error from the fetch call
      setSubmitMessage('An error occurred while sending the message.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  return (
    <section id='contact' className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <SubHeading title='CONTACT US' text='Get in Touch' />
        <p className='text-blue-950 mt-[-3rem] mb-10'>Take 30 seconds to fill out a quick form, and a team member will be in touch ASAP</p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-3 gap-4 text-blue-950 text-start"
          aria-label="Contact Form"
        >
          {/* Name Input */}
          <div className="col-span-1">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="col-span-1">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Input */}
          <div className="col-span-1">
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Message Input */}
          <div className="col-span-3">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:outline-none"
              placeholder="Details about your project, questions, or comments"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:outline-none"
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </div>
        </form>

        {/* Success/Error Message */}
        <p
          className={`mt-6 text-xl font-semibold ${
            messageType === 'success' ? 'text-green-600' : messageType === 'error' ? 'text-red-600' : ''
          }`}
          aria-live="polite"
        >
          {submitMessage}
        </p>
      </div>
    </section>
  );
};

export default ContactCTASection;
