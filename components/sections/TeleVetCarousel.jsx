"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    image: "/images/televet-pet-care/dog-alone.png",
    title: "My Dog is Not Well",
    subtitle: "EssentiaCare",
    description:
      "Whether it's a minor concern or you're unsure if an ER visit is needed, our compassionate professionals are ready to provide expert advice, guidance, and support to ensure your dog's health and well-being. Get the answers you need, quickly and easily.",
  },
  {
    image: "/images/televet-pet-care/sleeping-cat.png",
    title: "Hmmm. Something's Not Right",
    subtitle: "EssentiaCare",
    description:
      "If your cat seems off, we're here to help. Get quick, professional advice from a licensed veterinarian through a phone or video consultation to understand your cat's symptoms and decide on the best steps for their care.",
  },
  {
    image: "/images/televet-pet-care/girl-with-bunny.png",
    title: "Something's Funny With My Bunny",
    subtitle: "EssentiaCare",
    description:
      "If your bunny is showing signs of illness, we're here to help. Schedule a phone or video consultation with a licensed veterinarian to get expert advice and ensure your bunny gets the care they need to feel better.",
  },
  {
    image: "/images/televet-pet-care/hamster-in-hands.png",
    title: "Hamster Under the Weather",
    subtitle: "EssentiaCare",
    description:
      "If your hamster isn't acting like their usual self, we're here to assist. Connect with a licensed veterinarian through a phone or video consultation for expert advice and guidance on how to best care for your small furry friend.",
  },
  {
    image: "/images/televet-pet-care/vet-with-animal.png",
    title: "Consultations are like the Vet is there in the Room",
    subtitle: "EssentiaCare",
    description:
      "Easily connect with a Licensed Veterinarian through a phone or video consultation to get expert advice, discuss symptoms, and determine the best care plan for your pet.",
  },
  {
    image: "/images/televet-pet-care/pet-medications.png",
    title: "Pet Drug Savings Card",
    subtitle: "EssentiaCare",
    description:
      "Save up to 75% on pet prescriptions at over 68,000 participating pharmacies with our Pet Drug Savings Card. It's an easy way to ensure your pet gets the medication they need at a price you can afford.",
  },
  {
    image: "/images/televet-pet-care/dog-and-cat-v1.png",
    title: "Add Your Pet",
    subtitle: "EssentiaCare",
    description:
      "Log into your portal, access your account and add your furry friend",
  },
];

export default function TeleVetCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth =
      scrollRef.current.querySelector("[data-card]")?.offsetWidth || 280;
    const gap = 24;
    const scrollAmount = (cardWidth + gap) * 1;
    scrollRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-padding py-16 md:py-20 bg-white">
      <div className="container-main max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
            What to Expect?
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg max-w-4xl mx-auto">
            <p>
              At EssentiaCare, we make caring for your pet easy,
              convenient, and tailored to their needs. Whether you need advice
              from a veterinarian, a second opinion, or help deciding if a visit
              to the vet or ER is necessary, we connect you with licensed,
              compassionate veterinarians dedicated to your pet's health and
              happiness. Consultations are conducted in real-time via phone or
              video call on your mobile device or computer.
            </p>
            <p>
              You can discuss a range of concerns, including behavioral issues,
              training, wellness, and more, ensuring your pet gets the care they
              deserve - whenever and wherever you need it.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev Button */}
          <button
            type="button"
            onClick={() => scroll("prev")}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 -ml-2 md:-ml-5"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => scroll("next")}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 -mr-2 md:-mr-5"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                data-card
                className="snap-start shrink-0 w-[260px] md:w-[280px]"
              >
                <div className="rounded-xl overflow-hidden mb-4 shadow-sm aspect-[4/3]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl md:text-xl font-bold text-gray-900 leading-tight mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{card.subtitle}</p>
                  <p className="text-[13px] md:text-sm text-gray-700 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
