import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { Wallet, Users, Home, Building2 } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Convenient & Cost-Saving",
    description: "Convenient, cost savings and enhances healthcare efficiency.",
  },
  {
    icon: Users,
    title: "Better Access",
    description: "Improves access to specialists and specialists to patients.",
  },
  {
    icon: Home,
    title: "Care From Home",
    description:
      "Staying home reduces travel time, exposure to infections and improves public health outcomes.",
  },
  {
    icon: Building2,
    title: "Less Overcrowding",
    description:
      "Increases healthcare access and reduces hospital overcrowding.",
  },
];

export default function BenefitsOnlineVisits() {
  return (
    <SectionWrapper gray>
      <SectionHeader
        badge="Why Virtual Care"
        title="The Benefits of"
        titleAccent="Online Visits"
        description="Telehealth brings quality care closer, faster, and more affordably — wherever life takes you."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-100 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center mb-5 transition-all duration-300">
              <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
