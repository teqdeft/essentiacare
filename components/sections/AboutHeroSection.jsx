"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play, X } from "lucide-react";

export default function AboutHeroSection() {
  const modalVideoRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    modalVideoRef.current?.pause();
    setIsOpen(false);
  };

  // Lock body scroll + close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      <section className="relative overflow-hidden h-[560px] md:h-[640px] bg-black">
        {/* Background image */}
        <img
          src="/images/join-community/bckg-therealdrjill-019-s.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-70 z-[0]"
        />

        <Link
          href="/"
          className="absolute top-6 left-6 z-[4] inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium hover:bg-white/25 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>

        {/* Centered play button */}
        <div className="relative z-[3] h-full flex items-center justify-center flex-col">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
            About Us
          </h2>
          <button
            type="button"
            onClick={openModal}
            aria-label="Play video"
            className="group w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow-2xl ring-1 ring-white/40 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            <Play
              className="w-8 h-8 md:w-10 md:h-10 text-gray-900 ml-1 animate-pulse"
              fill="currentColor"
            />
          </button>
        </div>
      </section>

      {/* Video Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="About us video"
          onClick={closeModal}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close video"
            className="absolute top-5 right-5 md:top-8 md:right-8 z-[101] inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
          >
            <video
              ref={modalVideoRef}
              src="/videos/about-us-video.mp4"
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}
