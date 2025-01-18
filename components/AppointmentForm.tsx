'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AppointmentForm: React.FC = () => {
  const router = useRouter();
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>(""); // Optional
  const [website, setWebsite] = useState<string>(""); // Optional
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Error state

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^(?:\+44|0)7\d{9}$/;

  const today = new Date().toISOString().split("T")[0];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
  
    if (!name.trim()) newErrors.name = "Full name is required.";
    if (!emailPattern.test(email)) newErrors.email = "Invalid email address.";
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    if (!date) newErrors.date = "Please select a date.";
    if (!time) newErrors.time = "Please select a time.";
    if (!message.trim()) newErrors.message = "Message is required.";
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if validation fails

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, website, message, date, time }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setErrors({ form: "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => router.push("/success"), 2000);
    }
  }, [success]);

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl">
      {errors.form && (
        <div
          role="alert"
          aria-live="assertive"
          className="bg-red-100 text-red-800 p-4 rounded-lg mb-6 text-center"
        >
          {errors.form}
        </div>
      )}
      {success && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 text-center">
          Appointment Booked Successfully! Redirecting...
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center">
          Slick - Free Quotation Meeting
        </h2>
        <p className="text-center px-8">
          We will give you a call at your selected date and time to discuss your website and see if we&apos;re a fit.
        </p>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Current Website (Optional)
            </label>
            <input
              type="text"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your project or goals..."
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Select Date
              </label>
              <input
                type="date"
                id="date"
                value={date || ""}
                onChange={(e) => setDate(e.target.value)}
                min={today}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Select Time
              </label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a time</option>
                {Array.from({ length: 19 }).map((_, i) => {
                  const hours = Math.floor(i / 2) + 9; // Start from 9:00 AM
                  const minutes = i % 2 === 0 ? "00" : "30";
                  const period = hours < 12 || hours === 24 ? "AM" : "PM";
                  const displayHours = hours > 12 ? hours - 12 : hours;
                  return (
                    <option key={i} value={`${displayHours}:${minutes} ${period}`}>
                      {`${displayHours}:${minutes} ${period}`}
                    </option>
                  );
                })}
              </select>
              {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg focus:ring-2 focus:ring-blue-500 transition"
        >
          {isSubmitting ? "Submitting..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;