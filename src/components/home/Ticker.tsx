"use client";

const items = [
  "Audit & Assurance",
  "GST Advisory",
  "Direct Taxation",
  "IPO Assistance",
  "Virtual CFO",
  "Business Valuation",
  "Management Consultancy",
  "Bookkeeping & Accounting",
  "Transfer Pricing",
  "Internal Audit",
  "IFRS / Ind AS",
  "Corporate Finance",
];

export default function Ticker() {
  return (
    <div className="bg-[#c9a84c] py-4 overflow-hidden w-full">
      <div className="flex whitespace-nowrap animate-ticker">
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span key={index} className="inline-flex items-center gap-4 mx-4">
            <span className="text-[#0a1628] font-bold text-sm tracking-wide uppercase">
              {item}
            </span>
            <span className="text-[#0a1628]/50 text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
