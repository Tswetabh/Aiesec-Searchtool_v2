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
      <footer style={{
        textAlign: "center",
        padding: "18px 16px",
        fontSize: "13px",
        color: "rgba(255,255,255,0.35)",
        background: "#1a0f08",
        letterSpacing: "0.02em",
      }}>
        made with <span style={{ color: "#e25555" }}>♥</span> by{" "}
        <a
          href="https://www.linkedin.com/in/swetabhtripathy/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Swetabh Tripathy
        </a>
      </footer>
    </>
  );
}
