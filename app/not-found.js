import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page Not Found | EssentiaCare",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding py-20"
      style={{
        background:
          "linear-gradient(135deg, #6d578e 0%, #5a4775 50%, #6d578e 100%)",
      }}
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Decorative lotus */}
      {/* <div className="pointer-events-none absolute top-1/2 right-20 w-[400px] h-[400px] opacity-70 -translate-y-1/2 translate-x-1/4">
        <img
          src="/images/logo-favi.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div> */}
      <div className="pointer-events-none absolute top-1/2 right-200 animate-bounce w-[600px] h-[600px] opacity-50 -translate-y-1/2 translate-x-1/4">
        <img
          src="/images/logo-favi.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="relative container-main text-center max-w-2xl">
        {/* 404 number */}
        <h1 className="text-[120px] md:text-[180px] font-bold leading-none text-white/95 tracking-tight mb-2 animate-bounce">
          404
        </h1>

        {/* Divider */}
        <div className="w-20 h-1 bg-white/40 rounded-full mx-auto mb-6" />

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track to better health.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#6d578e] font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            Go to Home
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}
