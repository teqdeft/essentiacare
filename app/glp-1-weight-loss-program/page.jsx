import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("glp-1-weight-loss-program");
}

const includesItems = [
  "24/7/365 Access to Clinical Support Team.",
  "GLP-1 Medications & other weight loss medications.",
  "Personalized Treatment Plans.",
  "Initial Assessment.",
  "Lab Testing.",
  "Nutrition & Dietary Coaching Support.",
  "Goal Setting & Educational Resources.",
];

const steps = [
  {
    number: "01",
    title: "Request Consultation & Complete Questionnaire",
    description: (
      <>
        Select <span className="font-bold">Get Started</span> to complete your
        qualifying questionnaire and request a consultation.
      </>
    ),
  },
  {
    number: "02",
    title: "Clinician Consultation & Complete Labs",
    description:
      "Members will complete their consultation with the clinician and qualified lab process for approval.",
  },
  {
    number: "03",
    title: "Rx Approval Process",
    description: "The Clinician will review completed labs and approve Rx.",
  },
  {
    number: "04",
    title: "Monthly Program Begins",
    description:
      "Members will receive their medications through our prescription delivery program and begin their monthly consultation requirements as they seamlessly work towards their weight loss success.",
  },
];

const whyUseItems = [
  {
    bold: "Clinical Support Team:",
    text: " 24/7/365 Access.",
  },
  {
    bold: "Proven Weight Loss Success:",
    text: " Studies show that GLP-1 medications can help individuals lose up to 15% of their starting body weight within 6 to 12 months.",
  },
  {
    bold: "Enhanced Appetite Control:",
    text: " GLP-1 medications help regulate appetite by promoting feelings of fullness and reducing overall calorie intake without the constant battle against hunger.",
  },
  {
    bold: "Improved Blood Sugar Levels:",
    text: " These medications help stabilize blood sugar levels, preventing spikes and crashes that often lead to cravings and overeating.",
  },
];

const differentItems = [
  {
    bold: "Customized individual plans",
    text: " designed to fit your unique weight loss needs, offering flexibility and a personalized approach.",
  },
  {
    bold: "A comprehensive and tailored treatment plan",
    text: " that incorporates GLP-1 therapy, nutrition, and dietitian coaching, ensuring that every aspect of your well-being is considered. Our clinical support team will review your medical history and potential drug interactions.",
  },
];

export default function GLP1Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[500px] md:h-[560px]">
          <div
            className="absolute inset-0 z-[0] "
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/glp-1-weight-loss-program/weight-loss-program-min.png"
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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-sm font-medium mb-5">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Weight Loss Program
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-5">
                GLP-1 Weight Loss Management Program
              </h1>

              <p className="text-lg md:text-xl text-white/95 font-semibold leading-relaxed mb-7">
                EssentiaCare's Guided Steps to Lasting Weight Loss
              </p>

              <Button variant="accent" size="lg" href="/request-a-demo">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* What is EssentiaCare Weight Loss Program */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image with overlay card */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/glp-1-weight-loss-program/weight-loss-success-new.png"
                    alt="GLP-1 Weight Loss Program"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>

                {/* Overlay card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center shadow-xl max-w-[280px] w-[85%]">
                  <p className="text-lg md:text-xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-1.5 mb-4">
                    EssentiaCare
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-5">
                    GLP-1
                    <br />
                    Weight Loss
                    <br />
                    Management
                    <br />
                    Program
                  </h3>
                  <Button
                    variant="accent"
                    size="md"
                    href="https://app.essentiacare.ai/register"
                  >
                    Get Started
                  </Button>
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6 leading-tight">
                  What is EssentiaCare Weight Loss Management Program?
                </h2>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-7">
                  <span className="font-bold">
                    EssentiaCare's Weight Loss Management Program
                  </span>{" "}
                  offers a modern, science-backed solution for achieving
                  sustainable results. Designed to support you through every
                  step of your journey, our holistic program combines GLP-1
                  medications with personalized nutrition and lifestyle
                  coaching. We move beyond quick fixes and fad diets and empower
                  you to embrace a healthier, more confident life of weight loss
                  that lasts.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-1.5 mb-5">
                  This Includes:
                </h3>

                <ul className="space-y-3">
                  {includesItems.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 items-start text-base text-gray-700 leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="section-padding py-16 md:py-20 bg-gray-50">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Steps */}
              <div>
                <div className="space-y-7">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-xl font-bold text-primary leading-tight mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-base md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 ml-14">
                  <Button variant="accent" size="md" href="/request-a-demo">
                    Request a Demo
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Right - Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/images/glp-1-weight-loss-program/monthly-program-begins-min.png"
                  alt="Personalized weight loss consultation"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why use our GLP-1 System */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image collage */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                    <img
                      src="/images/glp-1-weight-loss-program/three-bowls-of-healthy-foods.jpg"
                      alt="Healthy meal prep"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                    <img
                      src="/images/glp-1-weight-loss-program/girls-eating-healthy.jpg"
                      alt="Healthy eating"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/5] md:aspect-[3/5]">
                    <img
                      src="/images/glp-1-weight-loss-program/100514.jpg"
                      alt="Clinical support team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6 leading-tight">
                  Why use our GLP-1 System?
                </h2>

                <ul className="space-y-4">
                  {whyUseItems.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 items-start text-base text-gray-700 leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>
                        <span className="font-bold text-gray-900">
                          {item.bold}
                        </span>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What makes EssentiaCare different */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="bg-gray-100 rounded-3xl p-8 md:p-12 lg:p-14">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                {/* Left - Content */}
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-7 leading-tight">
                    What makes EssentiaCare different?
                  </h2>

                  <ul className="space-y-4">
                    {differentItems.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 items-start text-base text-gray-700 leading-relaxed"
                      >
                        <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span>
                          <span className="font-bold text-gray-900">
                            {item.bold}
                          </span>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right - Image */}
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/glp-1-weight-loss-program/2149175153v1.png"
                    alt="Personalized consultation"
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
              Start Your Weight Loss Journey
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Take the first step toward lasting, sustainable weight loss with
              personalized clinical support.
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
              <Button variant="white" size="lg" href="/request-a-demo">
                Request a Demo
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
