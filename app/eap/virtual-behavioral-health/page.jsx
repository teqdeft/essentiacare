import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("virtual-behavioral-health");
}

const offers = [
  {
    title: "Short Term Virtual Counseling & On-Demand Support",
    description:
      "Employees can connect with licensed mental health therapists and psychologists.",
  },
  {
    title:
      "Long Term Therapy Support with Discounted Psychology & Psychiatry Services",
    description:
      "Accessible ongoing mental health care with psychologists and psychiatrists.",
  },
  {
    title: "Mental Health Assessments & Tracking Tools",
    description:
      "Early intervention tools for assessment and improved resilience.",
  },
  {
    title: "Personalized Journals, Daily Affirmations & Voice Recordings",
    description: "Recordings and affirmations encouraging positive self-care.",
  },
];

const impacts = [
  {
    title: "Enhanced Productivity.",
    description: "Mentally healthy employees are more focused and efficient.",
  },
  {
    title: "Reduced Absenteeism & Turnover.",
    description:
      "Supporting mental health leads to fewer sick days and higher retention.",
  },
  {
    title: "Stronger Employee Engagement.",
    description:
      "A workplace that prioritizes wellness fosters motivation and loyalty.",
  },
  {
    title: "Healthier Workplace Culture.",
    description: "Creating a supportive, high-performing environment.",
  },
  {
    title: "Cost Savings for Employers.",
    description: "Reduced healthcare costs and improved workforce performance.",
  },
];

export default function VirtualBehavioralHealthPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[480px] md:h-[500px]">
          <div
            className="absolute inset-0 z-[0] "
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/eap/vbh-shutterstock_2485558515-small-1.jpg"
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
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.05] tracking-tight mb-5">
                Virtual Behavioral Health
              </h1>

              <p className="text-xl md:text-xl text-white/95 font-semibold mb-7 max-w-2xl leading-relaxed">
                EssentiaCare Empowers Employers, Transforms Workplaces, Supports
                Employee Well-Being and Strengthens Business Success.
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

        {/* Stats Callout */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-4xl">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full hidden md:block" />
              <p className="text-xl md:text-xl text-gray-700 leading-relaxed md:pl-6">
                <span className="font-bold text-gray-900">
                  75% of employees report experiencing high levels of
                  work-related stress
                </span>{" "}
                (Mental Health America, 2024), yet only{" "}
                <span className="font-bold text-gray-900">
                  43% have access to employer-provided mental health coverage
                </span>{" "}
                (APA, 2023).{" "}
                <span className="font-bold text-gray-900">
                  Investing in mental health delivers a proven ROI of 150% to
                  400%
                </span>{" "}
                (Deloitte).
              </p>
            </div>
          </div>
        </section>

        {/* EssentiaCare Offers Section */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Offers List */}
              <div>
                <div className="">
                  <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                    What We Offer
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl mb-3 font-bold text-gray-900 inline-block border-b-2 border-primary pb-2">
                  EssentiaCare{" "}
                  <span className="text-primary font-script">Offers</span>
                </h2>

                <ul className="space-y-5">
                  {offers.map((offer) => (
                    <li
                      key={offer.title}
                      className="flex gap-3 items-start group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base">
                        <span className="font-bold text-gray-900">
                          {offer.title}:{" "}
                        </span>
                        {offer.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/eap/vbh-pic1 (1).png"
                    alt="Mental health specialist"
                    className="w-full h-auto object-cover aspect-[4/5]"
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

        {/* Impact Section */}
        <section className="section-padding py-16 md:py-20 bg-gray-50">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/eap/vbh-eap-counseling-page.jpg"
                    alt="Employee wellness in the workplace"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Right - Impact List */}
              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                    Business Impact
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 leading-tight">
                    Impact of EssentiaCare on{" "}
                    <span className="text-primary font-script">Employees</span>
                  </h2>
                </div>

                <ul className="space-y-4">
                  {impacts.map((impact) => (
                    <li
                      key={impact.title}
                      className="flex gap-3 items-start group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base pt-0.5">
                        <span className="font-bold text-gray-900">
                          {impact.title}
                        </span>{" "}
                        {impact.description}
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
              Invest in Mental Wellness
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Support your employees' well-being and strengthen your business
              success with comprehensive virtual behavioral health services.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" size="lg" href="/request-a-demo">
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
