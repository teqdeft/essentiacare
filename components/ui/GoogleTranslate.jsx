"use client";

import { useEffect, useState, useRef } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Spanish", short: "ES" },
];

export default function GoogleTranslate() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);
  const dropdownRef = useRef(null);

  // Load Google Translate script (hidden)
  useEffect(() => {
    if (document.getElementById("google-translate-script")) {
      setIsLoaded(true);
      return;
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
      setIsLoaded(true);
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Read current language from cookie on mount
  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("googtrans="));
    if (cookie) {
      const value = cookie.split("=")[1];
      if (value.includes("/es")) setCurrentLang("es");
      else setCurrentLang("en");
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    // Set cookie for Google Translate
    const domain = window.location.hostname;
    const cookieValue = langCode === "en" ? "/en/en" : `/en/${langCode}`;

    // Set on multiple paths to ensure it sticks
    document.cookie = `googtrans=${cookieValue}; path=/`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain}`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=.${domain}`;

    // Reload to apply translation
    window.location.reload();
  };

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <>
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Custom Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between gap-3 min-w-[150px] px-4 py-2 rounded-md bg-white/5 hover:bg-white/15 border border-white/40 text-white text-sm font-medium transition-all duration-200"
          aria-label="Change language"
          aria-expanded={isOpen}
        >
          <span>
            {currentLang === "en" ? "Select Language" : current.label}
          </span>
          <svg
            className={cn(
              "w-3 h-3 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 min-w-[160px] bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => changeLanguage(lang.code)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors",
                  currentLang === lang.code
                    ? "text-primary bg-primary-50"
                    : "text-gray-700 hover:text-primary hover:bg-primary-50"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-xs font-bold w-6 text-gray-500">
                    {lang.short}
                  </span>
                  {lang.label}
                </span>
                {currentLang === lang.code && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </button>
            ))}
          </div>
        )}

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-4px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.15s ease-out;
          }
        `}</style>
      </div>
    </>
  );
}