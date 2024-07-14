import BenefitsSection from "@/components/Home/Benefits";
import UseCasesSection from "@/components/Home/Cases";
import FeaturesSection from "@/components/Home/Features";
import HeroSection from "@/components/Home/Hero";
import HowItWorksSection from "@/components/Home/HowItWorks";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home | Convert Master",
};


function Home() {
  
  return (
    <main>
      <HeroSection />
      {/* <br /> */}
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      {/* <UseCasesSection /> */}
    </main>
  );
}
export default Home;