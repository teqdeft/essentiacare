import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("speak-to-a-veterinarian");
}

const vetCards = [
  {
    title: "Common Health Concerns",
    description:
      "Licensed veterinarians address routine conditions such as skin disorders, ear infections, gastrointestinal issues, and minor injuries through secure virtual consultations.",
  },
  {
    title: "Behavioral Issues",
    description:
      "Clinical guidance is provided for challenges including anxiety, aggression, compulsive behaviors, and training-related concerns to support improved outcomes.",
  },
  {
    title: "General Wellness",
    description:
      "Preventive care recommendations and wellness assessments help ensure optimal health, early detection, and proactive management of potential risks.",
  },
  {
    title: "Advice on Nutrition",
    description:
      "Evidence-based dietary recommendations tailored to species, age, weight, and medical conditions promote balanced nutrition and long-term well-being.",
  },
  {
    title: "Advice on Treatment Plans",
    description:
      "Veterinarians review treatment options, provide follow-up guidance, and support continuity of care for acute and chronic conditions.",
  },
  {
    title: "Expert Guidance on Many Other Issues",
    description:
      "From medication compliance to lifestyle adjustments, veterinarians offer clinically sound advice to support comprehensive pet health.",
  },
];

export default function SpeakToAVeterinarianPage() {
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
            src="/images/speak-to-a-veterinarian/speak-to-a-vet-v1.jpg"
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

          <div className="relative z-[3] h-full container-main section-padding flex flex-col justify-center items-center text-center">
            <div className="max-w-3xl text-white">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "serif" }}
              >
                TeleVet Pet Health Care
              </h1>

              <p className="text-lg md:text-xl text-white/95 font-semibold leading-relaxed max-w-2xl mx-auto">
                EssentiaCare offers premiere services that are designed to meet
                your pet health care needs. Communication with Licensed
                Veterinarians in English and Spanish, 24/7, 365 days a year. The
                highest quality care for your pets is offered at a flexible
                affordable value.
              </p>
            </div>
          </div>
        </section>

        {/* Speak to a Veterinarian */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6 leading-tight uppercase tracking-wide">
                Speak to a Veterinarian
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-4xl mx-auto mb-3">
                <span className="font-bold">EssentiaCare</span> offers
                convenient Virtual Veterinary Services to ensure your pets
                receive the care they deserve.
              </p>
              <p className="text-gray-900 font-semibold text-base md:text-lg">
                Our Licensed Veterinarians provide virtual consultations for
              </p>
            </div>

            {/* Cards - 3x2 grid */}
            <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
              {vetCards.map((card) => (
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
            <div className="text-center text-primary font-semibold text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-1">
              <p>
                When you need preventive care, our team is here to support you
                and your furry family members.
              </p>
              <p>
                We are accessible whenever you need us, right from the comfort
                of your home.
              </p>
            </div>
          </div>
        </section>

        {/* Veterinary Team Image */}
        <section className="section-padding py-10 md:py-14 bg-white">
          <div className="container-main max-w-6xl">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/images/speak-to-a-veterinarian/vets-1.png"
                alt="Licensed veterinary team with pets"
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
                  src="/images/speak-to-a-veterinarian/smiling-vet.jpg"
                  alt="Veterinarian examining a dog"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>

              {/* Right - Form */}
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
              Care for Your Pet, Anytime
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Connect with licensed veterinarians 24/7 in English or Spanish —
              from the comfort of your home, at an affordable value.
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
