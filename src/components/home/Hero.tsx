"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const HERO_IMAGES = [
  "/images/rajwada.jpg",
  "/images/palace.avif",
  "/images/temple.jpg",
  "/images/poha jalebi.jpg",
  "/images/lake.jpg",
  "/images/heritage.jpg",
  "/images/inside lal bagh temple.jpg",
  "/images/trees.jpg",
];

export function Hero() {
  const scrollToBoard = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#opportunities")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="welcome"
      className="relative overflow-hidden w-full min-h-[110vh] lg:min-h-screen flex items-center justify-center bg-[#f4f3f0] text-stone-900"
    >
      {/* 1. Cinematic Background Elements */}
      {/* SVG Grain/Noise filter */}
      <svg className="absolute w-0 h-0 opacity-0 pointer-events-none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>
      <div className="absolute inset-0 opacity-[0.045] pointer-events-none" style={{ filter: "url(#noiseFilter)" }} />

      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/this_should_be_the_colour_sche.mp4" type="video/mp4" />
        </video>
        {/* Soft light overlay to ensure dark text remains readable */}
        <div className="absolute inset-0 bg-[#f4f3f0]/80" />
      </div>

      {/* Soft spotlight behind the scrapbook */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/60 blur-[100px] pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* 2. Main Centered Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 py-16 flex flex-col items-center justify-center w-full">
        
        {/* Intro Copy Area */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-8 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-stone-700 mb-5 shadow-sm"
          >
            <Image
              src="/images/aiesec in indore.jpg"
              alt="AIESEC in Indore"
              width={16}
              height={16}
              className="rounded-full"
            />
            AIESEC in Indore · IGTaE Search Tool
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-stone-900"
          >
            Intern, Teach, or Volunteer in{" "}
            <span className="text-amber-600 font-serif italic">Indore</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed"
          >
            India&apos;s cleanest city, a heritage capital, and home to a thriving tech ecosystem.
            Search live opportunities and begin your exchange journey.
          </motion.p>
        </div>

        {/* Center Scrapbook Collage Container */}
        <div className="relative w-full overflow-visible flex items-center justify-center py-6 my-2 z-10 scale-[0.6] xxs:scale-[0.7] sm:scale-[0.85] md:scale-100 transition-transform origin-center">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-full max-w-[900px] h-[560px]"
          >
            {/* AIESEC logo watermark on the board */}
            <div className="absolute top-2 right-4 opacity-25 select-none pointer-events-none z-20">
              <Image
                src="/images/aiesec logo.png"
                alt="AIESEC"
                width={85}
                height={50}
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            {/* A. Left Image: Veddur (labeled as Digant Pathak) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8, x: -35 }}
              animate={{ opacity: 1, scale: 1, rotate: -4, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05, rotate: -2, zIndex: 30 }}
              className="absolute left-0 top-[60px] w-[240px] bg-white p-3 pb-5 shadow-2xl z-20 select-none border border-gray-100/50"
              style={{ originX: 0.5, originY: 0.1 }}
            >
              {/* 3D Red Pushpin */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="absolute -top-4.5 left-1/2 -translate-x-1/2 drop-shadow-md z-30 pointer-events-none"
              >
                <rect x="11.5" y="11" width="1" height="11" fill="#777" />
                <polygon points="11,22 12,24 13,22" fill="#444" />
                <ellipse cx="12" cy="10" rx="6" ry="3.5" fill="#ef4444" opacity="0.9" />
                <rect x="8" y="4" width="8" height="6" fill="#ef4444" rx="1.5" />
                <circle cx="12" cy="3.5" r="5" fill="#f87171" />
                <circle cx="10" cy="2.5" r="1.5" fill="#fff" opacity="0.75" />
              </svg>

              {/* Photo Container */}
              <div className="relative overflow-hidden bg-zinc-100 border border-gray-200" style={{ position: "relative", width: "100%", height: "200px" }}>
                <Image
                  src="/images/digant pathak.jpeg"
                  alt="Digant Pathak Photo"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="230px"
                />
              </div>

              {/* Polaroid bottom label */}
              <div className="text-center mt-3">
                <h4 className="text-stone-900 font-sans font-black text-[13px] tracking-tight uppercase leading-none">
                  DIGANT PATHAK
                </h4>
                <p className="text-stone-500 text-[9px] font-bold mt-1 tracking-wider uppercase leading-none">
                  LCVP IGTAE
                </p>
                <p className="text-stone-400 text-[8px] font-semibold mt-1 tracking-wider uppercase leading-none">
                  AIESEC IN INDORE
                </p>
              </div>
            </motion.div>

            {/* B. Center Poster: Indore Poster (Torn left/right edges with white sheet backing) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 -translate-x-1/2 -top-12 w-[400px] h-fit drop-shadow-2xl z-15 bg-white px-3 pt-10 pb-3 flex flex-col border border-stone-200/50"
              style={{
                clipPath:
                  "polygon(4% 0, 96% 0, 98% 5%, 96% 10%, 98% 15%, 96% 20%, 98% 25%, 96% 30%, 98% 35%, 96% 40%, 98% 45%, 96% 50%, 98% 55%, 96% 60%, 98% 65%, 96% 70%, 98% 75%, 96% 80%, 98% 85%, 96% 90%, 98% 95%, 96% 100%, 4% 100%, 2% 95%, 4% 90%, 2% 85%, 4% 80%, 2% 75%, 4% 70%, 2% 65%, 4% 60%, 2% 55%, 4% 50%, 2% 45%, 4% 40%, 2% 35%, 4% 30%, 2% 25%, 4% 20%, 2% 15%, 4% 10%, 2% 5%)",
              }}
            >
              {/* Subtitle printed directly on the top white margin */}
              <div className="absolute inset-x-0 top-3 flex justify-center z-20">
                <span className="text-[10px] font-extrabold tracking-widest text-stone-700 uppercase font-sans">
                  INDORE: CITY LIFE & LEADERSHIP
                </span>
              </div>

              {/* The main Indore Photo */}
              <div className="relative w-full overflow-hidden bg-zinc-800 border border-stone-200" style={{ height: "450px" }}>
                <Image
                  src="/images/INDORE.jpg"
                  alt="AIESEC Indore Poster"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-[0.9] contrast-[1.02]"
                  sizes="380px"
                />

                {/* Main tagline text overlay */}
                <div className="absolute inset-x-0 bottom-5 px-3 flex justify-center z-25">
                  <h3 className="text-white font-display font-black text-[20px] tracking-wide text-center leading-tight uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                    INDORE: WHERE LEADERSHIP FLOURISHES.
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* C. Right Image: Digant (labeled as Veddur Lenjhara) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 8, x: 35 }}
              animate={{ opacity: 1, scale: 1, rotate: 4, x: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              whileHover={{ scale: 1.05, rotate: 2, zIndex: 30 }}
              className="absolute right-0 top-[60px] w-[240px] bg-white p-3 pb-5 shadow-2xl z-20 select-none border border-gray-100/50"
              style={{ originX: 0.5, originY: 0.1 }}
            >
              {/* 3D Red Pushpin */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="absolute -top-4.5 left-1/2 -translate-x-1/2 drop-shadow-md z-30 pointer-events-none"
              >
                <rect x="11.5" y="11" width="1" height="11" fill="#777" />
                <polygon points="11,22 12,24 13,22" fill="#444" />
                <ellipse cx="12" cy="10" rx="6" ry="3.5" fill="#ef4444" opacity="0.9" />
                <rect x="8" y="4" width="8" height="6" fill="#ef4444" rx="1.5" />
                <circle cx="12" cy="3.5" r="5" fill="#f87171" />
                <circle cx="10" cy="2.5" r="1.5" fill="#fff" opacity="0.75" />
              </svg>

              {/* Photo Container */}
              <div className="relative overflow-hidden bg-zinc-100 border border-gray-200" style={{ position: "relative", width: "100%", height: "200px" }}>
                <Image
                  src="/images/veddur.png"
                  alt="Veddur Lenjhara Photo"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="230px"
                />
              </div>

              {/* Polaroid bottom label */}
              <div className="text-center mt-3">
                <h4 className="text-stone-900 font-sans font-black text-[13px] tracking-tight uppercase leading-none">
                  VEDDUR LENJHARA
                </h4>
                <p className="text-stone-500 text-[9px] font-bold mt-1.5 tracking-wider uppercase leading-none">
                  LCP AIESEC IN INDORE
                </p>
                <p className="text-stone-400 text-[8px] font-semibold mt-1 tracking-wider uppercase leading-none">
                  AIESEC IN INDORE
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-4 mt-8"
        >
          <a
            href="#opportunities"
            onClick={scrollToBoard}
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-8 py-4 text-[15px] font-bold text-white hover:bg-stone-850 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-lg shadow-stone-900/10"
          >
            Search Opportunities
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/30 backdrop-blur-sm px-8 py-4 text-[15px] font-bold text-stone-700 hover:bg-stone-150 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            Contact Us
          </a>
        </motion.div>

      </div>
    </section>
  );
}
