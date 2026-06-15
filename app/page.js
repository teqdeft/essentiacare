import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PathsToWellness from "@/components/sections/PathsToWellness";
import Steps from "@/components/sections/Steps";
import StartWellnessJourney from "@/components/sections/StartWellnessJourney";
import MediaLogos from "@/components/sections/MediaLogos";
import BenefitsOnlineVisits from "@/components/sections/BenefitsOnlineVisits";
import JoinTheCommunity from "@/components/sections/JoinTheCommunity";
import HowCanWeHelp from "@/components/sections/HowCanWeHelp";
import Testimonial from "@/components/sections/Testimonial";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("home");
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PathsToWellness />
        <Steps />
        <StartWellnessJourney />
        <MediaLogos />
        <BenefitsOnlineVisits />
        <JoinTheCommunity />
        <HowCanWeHelp />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
