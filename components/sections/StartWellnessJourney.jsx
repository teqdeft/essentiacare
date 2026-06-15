import Button from "@/components/ui/Button";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "Convenient, cost savings, and enhances healthcare efficiency.",
  "Improves access to specialists and specialists to patients.",
  "Staying home reduces travel time, exposure to infections, and improves public health outcomes.",
  "Increases healthcare access and reduces hospital overcrowding.",
];

export default function StartWellnessJourney() {
  return (
    <section className="bg-white section-padding py-16 md:py-24 overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — App mockup */}
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-6 rounded-[2.5rem] opacity-10 blur-2xl"
              style={{
                background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
              }}
            />
            <img
              src="/images/svg/Dashboard-Mockup.png"
              alt="EssentiaCare app on phone and tablet"
              className="relative w-full h-auto max-w-xl mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Right — Copy */}
          <div className="order-1 lg:order-2">
            {/* <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              Get The App
            </span> */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-5">
              Start Your Wellness Journey{" "}
              <span className="text-[#A06BAF] font-script font-normal text-4xl md:text-5xl">
                Today!
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you&apos;re looking to save time, reduce costs, or enhance
              your healthcare experience, our solution is designed to improve
              access and outcomes.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Download our app, start your search, and experience a smarter,
              more efficient way to take care of your health whenever and
              wherever you need it.
            </p>
            <ul className="space-y-4 mb-9">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </span>
                  <span className="text-base text-gray-700 leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="lg"
                href="https://app.essentiacare.ai/register"
              >
                Join Today!
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" href="/wellness/medical-care">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
