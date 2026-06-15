"use client";

import { useEffect, useRef, useState } from "react";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import {
  UserPlus,
  CalendarClock,
  Video,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register",
    description:
      "Sign up and become a member to access quality health services.",
  },
  {
    number: "02",
    icon: CalendarClock,
    title: "Schedule a Consultation",
    description:
      "Call, Click, or Tap to easily schedule your consultation anytime!",
  },
  {
    number: "03",
    icon: Video,
    title: "Talk to a Provider",
    description:
      "A doctor will contact you via EssentiaCare's website or app at your scheduled time.",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Stay healthy!",
    description:
      "Use the app to keep track of your personal health records anytime, from anywhere.",
  },
];

export default function Steps() {
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && activeStep === -1) {
          // Trigger steps sequentially
          steps.forEach((_, i) => {
            setTimeout(() => setActiveStep(i), i * 600);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [activeStep]);

  return (
    <SectionWrapper>
      <SectionHeader
        badge="Get Started"
        title="Your Consultation, Just"
        titleAccent="4 Steps Away"
        description="Getting started is simple. Register, schedule your consultation, connect with a licensed provider, and stay healthy — all from the comfort of home."
      />

      <div
        ref={sectionRef}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
      >
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = activeStep >= i;
          const lineActive = activeStep >= i + 1;

          return (
            <div
              key={step.number}
              className={cn(
                "relative group transition-all duration-500 ease-out",
                isActive
                  ? "opacity-100 translate-y-0"
                  : "opacity-40 translate-y-4",
              )}
            >
              {/* Animated connector line - travels from this step to next */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5">
                  {/* Base dashed line */}
                  <div className="absolute inset-0 border-t-2 border-dashed border-primary-200" />

                  {/* Animated solid line that travels through */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      width: lineActive ? "100%" : "0%",
                      transition: "width 600ms ease-in-out",
                    }}
                  >
                    <div className="h-full w-full bg-gradient-to-r from-primary via-primary-500 to-accent" />
                  </div>

                  {/* Traveling dot */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50"
                    style={{
                      left: lineActive ? "calc(100% - 6px)" : "-6px",
                      opacity: activeStep === i ? 1 : 0,
                      transition:
                        "left 600ms ease-in-out, opacity 300ms ease-in-out",
                    }}
                  >
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                  </div>
                </div>
              )}

              <div className="text-center relative">
                <div className="relative inline-flex items-center justify-center mb-5">
                  {/* Outer pulse ring when step becomes active */}
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping"
                      style={{
                        animationDuration: "1.5s",
                        animationIterationCount: "2",
                      }}
                    />
                  )}

                  <div
                    className={cn(
                      "relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500",
                      isActive
                        ? "bg-primary-100 scale-100 shadow-lg shadow-primary/20"
                        : "bg-primary-50 scale-95",
                      "group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/30",
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-8 h-8 transition-all duration-500 group-hover:scale-110",
                        isActive ? "text-primary" : "text-primary/60",
                      )}
                    />
                  </div>

                  <span
                    className={cn(
                      "absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110",
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-50",
                    )}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className={cn(
                    "text-xl font-bold mb-2 transition-colors duration-500 group-hover:text-primary",
                    isActive ? "text-gray-900" : "text-gray-500",
                  )}
                >
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
