import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import TeleVetCarousel from "@/components/sections/TeleVetCarousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("televet-pet-care");
}

export default function TeleVetPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[500px] md:h-[560px]">
          <div
            className="absolute inset-0 z-[0] "
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/televet-pet-care/bckg-therealdrjill-014-s.jpg"
            alt="Medical team"
            className="absolute inset-0 w-full h-full object-cover opacity-70 z-[1]"
          />
          <Link
            href="/"
            className="absolute top-6 left-6 z-[4] inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium hover:bg-white/25 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          <div className="relative z-[3] h-full container-main section-padding flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
                TeleVet
              </h1>

              <p className="text-lg md:text-xl text-white/95 font-semibold leading-relaxed mb-8 max-w-xl">
                We believe that your pets deserve the best care, no matter where
                you are. Enjoy convenient, remote access to Licensed
                Veterinarians for expert advice and care, all from the comfort
                of your home. Pets are family, too.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="white"
                  size="md"
                  href="https://app.essentiacare.ai/login"
                >
                  Login
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  href="https://app.essentiacare.ai/register"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pets Are Our Family */}
        <section className="section-padding py-16 md:py-20 bg-[#faf8f3]">
          <div className="container-main max-w-6xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-8">
              Pets Are Our{" "}
              <span className="text-primary font-script">Family</span>
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg mb-10 max-w-5xl">
              <p>
                We understand that your pets are more than just animals, they're
                family. That's why we offer TeleVet services to provide your
                pets with the high-quality care they deserve, no matter where
                you are.
              </p>
              <p>
                Our TeleVet service makes it easier than ever to care for your
                pet's health - without the stress of a clinic visit.
              </p>
              <p>
                Whether it's a routine wellness check, questions about a minor
                illness, or guidance on ongoing health management, our TeleVet
                service offers you the convenience and peace of mind of having a
                veterinary expert at your fingertips.
              </p>
              <p className="font-bold text-gray-900">
                Unlimited access to a dedicated team of Licensed Veterinarians,
                24/7/365 days a year.
              </p>
              <p>
                Consultations take place in real-time via phone or video on your
                mobile device or computer.
              </p>
              <p>
                <span className="font-bold text-gray-900">
                  Includes a Pet Drug Savings Prescription Discount
                </span>{" "}
                card with up to 75% savings at 68,000 participating pharmacies.
              </p>
            </div>

            {/* TeleVet Services */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-8">
                TeleVet Services:
              </h3>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* TeleVet Pet Care */}
                <div>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">
                    <span className="font-bold text-gray-900">
                      TeleVet Pet Care -
                    </span>{" "}
                    Around-the-clock, 24/7/365 unlimited access to a dedicated
                    team of Licensed Veterinarians. The consultation takes place
                    in real-time via phone or video on your mobile device or
                    computer.
                  </p>
                  <Button variant="outline" size="md" href="/pricing">
                    Choose a plan
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Pet Prescription Discount */}
                <div>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">
                    <span className="font-bold text-gray-900">
                      Pet Prescription Discount Virtual Card -
                    </span>{" "}
                    A card that can be used at over 68,000 participating
                    pharmacies nationwide. This card provides a discount of up
                    to 75% on prescription medications for your pet, helping you
                    save on the cost of necessary treatments
                  </p>
                  <Button variant="outline" size="md" href="/faq">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pawsitively the Most Popular - Image Collage */}
        <section className="section-padding py-16 md:py-24 bg-[#faf8f3]">
          <div className="container-main max-w-6xl">
            {/* Dogs Section */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
              {/* Left - Text */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight mb-4">
                  Pawsitively the Most Popular: Dogs Lead the Pack
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Approximately 86.9 million homes, or about 66% of U.S.
                  households, own pets. The most commonly owned pets are dogs,
                  with an estimated 65.1 million U.S. households sharing their
                  homes with a furry friend.
                </p>
              </div>

              {/* Right - Image */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/televet-pet-care/iwilltilimwell-televet-11252024-001.jpg"
                  alt="Dogs out for a walk"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Two image row */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/televet-pet-care/dog--horizonal-min.png"
                  alt="Dalmatian on the couch"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/televet-pet-care/cat-with-owner-min.png"
                  alt="Cats being cuddled"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Cats Section */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Image */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/televet-pet-care/cat-.jpg"
                  alt="Cat portrait"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>

              {/* Right - Text */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight mb-4">
                  Purring into Second Place: For the Love of Cats
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Cats are the second most popular pet in the U.S., with an
                  estimated 42.1 million households welcoming these independent
                  yet affectionate companions into their homes. Known for their
                  playful nature and soothing purrs, cats bring comfort and joy
                  to families across the country.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect - Carousel */}
        <TeleVetCarousel />

        {/* CTA Banner */}
        <section
          className="relative overflow-hidden section-padding py-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
          }}
        >
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none">
            <img
              src="/images/logo-favi.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative container-main text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Care for Your Pet, Anytime
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Connect with licensed veterinarians 24/7 from the comfort of your
              home.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="primary"
                size="lg"
                href="https://app.essentiacare.ai/register"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="white" size="lg" href="/pricing">
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
