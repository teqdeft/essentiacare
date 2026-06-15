import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoRequestForm from "@/components/sections/DemoRequestForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("request-a-demo");
}

export default function RequestADemoPage() {
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
            src="/images/contact/request-a-demo.jpg"
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
                Request a Demo
              </h1>

              <p className="text-lg md:text-xl text-white/95 font-semibold leading-relaxed max-w-xl">
                Schedule a personalized demo to see how EssentiaCare's
                virtual approach supports and makes benefits easier to
                understand and more relevant to members at every step of their
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <DemoRequestForm />
      </main>
      <Footer />
    </>
  );
}
