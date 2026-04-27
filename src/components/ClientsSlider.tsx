"use client";

import Image from "next/image";

const logoClients = [
  { name: "Realme", logo: "/companyLogos/realme-1.svg" },
  { name: "POSCO", logo: "/companyLogos/posco-logo.svg" },
  { name: "Sony", logo: "/companyLogos/sony-logo-1.svg" },
  { name: "Air Asia", logo: "/companyLogos/air-asia.svg" },
  { name: "HCL Tech", logo: "/companyLogos/hcltech-1.svg" },
  { name: "Hitachi", logo: "/companyLogos/hitachi-3.svg" },
  { name: "CNH Industrial", logo: "/companyLogos/cnh-industrial.svg" },
  { name: "CLAAS", logo: "/companyLogos/claas-1.svg" },
  { name: "Compass Group", logo: "/companyLogos/compass-group-2.svg" },
  { name: "McDermott", logo: "/companyLogos/mcdermott.svg" },
  { name: "Union Bank of India", logo: "/companyLogos/union-bank-of-india.svg" },
];

const textClients = [
  "The Park Hotels", "Mankind Pharma", "The Lalit", "SpiceJet", "CP Plus",
  "Gaurs", "Country Delight", "HMEL", "SAIL", "MITA India", "KRPL",
  "Marg ERP", "Normet", "Uno Minda", "Ixigo", "NSIC", "Zuari Industries",
  "NHAI", "Freshworks", "IDEE", "ISRPL", "APTIII", "Rapidue",
];

// Duplicate exactly 2x for perfect seamless loop
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
      <div className="relative mb-6 overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-ticker items-center" style={{ width: 'max-content' }}>
          {allLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-3 sm:mx-6 flex items-center justify-center h-10 sm:h-16"
              style={{ width: '100px' }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={40}
                className="max-h-6 sm:max-h-10 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text Clients Slider - opposite direction */}
      <div className="relative mt-8 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#c9a84c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#c9a84c] to-transparent z-10 pointer-events-none" />

        <div className="bg-[#c9a84c] py-3">
          <div className="flex animate-ticker-reverse items-center" style={{ width: 'max-content' }}>
            {allText.map((name, index) => (
              <div key={`${name}-${index}`} className="flex-shrink-0 flex items-center gap-3 sm:gap-4 mx-2">
                <span className="text-white text-xs sm:text-sm font-sans font-semibold whitespace-nowrap tracking-wide">
                  {name}
                </span>
                <span className="text-white/40 text-base sm:text-lg">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
