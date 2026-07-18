import { Hero } from "@/components/home/Hero";
import { WhyIndore } from "@/components/home/AboutSection";
import { OpportunitiesBoard } from "@/components/home/OpportunitiesBoard";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyIndore />
      <OpportunitiesBoard />
      <ContactSection />
    </>
  );
}
