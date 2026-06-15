"use client";

export default function Features() {
  return (
    <section
      className="relative overflow-hidden section-padding py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
      }}
    >
      {/* Soft floating orbs for ambient movement */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl animate-float-slower" />
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 rounded-full bg-white/5 blur-3xl animate-float-slow" />
      </div>

      <div className="container-main relative">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-xs font-semibold uppercase tracking-wider text-white/90 mb-4">
            Care That Fits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Designed Around Your{" "}
            <span className="font-script font-normal text-4xl md:text-5xl text-white">
              Everyday Life
            </span>
          </h2>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative animate-fade-up">
          <img
            src="/images/svg/Dashboard-Mockup.svg"
            alt="Dashboard preview"
            className="w-full h-auto max-w-6xl mx-auto"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -30px) scale(1.05);
          }
        }
        @keyframes float-slower {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-25px, 20px) scale(1.08);
          }
        }
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 16s ease-in-out infinite;
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}