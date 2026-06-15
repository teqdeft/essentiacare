import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Stethoscope, Brain, PawPrint, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Medical Care Services",
    image: "/images/service-medical.png",
    description:
      "EssentiaCare provides accessible, personalized, and holistic medical care in both English and Spanish, 24/7, 365 days a year.",
    features: [
      "Virtual Urgent Care & Virtual Medical Consultations.",
      "Virtual Primary Care & Chronic Disease Management.",
      "Diagnose, treat ailments & give treatment recommendations.",
      "Write and send prescriptions to the pharmacy of your choice.",
      "A no-to-low cost prescription plan.",
      "HIPAA-compliant framework",
    ],
    color: "primary",
    ctaLabel: "Speak to a Doctor",
    href: "/wellness/speak-to-a-doctor",
  },
  {
    icon: Brain,
    title: "Counseling Care Services",
    image: "/images/service-behavioral.png",
    description: [
      "EssentiaCare offers comprehensive, compassionate, and accessible in-the-moment mental health care tailored to your individual needs, 24 hours/day, 365 days a year.",
      <br />,
      "Our holistic approach gives equal importance to caring for the mind as it does to caring for the body.",
    ],
    features: [
      "Solve a problem with a personal counselor, psychologist, psychiatrist.",
      "In-the-moment care.",
      "Talk about your concerns and process your thoughts.",
      "Select psychotropic medications.",
    ],
    color: "accent",
    ctaLabel: "Speak to a Therapist",
    href: "/counseling/speak-to-a-therapist",
  },
  {
    icon: PawPrint,
    title: "TeleVet Pet Health Care Services",
    image: "/images/service-televet.jpg",
    description:
      "EssentiaCare's TeleVet program provides remote veterinary care for pets with licensed veterinarians through TeleVet consultations 24 hours/day, 365 days a year via video calls or phone consultations to discuss concerns.",
    features: [
      "Receive advice.",
      "Monitor ongoing care.",
      "Convenience and accessibility without needing to travel to a clinic.",
      "Timely follow-up appointments and efficient routine check-ups.",
    ],
    color: "primary",
    ctaLabel: "Speak to a Veterinarian",
    href: "/televet-pet-care/speak-to-a-veterinarian",
  },
];

const colorMap = {
  primary: {
    iconBg: "bg-primary-100",
    iconColor: "text-primary",
    headerBg: "bg-gradient-to-br from-primary-50 to-primary-100/50",
  },
  accent: {
    iconBg: "bg-accent-100",
    iconColor: "text-accent",
    headerBg: "bg-gradient-to-br from-accent-50 to-accent-100/50",
  },
};

export default function PathsToWellness() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        badge="Our Services"
        title="Our Paths to"
        titleAccent="Wellness"
        description="Accessible healthcare for your body, mind, and pets — with trusted virtual support designed to fit everyday life."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 ">
        {services.map((service) => {
          const colors = colorMap[service.color];
          const Icon = service.icon;

          return (
            <Card key={service.title} className="flex flex-col">
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-75 object-cover"
                />
                <div
                  className={`absolute top-4 left-4 w-11 h-11 rounded-xl ${colors.iconBg} flex items-center justify-center shadow-lg backdrop-blur-sm`}
                >
                  <Icon className={`w-5 h-5 ${colors.iconColor}`} />
                </div>
              </div>

              {/* Card Body */}
              <CardContent className="flex-1 flex flex-col ">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-base text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <Button variant="primary" size="md" href={service.href}>
                    {service.ctaLabel}
                  </Button>
                  {/* <Button
                    variant="ghost"
                    size="sm"
                    href="/faq"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
