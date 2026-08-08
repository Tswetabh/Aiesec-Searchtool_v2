"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import opportunitiesData from "@/data/opportunities.json";

const AVAILABLE_IMAGES = [
  "/images/6880359ea504b66d7abcec17ae8cce3d.jpg",
  "/images/Aiesec-in-indore.png",
  "/images/Copy-of-Indore.png",
  "/images/IMC_GALLERY_IMAGE_42_993ddaafba.webp",
  "/images/INDORE.jpg",
  "/images/aiesec-in-indore.jpg",
  "/images/aiesec-logo.png",
  "/images/chai-stall.jpg",
  "/images/chai.jpg",
  "/images/chhatri-dome.jpg",
  "/images/e1e6adc40d27037150609f06a3370e96.jpg",
  "/images/f4be8750c06361745ff3f480040be56f.jpg",
  "/images/harsh-vardhan-yadav-MsKGTatzcrA-unsplash.jpg",
  "/images/heritage.jpg",
  "/images/i-love-indore-logo.jpg",
  "/images/indore-rajwada-collage.jpg",
  "/images/inside-lal-bagh-temple.jpg",
  "/images/inside-palace.jpg",
  "/images/lake.jpg",
  "/images/lotus-lake.jpg",
  "/images/lotus-vally.jpg",
  "/images/old-palace.jpg",
  "/images/palace.avif",
  "/images/pitra-parvat.jpg",
  "/images/poha-jalebi.jpg",
  "/images/rajwada.jpg",
  "/images/rushikesh-sonkusale-TRd9IvUyS38-unsplash.jpg",
  "/images/tech-park.jpg",
  "/images/temple.jpg",
  "/images/trees.jpg",
  "/images/veddur.png",
];
import type { Opportunity } from "@/lib/types";

const opportunities = opportunitiesData as Opportunity[];

const trackLabel: Record<string, string> = {
  Teacher: "Teach",
  Volunteer: "Volunteer",
  Talent: "Talent",
};

const trackClass: Record<string, string> = {
  Teacher: "teacher",
  Volunteer: "volunteer",
  Talent: "talent",
};



export function OpportunitiesBoard() {
  const [query, setQuery] = useState("");
  const [activeTrack, setActiveTrack] = useState<"all" | "Teacher" | "Volunteer" | "Talent">("all");
  const [collageImages, setCollageImages] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 70 }).map((_, i) => {
      const src = AVAILABLE_IMAGES[i % AVAILABLE_IMAGES.length];
      const top = Math.floor(Math.random() * 110) - 5 + "%";
      const left = Math.floor(Math.random() * 110) - 5 + "%";
      const rotate = Math.floor(Math.random() * 60) - 30 + "deg";
      const width = Math.floor(Math.random() * 250) + 250 + "px";
      const height = Math.floor(Math.random() * 250) + 300 + "px";
      return { src, top, left, rotate, width, height };
    });
    // Shuffle the array to completely randomize overlap ordering
    setCollageImages(generated.sort(() => Math.random() - 0.5));
  }, []);

  const filtered = useMemo(() => {
    return opportunities.filter((o) => {
      // Volunteer opportunities are closed — only show them in the dedicated Volunteer tab
      if (o.programType === "Volunteer" && activeTrack !== "Volunteer") return false;
      const trackMatch = activeTrack === "all" || o.programType === activeTrack;
      const q = query.trim().toLowerCase();
      const textMatch =
        !q ||
        o.title.toLowerCase().includes(q) ||
        o.organization.toLowerCase().includes(q) ||
        String(o.id).includes(q);
      return trackMatch && textMatch;
    });
  }, [activeTrack, query]);

  return (
    <section id="opportunities" className="board-wrapper">
      {/* Collage background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000" style={{ opacity: collageImages.length > 0 ? 0.1 : 0 }} aria-hidden="true">
        {collageImages.map((img, i) => (
          <div
            key={i}
            className="absolute bg-white border border-stone-200/50 rounded-xl shadow-xl"
            style={{
              top: img.top,
              left: img.left,
              width: img.width,
              height: img.height,
              transform: `rotate(${img.rotate})`,
            }}
          >
            <div className="absolute inset-0 m-2 bg-zinc-800">
              <Image src={img.src} alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      <div className="wrap">
        <div className="masthead glass">
          <div>
            <h2>IG<span>Tae</span> BOARD</h2>
            <div className="sub">AIESEC · Indore · Rajwada Heritage Chapter</div>
          </div>
          <div className="clock">
            <span className="dot"></span>
            <span>{filtered.length}</span> live now
          </div>
        </div>

        <div className="controls">
          <div className="search glass">
            <input
              type="text"
              placeholder="Search by role, organization, or ID…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="chips">
            <button
              onClick={() => setActiveTrack("all")}
              className={`chip ${activeTrack === "all" ? "active" : ""}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTrack("Teacher")}
              className={`chip ${activeTrack === "Teacher" ? "active" : ""}`}
            >
              Teach
            </button>
            <button
              onClick={() => setActiveTrack("Volunteer")}
              className={`chip ${activeTrack === "Volunteer" ? "active" : ""}`}
              title="Volunteering is currently closed in Indore"
            >
              Volunteer
              <span style={{ marginLeft: "5px", fontSize: "9px", fontWeight: 700, letterSpacing: "0.04em", color: "#ef4444", verticalAlign: "middle", background: "rgba(239,68,68,0.12)", borderRadius: "4px", padding: "1px 4px" }}>CLOSED</span>
            </button>
            <button
              onClick={() => setActiveTrack("Talent")}
              className={`chip ${activeTrack === "Talent" ? "active" : ""}`}
            >
              Talent
            </button>
          </div>
        </div>

        <div className="board-head glass">
          <div>ID</div>
          <div>Role</div>
          <div>Organization</div>
          <div>Track</div>
          <div>Status</div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty">No opportunities match that search — try another term.</div>
        ) : (
          <div className="rows">
            {filtered.map((o, i) => {
              const isVolunteer = o.programType === "Volunteer";
              return isVolunteer ? (
                <div
                  key={o.id}
                  className="row"
                  title="Volunteering opportunities are currently closed in Indore."
                  style={{
                    animationDelay: `${i * 0.02}s`,
                    opacity: 0.45,
                    cursor: "not-allowed",
                    filter: "grayscale(0.4)",
                    pointerEvents: "none",
                  }}
                >
                  <div className="id">#{o.id}</div>
                  <div className="title">{o.title}</div>
                  <div className="org">{o.organization}</div>
                  <div className={`track ${trackClass[o.programType]}`}>
                    {trackLabel[o.programType]}
                  </div>
                  <div className="status" style={{ color: "#ef4444" }}>
                    <span className="d" style={{ background: "#ef4444" }}></span>Not Live
                  </div>
                </div>
              ) : (
                <a
                  key={o.id}
                  className="row"
                  href={o.expaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${i * 0.02}s` }}
                >
                  <div className="id">#{o.id}</div>
                  <div className="title">{o.title}</div>
                  <div className="org">{o.organization}</div>
                  <div className={`track ${trackClass[o.programType]}`}>
                    {trackLabel[o.programType]}
                  </div>
                  <div className="status">
                    <span className="d"></span>Live
                  </div>
                </a>
              );
            })}
          </div>
        )}

        <div className="board-footer">
          <div>Data pulled from the IGTae search tool sheet</div>
          <div>Click any row to open the AIESEC application page</div>
        </div>
      </div>
    </section>
  );
}
