"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Custom SVG Graphics Components
const OffshoreGraphic = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.1" />
    <path d="M20 28h24v20H20z" fill="currentColor" opacity="0.2" />
    <path d="M16 24h32v4H16z" fill="currentColor" />
    <circle cx="26" cy="34" r="2" fill="currentColor" />
    <circle cx="38" cy="34" r="2" fill="currentColor" />
    <path d="M24 40h16v2H24z" fill="currentColor" opacity="0.6" />
    <path d="M24 44h16v2H24z" fill="currentColor" opacity="0.4" />
  </svg>
);

const AuditGraphic = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.1" />
    <path d="M22 18h20v28H22z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M26 26h12v2H26z" fill="currentColor" opacity="0.8" />
    <path d="M26 32h12v2H26z" fill="currentColor" opacity="0.6" />
    <path d="M26 38h8v2h-8z" fill="currentColor" opacity="0.4" />
    <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.2" />
    <path d="M37 40l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TaxGraphic = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.1" />
    <path d="M20 24h24v24H20z" fill="currentColor" opacity="0.15" />
    <path d="M24 28h6v16h-6z" fill="currentColor" opacity="0.4" />
    <path d="M32 32h6v12h-6z" fill="currentColor" opacity="0.6" />
    <path d="M40 36h6v8h-6z" fill="currentColor" opacity="0.8" />
    <path d="M20 48h28" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const DirectTaxGraphic = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.1" />
    <circle cx="32" cy="28" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M30 26h4v6h-4z" fill="currentColor" />
    <path d="M28 32h8v2h-8z" fill="currentColor" />
    <path d="M24 42h16v4H24z" fill="currentColor" opacity="0.3" />
    <path d="M26 38h12v2H26z" fill="currentColor" opacity="0.5" />
  </svg>
);

const ConsultancyGraphic = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.1" />
    <circle cx="32" cy="26" r="6" fill="currentColor" opacity="0.6" />
    <path d="M20 42c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="currentColor" opacity="0.3" />
    <path d="M28 36l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const ValuationGraphic = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.1" />
    <path d="M22 20h20v24H22z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M26 28l6 6 8-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="42" cy="42" r="6" fill="currentColor" opacity="0.3" />
    <path d="M40 42h4M42 40v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const services = [
  {
    graphic: OffshoreGraphic,
    title: "Offshore Accounting",
    description:
      "Book-Keeping, Accounts Payable, Accounts Receivable, Reconciliation, Invoicing, MIS Reporting, and Payroll Processing for global clients.",
  },
  {
    graphic: AuditGraphic,
    title: "Audit & Assurance",
    description:
      "Statutory Audit, Financial Due Diligence, Internal Audit, Tax Audit, Bank Audit, IPO certification, and Corporate Governance Compliance.",
  },
  {
    graphic: TaxGraphic,
    title: "Indirect Tax (GST)",
    description:
      "GST/VAT Advisory, Compliance, Input Tax Credit eligibility, Representation before GST Authorities, and Health Check Reviews.",
  },
  {
    graphic: DirectTaxGraphic,
    title: "Direct Tax",
    description:
      "Corporate & Individual Tax Advisory, Withholding Tax (TDS/TCS), International Taxation, Transfer Pricing, and Litigation support.",
  },
  {
    graphic: ConsultancyGraphic,
    title: "Management Consultancy",
    description:
      "Virtual CFO, Finance Outsourcing, IPO Process Support, Restated Financial Statements (SEBI), and Technical Accounting Advisory.",
  },
  {
    graphic: ValuationGraphic,
    title: "Valuation Services",
    description:
      "Business Valuation, Regulatory Valuations (Income Tax, FEMA, Companies Act), Ind AS Valuations, and Purchase Price Allocation.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f8f5f0] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            What We Offer
          </span>
          <h2 className="text-[#0a1628] text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Our Services
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-[#0a1628]/60 max-w-2xl mx-auto font-sans leading-relaxed">
            We provide a full spectrum of financial and compliance services
            tailored to meet the unique needs of every client.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Graphic = service.graphic;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 group hover:bg-[#c9a84c] transition-all duration-300 border border-[#0a1628]/10 hover:border-[#c9a84c] shadow-sm"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 text-[#c9a84c] group-hover:text-white mb-6 transition-colors">
                  <Graphic />
                </div>
                <h3 className="text-[#0a1628] group-hover:text-white text-xl font-bold mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#0a1628]/60 group-hover:text-white/90 text-sm leading-relaxed font-sans transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#0a1628] border-b-2 border-[#c9a84c] pb-1 font-semibold text-sm tracking-wide hover:text-[#c9a84c] transition-colors font-sans"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
