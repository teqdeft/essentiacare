import Link from "next/link";
import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import BackToTop from "@/components/ui/BackToTop";

const quickLinks = [
  { label: "Join the Mission", href: "/join-the-mission" },
  { label: "Speak to a Therapist", href: "/counseling/speak-to-a-therapist" },
  {
    label: "Speak to a Veterinarian",
    href: "/televet-pet-care/speak-to-a-veterinarian",
  },
  { label: "Request a Demo", href: "/request-a-demo" },
  { label: "Enterprise EAP", href: "/eap/enterprise-eap" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Insurance Disclaimer", href: "/insurance-disclaimer" },
];

const certifications = [
  {
    name: "USFCR Verified Vendor",
    image: "/images/footer/verified-vendor-seal-2025-med.png",
  },
  { name: "WBENC Certified", image: "/images/footer/wbenc-new-v1.png" },
  { name: "SBA WOSB Certified", image: "/images/footer/wosb-logo-v2.png" },
  { name: "HIPAA Compliant", image: "/images/footer/hipaa-logo-new-v2.png" },
  { name: "BBB Accredited Business", image: "/images/footer/bbb-logo-v1.png" },
];

const socials = [
  {
    name: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    name: "Pinterest",
    href: "#",
    path: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345c-.091.378-.293 1.194-.333 1.361-.052.22-.174.266-.402.16-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z",
  },
  {
    name: "YouTube",
    href: "#",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "LinkedIn",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Flickr",
    href: "#",
    path: "M5.334 6.666C2.391 6.666 0 9.057 0 12s2.391 5.334 5.334 5.334S10.668 14.943 10.668 12 8.277 6.666 5.334 6.666zm13.332 0C15.723 6.666 13.332 9.057 13.332 12s2.391 5.334 5.334 5.334S24 14.943 24 12s-2.391-5.334-5.334-5.334z",
  },
  {
    name: "WhatsApp",
    href: "#",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.546 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.582 0 11.94-5.359 11.943-11.893A11.821 11.821 0 0020.52 3.449",
  },
];

const headingClass =
  "text-xl font-bold text-white inline-block border-b-2 border-white/40 pb-1.5 mb-6";

export default function Footer() {
  return (
    <footer className="text-white relative" style={{ background: "#6d4f85" }}>
      <BackToTop />

      <div className="section-padding">
        <div className="container-main">
          {/* Main Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr] gap-10 lg:gap-12 py-14 md:py-16">
            {/* Column 1 — Verification */}
            <div>
              <h3 className={headingClass}>We are officially verified.</h3>
              <p className="text-sm text-white/85 leading-relaxed mb-7">
                Our verification confirms authenticity and trust. Customers can
                confidently engage with us, knowing we meet all required
                standards for reliability and security.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="rounded-md p-1.5 h-12 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h3 className={headingClass}>Quick Links</h3>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-white/90 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Start Your Journey */}
            <div>
              <h3 className={headingClass}>Start Your Journey Today!</h3>

              <Link
                href="mailto:support@iwilltilimwell.com"
                className="flex items-center gap-2 text-sm text-white/90 hover:text-accent transition-colors mb-6"
              >
                <Mail className="w-4 h-4 shrink-0" />
                support@iwilltilimwell.com
              </Link>

              <div className="flex gap-3 mb-7">
                <Button
                  variant="white"
                  size="sm"
                  href="https://app.essentiacare.ai/login"
                >
                  Login
                </Button>
                <Button
                  variant="white"
                  size="sm"
                  href="https://app.essentiacare.ai/register"
                >
                  Get Started
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="text-white/85 hover:text-accent transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4 — QR Code */}
            <div>
              <h3 className={headingClass}>Scan to Visit Our Website</h3>
              <div className="bg-white rounded-xl p-3 inline-block">
                <img
                  src="/images/footer/essentiacare-qr.png"
                  alt="QR code to visit essentiacare.ai"
                  className="w-36 h-36 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ background: "#2a2532" }}>
        <div className="section-padding">
          <div className="container-main py-5 text-center">
            <p className="text-xs text-white/70">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white/90">EssentiaCare.</span>{" "}
              All Rights Reserved. Powered by{" "}
              <span className="italic">iwilltilimwell</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
