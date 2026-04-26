"use client";

import Image from "next/image";

const logoClients = [
  { name: "Realme", logo: "/companylogos/realme-1.svg" },
  { name: "POSCO", logo: "/companylogos/posco-logo.svg" },
  { name: "Sony", logo: "/companylogos/sony-logo-1.svg" },
  { name: "Air Asia", logo: "/companylogos/air-asia.svg" },
  { name: "HCL Tech", logo: "/companylogos/hcltech-1.svg" },
  { name: "Hitachi", logo: "/companylogos/hitachi-3.svg" },
  { name: "CNH Industrial", logo: "/companylogos/cnh-industrial.svg" },
  { name: "CLAAS", logo: "/companylogos/claas-1.svg" },
  { name: "Compass Group", logo: "/companylogos/compass-group-2.svg" },
  { name: "McDermott", logo: "/companylogos/mcdermott.svg" },
  { name: "Union Bank of India", logo: "/companylogos/union-bank-of-india.svg" },
];

const textClients = [
  "The Park Hotels", "Mankind Pharma", "The Lalit", "SpiceJet", "CP Plus",
  "Gaurs", "Country Delight", "HMEL", "SAIL", "MITA India", "KRPL",
  "Marg ERP", "Normet", "Uno Minda", "Ixigo", "NSIC", "Zuari Industries",
  "NHAI", "Freshworks", "IDEE", "ISRPL", "APTIII", "Rapidue",
];

// Duplicate for seamless loop
const allLogos = [...logoClients, ...logoClients];
const allText = [...textClients, ...textClients];

export default function ClientsSlider() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
          Trusted By
        </span>
        <h2 className="text-[#0a1628] text-4xl font-bold mt-3 mb-4">
          Some of Our Clients
        </h2>
        <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mb-4" />
        <p className="text-[#0a1628]/60 font-sans max-w-2xl mx-auto">
          We are proud to serve leading organizations across diverse industries,
          from startups to multinational corporations.
        </p>
      </div>

      {/* Logo Slider */}
      <div className="relative mb-6">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-ticker">
          {allLogos.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 flex items-center justify-center h-16 w-36 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={48}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text Clients Slider - opposite direction */}
      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="bg-[#c9a84c] py-3">
          <div className="flex animate-ticker-reverse">
            {allText.map((name, index) => (
              <div key={index} className="flex-shrink-0 flex items-center gap-4 mx-2">
                <span className="text-white text-sm font-sans font-semibold whitespace-nowrap tracking-wide">
                  {name}
                </span>
                <span className="text-white/40 text-lg">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
