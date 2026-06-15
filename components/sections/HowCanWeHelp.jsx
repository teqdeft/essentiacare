import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { Zap, Layers, Gem } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    tag: "RESPONSIVE",
    title: "EssentiaCare is RESPONSIVE",
    points: [
      "We provide easy access, quick consultations, early interventions, and timely medical advice, reducing wait times and improving access to care.",
      "Patients connect with providers anytime, anywhere using real-time communication tools, such as video calls and phone calls on our website or in our app.",
    ],
  },
  {
    icon: Layers,
    tag: "VERSATILE",
    title: "EssentiaCare is VERSATILE",
    points: [
      "We offer urgent care, primary care, chronic disease management, specialist consultations, mental health therapy, mental health assessment tools, and even pet therapy.",
      "We integrate various technologies, such as video conferencing and phone calls, on our website and in our mobile health app.",
    ],
  },
  {
    icon: Gem,
    tag: "EXQUISITE",
    title: "EssentiaCare is EXQUISITE",
    points: [
      "We blend cutting-edge technology with personalized, real-time interactions with medical and mental health professionals for precise diagnoses and tailored treatment plans.",
      "We offer patient-centered care that creates a seamless and efficient healthcare experience on our website and in our mobile health app.",
    ],
  },
];

export default function HowCanWeHelp() {
  return (
    <SectionWrapper>
      <SectionHeader
        badge="How Can We Help?"
        title="The Highest Quality Care for Your"
        titleAccent="Body, Mind & Soul"
        description="EssentiaCare offers premiere services that are designed to meet your medical and mental health needs. Communication with Licensed Physicians, Mental Health Specialists, and Licensed Veterinarians in both English and Spanish, 24/7, 365 days a year. The highest quality care for your body, mind, and soul is offered at a flexible, affordable value."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map(({ icon: Icon, tag, title, points }) => (
          <div
            key={tag}
            className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1 opacity-80"
              style={{
                background: "linear-gradient(90deg, #604376 0%, #AC73B9 100%)",
              }}
            />
            <div className="w-14 h-14 rounded-2xl bg-primary-100 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center mb-5 transition-all duration-300">
              <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              {tag}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-4">
              {title}
            </h3>
            <ul className="space-y-3">
              {points.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-base text-gray-600 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
