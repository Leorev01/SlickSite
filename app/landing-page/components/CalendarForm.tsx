'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CalendarForm: React.FC = () => {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>(""); // Optional
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Error state

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^(?:\+44|0)7\d{9}$/;

  const today = new Date().toISOString().split("T")[0];
  const dates = Array.from({ length: 31 }, (_, i) => `${i + 1} January 2025`);
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Full name is required.";
    if (!emailPattern.test(email)) newErrors.email = "Invalid email address.";
    if (phone && !phonePattern.test(phone)) newErrors.phone = "Invalid phone number.";
    if (!selectedDate) newErrors.selectedDate = "Please select a date.";
    if (!selectedTime) newErrors.selectedTime = "Please select a time.";
    if (!message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, selectedDate, selectedTime }),
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
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      {errors.form && (
        <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6 text-center">
          {errors.form}
        </div>
      )}
      {success && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 text-center">
          Appointment Booked Successfully! Redirecting...
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Book Your Appointment</h2>
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Phone Number (Optional)</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Select Date</label>
            <div className="grid grid-cols-7 gap-2">
              {dates.map((date) => (
                <button
                  key={date}
                  type="button"
                  className={`p-2 border rounded-md ${
                    selectedDate === date
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-blue-200"
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date.split(" ")[0]}
                </button>
              ))}
            </div>
            {errors.selectedDate && <p className="text-red-500 text-sm">{errors.selectedDate}</p>}
          </div>

          {/* Time Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Select Time</label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`p-2 border rounded-md ${
                    selectedTime === time
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-blue-200"
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            {errors.selectedTime && <p className="text-red-500 text-sm">{errors.selectedTime}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Tell us about your project or goals..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {isSubmitting ? "Submitting..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
};

export default CalendarForm;
