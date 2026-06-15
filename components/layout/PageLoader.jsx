"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade-out at 2.2s
    const fadeTimer = setTimeout(() => setIsFading(true), 2200);
    // Fully remove at 2.8s (after fade transition)
    const removeTimer = setTimeout(() => setIsLoading(false), 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
      }}
    >
      {/* Floating ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl animate-pulse-slower" />
      </div>

      {/* Main loader content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Lotus logo with animated rings */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
          </div>

          {/* Middle pulsing ring */}
          <div className="absolute inset-3 rounded-full border border-white/30 animate-ping-slow" />

          {/* Inner ring */}
          <div className="absolute inset-6 rounded-full bg-white/10 backdrop-blur-sm animate-pulse-breath" />

          {/* Lotus logo */}
          <img
            src="/images/logo-favi.svg"
            alt="EssentiaCare"
            className="relative w-16 h-16 object-contain animate-float"
          />
        </div>

        {/* Brand name */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
            Essentia<span className="text-accent">Care</span>
          </h2>
          <p className="text-sm text-white/70 tracking-wider uppercase">
            Medical & Mental Healthcare
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-accent to-white/80 rounded-full animate-progress" />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          75%, 100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        @keyframes pulse-breath {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.08);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-breath {
          animation: pulse-breath 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }
        .animate-progress {
          animation: progress 2.2s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}