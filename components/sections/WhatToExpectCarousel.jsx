"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const whatToExpectCards = [
  {
    title: "Ear Infection",
    image: "/images/medical-care/ear-infection.png",
    description:
      "An ear infection causes pain, fluid drainage, and sometimes fever due to bacteria or viruses. Prompt treatment helps relieve discomfort and prevent complications.",
  },
  {
    title: "Pharmacists",
    image: "/images/medical-care/pharmacyinventory.png",
    description:
      "Ensures safe medication use, explains drug interactions, and supports healing by guiding proper dosages with deep care and knowledge.",
  },
  {
    title: "Sports Medicine",
    image: "/images/medical-care/sports-medicine.png",
    description:
      "This is a branch of medicine that deals with physical fitness and the treatment and prevention of injuries related to sports and exercise.",
  },
  {
    title: "Women's Health",
    image: "/images/medical-care/womens-health.png",
    description:
      "Your dedication to women's health - reproductive care, prenatal support, menopause guidance, and wellness - deeply empowers and uplifts every stage of womanhood.",
  },
  {
    title: "Alternative Medicine",
    image: "/images/medical-care/alternative-medicine.png",
    description:
      "I admire your work in alternative medicine - your approach promotes healing, balance, and emotional well-being through natural, whole-person care methods.",
  },
  {
    title: "General Practitioners",
    image: "/images/medical-care/general-practitioners.png",
    description:
      "Your care for both acute and chronic illness, alongside prevention, builds trust, promotes healing, and strengthens long-term patient well-being daily.",
  },
  {
    title: "Dentist",
    image: "/images/medical-care/dentist-v3.png",
    description:
      "Looking for a Dentist to provide through care in preventing, diagnosing, and treating gum disease and oral health conditions.",
  },
  {
    title: "Weight Loss Program",
    image: "/images/medical-care/weight-loss-program.png",
    description:
      "A medically supervised weight loss program using Semaglutide, a GLP-1 receptor agonist, to help reduce appetite, support healthy blood sugar levels, and promote gradual, sustainable weight loss in adults struggling with obesity or excess weight.",
  },
  {
    title: "High Blood Pressure",
    image: "/images/medical-care/hpb-v1.png",
    description:
      "We provide personalized care to manage and treat high blood pressure, helping you to reduce risks and improve your overall heart health.",
  },
  {
    title: "Diabetes",
    image: "/images/medical-care/diabetes-v1.png",
    description:
      "We offer personalized care to manage and treat diabetes, helping you to maintain stable blood sugar levels and improve overall health.",
  },
  {
    title: "Easy Scheduling",
    image: "/images/medical-care/easy-scheduling-v1.png",
    description:
      "Easily schedule appointments and manage your care with just a few clicks.",
  },
  {
    title: "Registered Dietitians",
    image: "/images/medical-care/registered-dietitian-v1.png",
    description:
      "Looking for a Registered Dietitian to provide expert, personalized nutrition guidance for healthy eating, disease prevention, and lifestyle improvement.",
  },
  {
    title: "Pediatricians",
    image: "/images/medical-care/pediatrician-v1.png",
    description:
      "Seeking a Pediatrician to deliver comprehensive, compassionate care for children’s physical, emotional, and mental health from birth through adolescence.",
  },
  {
    title: "Cold and Flu Symptoms",
    image: "/images/medical-care/cold-and-flu-symptoms.png",
    description:
      "We treat cold and flu symptoms which include congestion, cough, sore throat, body aches, fatigue, and fever.",
  },
];

export default function WhatToExpectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, whatToExpectCards.length - itemsPerView);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, maxIndex]);

  const goPrev = () =>
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const goNext = () =>
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const goToSlide = (index) => setCurrentIndex(Math.min(index, maxIndex));

  return (
    <section className="section-padding py-16 md:py-24 bg-gray-50">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            What to <span className="text-primary">Expect?</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
            At EssentiaCare, we make accessing medical care simple,
            seamless, and tailored to your needs. Whether you need to message a
            specialist, routine, urgent, specialized, or primary care, we
            connect you with licensed, board-certified providers who prioritize
            your well-being every step of the way.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {whatToExpectCards.map((card) => (
                <div
                  key={card.title}
                  className="shrink-0 px-3 lg:px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="relative w-full aspect-square overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-primary font-medium mb-3">
                        EssentiaCare
                      </p>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
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
        </div>

        <div className="text-center mt-10">
          <Button variant="primary" size="lg" href="/faq">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
