"use client";

import { useState } from "react";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import Button from "../ui/Button";


const behavioralTools = [
  {
    title: "Additional mental health assessments",
    description:
      "We use evidence-based screening tools - the PHQ‑9 (Depression), GAD‑7 (Anxiety,) and the AUDIT (Alcohol Use) - to track your symptoms over time and tailoring care to your needs.",
  },
  {
    title: "Personal journal (verbal/written)",
    description:
      "A private space where you regularly reflect on your thoughts, feelings, and experiences in your own words, either verbally or in writing.",
  },
  {
    title: "Shareable information (optional)",
    description:
      "You get to decide what to share with your support system that can help them better understand and support you. You're always in control of what you share and when.",
  },
  {
    title: "Record Voice Affirmations",
    description:
      "Create and save positive statements in your own voice or from your loved ones that you can listen to anytime. Use to reinforce your strengths, save your life, calm anxiety, and stay focused on your goals throughout the day.",
  },
  {
    title: "Track Moods & Feelings",
    description:
      "Log how you're feeling throughout the day to better understand your emotional patterns and triggers. Over time, these insights can help you to celebrate progress, notice early warning signs, and other significant patterns.",
  },
  {
    title: "Cognitive Behavior inquiries",
    description:
      "Short, CBT-based analyses that help you notice and analyze distorted or unhelpful thoughts (often called cognitive distortions or automatic negative thoughts) so you can replace them with more balanced, realistic ways of thinking and responding.",
  },
  {
    title: "Safety Plans",
    description:
      "A personalized, step-by-step plan for what to do and who to contact when you feel unsafe or overwhelmed, including your warning signs, coping strategies, supportive people you can reach out to, (professional and crisis resources), and ways to make your environment safer.",
  },
  {
    title: "Personal Analytics",
    description:
      "A visual snapshot of your mental health over time. Use these patterns to gain insights to guide conversations with your care team and help you to make more informed decisions about your self-care.",
  },
  {
    title: "Daily Affirmations",
    description:
      "Short, positive statements you can revisit each day to build confidence, hope, and resilience. These reminders help you challenge self-doubt, stay grounded in your strengths, and keep your goals and values at the center of your day.",
  },
  {
    title: "Curated News Feeds",
    description:
      "A tailored stream of trusted mental health and wellness articles, highlighting timely, relevant information to support your understanding, coping strategies, and overall well-being.",
  },
];

export default function BehavioralToolsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding py-16 md:py-20 bg-white">
      <div className="container-main max-w-5xl">
        <div className="mb-10">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Mental Wellness Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Advanced Behavioral{" "}
            <span className="text-primary font-script">Health Tools</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mt-4 max-w-2xl">
            A complete toolkit to support your mental wellness journey —
            track, reflect, and grow at your own pace.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {behavioralTools.map((tool, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={tool.title}
                className={`group bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md hover:border-accent/20 hover:bg-white transition-all duration-300 overflow-hidden self-start ${
                  isOpen ? "shadow-md border-accent/20 bg-white" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 flex gap-3 items-center text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-gray-700 font-medium text-base flex-1">
                    {tool.title}
                  </p>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-sm leading-relaxed px-5 pb-5 pl-16">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <Button variant="outline" size="lg" href="/faq">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}