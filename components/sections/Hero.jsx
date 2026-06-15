"use client";

import Button from "@/components/ui/Button";
import {
  Clock,
  ShieldCheck,
  Globe,
  Video,
  CalendarX,
  Star,
  ArrowRight,
} from "lucide-react";

const trustBadges = [
  { icon: Clock, label: "24/7 Access" },
  { icon: ShieldCheck, label: "Licensed Providers" },
  { icon: Video, label: "Virtual & Secure" },
  { icon: Globe, label: "English & Spanish" },
  { icon: CalendarX, label: "No Waiting Rooms" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
      }}
    >
      {/* Decorative lotus */}
      <div className="absolute top-1/2 right-52 w-[500px] h-[500px] opacity-70 -translate-y-1/2 translate-x-1/4 pointer-events-none hidden lg:block">
        <img
          src="/images/logo-favi.svg"
          alt=""
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="relative section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 md:py-20 lg:py-24">
            {/* Left Content */}
            <div className="text-white space-y-6 max-w-xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Let us help you smile
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
                Self-Care is the New{" "}
                <span className="text-accent-200">Health Care!</span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed  font-bold">
                Let us help you to smile. Talk to a Doctor, Therapist or
                Veterinarian Right Now!
              </p>

              <p className="text-white/70 leading-relaxed text-xl">
                Access doctors, therapists, and board-certified veterinarians on
                your terms. Self-pay keeps it simple, affordable, and
                stress-free.
              </p>

              <p className="text-white/70 leading-relaxed text-lg">
                Join the only app for whole-person care — mind, body, and
                spirit.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  variant="white"
                  size="lg"
                  href="https://app.essentiacare.ai/register"
                >
                  Join Today!
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline-white" size="lg" href="#services">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border border-white overflow-hidden"
                    >
                      <img
                        src={`/images/member-${i}.png`} // adjust path if needed
                        alt={`Member ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-sm">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-white/70">
                    1000+ care visits delivered last month
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 z-[0] opacity-10"
                  style={{
                    background: "black",
                  }}
                />
                {/* <img
                  src="/images/hero-woman.png"
                  alt="Woman using tablet for telehealth consultation"
                  className="w-full h-auto object-cover aspect-[4/3]"
                /> */}
                <video
                  className="w-full h-auto object-cover aspect-[4/3] z-[1]"
                  src="/videos/essentia-hero-page-v2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    HIPAA Compliant
                  </p>
                  <p className="text-xs text-gray-500">Secure & confidential</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges Bar */}
          {/* Trust Badges Bar */}
          <div className="relative bg-[#604376] mb-10 rounded-xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-2 py-5">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center justify-center lg:justify-start gap-2.5 px-2 py-2 min-w-0"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white leading-tight break-words min-w-0">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
