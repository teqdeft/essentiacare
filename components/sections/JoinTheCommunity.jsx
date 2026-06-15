import CountUp from "@/components/ui/CountUp";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    value: 75,
    suffix: "%",
    label: "Percent of most primary care offices that are closed after 6 PM",
  },
  {
    value: 4,
    suffix: " hrs",
    label: "The average wait time in the Emergency Room",
  },
  {
    value: 21,
    suffix: " days",
    label: "The average number of days to schedule a doctor's appointment",
  },
  {
    value: 66,
    suffix: "%",
    label: "Percent of Emergency Room visits that are considered non-emergency",
  },
];

export default function JoinTheCommunity() {
  return (
    <section
      className="relative overflow-hidden section-padding py-16 md:py-24"
      style={{
        background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
      }}
    >
      {/* Decorative lotus */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] opacity-10 -translate-y-1/2 translate-x-1/3 pointer-events-none hidden lg:block">
        <img
          src="/images/logo-favi.svg"
          alt=""
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="container-main relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
            Join The{" "}
            <span className="font-script font-normal text-4xl md:text-5xl">
              Community
            </span>
          </h2>
          <p className="text-white/75 text-lg leading-relaxed">
            The healthcare system wasn&apos;t built for your schedule.
            EssentiaCare was. Here&apos;s why thousands are making the switch.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 md:p-8"
            >
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                className="block text-4xl md:text-5xl font-bold text-white mb-3"
              />
              <p className="text-sm md:text-base text-white/80 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="white" size="lg" href="/join-the-mission">
            Join The Community
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
