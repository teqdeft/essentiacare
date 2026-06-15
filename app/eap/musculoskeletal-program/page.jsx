import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("musculoskeletal-program");
}

const careTeam = [
  "Acupuncturist",
  "Behavioral Therapist",
  "Chiropractor",
  "Health Coach",
  "Physical Therapist",
  "Occupational Therapist",
  "Orthopedist",
  "Speech Therapist",
];

export default function IntegratedMusculoskeletalCarePage() {
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
            src="/images/eap/msk-care-banner-min.png"
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
                Integrated <br className="hidden md:block" />
                Musculoskeletal Care
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                Our all-in-one clinical support for chronic pain makes it easy
                to get expert care for joints and muscles. Help your employees
                feel better, move better, and work better leading to fewer sick
                days, higher productivity, and lower healthcare costs.
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

        {/* Whole-person virtual support */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/eap/msk-virtual-approach-min.png"
                    alt="Virtual care team meeting"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                    Virtual Support
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 leading-tight">
                    Whole-person virtual support that moves with your{" "}
                    <span className="text-primary font-script">employees</span>
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p>
                    Employees receive expert virtual care from Licensed Physical
                    Therapists trained to treat and prevent pain in 18 different
                    body regions. With ongoing support, your employees are
                    empowered to move better, feel better, and return to a
                    pain-free routine.
                  </p>
                  <p>
                    From first visit to full mobility, our therapists will guide
                    them toward lasting relief and an improved quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical excellence */}
        <section className="section-padding py-16 md:py-20 bg-gray-50">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                    People First
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 leading-tight">
                    Clinical excellence and personal commitment that put{" "}
                    <span className="text-primary font-script">
                      people first
                    </span>
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                  Your employees are surrounded by a collaborative care team
                  that prioritizes their well-being. Their journey begins with a
                  comprehensive 30 - 45 minute virtual evaluation and continues
                  with consistent access to Licensed Physical Therapists for as
                  many visits as needed.
                </p>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {careTeam.map((role) => (
                    <li key={role} className="flex items-center gap-3 group">
                      <div className="w-7 h-7 rounded-lg bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center shrink-0 transition-colors duration-300">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-700 text-base font-medium">
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/eap/msk-health-coach-min.png"
                    alt="Patient receiving virtual care"
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

        {/* The Value of Partnering */}
        <section className="section-padding py-16 md:py-24 bg-white">
          <div className="container-main max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Why Partner With Us
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                The Value of Partnering with EssentiaCare <br />
                {/* <center>
                  <img
                    src="/images/IWTIWLogo.svg"
                    alt="Logo"
                    className="w-64"
                  />
                </center> */}
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed text-lg md:text-xl">
                <p>
                  At EssentiaCare, we prioritize prevention and whole-person
                  care by addressing pain and related behavioral health needs
                  before they escalate. Our approach begins with proven exercise
                  therapy and tailored mental health strategies delivered early
                  to reduce the need for costly, invasive treatments later.
                </p>
                <p>
                  Through our intelligent digital platform, users are supported
                  by a multidisciplinary Care Team - physical therapists, mental
                  health specialists, coaches, and physicians - working together
                  to break down barriers and improve outcomes with less friction
                  and more personalized care.
                </p>
              </div>
            </div>

            {/* Care team grid */}
            <div className="">
              <img
                src="/images/eap/msk-collage-of-pictures.png"
                alt="Care team member"
                className="w-full h-full object-cover"
              />
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
              Move Better. Feel Better. Work Better.
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Give your employees access to expert musculoskeletal care that
              reduces sick days, boosts productivity, and lowers healthcare
              costs.
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
