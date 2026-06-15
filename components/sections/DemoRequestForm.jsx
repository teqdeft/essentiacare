"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import axios from "axios";

const tailoredOptions = [
  "Employers/Employees",
  "Colleges/Universities",
  "Organizations/Groups/Clubs",
  "Self/Family",
  "Other",
];

const productOptions = [
  "Medical Care Coverage",
  "Behavioral Health Care Coverage",
  "TeleVet Pet Care Coverage",
  "Musculoskeletal Care Coverage",
  "Weight Loss Management/GLP-1 Coverage",
  "Other",
];

export default function DemoRequestForm() {
  const [openSection, setOpenSection] = useState("help");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    // Section 1 - How can we help
    tailoredFor: [],
    isExistingCustomer: "",

    // Section 2 - What you're looking for
    productsInterested: [],

    // Section 3 - Contact information
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    companySize: "",
    additionalInfo: "",
    receiveUpdates: "",
  });

  const toggleCheckbox = (field, value) => {
    setFormData((prev) => {
      const current = prev[field];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const continueToNext = (next) => {
    setOpenSection(next);
    // Smooth scroll to next section
    setTimeout(() => {
      const el = document.getElementById(`section-${next}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        company_fields_required: true,
        sections: {
          how_can_we_help: {
            audiences: formData.tailoredFor,
            existing_customer:
              formData.isExistingCustomer === "yes" ? "Yes" : "No",
          },
          interests: {
            products: formData.productsInterested,
          },
          contact: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone_e164_like: formData.contactNumber,
            phone_display: formData.contactNumber,
            company_name: formData.companyName,
            company_size: formData.companySize,
            notes: formData.additionalInfo,
            marketing_opt_in: formData.receiveUpdates === "yes" ? "Yes" : "No",
          },
        },
      };

      const res = await axios.post("/api/demo-request", payload);
      console.log("response from api-;--------", res);

      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="section-padding py-16 md:py-24 bg-gray-50">
        <div className="container-main max-w-2xl">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-accent" strokeWidth={3} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Your demo request has been received. Our team will reach out to
              you shortly to schedule your personalized session.
            </p>
            <Button variant="primary" size="lg" href="/">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding py-16 md:py-24 bg-gray-50">
      <div className="container-main max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Demo Request Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* SECTION 1: How can we help */}
          <FormSection
            id="help"
            title="How can we help?"
            isOpen={openSection === "help"}
            onToggle={() => toggleSection("help")}
          >
            <div className="space-y-5">
              {/* Tailored for */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  I am looking for solutions that have been tailored for:{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2.5">
                  {tailoredOptions.map((option) => (
                    <CheckboxField
                      key={option}
                      label={option}
                      checked={formData.tailoredFor.includes(option)}
                      onChange={() => toggleCheckbox("tailoredFor", option)}
                    />
                  ))}
                </div>
              </div>

              {/* Existing customer */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Are you an existing EssentiaCare customer?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2.5">
                  <RadioField
                    name="isExistingCustomer"
                    value="yes"
                    label="Yes"
                    checked={formData.isExistingCustomer === "yes"}
                    onChange={handleChange}
                  />
                  <RadioField
                    name="isExistingCustomer"
                    value="no"
                    label="No"
                    checked={formData.isExistingCustomer === "no"}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={() => continueToNext("products")}
                >
                  Continue
                </Button>
              </div>
            </div>
          </FormSection>

          {/* SECTION 2: Products interested in */}
          <FormSection
            id="products"
            title="Let us know what you're looking for so we can get started"
            isOpen={openSection === "products"}
            onToggle={() => toggleSection("products")}
          >
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Which products/solutions are you interested in?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2.5">
                  {productOptions.map((option) => (
                    <CheckboxField
                      key={option}
                      label={option}
                      checked={formData.productsInterested.includes(option)}
                      onChange={() =>
                        toggleCheckbox("productsInterested", option)
                      }
                    />
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={() => continueToNext("contact")}
                >
                  Continue
                </Button>
              </div>
            </div>
          </FormSection>

          {/* SECTION 3: Contact information */}
          <FormSection
            id="contact"
            title="Best Contact information"
            isOpen={openSection === "contact"}
            onToggle={() => toggleSection("contact")}
          >
            <div className="space-y-4">
              <InputField
                label="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                required
              />

              <InputField
                label="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                required
              />

              <InputField
                label="Email (Work Email Preferred)"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email (Work Email Preferred)"
                required
              />

              <InputField
                label="Contact Number"
                name="contactNumber"
                type="tel"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Phone number must be 7-11 digits."
              />

              <InputField
                label="Company name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company name"
              />

              <InputField
                label="Company size"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                placeholder="Company size"
              />

              <InputField
                label="Any additional information you would like to share with us?"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Any additional information you would like to share with us?"
              />

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Would you like to recieve more information and updates from
                  EssentiaCare? <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2.5">
                  <RadioField
                    name="receiveUpdates"
                    value="yes"
                    label="Yes"
                    checked={formData.receiveUpdates === "yes"}
                    onChange={handleChange}
                  />
                  <RadioField
                    name="receiveUpdates"
                    value="no"
                    label="No"
                    checked={formData.receiveUpdates === "no"}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </FormSection>
        </form>
      </div>
    </section>
  );
}

/* ===== Sub Components ===== */

function FormSection({ id, title, isOpen, onToggle, children }) {
  return (
    <div
      id={`section-${id}`}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
    >
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors",
          isOpen ? "bg-gray-50" : "bg-white hover:bg-gray-50",
        )}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-900">{title}</h3>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gray-600 shrink-0 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div className="px-6 pt-2 pb-6 border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  );
}

function CheckboxField({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <div className="relative shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <div
          className={cn(
            "w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center",
            checked
              ? "bg-primary border-primary"
              : "bg-white border-gray-300 group-hover:border-primary/50",
          )}
        >
          {checked && (
            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
          )}
        </div>
      </div>
      <span className="text-base text-gray-700 select-none">{label}</span>
    </label>
  );
}

function RadioField({ name, value, label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <div className="relative shrink-0">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <div
          className={cn(
            "w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center",
            checked
              ? "border-primary"
              : "border-gray-300 group-hover:border-primary/50",
          )}
        >
          {checked && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
        </div>
      </div>
      <span className="text-base text-gray-700 select-none">{label}</span>
    </label>
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-200 placeholder:text-gray-400"
      />
    </div>
  );
}
