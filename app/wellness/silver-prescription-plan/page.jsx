import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { CheckSquare, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("silver-prescription-plan");
}

const programCovers = [
  "Antibiotics",
  "Ear Infections",
  "Bronchitis",
  "Asthma",
  "Cough",
];

const drugsLikeCol1 = [
  "Amoxicillin",
  "Azithromycin (Z–pak)",
  "Ciprofloxacin",
  "Eye Infection/Pink Eye",
  "Fever",
];
const drugsLikeCol2 = [
  "Headache/Migraine",
  "Pain Management",
  "Hydrocortisone",
  "Meclizine",
  "Naproxen",
];
const drugsLikeCol3 = [
  "Poison Ivy",
  "Sore Throat/Strep",
  "Prednisone",
  "Tessalon",
  "and more!",
];

export default function SilverPrescriptionPlanPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[460px] md:h-[520px]">
          <div
            className="absolute inset-0 z-[0] "
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/plans/virtual-primary-care-medications-banner-min.png"
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4"
                style={{ fontFamily: "serif" }}
              >
                Prescription Plan for Urgent Care Medications
              </h1>
              <p className="text-lg md:text-xl text-white/95 font-semibold">
                $0 Cost Medication Program
              </p>
            </div>
          </div>
        </section>

        {/* Intro: Image + Description */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image with overlay card */}
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/plans/acute-medication-v1.png"
                  alt="Pharmacy savings"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg max-w-xs">
                    <p className="text-gray-900 font-semibold text-xl leading-snug mb-4">
                      Thirty-seven common medications at $0 each.
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      href="https://app.essentiacare.ai/register"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right - Text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  Prescription Plan UC-A
                </h2>
                <h3 className="text-xl md:text-xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                  Urgent Care Medications
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  As a subscriber to{" "}
                  <span className="font-bold">EssentiaCare</span>,{" "}
                  <span className="text-primary font-semibold">
                    you won't have to worry about the expensive cost of 37
                    commonly prescribed medications.
                  </span>
                </p>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  That's because
                  <span className="font-bold">EssentiaCare</span> has created an
                  Acute Medication Subscription Program that provides 37 meds at
                  no charge just for you, plus great discounts on all other
                  medications.
                </p>

                <p className="text-gray-700 text-base leading-relaxed">
                  Our live Customer Care team is also here to help you find the
                  lowest prices on medications available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Program Covers + Drugs Like */}
        <section className="section-padding py-16 md:py-20 bg-gray-50">
          <div className="container-main max-w-5xl">
            {/* Our Program Covers */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-8">
                Our Program Covers:
              </h2>

              <div className="flex flex-wrap gap-2.5">
                {programCovers.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-gray-200 text-base text-gray-700 font-medium hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Drugs Like */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-8">
                Drugs Like:
              </h2>

              <div className="flex flex-wrap gap-2.5">
                {[...drugsLikeCol1, ...drugsLikeCol2, ...drugsLikeCol3].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-gray-200 text-base text-gray-700 font-medium hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* The Program is Easy to Use */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                {/* Left - Text */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                    The Program is Easy to Use:
                  </h2>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    You will receive an electronic member card that can be
                    presented at any retail pharmacy (over 70,000 in network)
                    and if on the formulary, you pay nothing. If it is not on
                    the $0 formulary, your out-of-pocket cost will be based on a
                    deeply discounted price.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    Present your Rx Card to the pharmacy of your choice. Your Rx
                    Card will display your BIN, Group Number and PCN to present
                    to the pharmacist. You will pay nothing at the pharmacy.
                  </p>

                  <Button
                    variant="outline"
                    size="md"
                    href="/pdf/silver-prescriptions.pdf"
                    target="_blank"
                    download
                  >
                    Download PDF Now
                  </Button>
                </div>

                {/* Right - Image */}
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/plans/receive-an-electronic-member-card.png"
                    alt="Rx Card on phone"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
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
              Start Saving on Prescriptions Today
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Join the Silver Prescription Plan and access 37 common medications
              at just $10 each.
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
