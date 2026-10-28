import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import StickyReelSection from "@/components/sections/StickyReelSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FaqSection from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <StickyReelSection />
      <ProcessSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
}
