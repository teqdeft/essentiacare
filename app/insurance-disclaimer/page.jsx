import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, ShieldCheck, ShieldX } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("insurance-disclaimer");
}

const comparisonRows = [
  {
    feature: "Virtual Primary Care & Urgent Care",
    iwill: { type: "yes", text: "Unlimited" },
    insurance: { type: "no", text: "Often limited" },
  },
  {
    feature: "Mental Health Support",
    iwill: { type: "yes", text: "Therapy, crisis care, psychiatry" },
    insurance: { type: "yes", text: "With copays" },
  },
  {
    feature: "Prescription Delivery",
    iwill: { type: "yes", text: "Select meds included" },
    insurance: { type: "yes", text: "Usually included" },
  },
  {
    feature: "Family Coverage",
    iwill: { type: "yes", text: "Up to 8 household members" },
    insurance: { type: "no", text: "Often costs more" },
  },
  {
    feature: "Monthly Cost",
    iwill: { type: "yes", text: "Low flat rate" },
    insurance: { type: "no", text: "Monthly premium (typically $300+)" },
  },
  {
    feature: "Copays",
    iwill: { type: "yes", text: "On few select services" },
    insurance: { type: "yes", text: "Often $25–$50 on most to all services" },
  },
  {
    feature: "Hospitalization/In-Office Procedures",
    iwill: { type: "no", text: "Not covered" },
    insurance: { type: "yes", text: "Covered" },
  },
  {
    feature: "Care Coordination",
    iwill: { type: "yes", text: "24/7 live support" },
    insurance: { type: "no", text: "Varies by plan" },
  },
  {
    feature: "Use Without Insurance",
    iwill: { type: "yes", text: "Yes" },
    insurance: { type: "no", text: "No" },
  },
];

function StatusCell({ status }) {
  const isYes = status.type === "yes";
  return (
    <div className="flex items-center gap-2">
      {isYes ? (
        <ShieldCheck
          className="w-5 h-5 text-accent shrink-0"
          strokeWidth={2.2}
        />
      ) : (
        <ShieldX className="w-5 h-5 text-red-500 shrink-0" strokeWidth={2.2} />
      )}
      <span className="text-base text-gray-700">{status.text}</span>
    </div>
  );
}

export default function InsuranceDisclaimerPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden h-[300px] md:h-[360px]"
          style={{
            background: "linear-gradient(135deg, #4a3260 0%, #604376 100%)",
          }}
        >
          {/* Decorative lotus */}
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-15 -translate-y-1/2 translate-x-1/4 pointer-events-none hidden lg:block">
            <img
              src="/images/logo-favi.svg"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <Link
            href="/"
            className="absolute top-6 left-6 z-[4] inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium hover:bg-white/25 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          <div className="relative h-full container-main section-padding flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl">
              Understanding <br /> EssentiaCare Coverage
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-5xl">
            {/* Patient Disclaimer */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                Patient Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                EssentiaCare is a virtual wellness platform that provides
                comprehensive support for mental health, primary care, urgent
                care, and more through telehealth. It is not a substitute for
                major medical insurance and does not cover in-person procedures,
                hospitalizations, or emergencies. If your condition requires
                in-office care, our licensed providers will refer you
                appropriately. Always call 911 or go to the nearest emergency
                room for life-threatening concerns.
              </p>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                FAQ: Is EssentiaCare a replacement for traditional health
                insurance?
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                No. EssentiaCare is not intended to replace major medical
                insurance. It is a virtual care solution designed to complement
                your current coverage or serve as an affordable option when
                traditional insurance is not available. We offer unlimited
                access to care for everyday health needs, chronic condition
                support, and behavioral health—but we do not cover hospital
                stays, surgeries, or procedures that require in-person care.
                When necessary, our providers will refer you to in-office care.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                Comparison: EssentiaCare vs. Major Medical Insurance
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full min-w-[700px]">
                  {/* Table header */}
                  <thead
                    style={{
                      background:
                        "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
                    }}
                  >
                    <tr>
                      <th className="text-left p-4 md:p-5 text-white font-bold text-base md:text-base w-1/3">
                        Feature
                      </th>
                      <th className="text-left p-4 md:p-5 text-white font-bold text-base md:text-base w-1/3">
                        EssentiaCare
                      </th>
                      <th className="text-left p-4 md:p-5 text-white font-bold text-base md:text-base w-1/3">
                        Major Medical Insurance
                      </th>
                    </tr>
                  </thead>

                  {/* Table body */}
                  <tbody className="bg-white">
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="p-4 md:p-5 text-base md:text-base text-gray-700 align-middle">
                          {row.feature}
                        </td>
                        <td className="p-4 md:p-5 align-middle">
                          <StatusCell status={row.iwill} />
                        </td>
                        <td className="p-4 md:p-5 align-middle">
                          <StatusCell status={row.insurance} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
