"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "general",
    label: "GENERAL MEDICINE",
    questions: [
      {
        q: "Is EssentiaCare an insurance company?",
        a: "EssentiaCare is not an insurance company. Clinical services are provided by licensed healthcare providers through medical, mental health, and pet care health practices affiliated with EssentiaCare and other network providers. Please note, this plan is not insurance and is not intended to replace health insurance. Additional or different telehealth requirements may apply in certain states.",
        bold: "EssentiaCare is not an insurance company.",
      },
      {
        q: "What is Telemedicine?",
        a: "An online doctor visit through EssentiaCare is an affordable and convenient way to address routine medical issues. It allows you to consult with a licensed healthcare provider remotely through secure technology. With EssentiaCare, you can connect face-to-face with a doctor via smartphone, desktop, or telephone - without leaving your home. These virtual visits enable providers to listen, observe, and engage with you to diagnose health concerns and create personalized, effective treatment plans.",
        bold: [
          "affordable",
          "convenient ",
          "consult with a licensed healthcare provider remotely through secure technology. ",
          "connect face-to-face with a doctor via smartphone, desktop, or telephone - without leaving your home.",
        ],
      },
      {
        q: "What is an Online Doctor Visit?",
        a: "An online doctor visit through EssentiaCare allows you to consult with a licensed healthcare provider remotely through secure technology. It is an affordable and convenient way to address routine medical issues. With EssentiaCare, you can connect face-to-face with a doctor via smartphone, desktop, or telephone - without leaving your home. These virtual visits enable providers to listen, observe, and engage with you to diagnose health concerns and create personalized, effective treatment plans.",
        bold: "affordable and convenient way to address routine medical issues.",
      },
      {
        q: "What Conditions Can Be Treated via Telemedicine?",
        a: "Telemedicine is intended for non-emergency medical concerns. If you are experiencing a medical emergency, please call 911 immediately.<br><br><u>Please Note:</u> Our physicians do not treat newborns or children under two (2) years of age.",
        bold: "<u>Please Note:</u> Our physicians do not treat newborns or children under two (2) years of age.",
      },
      { q: "Can I Add My Spouse and Children to My Account?" },
      { q: "Can My Kids See a Doctor Through EssentiaCare?" },
      { q: "What If I Don't Have Health Insurance?" },
      { q: "Is My Online Doctor Visit Private and Secure?" },
      { q: "Do You Provide Telemedicine in Every State?" },
      { q: "Do You Provide Consults Outside the United States?" },
      { q: "Do You Provide Video Consultations in Every State?" },
      { q: "Can I See a Doctor Online If I'm Traveling or in Another State?" },
      { q: "What Should I Do If I Am Experiencing a Medical Emergency?" },
      { q: "Can Medical Forms (Like Sick Slips) Be Filled Out?" },
      {
        q: "How Do You Recruit Your Doctors and What Is the Credentialing Process?",
      },
      { q: "Can Your Doctors Prescribe Medication?" },
      {
        q: "If My Condition Cannot Be Treated Through EssentiaCare, Can I Still Discuss My Condition With a Doctor?",
      },
    ],
  },
  {
    id: "virtual-urgent",
    label: "VIRTUAL URGENT CARE",
    questions: [
      { q: "What is Virtual Urgent Care?" },
      { q: "When should I use Virtual Urgent Care?" },
      { q: "Are providers available 24/7?" },
    ],
  },
  {
    id: "virtual-primary",
    label: "VIRTUAL PRIMARY CARE",
    questions: [
      { q: "What is Virtual Primary Care?" },
      { q: "Can I select my own Primary Care Provider?" },
      { q: "How do follow-up visits work?" },
    ],
  },
  {
    id: "virtual-dermatology",
    label: "VIRTUAL DERMATOLOGY CARE",
    questions: [
      { q: "What skin conditions can be treated virtually?" },
      { q: "How does a virtual dermatology visit work?" },
    ],
  },
  {
    id: "musculoskeletal",
    label: "MUSCULOSKELETAL CARE",
    questions: [
      { q: "What is virtual musculoskeletal care?" },
      { q: "What types of conditions are treated?" },
    ],
  },
  {
    id: "glp1",
    label: "GLP-1 MEDICALLY MANAGED WEIGHT LOSS (SEMAGLUTIDE)",
    questions: [
      { q: "What is the GLP-1 weight loss program?" },
      { q: "Who is eligible for the program?" },
      { q: "How is the medication delivered?" },
    ],
  },
  {
    id: "virtual-counseling",
    label: "VIRTUAL COUNSELING",
    questions: [
      { q: "What is virtual counseling?" },
      { q: "How long are counseling sessions?" },
    ],
  },
  {
    id: "virtual-psychology",
    label: "VIRTUAL PSYCHOLOGY",
    questions: [
      {
        q: "What is the difference between counseling and psychology services?",
      },
      { q: "Do you offer assessments?" },
    ],
  },
  {
    id: "virtual-psychiatry",
    label: "VIRTUAL PSYCHIATRY",
    questions: [
      { q: "What is virtual psychiatry?" },
      { q: "Can a psychiatrist prescribe medication?" },
    ],
  },
  {
    id: "behavioral-app",
    label: "ADVANCED BEHAVIORAL HEALTH APP",
    questions: [
      { q: "What features does the app include?" },
      { q: "Is the app free with my membership?" },
    ],
  },
  {
    id: "televet",
    label: "TELEVET PET CARE",
    questions: [
      { q: "What is TeleVet Pet Care?" },
      { q: "What types of pets are covered?" },
      { q: "Are veterinarians available 24/7?" },
    ],
  },
  {
    id: "standalone",
    label: "STANDALONE PACKAGES",
    questions: [
      { q: "What is a standalone package?" },
      { q: "Can I switch to a different package later?" },
    ],
  },
  {
    id: "addons",
    label: "ADD-ON SERVICES",
    questions: [
      { q: "What add-on services are available?" },
      { q: "How do I add an add-on to my plan?" },
    ],
  },
  {
    id: "more-packages",
    label: "MORE COMMONLY CHOSEN PACKAGES",
    questions: [
      { q: "What are the most popular packages?" },
      { q: "Which package is right for my family?" },
    ],
  },
];

export default function FAQTabs() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestion, setOpenQuestion] = useState(0);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setOpenQuestion(0);
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <section className="section-padding py-16 md:py-20 bg-white">
      <div className="container-main max-w-6xl">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-10">
          {/* Left Sidebar - Categories */}
          <aside>
            <div className="space-y-2 lg:sticky lg:top-24">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={cn(
                    "w-full text-center px-4 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 leading-tight",
                    activeCategory === category.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white border border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Right - Questions */}
          <div>
            <div className="space-y-3">
              {currentCategory.questions.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "border rounded-xl overflow-hidden transition-all duration-300",
                    openQuestion === i
                      ? "border-primary/30 bg-gray-50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-primary/20",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={openQuestion === i}
                  >
                    <span className="text-base md:text-base font-bold text-gray-900 leading-snug">
                      {item.q}
                    </span>
                    <div
                      className={cn(
                        "w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                        openQuestion === i
                          ? "border-primary bg-primary text-white"
                          : "border-primary/30 text-primary",
                      )}
                    >
                      {openQuestion === i ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  {openQuestion === i && item.a && (
                    <div className="px-5 pb-5 pt-1">
                      <p className="text-base text-gray-700 leading-relaxed">
                        {item.bold && (
                          <span className="font-bold text-gray-900">
                            {item.bold}
                          </span>
                        )}{" "}
                        {item.a.replace(item.bold || "", "").trim()}
                      </p>
                    </div>
                  )}

                  {openQuestion === i && !item.a && (
                    <div className="px-5 pb-5 pt-1">
                      <p className="text-base text-gray-500 italic leading-relaxed">
                        Answer coming soon. Contact us for more information.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
