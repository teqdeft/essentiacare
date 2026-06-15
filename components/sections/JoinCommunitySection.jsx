"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function JoinCommunitySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    why_join: "",
    contribution: "",
    social_handle: "",
    donation_help: "Yes, I'd love to help",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "You must agree to the terms & conditions";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://iwilltilimwell.com/backend/wp-json/custom/v1/wellness-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      console.log("response ", response);
      if (!response.ok) throw new Error("Submission failed");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        why_join: "",
        contribution: "",
        social_handle: "",
        donation_help: "Yes, I'd love to help",
        agreedToTerms: false,
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700 placeholder:text-gray-400";

  return (
    <section className="relative section-padding py-16 md:py-24 overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/join-community-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container-main max-w-6xl relative">
        {/* Heading */}
        <div className="text-center text-white mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold inline-block">
            Join the Community
          </h2>
          <div className="w-24 h-[2px] bg-primary mx-auto mt-2 mb-6" />

          <div className="max-w-4xl mx-auto space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Join the discussion and become a part of a movement that's
              transforming healthcare through faith, compassion, and access.
            </p>
            <p className="font-semibold">
              Join and get access to exclusive membership benefits and product
              discounts, referral bonuses, recognition programs, health
              education webinars, health and wellness challenges, volunteer
              opportunities, mission swag, and more.
            </p>
            <p>
              Join us in helping to break down barriers to quality care,
              ensuring that everyone, regardless of circumstance, can experience
              better health outcomes. Your involvement makes a difference – not
              just for you, but for communities everywhere.
            </p>
            <p className="font-semibold">
              A team member will carefully review your submission and will be in
              touch if you are selected to join this purpose-driven wellness
              movement.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Full Name*
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className={inputBase}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className={inputBase}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Why Join */}
            <div>
              <label
                htmlFor="why_join"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Tell us why you would like to be part of EssentiaCare:
              </label>
              <textarea
                id="why_join"
                name="why_join"
                value={formData.why_join}
                onChange={handleChange}
                rows={5}
                placeholder="Brief response – 2-3 sentences encouraged."
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Contribution */}
            <div>
              <label
                htmlFor="contribution"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                How do you see yourself contributing to this wellness community?
              </label>
              <textarea
                id="contribution"
                name="contribution"
                value={formData.contribution}
                onChange={handleChange}
                rows={5}
                placeholder="Brief response – sharing knowledge, mentorship, sponsorship, engagement, etc."
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Social Media */}
            <div>
              <label
                htmlFor="social_handle"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Social Media Handle (Optional):
              </label>
              <textarea
                id="social_handle"
                name="social_handle"
                value={formData.social_handle}
                onChange={handleChange}
                rows={5}
                placeholder="Social Media Handle (Optional):"
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Tax Deductible */}
            <div className="flex flex-col">
              <label
                htmlFor="donation_help"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Are you interested in making a tax-deductible contribution to
                help sponsor or support others on their wellness journey? Your
                generosity will allow individuals and communities less fortunate
                than yourself to access life-changing resources and care through
                EssentiaCare. Every gift makes an impact. Be a part of a
                movement that uplifts, heals, and transforms lives.
              </label>
              <select
                id="donation_help"
                name="donation_help"
                value={formData.donation_help}
                onChange={handleChange}
                className={`${inputBase} mt-auto`}
              >
                <option value="Yes, I'd love to help">
                  Yes, I’d love to help
                </option>
                <option value="Maybe later">Possibly, tell me more</option>
                <option value="Not at this time">Not at this time</option>
              </select>
            </div>
          </div>

          {/* Footer row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleChange}
                  className="w-4 h-4 accent-primary rounded"
                />
                <span>
                  I agree with your{" "}
                  <a
                    href="/terms-conditions"
                    className="text-primary underline hover:no-underline"
                  >
                    {" "}
                    terms & conditions
                  </a>
                </span>
              </label>
              {errors.agreedToTerms && (
                <p className="text-xs text-red-500 mt-1 ml-6">
                  {errors.agreedToTerms}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {submitting ? "Submitting..." : "Submit Application"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Status messages */}
          {submitStatus === "success" && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
              Thank you! Your application has been submitted. We'll be in touch
              soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
              Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
