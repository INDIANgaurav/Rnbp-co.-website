"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const services = [
  "Income Tax",
  "GST Compliance",
  "Audit & Assurance",
  "Company Registration",
  "Business Advisory",
  "Accounting Services",
  "Company Law Compliance",
  "Financial Planning",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#0a1628] p-12 text-center">
        <div className="w-16 h-16 bg-[#c9a84c]/20 flex items-center justify-center mx-auto mb-6">
          <Send size={28} className="text-[#c9a84c]" />
        </div>
        <h3 className="text-white text-2xl font-bold mb-3">
          Message Received!
        </h3>
        <p className="text-white/60 font-sans">
          Thank you for reaching out. Our team will get back to you within 24
          business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-[#0a1628] text-sm font-semibold mb-2 font-sans"
          >
            Full Name <span className="text-[#c9a84c]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full bg-white border border-gray-200 px-4 py-3 text-[#0a1628] text-sm font-sans focus:outline-none focus:border-[#c9a84c] transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-[#0a1628] text-sm font-semibold mb-2 font-sans"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full bg-white border border-gray-200 px-4 py-3 text-[#0a1628] text-sm font-sans focus:outline-none focus:border-[#c9a84c] transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[#0a1628] text-sm font-semibold mb-2 font-sans"
        >
          Email Address <span className="text-[#c9a84c]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full bg-white border border-gray-200 px-4 py-3 text-[#0a1628] text-sm font-sans focus:outline-none focus:border-[#c9a84c] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-[#0a1628] text-sm font-semibold mb-2 font-sans"
        >
          Service Required
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-white border border-gray-200 px-4 py-3 text-[#0a1628] text-sm font-sans focus:outline-none focus:border-[#c9a84c] transition-colors"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[#0a1628] text-sm font-semibold mb-2 font-sans"
        >
          Message <span className="text-[#c9a84c]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements..."
          className="w-full bg-white border border-gray-200 px-4 py-3 text-[#0a1628] text-sm font-sans focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#0a1628] text-white py-4 font-bold text-sm tracking-wide hover:bg-[#c9a84c] hover:text-[#0a1628] transition-colors duration-200 font-sans flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Message'}
        <Send size={16} />
      </button>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm font-sans">
          {error}
        </div>
      )}
    </form>
  );
}
