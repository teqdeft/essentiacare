import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQTabs from "@/components/sections/FAQTabs";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
export async function generateMetadata() {
  return getPageSEO("faq");
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[440px] md:h-[500px]">
          <div
            className="absolute inset-0 z-[0] "
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/faq/faq-banner-v1.png"
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
                Frequently Asked Questions
              </h1>

              <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 max-w-xl">
                Have questions? We created this space to give clear answers.
                Whether you want to understand how care works at iWILL 'til
                i'mWELL or what to expect from Essential Care, you will find
                helpful guidance here. Our goal is to support your next step
                toward feeling better - without confusion.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="white"
                  size="md"
                  href="https://app.iwilltilimwell.com/login"
                >
                  Login
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  href="https://app.iwilltilimwell.com/register"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Tabs */}
        <FAQTabs />
      </main>
      <Footer />
    </>
  );
}
