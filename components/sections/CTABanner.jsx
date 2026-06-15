 import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden section-padding py-16 md:py-24 bg-[#604376]">
      {/* Decorative lotus */}
      <div className="absolute top-1/2  right-52 w-[800px] h-[800px] opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none">
        <img
          src="/images/logo-favi.svg"
          alt=""
          className="w-full h-full object-contain rotate-45"
        />
      </div>

      <div className="relative container-main">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-white/80 font-medium">
              Start today
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Start Your Wellness
            <br />
            Journey Today
          </h2>

          <p className="text-white/70 text-xl leading-relaxed mb-8 max-w-lg">
            Connect with trusted medical and behavioral health providers. Start
            feeling better with care designed to fit your schedule and your
            life.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="accent"
              size="lg"
              href="https://app.essentiacare.ai/register"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline-white" size="lg" href="/pricing">
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
