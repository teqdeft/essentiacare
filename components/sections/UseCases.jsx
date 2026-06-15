"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "Individual / Family",
    image: "/images/happy-family.jpg",
    cta: "Get Started",
    ctaLink: "https://app.essentiacare.ai/register",
    ctaStyle: "green",
  },
  {
    title: "Employers / Organizations",
    image: "/images/happy-employes.jpg",
    cta: "Book a Demo",
    ctaLink: "https://app.essentiacare.ai/register",
    ctaStyle: "white",
  },
];

export default function UseCases() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
      style={{
        background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
      }}
    >
      {/* Decorative lotus */}
      <div className="absolute top-1/2 right-0 w-[700px] h-[700px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none hidden lg:block">
        <img
          src="/images/logo-favi.svg"
          alt=""
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-12 items-center">
            {/* Left - Heading */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] mb-5">
                Care built for everyday life and workplace <br />{" "}
                <span className="text-white font-script font-normal text-4xl md:text-5xl">
                  well-being
                </span>
              </h2>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-md">
                Choose the path that fits your needs and explore care designed
                for individuals, families, and employer teams.
              </p>
            </div>

            {/* Right - Image Cards */}
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {cards.map((card) => {
                const buttonClass =
                  card.ctaStyle === "green"
                    ? "inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 w-fit shadow-lg"
                    : "inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-100 text-gray-900 text-sm font-semibold rounded-lg transition-all duration-300 w-fit shadow-lg";

                return (
                  <div
                    key={card.title}
                    className="group relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-[3/4]"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 z-[0] opacity-20 "
                      style={{
                        background: "black",
                      }}
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" /> */}

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-white text-xl md:text-xl font-bold mb-3">
                        {card.title}
                      </h3>
                      <Link href={card.ctaLink} className={buttonClass}>
                        {card.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
