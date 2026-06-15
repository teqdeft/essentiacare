import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("virtual-primary-care");
}

const services = [
  {
    title: "Urgent Care",
    description:
      "24/7/365 on-demand access to licensed physicians for diagnosis, treatment, and medication as needed.",
  },
  {
    title: "Primary Care",
    description:
      "Select a Primary Care Physician to manage routine and on-going health conditions.",
  },
  {
    title: "Integrated Labs / Health Risk Assessments",
    description:
      "An annual comprehensive metabolic panel and a Risk Assessment at every visit.",
  },
  {
    title: "Dermatology Visits",
    description:
      "A licensed dermatologist will review your profile, make a diagnosis and provide a treatment plan.",
  },
  {
    title: "Behavioral Health Package",
    description:
      "Access behavioral health tools and professionals for short & long term care when needed most.",
  },
  {
    title: "Care Coordination",
    description:
      "A 24/7/365 Dedicated Care team is ready to assist with all things related to healthcare.",
  },
];

const benefits = [
  "No consultation fees.",
  "Inclusive of family members living within the same household.",
  "Allow family members or specialists to join scheduled video appointments.",
  "Build a relationship with a provider of your choice who takes the time to get to know you.",
  "Schedule routine checkups, order labs, refill medications and monitor key vitals virtually.",
  "24/7 direct access to a collaborative care team for unlimited ongoing health care needs.",
];

const integratedPoints = [
  "Through combined services, unknown conditions are uncovered and millions can be saved.",
  "Integration of all services for a continuity of care.",
  "Immediate savings with redirection of healthcare and long-term savings from continued care.",
  "24/7/365 collaborative care team to support treatment adherence and medication management.",
];

export default function VirtualMedicalCarePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[420px] md:h-[480px]">
          <img
            src="/images/eap/vpc-shutterstock_ew.jpg"
            alt="Virtual Primary Care"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 z-[0] "
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/eap/vpc-shutterstock_ew.jpg"
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

          <div className="relative z-[3]  h-full container-main section-padding flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-5">
                Virtual Primary Care
              </h1>

              <p className="text-xl md:text-xl text-white/95 font-semibold mb-7">
                Healthcare the way you and your employees want it.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button variant="white" size="lg" href="/request-a-demo">
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 360 Degree Intro + Services */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xl md:text-xl text-gray-700 leading-relaxed">
                360 degree care designed with you and your employees in mind.
              </p>
              <p className="text-xl md:text-xl text-gray-700 leading-relaxed mt-1">
                From medical care to behavioral health care and everything in
                between.
              </p>
              <p className="text-xl md:text-xl font-bold text-primary mt-3">
                We are here for you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {services.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white rounded-2xl border border-gray-100 p-5 md:p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex gap-4 items-start"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">
                    <span className="font-bold text-gray-900">
                      {item.title}:{" "}
                    </span>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding py-16 md:py-20 bg-gray-50">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Benefits List */}
              <div>
                <div className="">
                  <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 inline-block border-b-2 border-primary pb-2">
                  Benefits
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-3 items-start group">
                      <div className="w-7 h-7 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base pt-0.5">
                        {benefit}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/eap/vpc-cost-savings-for-newv1.png"
                    alt="Virtual consultation with doctor"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                {/* Decorative lotus accent */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20 pointer-events-none hidden lg:block">
                  <img
                    src="/images/logo-favi.svg"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrated Primary Care Section */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/eap/vpc-iwilltilimwell-colors-v1.jpg"
                    alt="Happy couple with integrated primary care"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                    Integrated Care
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 leading-tight">
                    Integrated Primary Care That Will Make You Smile
                  </h2>
                </div>

                <ul className="space-y-4">
                  {integratedPoints.map((point, i) => (
                    <li key={i} className="flex gap-3 items-start group">
                      <div className="w-7 h-7 rounded-lg bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base pt-0.5">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button variant="primary" size="lg" href="/faq">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
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
              Healthcare Your Way
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Give your employees convenient, comprehensive virtual primary care
              — and experience healthcare the way it should be.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button variant="white" size="lg" href="/request-a-demo">
                Request a Demo
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
