"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const cards = [
  {
    title: "Grief and Lost",
    image: "/images/counseling/strategies-new-v2.png",
    description:
      "We offer compassionate care to help you process grief, honor your loss, and find a path toward healing.",
  },
  {
    title: "Loneliness",
    image: "/images/counseling/wanna-talk-about-it.png",
    description:
      "We're here to provide connection and support, reminding you that you don't have to face life's challenges alone.",
  },
  {
    title: "Parenting",
    image: "/images/counseling/parenting.jpg",
    description:
      "We provide resources and counseling to help you build strong, nurturing relationships with your children while managing the challenges of parenthood.",
  },
  {
    title: "Stress",
    image: "/images/counseling/strategies-new.png",
    description:
      "Our team offers practical tools and strategies to help you cope with stress and restore balance to your daily life.",
  },
  {
    title: "Marriage",
    image: "/images/counseling/marriage.jpg",
    description:
      "Our counseling services are designed to help couples improve communication, resolve conflicts, and strengthen their bond.",
  },
  {
    title: "Anxiety",
    image: "/images/counseling/anxiety.jpg",
    description:
      "We help you understand and manage anxiety with personalized strategies to bring calm and control to your life.",
  },
  {
    title: "Abuse",
    image: "/images/counseling/family-concerns-v1.png",
    description:
      "Our counseling services are designed to help couples improve communication, resolve conflicts, and strengthen their bond.",
  },
  {
    title: "Family Concerns",
    image: "/images/counseling/family-concerns.jpg",
    description:
      "Our counselors provide guidance and support to navigate family challenges and foster healthier relationships.",
  },
];

export default function WhatToExpectCounselling() {
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

  const maxIndex = Math.max(0, cards.length - itemsPerView);

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
    <section className="section-padding py-16 md:py-24 bg-white">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            What to <span className="text-primary">Expect?</span>
          </h2>
          <p className="text-xl md:text-2xl font-script text-accent mb-5">
            We Hear. We Listen. We Care.
            <br />
            Counseling That Cares.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
            At EssentiaCare, we make accessing counseling simple, seamless, and
            tailored to your needs. Whether you're seeking emotional support,
            therapy, or specialized care, we connect you with licensed,
            board-certified professionals who prioritize your mental well-being
            every step of the way.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
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

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {cards.map((card) => (
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
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
