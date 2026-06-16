import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("speak-to-a-therapist");
}

const SupportEmail = () => (
  <a
    href="mailto:support@iwilltilimwell.com"
    className="text-primary hover:underline"
  >
    support@iwilltilimwell.com
  </a>
);

export default function SpeakToATherapistPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[600px] md:h-[540px]">
          <div
            className="absolute inset-0 z-[0] "
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/speak-to-a-therapist/talk-to-a-therapist-login-page.jpg"
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

          <div className="relative z-[3] h-full container-main section-padding flex flex-col justify-end pb-10 md:pb-12">
            <div className="max-w-3xl text-white">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "serif" }}
              >
                Counseling Care Services
              </h1>

              <p className="text-lg md:text-xl text-white/95 font-semibold leading-relaxed max-w-2xl">
                EssentiaCare offers premiere services that are designed to meet
                your needs for mental wellbeing. Communication with Mental
                Health Counselors, Licensed Therapists, Licensed Psychologists,
                Board Certified, Licensed Psychiatrists in both English and
                Spanish. The highest quality care for your mental wellbeing is
                offered at a flexible affordable value.
              </p>
            </div>
          </div>
        </section>

        {/* Speak To A Therapist */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 uppercase tracking-wide inline-block border-b-2 border-primary pb-2 mb-6">
                Speak To A Therapist
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-4xl mx-auto">
                <span className="font-bold text-gray-900">EssentiaCare</span>{" "}
                offers convenient, accessible, and personalized care designed to
                support your mental well-being and promote good mental health.
              </p>
            </div>

            {/* 3 Cards */}
            <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
              {/* In-The-Moment Care */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-7 text-center hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-4 leading-snug">
                  In-The-Moment Care
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  EssentiaCare offers accessible, compassionate virtual
                  counseling to support your mental well-being, right when you
                  need it most. Our master's-level counselors provide real-time,{" "}
                  <span className="font-bold text-gray-900">
                    "In-The-Moment" support
                  </span>{" "}
                  for stress, anxiety, depression, and more, ensuring you
                  receive confidential, empathetic care whenever life feels
                  overwhelming.
                </p>
              </div>

              {/* Short-Term Therapy */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-7 text-center hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-4 leading-snug">
                  Short-Term Therapy
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Members can receive{" "}
                  <span className="font-bold text-gray-900">
                    clinically determined, weekly therapy sessions or opt for up
                    to six sessions
                  </span>{" "}
                  with a licensed master's-level therapist or psychologist. This
                  solution-focused care is designed to help you build resilience
                  and navigate life's challenges - all included at one low,
                  monthly cost.
                </p>
              </div>

              {/* Long-Term Therapy */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-7 text-center hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-4 leading-snug">
                  Long-Term Therapy
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  For ongoing support,{" "}
                  <span className="font-bold text-gray-900">
                    at a discounted rate
                  </span>
                  , our members may choose to work with a{" "}
                  <span className="font-bold text-gray-900">
                    psychologist for long-term therapy
                  </span>{" "}
                  or a{" "}
                  <span className="font-bold text-gray-900">
                    psychiatrist for long-term support and medication management
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Closing statements */}
            <div className="text-center space-y-4 max-w-4xl mx-auto">
              <p className="text-primary font-bold text-lg md:text-xl leading-relaxed">
                This comprehensive, flexible approach ensures access to
                high-quality mental health care that's affordable, convenient,
                and available from the comfort of your home.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                You can also sign up for our Prescription Plan PC-B to get some
                of your{" "}
                <span className="font-bold text-gray-600">
                  psychotropic medications at $5.00 each.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Team Image */}
        <section className="section-padding py-10 md:py-14 bg-white">
          <div className="container-main max-w-5xl">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/images/speak-to-a-therapist/counselors-1.png"
                alt="Licensed therapist team"
                className="w-full h-auto object-cover aspect-[21/9]"
              />
            </div>
          </div>
        </section>

        {/* Need Support */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left - Image */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/speak-to-a-therapist/pexels-karolina-new-v1.jpg"
                  alt="Therapist providing support"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>

              {/* Right - Form + Email */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                  Need Support?
                </h2>

                <ContactForm />

                {/* Email below form */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <SupportEmail />
                  </div>
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
              Talk to a Therapist Today
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Access licensed mental health professionals 24/7 in English or
              Spanish — from the comfort of your home.
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
