import Image from "next/image";
import { Phone, MessageCircle, Mail } from "lucide-react";

const TEAM = [
  {
    name: "Veddur Lenjhara",
    role: "LCP — AIESEC in Indore",
    phone: "+91 62629 22113",
    phoneHref: "tel:+916262922113",
    whatsapp: "https://wa.me/916262922113",
    linkedin: "https://linkedin.com",
    photo: "/images/veddur.png",
  },
  {
    name: "Digant Pathak",
    role: "LCVP IGTae — AIESEC in Indore",
    phone: "+91 88271 03938",
    phoneHref: "tel:+918827103938",
    whatsapp: "https://wa.me/918827103938",
    linkedin: "https://linkedin.com",
    photo: "/images/digant pathak.jpeg",
  },
];

const SOCIALS = [
  { href: "https://wa.me/916262922113", label: "WhatsApp", icon: MessageCircle },
  { href: "mailto:igtae.indore@aiesec.net", label: "Email", icon: Mail },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-950">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Copy of Indore.png"
          alt="AIESEC in Indore Team"
          fill
          className="object-cover opacity-20"
          quality={100}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-300">
            Get in touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mt-2 text-white leading-tight">
            Want to bring an EP to Indore?
          </h2>
          <p className="text-white/70 mt-3 text-[15px] max-w-md mx-auto leading-relaxed">
            Reach out to our IGTae team directly. We&apos;re here to help
            match your EPs with the perfect opportunity.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {TEAM.map((person) => (
            <div
              key={person.name}
              className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 sm:p-7 text-center"
            >
              <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-5 shadow-xl">
                <Image
                  src={person.photo}
                  alt={person.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">{person.name}</h3>
              <p className="text-sm text-white/60 mt-0.5">{person.role}</p>

              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={person.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600/80 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
                <div className="flex gap-2 justify-center">
                  <a
                    href={person.phoneHref}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
                  >
                    <Phone size={14} />
                    {person.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 mb-16">
          {SOCIALS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Footer (only here) */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} AIESEC in Indore. All rights reserved.
          </p>
          <p>
            Data sourced from{" "}
            <a href="https://aiesec.org" className="underline hover:text-white/60" target="_blank">
              EXPA
            </a>
            . Not an official AIESEC International product.
          </p>
        </div>
      </div>
    </section>
  );
}
