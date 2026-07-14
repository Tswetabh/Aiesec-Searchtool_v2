"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "500+", label: "Exchanges Delivered" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "50+", label: "Global Partners" },
  { value: "15+", label: "Years of Impact" },
];

export function StatsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-8 py-16 sm:py-20 text-center border border-white/10 shadow-2xl">
        {/* Background gradient/pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/40 via-zinc-950 to-zinc-950" />
        
        <div className="relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-white/60 mb-16 max-w-xl mx-auto">
            We&apos;ve been connecting global youth to life-changing opportunities in Indore for over a decade.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-x-0 lg:divide-x divide-white/10">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-4xl sm:text-5xl font-black font-display text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-amber-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
