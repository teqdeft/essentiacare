"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const cards = [
  {
    title: "Weight Loss Program",
    image: "/images/eap/weight-loss-program.png",
    description:
      "A medically supervised weight loss program using Semaglutide, a GLP-1 receptor agonist, to help reduce appetite, support healthy blood sugar levels, and promote gradual, sustainable weight loss in adults struggling with obesity or excess weight.",
  },
  {
    title: "Care Coordinators",
    image: "/images/eap/care-coordinators.png",
    description:
      "Care Coordinators guide, support, and uplift individuals by connecting them to personalized care plans that restore dignity and build trust.",
  },
  {
    title: "Message A Specialist",
    image: "/images/eap/message-a-specialist.png",
    description:
      "Message a Specialist to receive direct, thoughtful guidance from someone who listens, understands deeply, and prioritizes your emotional well-being.",
  },
  {
    title: "Medical Care",
    image: "/images/eap/medical-care-2-min.png",
    description:
      "EssentiaCare Access expert medical care anytime, anywhere, with personalized treatment and support tailored to your health needs.",
  },
  {
    title: "Counseling Care",
    image: "/images/eap/mental-health-care-3-min.png",
    description:
      "EssentiaCare Connect with licensed counselors, psychologists, and psychiatrists for compassionate mental health support, personalized care, and convenient access to help when you need it most.",
  },
  {
    title: "TeleVet Care",
    image: "/images/eap/pet-care-min.png",
    description:
      "Access expert veterinary consultations from the comfort of your home. Our TeleVet service connects you with Licensed Veterinarians for advice and follow-up care, ensuring your pet gets the attention they need, without the need for an in-person visit.",
  },
  {
    title: "Prescription Plans",
    image: "/images/eap/prescription-plan-min.png",
    description:
      "Our Prescription Plan offers unbeatable savings, including 37 essential medications for $0 and over 200 medications for just $5, plus additional discounts at participating pharmacies. We're dedicated to making healthcare more affordable by ensuring you have access to the medications you need at a fraction of the cost.",
  },
  {
    title: "Musculoskeletal Care",
    image: "/images/eap/musculoskeletal-care-min.png",
    description:
      "EssentiaCare Expert care to address pain, injuries, and conditions affecting muscles, bones, and joints, helping you regain mobility and improve quality of life.",
  },
];

export default function WhatToExpectEAP() {
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
    <section className="section-padding py-16 md:py-24 bg-gray-50">
      <div className="container-main">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            What to <span className="text-primary">Expect?</span>
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              With EssentiaCare, employees can expect convenient, confidential
              access to a host of many different professionals ensuring holistic
              care. This is{" "}
              <span className="font-bold italic">cura personalis</span> - care
              for the whole person.
            </p>
            <p>
              Whether it's medical concerns, mental health concerns,
              musculoskeletal concerns, weight loss concerns, pet health care
              concerns, or prescription needs,{" "}
              <span className="font-bold">we are here for you.</span>
            </p>
            <p>
              Through our virtual urgent care, virtual primary care, teletherapy
              with a counselor, psychologist or psychiatrist, employees will
              receive personalized care tailored to their unique needs.
              Employees can also enjoy musculoskeletal care, participate in our
              weight loss management program, utilize our discounted medication
              program, or meet with a licensed veterinarian,{" "}
              <span className="font-bold">because pets are family, too.</span>
            </p>
            <p className="font-bold text-gray-700">
              All of this while maintaining privacy and flexibility from the
              privacy of the employee's home or any desired safe space.
            </p>
          </div>
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
