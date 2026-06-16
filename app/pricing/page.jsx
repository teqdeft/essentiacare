import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import PricingTable from "@/components/sections/PricingTable";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("pricing");
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[580px] md:h-[480px]">
          <div
            className="absolute inset-0 z-[0] "
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/pricing/business-8676549_1920.jpg"
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 mt-8">
                Pricing
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                EssentiaCare offers premiere services that are designed to meet
                your medical and mental health needs. We offer{" "}
                <span className="font-bold">24/7/365 Communication</span> with
                Licensed Physicians, Mental Health Specialists, & Licensed
                Veterinarians in English and Spanish. The highest quality care
                for your body, mind, and soul is offered at a flexible
                affordable value.
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

        {/* Pricing Table */}
        <PricingTable />

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
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Choose the plan that fits your needs and start your wellness
              journey today.
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
              <Button variant="white" size="lg" href="/contact">
                Contact Sales
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
