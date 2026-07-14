"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import opportunitiesData from "@/data/opportunities.json";

const AVAILABLE_IMAGES = [
  "/images/162b36dd89a7097705164188ed5010bc.jpg",
  "/images/23dc107fc5d1e4caee540e7254359d7f.jpg",
  "/images/418CkBH7VZL.jpg",
  "/images/4bd81aa5cbff3665b64113c62deba797.jpg",
  "/images/6880359ea504b66d7abcec17ae8cce3d.jpg",
  "/images/6904eb5d48c74fac802d21a5af3c1995.jpg",
  "/images/945d980e16e0e546130c03504940ccc7.jpg",
  "/images/999f15598825b2a173690817122c5d4e.jpg",
  "/images/9d6fc55607e0f2cfa50f46b7760f9312.jpg",
  "/images/a848c4e41f714bbabd02e0dee8e4c409.jpg",
  "/images/aiesec in indore.jpg",
  "/images/c616eb188ddffcaeb0252e1415ccf317.jpg",
  "/images/chai-stall.jpg",
  "/images/chai.jpg",
  "/images/chhatri-dome.jpg",
  "/images/e1e6adc40d27037150609f06a3370e96.jpg",
  "/images/f4be8750c06361745ff3f480040be56f.jpg",
  "/images/f8676e45a981561ed815e5225c446867.jpg",
  "/images/hanuman-statue.jpg",
  "/images/harsh-vardhan-yadav-MsKGTatzcrA-unsplash.jpg",
  "/images/heritage.jpg",
  "/images/IMC_GALLERY_IMAGE_42_993ddaafba.webp",
  "/images/indore-poster.jpg",
  "/images/indore-rajwada-collage.jpg",
  "/images/INDORE.jpg",
  "/images/inside lal bagh temple.jpg",
  "/images/inside palace.jpg",
  "/images/lake.jpg",
  "/images/lotus vally.jpg",
  "/images/lotus-lake.jpg",
  "/images/old palace.jpg",
  "/images/palace.avif",
  "/images/pitra parvat.jpg",
  "/images/poha jalebi.jpg",
  "/images/poha-jalebi.jpg",
  "/images/rajwada.jpg",
  "/images/rushikesh-sonkusale-TRd9IvUyS38-unsplash.jpg",
  "/images/tech park.jpg",
  "/images/temple.jpg",
  "/images/trees.jpg",
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
            <h2>IG<span>Tae</span> board</h2>
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
            >
              Volunteer
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
            {filtered.map((o, i) => (
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
            ))}
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
