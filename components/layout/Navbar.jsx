"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import GoogleTranslate from "../ui/GoogleTranslate";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Medical Care",
    children: [
      { label: "Medical Care Services", href: "/wellness/medical-care" },
      { label: "Speak To A Doctor", href: "/wellness/speak-to-a-doctor" },
      { label: "Search Medication", href: "/wellness/search-medication" },
      {
        label: "Silver Prescription Plan",
        href: "/wellness/silver-prescription-plan",
      },
      {
        label: "Gold Prescription Plan",
        href: "/wellness/gold-prescription-plan",
      },
      {
        label: "Platinum Prescription Plan",
        href: "/wellness/platinum-prescription-plan",
      },
    ],
  },
  {
    label: "Counseling Care",
    children: [
      {
        label: "Counseling Care Services",
        href: "/counseling/counseling-care-services",
      },
      {
        label: "Speak To A Therapist",
        href: "/counseling/speak-to-a-therapist",
      },
    ],
  },
  {
    label: "TeleVet Pet Care",
    children: [
      { label: "Televet Pet Care", href: "/televet-pet-care" },
      {
        label: "Speak To A Veterinarian",
        href: "/televet-pet-care/speak-to-a-veterinarian",
      },
    ],
  },
  {
    label: "EAP",
    children: [
      { label: "Enterprise EAP", href: "/eap/enterprise-eap" },
      { label: "Virtual Primary Care", href: "/eap/virtual-primary-care" },
      {
        label: "Virtual Behavioral Health",
        href: "/eap/virtual-behavioral-health",
      },
      {
        label: "Musculoskeletal Program",
        href: "/eap/musculoskeletal-program",
      },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Media Hub", href: "/media-hub" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Demo", href: "/request-a-demo" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (label) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header className="w-full z-50 sticky top-0">
      {/* Main Nav */}
      <nav className="section-padding" style={{ background: "#6d4f85" }}>
        {/* TOP ROW: Logo (left) + CTAs (right) */}
        <div className="container-main flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Home"
          >
            <img
              src="/images/essentiacare-white-logo-v1.png"
              alt="EssentiaCare"
              className="h-16 w-auto"
            />
          </Link>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <GoogleTranslate />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* BOTTOM ROW: Page Links */}
        <div className="hidden lg:block border-t border-white/15">
          <div className="container-main flex items-center justify-start gap-0.5 xl:gap-1 py-2">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <button
                    type="button"
                    className="flex items-center gap-1 px-1.5 xl:px-3 py-2.5 text-[13px] xl:text-sm font-medium text-white/95 hover:text-white rounded-lg hover:bg-white/15 transition-all whitespace-nowrap"
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-1.5 xl:px-3 py-2.5 text-[13px] xl:text-sm font-medium text-white/95 hover:text-white rounded-lg hover:bg-white/15 transition-all whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )}

                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[240px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#604376] hover:bg-purple-50 transition-colors whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 space-y-1 border-t border-white/10">
            <div className="px-2 pb-2">
              <GoogleTranslate />
            </div>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => toggleSubmenu(link.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                    aria-expanded={openSubmenu === link.label}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        openSubmenu === link.label && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openSubmenu === link.label ? "max-h-96" : "max-h-0",
                    )}
                  >
                    <div className="pl-4 py-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeAll}
                          className="block px-4 py-2.5 text-sm text-white/85 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeAll}
                  className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="pt-3 px-4">
              <Button
                variant="accent"
                className="w-full"
                href="https://app.essentiacare.ai/register"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
