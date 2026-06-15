import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import PhoneCarousel from "@/components/sections/PhoneCarousel";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import VideoPlayer from "@/components/ui/VideoPlayer";
import JoinCommunitySection from "@/components/sections/JoinCommunitySection";
import CommunitySection from "@/components/sections/JoinMissionvideo";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("join-the-mission");
}

const journeyImages = [
  {
    type: "video",
    src: "/videos/healthier-happier-you.mp4",
    alt: "Telehealth video call",
    className: "md:row-span-2", // tall left image
  },
  {
    src: "/images/join-community/events-images-iwilltilimwell-004.jpg",
    alt: "Older woman using a tablet",
  },

  {
    src: "/images/join-community/events-images-iwilltilimwell-002.jpg",
    alt: "Woman in white shirt",
    className: "md:col-span-2", // tall left image
  },
  {
    src: "/images/join-community/events-images-iwilltilimwell-005asd.png",
    alt: "Man enjoying sunlight",
  },
  {
    src: "/images/join-community/events-images-iwilltilimwell-006.jpg",
    alt: "Woman portrait",
  },
  {
    src: "/images/join-community/events-images-iwilltilimwell-007.jpg",
    alt: "Man reflecting",
  },
];

const challengeServices = [
  {
    number: "1.",
    title: "Medical",
    titleAccent: "Care",
    titleEnd: "Services",
    description:
      "Get the care and guidance you need with unlimited access to licensed physicians, day or night. Whether through a phone call or an online video consultation, you can receive expert medical health care, advice and information in English or Spanish. Our service is available 24/7, 365 days a year. It comes at one low, affordable monthly value. We support your health concerns whenever you need help. We are just a phone call or a click away.",
  },
  {
    number: "2.",
    title: "Counseling",
    titleAccent: "Care",
    titleEnd: "Services.",
    description:
      "Feeling emotionally overwhelmed, struggling with decisions or just need someone to talk to? You're not alone and someone to help you to process it or to talk you through it is always within reach. Speak with a compassionate mental health specialist through a phone or video session - available 24/7, 365 days a year, for one low, affordable monthly value. Whether you need immediate support or ongoing guidance, we're here to provide expert care and to help you gain or regain control of your well-being.",
  },
  {
    number: "3.",
    title: "Employee",
    titleAccent: "Care",
    titleEnd: "Service – Enterprise EAP.",
    description:
      "Want to enhance employee well-being, reduce workplace stress, and increase productivity, while offering employers a cost-effective way to support their team's health and overall job satisfaction? EssentiaCare's Employee Assistance Program (EAP) provides access to confidential telemedicine and telecounseling services for all full-time and part-time employees - whether or not they are enrolled in your company's benefits program.",
  },
  {
    number: "4.",
    title: "TeleVet Pet",
    titleAccent: "Care",
    titleEnd: "Services",
    description:
      "We're making it incredibly easy to get the pet advice you need, right when you need it. With real guidance from licensed veterinarians, we empower you to make informed decisions about your pet's health and wellness. The control you need is now right at your fingertips, for one low, affordable monthly value. We are putting you in charge - all from the comfort of your own home.",
  },
];

export default function JoinTheMissionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero with play button */}
        <CommunitySection />
        {/* Welcome Message */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight inline-block border-b-2 border-primary pb-3">
                Welcome to the EssentiaCare
                <br />
                Community of{" "}
                <span className="text-primary font-script">Care!</span>
              </h2>
            </div>

            <div className="space-y-4 text-center text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                At EssentiaCare, we are more than a service - we are a
                community and we are thrilled to have you join our growing
                network of individuals dedicated to health, wellness, and
                compassionate support.
              </p>
              <p>
                Here you will find access to licensed professionals, innovative
                health solutions, and a mission rooted in values that empower
                you on your journey toward optimal well-being.
              </p>
              <p>
                Together, we will address barriers to healthcare, promote
                affordable and accessible solutions, and offer guidance tailored
                to your unique needs.
              </p>
              <p>
                Thank you for being the better part of us and trusting us to
                walk alongside you in your pursuit of wellness.
              </p>
              <p className="font-semibold text-gray-900">
                Join the mission and welcome to a community where care is a
                shared commitment and wellness is a shared goal.
              </p>
            </div>
          </div>
        </section>

        {/* When life gets complicated - Phone Carousel */}
        <PhoneCarousel />

        {/* For every challenge there is a solution */}
        <section className="section-padding py-16 md:py-24 bg-white">
          <div className="container-main max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                For every challenge there is a solution.
                <br />
                <span className="text-primary font-script">
                  Let's go find it ... together.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
              {challengeServices.map((service) => (
                <div key={service.number}>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                    {service.number} {service.title}{" "}
                    <span className="text-primary">{service.titleAccent}</span>{" "}
                    {service.titleEnd}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Start your journey - Image Collage */}
        <section className="section-padding py-16 md:py-24 bg-gray-50">
          <div className="container-main max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                Start your journey
                <br />
                <span className="text-primary font-script">
                  towards a healthier, happier you.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[600px] lg:h-[640px]">
              {journeyImages.map((item, i) => (
                <div
                  key={i}
                  className={`group rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 aspect-square md:aspect-auto ${item.className || ""}`}
                >
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

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
          <JoinCommunitySection />
        </section>
      </main>
      <Footer />
    </>
  );
}
