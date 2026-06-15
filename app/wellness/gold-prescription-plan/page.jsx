import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ShieldCheck, Check } from "lucide-react";
import { Pill } from "lucide-react";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("gold-prescription-plan");
}

const programCoversCol1 = [
  "Allergy",
  "Arthritis/Pain",
  "Asthma",
  "Blood Pressure/Heart",
];
const programCoversCol2 = [
  "Cholesterol",
  "Cold/Cough",
  "Diabetes",
  "Men's/Women's Health",
];
const programCoversCol3 = [
  "Mental Health",
  "Pink Eye",
  "Poison Ivy",
  "and More!",
];

const drugsLikeCol1 = [
  "Amoxicillin",
  "Azithromycin (Z-Pak)",
  "Cialis (generic)",
];
const drugsLikeCol2 = ["Glipizide", "Omeprazole", "Sprintec"];
const drugsLikeCol3 = ["Viagra (generic)", "Warfarin", "and much more!"];

export default function GoldPrescriptionPlanPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[460px] md:h-[520px]">
          <img
            src="/images/plans/medications.jpg"
            alt="Gold Prescription Plan"
            className="absolute inset-0 w-full h-full object-cover opacity-70 z-[1]"
          />
          <div
            className="absolute inset-0 z-[0]"
            style={{
              background: "black",
            }}
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
                Prescriptions for Primary Care Medications
              </h1>
              <p className="text-lg md:text-xl text-white/95 font-semibold">
                Easiest Way to Save on Your Medications
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
                  src="/images/plans/commonly-prescribed-medications.png"
                  alt="Pharmacy savings"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg max-w-xs">
                    <p className="text-gray-900 text-base leading-snug mb-4">
                      Prescription Plan PC-B comes with 200 chronic medications
                      at $5 each PLUS all of Prescription Plan UC-A.
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
                <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-1">
                  Prescription Plan PC-B
                </h1>
                <h1 className="text-xl md:text-xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                  Chronic Medication Subscription Program
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
                  Consider us your Pharmacy Savings Advocate.
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  As a subscriber to{" "}
                  <span className="font-bold">EssentiaCare</span>,{" "}
                  <span className="text-primary font-semibold">
                    you won’t have to worry about the expensive cost of 200
                    common medications.
                  </span>
                </p>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  <span className="font-bold">EssentiaCare</span> has created a{" "}
                  {/* <span className="text-primary font-semibold">
                    Medication Subscription Program{" "}
                  </span>{" "} */}
                  medication subscription program that provides 200 meds at just
                  $5.00, plus great discounts on all other medications.
                </p>

                <p className="text-gray-700 text-base leading-relaxed">
                  Consider us your pharmacy savings advocate. Our live Customer
                  Care team is here to help you find the lowest prices on
                  medications available.
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
                {[
                  ...programCoversCol1,
                  ...programCoversCol2,
                  ...programCoversCol3,
                ].map((item) => (
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
                    and if on the formulary, you only pay $5.00 per medication..
                    If it is not on the $5.00 formulary, your out-of-pocket cost
                    will be based on a deeply discounted price.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    All future chronic or recurring medications will be mailed
                    directly to you for just $15 (see subscription details).
                    Plus, get discounts on diabetic supplies, pet meds, and
                    other prescription medication saving options.
                  </p>

                  <Button
                    variant="primary"
                    size="md"
                    href="/pdf/gold-prescriptions.pdf"
                    target="_blank"
                    download
                  >
                    Download PDF Now
                  </Button>
                </div>

                {/* Right - Image */}
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/plans/prescription-discount-card.png"
                    alt="Prescription Discount Card"
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
              Save on Chronic Medications Today
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Join the Gold Prescription Plan and access 200 common medications.
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
