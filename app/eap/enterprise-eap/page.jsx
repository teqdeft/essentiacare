import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import WhatToExpectEAP from "@/components/sections/WhatToExpectEAP";
import {
  ArrowRight,
  ChevronRight,
  TrendingDown,
  DollarSign,
  Users,
  Heart,
  Stethoscope,
  Brain,
  PawPrint,
  ArrowLeft,
  Check,
  CheckCheckIcon,
  CheckCircle2Icon,
  CheckCircle2,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("enterprise-eap");
}

const valuePillars = [
  {
    icon: Stethoscope,
    title: "Medical Doctors",
    image: "/images/eap/pic2.png",
    description:
      "See a Licensed, Board Certified Physician whenever you need care — day or night, weekdays, weekends, and even holidays.",
  },
  {
    icon: Brain,
    title: "Mental Health Specialists",
    image: "/images/eap/pic1.png",
    description:
      "Counselors, Master's-Level Therapists, Psychologists, and Psychiatrists working together to support employees mental health and well-being.",
  },
  {
    icon: PawPrint,
    title: "Veterinarians",
    image: "/images/eap/pic3.png",
    description:
      "Licensed Veterinarians helping employees keep their pets healthy while avoiding additional time away from work.",
  },
];

const businessBenefits = [
  {
    icon: DollarSign,
    title: "Significant Cost Reduction",
    description:
      "EssentiaCare treats over 85% of common conditions typically seen in emergency rooms, helping employees avoid unnecessary ER visits and the high costs that come with them. The result? Measurable reductions in overall healthcare expenses for your organization.",
  },
  {
    icon: TrendingDown,
    title: "Decreased Absenteeism",
    description:
      "Our platform eliminates the need for employees and their family members to miss work or school for routine doctor visits. The intuitive interface allows for consultations whenever needed, minimizing disruption to workdays and improving overall productivity.",
  },
];

const holisticPoints = [
  "Preventive care education increases awareness of health conditions, empowering employees to take control of their wellbeing",
  "Comprehensive mental health support reduces workplace stress and enhances productivity",
  "Access to resources for managing emotional and psychological challenges fosters a healthier, more resilient workforce",
  "Proactive health management leads to fewer serious health events and reduced long-term healthcare costs",
];

const wellnessEcosystemLeft = [
  {
    title: "Virtual Primary Care",
    description:
      "The first point of contact for ongoing healthcare, focusing on overall health, prevention, treatment of common conditions, chronic disease management, and the ability to select your own Primary Care Provider, along with a host of many other features and services.",
  },
  {
    title: "Mental Health Care",
    description:
      "Around-the-clock, 24/7/365 access to a counselor for in-the-moment care and access to a therapist, psychologist, or psychiatrist for scheduled mental health care.",
  },
  {
    title: "Musculoskeletal Care",
    description:
      "This service focuses on diagnosing and treating conditions related to muscles, bones, joints, and connective tissues to improve mobility and reduce pain. It also includes mental healthcare.",
  },
];

const wellnessEcosystemRight = [
  {
    title: "Weight Loss Management Program",
    description:
      "EssentiaCare helps persons to manage their weight loss by using a specific GLP-1 receptor agonist that helps regulate blood sugar levels, control appetite, slows down digestion, reduces hunger, and increases the feelings of fullness.",
  },
  {
    title: "TeleVet Pet Care",
    description:
      "Unlimited access to a dedicated team of Licensed Veterinarians. The consultation takes place in real-time via phone or video on your mobile device or computer. It also comes with a Pet Drug Discount card.",
  },
  {
    title: "Prescription Drug Coverage",
    description:
      "Get access to 37 Virtual Urgent Care medications at no charge and access to 200 Virtual Primary Care medications for just $5.00 each, along with substantial discounts on other medications.",
  },
];

export default function EnterpriseEAPPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[540px] md:h-[620px]">
          <div
            className="absolute inset-0 z-[0]"
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/eap/a-group-of-workers.jpg"
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
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.05] tracking-tight mb-6">
                EssentiaCare Brings Measurable{" "}
                <span className="text-accent">Business Benefits</span>
              </h1>

              <p className="text-xl md:text-xl text-white/95 font-semibold mb-2">
                We go beyond telehealth.
              </p>
              <p className="text-xl md:text-xl text-white/90 font-medium mb-8 max-w-2xl">
                We transform employee care into a strategic business advantage.
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
                  variant="accent"
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

        {/* Value of EAP */}
        <section className="section-padding py-16 md:py-24 bg-white">
          <div className="container-main max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Program Value
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                The Value of Our{" "}
                <span className="text-primary font-script">
                  Employee Assistance Program
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {valuePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="section-padding py-16 md:py-20 bg-gray-50">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
              {/* Left - Cost Reduction */}
              <div className="group bg-white rounded-2xl border border-gray-100 p-7 md:p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                  {businessBenefits[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {businessBenefits[0].description}
                </p>
              </div>

              {/* Center - Visual connector */}
              <div className="hidden lg:flex flex-col items-center justify-center gap-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary">+</span>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-2xl font-bold text-primary">+</span>
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 text-center">
                  Better outcomes
                </p>
              </div>

              {/* Right - Absenteeism */}
              <div className="group bg-white rounded-2xl border border-gray-100 p-7 md:p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <TrendingDown className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                  {businessBenefits[1].title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {businessBenefits[1].description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Holistic Approach */}
        <section className="section-padding py-16 md:py-24 bg-white">
          <div className="container-main max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Holistic Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
                Holistic Approach to{" "}
                <span className="text-primary font-script">
                  Employee Wellbeing
                </span>
              </h2>
              <p className="text-gray-600 mt-4 text-lg md:text-xl">
                The program goes beyond treating immediate health concerns.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {holisticPoints.map((point, i) => (
                <div
                  key={i}
                  className="group bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-7 hover:shadow-md hover:border-primary/20 hover:bg-white transition-all duration-300 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base pt-1.5">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Wellness Ecosystem */}
        <section className="section-padding py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="container-main max-w-6xl relative">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Wellness Ecosystem
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Comprehensive{" "}
                <span className="text-primary font-script">
                  Wellness Ecosystem
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                The EssentiaCare Employee Assistance Program (EAP) provides
                Telemedicine and confidential Mental Health Counseling. These
                are some of our most prominent services for companies, groups,
                and organizations.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-10 items-center">
              {/* Left column */}
              <div className="space-y-6">
                {wellnessEcosystemLeft.map((item) => (
                  <div
                    key={item.title}
                    className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300 lg:text-right"
                  >
                    <h3 className="font-bold text-gray-900 mb-2 text-base">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Center - Lotus */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
                  <img
                    src="/images/logo-favi.svg"
                    alt="EssentiaCare lotus"
                    className="relative w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                {wellnessEcosystemRight.map((item) => (
                  <div
                    key={item.title}
                    className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300"
                  >
                    <h3 className="font-bold text-gray-900 mb-2 text-base">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Supporting the Health of our Workforce - Image Collage */}
        <section className="section-padding py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-72 h-72 opacity-10 pointer-events-none hidden lg:block">
            <img
              src="/images/logo-favi.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="container-main max-w-6xl relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left column */}
              <div className="space-y-6 md:pt-20">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                    Supporting the Health of our Workforce
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                    At EssentiaCare, we provide accessible healthcare that
                    empowers employees to take control of their health,
                    improving well-being and productivity. From routine care to
                    mental health support, we're here for your team, whenever
                    they need us.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/eap/a-group-of-workers.jpg"
                    alt="Team collaboration"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/eap/workforce6.png"
                    alt="Workplace wellness"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/eap/workforce9.png"
                    alt="Professional team"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/eap/workforce8.png"
                    alt="Meeting"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                    A Healthier Workforce Starts Here
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                    We believe in the power of proactive care. With our flexible
                    telehealth services, employees can receive the medical and
                    mental health support they need, without the hassle.
                    EssentiaCare makes it easier to stay healthy and focused,
                    both at work and at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect - Carousel */}
        <WhatToExpectEAP />

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
              Transform Employee Care Today
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Give your team the healthcare support they deserve — and unlock
              measurable business benefits for your organization.
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
                Talk to Sales
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
