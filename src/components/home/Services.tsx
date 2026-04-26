"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  BarChart2,
  Building2,
  Calculator,
  Briefcase,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Offshore Accounting",
    description:
      "Book-Keeping, Accounts Payable, Accounts Receivable, Reconciliation, Invoicing, MIS Reporting, and Payroll Processing for global clients.",
  },
  {
    icon: BookOpen,
    title: "Audit & Assurance",
    description:
      "Statutory Audit, Financial Due Diligence, Internal Audit, Tax Audit, Bank Audit, IPO certification, and Corporate Governance Compliance.",
  },
  {
    icon: BarChart2,
    title: "Indirect Tax (GST)",
    description:
      "GST/VAT Advisory, Compliance, Input Tax Credit eligibility, Representation before GST Authorities, and Health Check Reviews.",
  },
  {
    icon: FileText,
    title: "Direct Tax",
    description:
      "Corporate & Individual Tax Advisory, Withholding Tax (TDS/TCS), International Taxation, Transfer Pricing, and Litigation support.",
  },
  {
    icon: Briefcase,
    title: "Management Consultancy",
    description:
      "Virtual CFO, Finance Outsourcing, IPO Process Support, Restated Financial Statements (SEBI), and Technical Accounting Advisory.",
  },
  {
    icon: Building2,
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
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 group hover:bg-[#c9a84c] transition-all duration-300 border border-[#0a1628]/10 hover:border-[#c9a84c] shadow-sm"
              >
                <div className="w-12 h-12 bg-[#c9a84c]/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                  <Icon size={22} className="text-[#c9a84c] group-hover:text-white" />
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
