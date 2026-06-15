// import PageLoader from "@/components/layout/PageLoader";
import "./globals.css";

export const metadata = {
  title: "EssentiaCare | Medical & Mental Healthcare",
  icons: {
    icon: "/images/essentiacare-favicon.png",
    shortcut: "/images/essentiacare-favicon.png",
    apple: "/images/essentiacare-favicon.png",
  },
  description:
    "Access doctors, therapists, and board-certified providers on your terms. Self-care is the new healthcare. Simple, affordable, and on your time.",
  keywords: [
    "telehealth",
    "mental health",
    "medical care",
    "behavioral health",
    "online therapy",
    "virtual healthcare",
    "wellness",
  ],
  openGraph: {
    title: "EssentiaCare | Medical & Mental Healthcare",
    description:
      "Access doctors, therapists, and board-certified providers on your terms. Simple, affordable, and on your time.",
    url: "https://essentiacare.ai",
    siteName: "EssentiaCare",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EssentiaCare | Medical & Mental Healthcare",
    description:
      "Access doctors, therapists, and board-certified providers on your terms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* <PageLoader /> */}
        {children}</body>
    </html>
  );
}
