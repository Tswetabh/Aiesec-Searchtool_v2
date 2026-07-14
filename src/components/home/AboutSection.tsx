"use client";

import Image from "next/image";
import { Trophy, Utensils, Building2, Landmark } from "lucide-react";

const SELLING_POINTS = [
  {
    icon: Trophy,
    title: "India's Cleanest City",
    body: "Ranked #1 for 7 consecutive years in the Swachh Survekshan — clean streets, modern infrastructure, and a vibrant urban culture.",
    video: "/images/clean city.mp4",
  },
  {
    icon: Landmark,
    title: "Rajwada Heritage",
    body: "A 200-year-old Holkar dynasty palace, ancient temples, and Lal Bagh — heritage you can walk through every day.",
    video: "/images/royal (2).mp4",
  },
  {
    icon: Utensils,
    title: "Street Food Capital",
    body: "World-famous poha-jalebi, the legendary Sarafa night market, and chai stalls on every corner. Foodies, this is your city.",
    video: "/images/food.mp4",
  },
  {
    icon: Building2,
    title: "Tech & Startup Hub",
    body: "Home to companies like Walkover (MSG91), a growing IT park ecosystem, and top engineering colleges producing real talent.",
    video: "/images/techpark.mp4",
  },
];

const BACKGROUND_IMAGES = [
  { src: "/images/lotus vally.jpg", top: "-5%", left: "-5%", rotate: "-8deg", width: "450px", height: "350px" },
  { src: "/images/pitra parvat.jpg", top: "15%", right: "-5%", rotate: "6deg", width: "380px", height: "480px" },
  { src: "/images/old palace.jpg", bottom: "-10%", left: "10%", rotate: "12deg", width: "500px", height: "350px" },
  { src: "/images/inside lal bagh temple.jpg", top: "45%", left: "35%", rotate: "-4deg", width: "300px", height: "400px" },
  { src: "/images/trees.jpg", bottom: "15%", right: "20%", rotate: "-15deg", width: "320px", height: "280px" },
  { src: "/images/heritage.jpg", top: "-10%", left: "45%", rotate: "5deg", width: "350px", height: "300px" },
  // Newly added images for a denser collage:
  { src: "/images/temple.jpg", top: "25%", left: "5%", rotate: "-10deg", width: "280px", height: "320px" },
  { src: "/images/chai.jpg", bottom: "5%", left: "35%", rotate: "8deg", width: "300px", height: "220px" },
  { src: "/images/rajwada.jpg", top: "5%", right: "25%", rotate: "-6deg", width: "320px", height: "380px" },
  { src: "/images/harsh-vardhan-yadav-MsKGTatzcrA-unsplash.jpg", bottom: "-5%", right: "-5%", rotate: "18deg", width: "420px", height: "320px" },
  { src: "/images/poha-jalebi.jpg", top: "35%", right: "35%", rotate: "11deg", width: "240px", height: "240px" },
  // 10 more random images:
  { src: "/images/chai-stall.jpg", top: "50%", left: "-10%", rotate: "15deg", width: "250px", height: "200px" },
  { src: "/images/chhatri-dome.jpg", top: "60%", right: "10%", rotate: "-9deg", width: "350px", height: "300px" },
  { src: "/images/indore-poster.jpg", bottom: "35%", left: "20%", rotate: "4deg", width: "300px", height: "450px" },
  { src: "/images/lake.jpg", top: "-15%", left: "25%", rotate: "-12deg", width: "400px", height: "300px" },
  { src: "/images/lotus-lake.jpg", bottom: "-15%", right: "35%", rotate: "7deg", width: "420px", height: "280px" },
  { src: "/images/palace.avif", top: "10%", left: "55%", rotate: "16deg", width: "320px", height: "250px" },
  { src: "/images/rushikesh-sonkusale-TRd9IvUyS38-unsplash.jpg", top: "75%", left: "50%", rotate: "-18deg", width: "380px", height: "450px" },
  { src: "/images/aiesec in indore.jpg", bottom: "45%", right: "-15%", rotate: "-5deg", width: "300px", height: "400px" },
  { src: "/images/INDORE.jpg", top: "35%", left: "-15%", rotate: "9deg", width: "250px", height: "350px" },
  { src: "/images/i love idnore logo .jpg", bottom: "25%", left: "60%", rotate: "3deg", width: "280px", height: "280px" },
];

export function WhyIndore() {
  return (
    <section className="relative overflow-hidden py-20 bg-zinc-950">
      {/* Collage background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-25 pointer-events-none" aria-hidden="true">
        {BACKGROUND_IMAGES.map((img, i) => (
          <div
            key={i}
            className="absolute bg-white border border-stone-200/50"
            style={{
              top: img.top,
              left: img.left,
              right: img.right,
              bottom: img.bottom,
              width: img.width,
              height: img.height,
              transform: `rotate(${img.rotate})`,
              clipPath:
                "polygon(4% 0, 96% 0, 98% 5%, 96% 10%, 98% 15%, 96% 20%, 98% 25%, 96% 30%, 98% 35%, 96% 40%, 98% 45%, 96% 50%, 98% 55%, 96% 60%, 98% 65%, 96% 70%, 98% 75%, 96% 80%, 98% 85%, 96% 90%, 98% 95%, 96% 100%, 4% 100%, 2% 95%, 4% 90%, 2% 85%, 4% 80%, 2% 75%, 4% 70%, 2% 65%, 4% 60%, 2% 55%, 4% 50%, 2% 45%, 4% 40%, 2% 35%, 4% 30%, 2% 25%, 4% 20%, 2% 15%, 4% 10%, 2% 5%)",
            }}
          >
            <div className="absolute inset-0 m-2 bg-zinc-800">
              <Image src={img.src} alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-wide text-amber-300">
          Your Exchange Destination
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mt-2 mb-4 max-w-lg leading-tight text-white">
          Why Indore?
        </h2>
        <p className="text-white/70 text-[15px] max-w-xl mb-12 leading-relaxed">
          More than just an internship — it&apos;s an experience. Here&apos;s what
          makes Indore one of the best exchange destinations in India.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SELLING_POINTS.map(({ icon: Icon, title, body, video }) => (
            <div
              key={title}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-md transition-all duration-300 group hover:bg-white/20"
            >
              <div className="h-64 sm:h-72 relative bg-zinc-900">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-amber-300 mb-3">
                  <Icon size={18} strokeWidth={1.9} />
                </div>
                <h3 className="font-display font-semibold text-[15px] text-white">{title}</h3>
                <p className="text-sm text-white/65 mt-1.5 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
