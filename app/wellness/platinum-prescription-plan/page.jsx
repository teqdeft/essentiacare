import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const BestChoiceLink = () => (
  <a
    href="https://BestChoiceRx.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-primary hover:underline"
  >
    BestChoiceRx.com
  </a>
);

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("platinum-prescription-plan");
}

export default function PlatinumPrescriptionPlanPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}

        <section className="relative overflow-hidden h-[460px] md:h-[520px]">
          <img
            src="/images/plans/platinum-img-1.png"
            alt="Platinum Prescription Plan"
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
                Platinum Prescription Plan
              </h1>
              <p className="text-lg md:text-xl text-white/95 font-semibold">
                $20 a month
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
                  src="/images/plans/platinum-img-3.png"
                  alt="Acute and chronic medications"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg max-w-xs">
                    <p className="text-gray-900 text-base leading-snug mb-4">
                      Don't go without the medications you need. Over 1000 acute
                      and chronic medications.
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
                  Platinum Prescription Plan
                </h2>
                <h3 className="text-xl md:text-xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                  Acute and Chronic Medication Coverage
                </h3>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  <span className="font-bold">EssentiaCare</span> is
                  bringing you the best possible prescription prices. As a
                  member of EssentiaCare, there is no need to worry about
                  the high cost of over 1,000 commonly prescribed medications.
                  That's because as a member of EssentiaCare you get to
                  take advantage of a $0 co-pay enhanced medication program that
                  includes 37 ACUTE medications and 95 ACA medications, plus
                  over 1,000 routinely prescribed chronic medications at no
                  co-pay cost to you.
                </p>

                <p className="text-gray-700 text-base leading-relaxed">
                  As a member, you will be able to print and take this formulary
                  to your physician so they can prescribe a listed medication
                  and help you stay within your budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* This Program is Easy to Use */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                {/* Left - Text */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6 uppercase tracking-wide">
                    This Program is Easy to Use
                  </h2>

                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    You will receive an email from EssentiaCare with your
                    Member/Group ID so that you can set up your account. For
                    more information click on the "download PDF Now" button
                    below.
                  </p>

                  <Button
                    variant="primary"
                    size="md"
                    href="/pdf/platinum-prescriptions.pdf"
                    target="_blank"
                    download
                  >
                    Download PDF Now
                  </Button>
                </div>

                {/* Right - Image */}
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/plans/platinum-img-2.png"
                    alt="Setting up BestChoiceRx account"
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
              Access Over 1,000 Medications
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Join the Platinum Prescription Plan and take advantage of <br /> EssentiaCare's enhanced medication program.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="accent"
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
