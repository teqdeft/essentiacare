import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import Accordion from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "How quickly can I connect with a provider?",
    answer:
      "You can connect with a provider in minutes — not days. Our platform offers 24/7 access to licensed doctors, therapists, and veterinarians. For on-demand visits, most patients are connected within 10–15 minutes. You can also schedule appointments in advance at your convenience.",
  },
  {
    question: "Are services available 24/7?",
    answer:
      "Yes! Our telehealth services are available around the clock, 365 days a year. Whether it's 2 AM or a holiday, you'll always have access to qualified healthcare professionals when you need them most.",
  },
  {
    question: "Do I need insurance to use the services?",
    answer:
      "No. Insurance IS NOT required; however, you may use your insurance plan to maximize your savings. We offer affordable self-pay plans that make healthcare accessible to everyone. Check our pricing page for current plans and rates.",
  },
  {
    question: "What types of services are available?",
    answer:
      "We offer three main service categories: Medical Care (primary care, urgent care, prescriptions), Behavioral Health (therapy, counseling, psychiatric care), and TeleVet Pet Care (virtual vet consultations for your pets). Each service is delivered by licensed, board-certified professionals.",
  },
  {
    question: "Can employers offer this to their teams?",
    answer:
      "Absolutely! We offer custom employer plans that can be tailored to fit teams of any size. Our employer solutions include EAP integration, usage analytics, and dedicated account management. Contact our sales team to learn more about employee wellness programs.",
  },
];

export default function FAQ() {
  return (
    <SectionWrapper gray id="faq">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Everything you need to know about our services, plans, and how to get started."
      />

      <div className="max-w-3xl mx-auto">
        <Accordion items={faqItems} />
      </div>
    </SectionWrapper>
  );
}
