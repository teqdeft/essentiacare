import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQTabs from "@/components/sections/FAQTabs";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("faq");
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden h-[440px] md:h-[520px]"
          style={{
            background: "linear-gradient(135deg, #5a3f73 0%, #6d4f85 100%)",
          }}
        >
          {/* Banner image (woman, right side) */}
          <img
            src="/images/faq/faq-banner-v1.png"
            alt="Woman thinking about her health questions"
            className="absolute right-4 top-2 h-full w-auto object-cover object-top z-[1]"
            // className="absolute inset-0 w-full h-full object-cover object-right z-0"
          />
          {/* Purple gradient overlay for text contrast on the left */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(90deg, rgba(74,50,96,0.85) 0%, rgba(74,50,96,0.55) 40%, rgba(74,50,96,0.1) 65%, rgba(74,50,96,0) 80%)",
            }}
          />

          <div className="relative z-[3] h-full container-main section-padding flex flex-col justify-center">
            <div className="max-w-2xl text-white font-serif">
              <h1 className="font-serif font-medium text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
                Frequently Asked Questions
              </h1>

              <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 max-w-xl">
                Have questions? We created this space to give clear answers.
                Whether you want to understand how care works at EssentiaCare or
                what to expect from Essential Care, you will find helpful
                guidance here. Our goal is to support your next step toward
                feeling better - without confusion.
              </p>

              <div className="flex flex-wrap gap-4 font-body">
                <Link
                  href="https://app.essentiacare.ai/login"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-[#9d83b8] hover:bg-[#8e74aa] text-white font-semibold text-sm transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  href="https://app.essentiacare.ai/register"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-[#7e5f9b] hover:bg-[#6d4f85] text-white font-semibold text-sm transition-all duration-300"
                >
                  Get Started
                </Link>
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
