import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("speak-to-a-doctor");
}

const careCards = [
  {
    title: "24/7 Virtual Urgent Care",
    description:
      "24/7 access to timely medical care for non-emergency conditions, such as minor injuries, illnesses, or infections. Why take a trip to the emergency room for a non-emergency issue because no doctor's office is open or available? Virtual Urgent Care is available to you 24/7.",
  },
  {
    title: "Virtual Primary Care",
    description:
      "Choose your personal PCP (Primary Care Physician) for ongoing healthcare, visit with a dermatologist, get health risk assessments, lab tests, and routine health screenings. Focus on your overall health, prevention for chronic disease management and treatment of common conditions.",
  },
  {
    title: "Message a Specialist – Specialized Consultations",
    description:
      "Communicate via email within your portal with a host of healthcare experts for advice, guidance, recommendations, or follow-up on your health concerns, ensuring you get the support you need.",
  },
  {
    title: "Care Coordination",
    description:
      "There is a team of expert care coordinators available and ready to connect you with the right healthcare resources to support and ensure a smooth, personalized care experience.",
  },
  {
    title: "Medication Prescription Plans",
    description:
      "Why are you paying high prices for medications? Join one of EssentiaCare's prescription plans and get many urgent and chronic medications for just $0 or $5.",
  },
];

export default function SpeakToADoctorPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[500px] md:h-[580px]">
          <div
            className="absolute inset-0 z-[0] "
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/speak-to-a-doctor/bckg-therealdrjill-017-s.jpg"
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
            <div className="max-w-3xl text-white">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "serif" }}
              >
                SPEAK TO A DOCTOR
              </h1>

              <p className="text-lg md:text-xl text-white/95 font-semibold leading-relaxed max-w-2xl">
                EssentiaCare offers premiere services that are designed to meet
                your medical needs. Communication with Licensed Physicians in
                English and Spanish, 24/7, 365 days a year. The highest quality
                care for your body is offered at a flexible affordable value.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Medical Care */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6 leading-tight">
                EssentiaCare's Comprehensive Medical Care
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-4xl mx-auto">
                Our services are designed to provide convenient, accessible,
                high-quality care, personalized care anytime, anywhere, all
                aimed at improving health outcomes for individuals and their
                families.
              </p>
            </div>

            {/* Cards - First row of 3 */}
            <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-6">
              {careCards.slice(0, 3).map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-gray-200 rounded-2xl p-6 md:p-7 text-center hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Cards - Second row of 2 (centered) */}
            <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto mb-12">
              {careCards.slice(3).map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-gray-200 rounded-2xl p-6 md:p-7 text-center hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing statement */}
            <p className="text-center text-primary font-bold text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              All medical care is delivered by licensed physicians and
              healthcare professionals. All is designed to support your health
              and wellness journey at an affordable monthly value.
            </p>
          </div>
        </section>

        {/* Medical Team Image */}
        <section className="section-padding py-10 md:py-14 bg-white">
          <div className="container-main max-w-6xl">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/images/speak-to-a-doctor/speak-to-a-doctor-page-1.png"
                alt="Licensed medical team"
                className="w-full h-auto object-cover aspect-[21/9]"
              />
            </div>
          </div>
        </section>

        {/* Need Support */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/speak-to-a-doctor/medical-doctor.jpg"
                  alt="Doctor reviewing notes"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>

              {/* Right - Form (reusing ContactForm with custom title) */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                  Need Support?
                </h2>
                <ContactForm />
              </div>
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
              Talk to a Doctor Today
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Access licensed physicians 24/7 in English or Spanish — from
              anywhere, at an affordable value.
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
