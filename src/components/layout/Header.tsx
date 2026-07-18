"use client";

import Image from "next/image";
import { useState } from "react";
import { X, Menu, Linkedin } from "lucide-react";

const NAV_LINKS = [
  { href: "#welcome", label: "Welcome" },
  { href: "#opportunities", label: "Opportunities" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#4a3623]/95 backdrop-blur-md text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#welcome"
            onClick={(e) => handleNavClick(e, "#welcome")}
            className="flex items-center gap-2.5 group"
          >
            <Image
              src="/images/aiesec in indore.jpg"
              alt="AIESEC"
              width={160}
              height={55}
              style={{ width: "auto", height: "40px" }}
              className="transition-transform group-hover:scale-105 rounded-sm shadow-sm"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display font-semibold text-[15px] tracking-tight">
                Opportunity Hub
              </span>
              <span className="text-[11px] text-white/70 tracking-wide">AIESEC in Indore</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 rounded-full text-sm font-medium transition-colors text-white/70 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/swetabhtripathy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Swetabh Tripathy on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <Linkedin size={15} />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#4a3623]">
          <nav className="mx-auto max-w-6xl px-5 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}


