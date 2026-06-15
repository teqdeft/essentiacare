import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("refund-policy");
}

const SupportLink = () => (
  <a
    href="mailto:support@iwilltilimwell.com"
    className="text-primary hover:underline"
  >
    support@iwilltilimwell.com
  </a>
);

const sections = [
  {
    title: "1. Subscription Commitment & Billing Cycles.",
    items: [
      {
        bold: "Consumers (referred to as “members” or “users”)",
        rest: " commit to their selected subscription duration (monthly, quarterly, bi-annual, or annual).",
      },
      {
        rest: "Cancellations must be submitted via the EssentiaCare mobile app prior to the next billing cycle to avoid future charges.",
      },
    ],
  },
  {
    title: "2. Refunds for Annual, Bi-Annual, and Quarterly Payments.",
    items: [
      {
        rest: "No refunds will be issued for any portion of the subscription term (annual, bi-annual, or quarterly) that has already been completed.",
      },
      {
        rest: "If you cancel your subscription within an ongoing billing term, you will retain access for the remainder of that period; cancellations take effect at the end of the then-current quarter or term, ",
        boldEnd: "and no further charges will be incurred after that point.",
      },
      {
        rest: "Once a new billing period (month or quarter) begins, that period is non-refundable regardless of usage.",
      },
    ],
  },
  {
    title: "3. Monthly Subscriptions.",
    items: [
      {
        rest: "Monthly subscriptions are non-refundable once a new month begins, even if the service is not used.",
      },
      {
        rest: "You may cancel at any time before the next billing cycle to avoid additional charges.",
      },
      {
        rest: "The monthly option is available only for the first three consecutive months, after which subscriptions automatically convert to quarterly billing with corresponding quarterly terms and policies.",
      },
    ],
  },
  {
    title: "4. Company Discretion.",
    items: [
      {
        rest: "In very exceptional circumstances, the Company may, at its sole discretion, review refund requests for the unused portion of your paid term and make a decision about a partial or prorated refund, deducting any applicable discounts. The company is under no obligation to provide refunds outside of the terms outlined in this policy.",
      },
    ],
  },
  {
    title: "5. Refund Processing.",
    items: [
      {
        rest: "Approved refunds will be credited back to the original method of payment, typically within twenty-one working days.",
      },
      {
        rest: "Notice of refund approval or denial will be sent by email.",
      },
      {
        rest: "If an expected refund has not been received, consumers must first check with their payment provider, then contact Customer Service at ",
        showLink: true,
        afterLink: " if the issue persists.",
      },
      {
        rest: "Enterprise clients should contact their Executive Account Representative or send an inquiry to ",
        showLink: true,
        afterLink: ".",
      },
    ],
  },
  {
    title: "6. Non-Refundable Fees.",
    items: [
      {
        rest: "Completed or missed appointment fees are non-refundable.",
      },
    ],
  },
  {
    title: "7. Grievance Process.",
    items: [
      {
        rest: "If dissatisfied, consumers may contact Customer Service to share and review concerns.",
      },
      {
        rest: "After the Company's review, consumers who remain dissatisfied with refund resolution may escalate the dispute to their payment provider.",
      },
    ],
  },
  {
    title: "8. Right to Cancel Subscription.",
    items: [
      {
        rest: "The company reserves the right to cancel your subscription at any time for any reason, including but not limited to breaches of these terms and conditions, non payment, or misuse of the services.",
      },
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden h-[280px] md:h-[340px]"
          style={{
            background: "linear-gradient(135deg, #4a3260 0%, #604376 100%)",
          }}
        >
          {/* Decorative lotus */}
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-15 -translate-y-1/2 translate-x-1/4 pointer-events-none hidden lg:block">
            <img
              src="/images/logo-favi.svg"
              alt=""
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
              EssentiaCare Telemedicine Refund Policy
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-4xl">
            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                    {section.title}
                  </h2>

                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 items-start text-base text-gray-700 leading-relaxed"
                      >
                        <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span>
                          {item.bold && (
                            <span className="font-bold">{item.bold}</span>
                          )}
                          {item.rest}
                          {item.boldEnd && (
                            <span className="font-bold">{item.boldEnd}</span>
                          )}
                          {item.showLink && <SupportLink />}
                          {item.afterLink}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
