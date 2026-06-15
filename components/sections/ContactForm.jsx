"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const TermsLink = () => (
  <a href="/terms" className="font-semibold text-primary hover:underline">
    terms &amp; conditions.
  </a>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreed) return;

    setLoading(true);

    try {
      const res = await fetch(
        "https://iwilltilimwell.com/backend/wp-json/custom/v1/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          agreed: false,
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(data?.message || "Something went wrong. Please try again.");
        setTimeout(() => setError(""), 4000);
      }
    } catch (err) {
      setError("Unable to reach the server. Please check your connection.");
      setTimeout(() => setError(""), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-7 md:p-8">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
        Leave us a <span className="text-primary font-script">Message</span>
      </h3>

      {submitted ? (
        <div className="py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-accent" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            Message Sent!
          </h4>
          <p className="text-gray-600 text-sm">
            Thanks for reaching out. We'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-gray-400"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-gray-400"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            required
            className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-gray-400 resize-none"
          />

          <label className="flex items-start gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary/20 cursor-pointer accent-primary"
            />
            <span className="text-xs text-gray-600 leading-relaxed">
              I agree with your <TermsLink />
            </span>
          </label>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              disabled={!formData.agreed || loading}
              size="md"
              className="w-full sm:w-auto"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
