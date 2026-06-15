import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("contact-us");
}

const tailoredPoints = [
  "Increase healthcare benefits awareness, utilization, and engagement.",
  "24/7/365 dedicated in-house bilingual Care Coordination team to support referrals to in-network specialists - all digitally optimized.",
  "Dedicated client success team to assist you every step of the way.",
];

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[500px] md:h-[560px]">
          <div
            className="absolute inset-0 z-[0] "
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/contact/bckg-therealdrjill-004-s.jpg"
            alt="Medical team"
            className="absolute inset-0 w-full h-full object-cover opacity-70 z-[1]"
          />
          <Link
            href="/"
            className="absolute top-6 left-6 z-[4] inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium hover:bg-white/25 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          <div className="relative z-[3] h-full container-main section-padding flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                Contact Us
              </h1>

              <p className="text-lg md:text-xl text-white/95 font-medium leading-relaxed mb-8 max-w-2xl">
                EssentiaCare offers premiere services that are designed to meet
                your medical and mental health needs. Communication with a host
                of specialists, including Licensed Physicians, Licensed Mental
                Health Therapists, Licensed Veterinarians and Care Coordinators
                in English and Spanish, 24/7, 365 days a year. The highest
                quality care for your body, mind, and soul is offered at a
                flexible affordable value.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="white"
                  size="lg"
                  href="https://app.essentiacare.ai/login"
                >
                  Login
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  href="https://app.essentiacare.ai/register"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Care + Form */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left - Tailored Virtual Care */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5 leading-tight">
                  A Tailored Virtual Care Experience{" "}
                  <span className="text-primary font-script">Just for You</span>
                </h2>

                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                  Schedule a personalized demo to learn how EssentiaCare's
                  virtual platform can support you and your company's journey to
                  sustained health.
                </p>

                <ul className="space-y-4">
                  {tailoredPoints.map((point, i) => (
                    <li key={i} className="flex gap-3 items-start group">
                      <div className="w-7 h-7 rounded-lg bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base pt-0.5">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          className="relative overflow-hidden section-padding py-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
          }}
        >
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none">
            <img
              src="/images/logo-favi.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative container-main text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Let's Start the Conversation
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Whether you have questions, need a demo, or want to learn more,
              our team is here to help you every step of the way.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="primary"
                size="lg"
                href="https://app.essentiacare.ai/register"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="white" size="lg" href="/pricing">
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
