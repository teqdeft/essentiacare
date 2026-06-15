import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { Zap, LifeBuoy, UserCheck, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Responsive Care",
    description:
      "Connect with a provider in minutes — not days. Our platform is designed to fit seamlessly into your life, with 24/7 access to qualified healthcare professionals.",
  },
  {
    icon: LifeBuoy,
    title: "Versatile Support",
    description:
      "From medical consultations to behavioral therapy and pet care, we offer a full spectrum of health services. Choose the path that fits your unique needs.",
  },
  {
    icon: UserCheck,
    title: "Personalized Experience",
    description:
      "We match you with the right provider based on your specific needs. Every care plan is personalized to ensure you get the support that works best for you.",
  },
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper gray>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        {/* Left - Image */}
        <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-0">
          <img
            src="/images/dfd.png"
            alt="Person using telehealth platform"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right - Why Choose */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="text-primary">EssentiaCare</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We believe care should be accessible, simple to navigate, and
            available when you need it. Our platform connects you with trusted
            providers in one place, so you can get the right support at the
            right time — affordably and conveniently.
          </p>

          <div className="space-y-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Button
              variant="ghost"
              size="lg"
              href="https://app.essentiacare.ai/register"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
