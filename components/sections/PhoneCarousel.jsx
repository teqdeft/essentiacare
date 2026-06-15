"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/televet-pet-care/iwilltilimwell-televet-11252024-001.jpg",
    title: "TeleVet - Pet Health Care",
    description:
      "Consult one of EssentiaCare's veterinarians when you need medical answers for your pet. Leverage the expertise of veterinary guidance to ensure your pet's health and wellness from the privacy of own home.",
  },
  {
    image: "/images/easy-scheduling-v1.png",
    title: "Medical Care Services",
    description:
      "Connect with licensed physicians day or night for medical consultations, advice, and care. Available 24/7, 365 days a year — all from the comfort of your home.",
  },
  {
    image: "/images/womens-health.png",
    title: "Mental Health Support",
    description:
      "Speak with compassionate mental health specialists whenever you need someone to listen. Get the support and guidance you deserve through phone or video sessions.",
  },
  {
    image: "/images/sports-medicine.png",
    title: "Wellness on Your Terms",
    description:
      "Access expert health and wellness guidance designed to fit your lifestyle. Personalized care that empowers you to take control of your well-being.",
  },
];

export default function PhoneCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const goPrev = () =>
    setCurrentIndex((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
  const goNext = () =>
    setCurrentIndex((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  const goToSlide = (index) => setCurrentIndex(index);

  const currentSlide = slides[currentIndex];

  return (
    <section className="section-padding py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative lotus */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-10 -translate-y-1/4 pointer-events-none hidden lg:block">
        <img
          src="/images/logo-favi.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container-main max-w-5xl relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            When life gets complicated,
            <br />
            <span className="text-primary">We can help!</span> Because ...{" "}
            <span className="text-primary">WE CARE!</span>
          </h2>
        </div>

        {/* Phone with carousel */}
        <div
          className="flex items-center justify-center gap-4 md:gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Prev button */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="hidden md:flex w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Phone Mockup */}
          <div className="relative">
            <div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />

              {/* Screen */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-100">
                {/* Slide image with fade transition */}
                <div className="absolute inset-0">
                  {slides.map((slide, i) => (
                    <img
                      key={i}
                      src={slide.image}
                      alt={slide.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        i === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>

                {/* Overlay card */}
                <div className="absolute top-1/3 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-4 text-white">
                  <h3 className="text-lg font-bold mb-2">
                    {currentSlide.title}
                  </h3>
                  <p className="text-xs text-white/85 leading-relaxed">
                    {currentSlide.description}
                  </p>
                </div>

                {/* Bottom logo */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <img
                    src="/images/logo-favi.svg"
                    alt="EssentiaCare lotus"
                    className="w-12 h-12 mb-1"
                  />
                  <p className="text-white text-[10px] font-semibold drop-shadow-lg">
                    EssentiaCare
                  </p>
                </div>

                {/* Search bar */}
                <div className="absolute bottom-4 left-3 right-3 bg-white rounded-full px-4 py-2.5 flex items-center gap-2 shadow-lg">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                  <span className="text-[11px] text-gray-500">
                    enter provider city state
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="hidden md:flex w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Prev/Next + Dots */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="md:hidden w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="md:hidden w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
