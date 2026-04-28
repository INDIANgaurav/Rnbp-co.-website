"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Calculator,
  Briefcase,
  BookOpen,
  Globe,
  ArrowRight,
} from "lucide-react";
import ClientsSlider from "@/components/ClientsSlider";

const offshoreServices = [
  {
    title: "Assurance",
    items: [
      "Statutory Audit",
      "Financial Due Diligence",
      "Internal Audit",
      "Tax Audit & Bank Audit",
      "Special Audits",
      "Fixed Assets & Stock Verification",
    ],
  },
  {
    title: "Advisory Service",
    items: [
      "Indirect Tax - GST/VAT Advisory",
      "Direct Tax - Corporate & Individual Advisory",
      "International Taxation Advisory",
      "Transfer Pricing Advisory",
      "Business Valuation Services",
    ],
  },
  {
    title: "Accounting/Book-keeping and Process automation",
    items: [
      "Complete Accounting Outsourcing",
      "Ind AS/IFRS/US GAAP Conversion",
      "Account reconciliations",
      "Preparation of Financial Statements",
      "Monthly PL, BS, CF & FF for MIS",
    ],
  },
  {
    title: "Management consultancy",
    items: [
      "Virtual CFO",
      "Finance outsourcing",
      "Risk control matrices (RCMs)",
      "DRHP/RHP/Prospectus Preparation",
      "Restated Financial Statements (SEBI)",
      "Technical Accounting Advisory",
      "IPO Process Support",
"Hedge Accounting Advisory",
"Audit Support Services"
    ],
  },
  {
    title: "Financial Reporting Software as a service (SaaS)",
    items: [
      "FinSoEasy360 - Financial reconciliation & reporting",
      "Real-Time Consolidation",
      "Customizable Reporting Templates",
      "Cloud-Based Data Security (AWS)",
      "Segment-Wise Reporting",
    ],
    link: "https://finsensor.ai/Product/finsoeasy360",
  },
  {
    title: "Lease Accounting (Ind AS 116)",
    items: [
      "LAMsoEasy360 - Leasemaster Data Management",
      "Automated ROU Asset & Lease Liability Calculations",
      "Interest and Amortisation Engine",
      "Journal Entries and ERP Integration",
      "Disclosure and Reporting Suite",
      "Lease Lifecycle Tracking",
    ],
    link: "https://finsensor.ai/Product/lease-tool",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Assurance",
    id: "assurance",
    description: "Independent audit and assurance services that add credibility and value to your business.",
    features: [
      "Statutory Audit",
      "Financial Due Diligence",
      "Certification including circle up under IPO process for the purpose of Merchant Bankers",
      "Internal Audit",
      "Tax Audit",
      "Bank Audit",
      "Special Audits",
      "Fixed Assets Verification and Reconciliation",
      "Stock Verification and Reconciliation",
      "Internal Financial Control management testing",
      "Corporate Governance Compliance",
    ],
  },
  {
    icon: Briefcase,
    title: "Advisory Service",
    id: "advisory-service",
    description: "Strategic advisory services for tax, valuation, and regulatory compliance.",
    features: [
      "Indirect Tax",
      "GST/VAT Advisory and Compliance",
      "Advisory on taxability, input tax credit eligibility, and cross-charge implications",
      "Representation before GST",
      "Authorities/Appeal/Litigation",
      "Health Check and Diagnostic Reviews",
      "Direct Tax",
      "Corporate and Individual Tax Advisory",
      "Advisory on Withholding Tax (TDS/TCS)",
      "International Taxation Advisory",
      "Transfer Pricing Advisory",
      "Representation before Tax Authorities/Litigation",
      "Valuation",
      "Business valuation for transaction, restructuring, or investment purposes",
      "Valuation under regulatory requirements (Income Tax Act, FEMA, Companies Act)",
      "Valuation for financial reporting under Ind AS",
      "Valuation of intangible assets, goodwill, and brand",
      "Purchase price allocation and impairment testing support",
    ],
  },
  {
    icon: Calculator,
    title: "Accounting/Book-keeping and Process automation",
    id: "accounting-bookkeeping",
    description: "Complete accounting outsourcing and process automation services.",
    features: [
      "Complete Accounting Outsourcing",
      "Ind AS / IFRS / US GAAP Conversion / Implementation",
      "Account reconciliations",
      "Setting Chart of Accounts",
      "Preparation of Fixed Asset Register preparation",
      "Preparation of Financial Statements",
      "Audit Support",
      "Monthly PL, BS, CF & FF for MIS",
      "PF&A Activities Automation",
      "Preparation of financial statements and its automation",
      "Financial Reporting Software as a service (SaaS)",
    ],
  },
  {
    icon: Building2,
    title: "Management consultancy",
    id: "management-consultancy",
    description: "Strategic management consultancy and CFO services for business growth.",
    features: [
      "Virtual CFO",
      "Finance outsourcing",
       "IPO Process Support",
"Hedge Accounting Advisory",
"Audit Support Services",
      "Designing/preparation of process notes/standard operating procedures and Risk control matrices (RCMs)",
      "Identifying the design gaps GAAPs with current system with the requirements of IFC as per ICAI Guidance note",
      "Preparation of financial information to be included in DRHP/RHP/Prospectus",
      "Preparation of Restated Financial Statements and Proforma Financial Statements as per SEBI requirements",
      "Bank reconciliation",
      "Processing of Monthly Payroll",
      "Verification of Investment Proof and other deduction claimed by Employee",
      "Maintenance of Payroll Master",
      "Technical Accounting Advisory in various GAAPs (IFRS/IND AS/US GAAP)",
    ],
  },
  {
    icon: Globe,
    title: "Financial Reporting Software as a service (SaaS)",
    id: "financial-reporting-saas",
    description: "Advanced cloud-based financial reporting and consolidation solutions.",
    features: [
      "FinSoEasy360 - Seamless financial reconciliation and reporting automation",
      "Real-Time Consolidation - Automatically consolidates financial data across units, subsidiaries, joint ventures and associates providing accurate and up-to-date consolidated financial statements",
      "Customizable Reporting Templates - Create and adjust financial reports to meet statutory requirements and accounting standards with fully customizable templates",
      "Segment-Wise Reporting - Generate detailed, segment-wise financial reports with a single click for easy financial analysis across multiple divisions",
      "Centralized Data Management - Access and manage all financial data from one central location, ensuring data integrity and preventing unauthorized changes",
      "Cloud-Based Data Security - Powered by AWS, offering robust security features to safeguard sensitive financial information from unauthorized access",
      "Collaborative Workflows - Enable finance teams to collaborate efficiently with role-based access, audit trails, and real-time comment tracking for streamlined reporting",
      "Journal Entries and ERP Integration (FinSoEasy360 or any ERP)",
    ],
    link: "https://finsensor.ai/Product/finsoeasy360",
  },
  {
    icon: BookOpen,
    title: "Lease Accounting (Ind AS 116)",
    id: "lease-accounting",
    description: "Complete lease accounting solution for Ind AS 116 compliance.",
    features: [
      "LAMsoEasy360 - Complete lease accounting solution from calculation to recognition",
      "Leasemaster Data Management - Capture of key terms: start/end dates, rent, escalations, options (renewal/termination), variable payments, etc. for enabling the disclosure in the financial statements",
      "Automated ROU Asset & Lease Liability Calculations - Does automatic computation of lease liability and ROU asset. Built-in logic for extensions, terminations, and remeasurements",
      "Interest and Amortisation Engine - Periodic interest on the lease liability using the discounting rate, Depreciation on the ROU asset, Unwinding of interest calculation on security deposits",
      "Journal Entries and ERP Integration - Generate journal entries to post lease entries in the financial reporting software (FinSoEasy360) or any other ERP",
      "Disclosure and Reporting Suite - Pre-built Ind AS 116 disclosures: ROU asset and lease liability balances, depreciation, interest. Maturity schedules and cash-flow-based disclosures. Downloadable reports (Excel) for financial statement annexures and board/debt-covenant packages. Customisable management dashboards on total lease cost, interest cost, discount rate trend, year-wise depreciation, debt-like position, and upcoming renewals, etc.",
      "Lease Lifecycle Tracking - Lifecycle view: identification → initial recognition → renewals / modifications → terminations / disposals. Full handling of modifications",
    ],
    link: "https://finsensor.ai/Product/lease-tool",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-[#f8f5f0] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="text-[#c9a84c] font-black uppercase opacity-[0.06]"
            style={{ fontSize: "clamp(4rem, 18vw, 16rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            SERVICES
          </span>
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            What We Offer
          </span>
          <h1 className="text-[#0a1628] text-5xl sm:text-6xl font-bold mt-3 mb-4">
            Our Services
          </h1>
          <div className="w-12 h-0.5 bg-[#c9a84c] mb-6" />
          <p className="text-[#0a1628]/60 font-sans max-w-2xl leading-relaxed">
            Financial Reporting Software as a Service (SaaS) - RNBP delivers exceptional financial 
            solutions to clients across borders and industries, leveraging its global network of 
            skilled professionals.
          </p>
        </div>
      </section>

      {/* Offshore Accounting - Featured */}
      <section id="offshore-accounting" className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
              <Globe size={22} className="text-[#c9a84c]" />
            </div>
            <div>
              <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">Featured Service</span>
              <h2 className="text-[#0a1628] text-3xl font-bold">Offshore Accounting Services</h2>
            </div>
          </div>
          <div className="w-12 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
          <p className="text-[#0a1628]/60 font-sans leading-relaxed mb-12 max-w-3xl ml-16">
            By leveraging RNBP&apos;s offshore accounting services, businesses can achieve enhanced 
            operational efficiency, better compliance management, reduced costs, and access to 
            skilled professionals — all contributing to improved bottom-line results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offshoreServices.map((s, i) => {
              const CardWrapper = s.link ? motion.a : motion.div;
              const cardProps = s.link 
                ? { 
                    href: s.link, 
                    target: "_blank", 
                    rel: "noopener noreferrer", 
                    className: "bg-[#f8f5f0] p-6 border border-[#0a1628]/10 hover:border-[#c9a84c] hover:shadow-lg transition-all duration-300 cursor-pointer block flex flex-col",
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: i * 0.1 }
                  }
                : { 
                    className: "bg-[#f8f5f0] p-6 border border-[#0a1628]/10 flex flex-col",
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: i * 0.1 }
                  };
              
              return (
                <CardWrapper key={i} {...cardProps}>
                  <h3 className="text-[#0a1628] font-bold mb-3 text-base">{s.title}</h3>
                  <ul className="space-y-1.5 mb-auto">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[#0a1628]/60 font-sans">
                        <span className="w-1 h-1 bg-[#c9a84c] rounded-full shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {s.link && (
                    <div className="mt-4 pt-4 border-t border-[#0a1628]/10 flex items-center gap-1 text-[#c9a84c] text-xs font-semibold">
                      <span>Learn More</span>
                      <ArrowRight size={14} />
                    </div>
                  )}
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive Services Grid */}
      <section id="comprehensive-services" className="bg-[#f8f5f0] py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
              Our Services
            </span>
            <h2 className="text-[#0a1628] text-4xl font-bold mt-3 mb-4">
              Comprehensive Service Portfolio
            </h2>
            <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const CardWrapper = service.link ? motion.a : motion.div;
              const cardProps = service.link 
                ? { 
                    href: service.link, 
                    target: "_blank", 
                    rel: "noopener noreferrer", 
                    className: "bg-white p-8 hover:shadow-lg hover:border-[#c9a84c] border border-transparent transition-all duration-300 cursor-pointer flex flex-col",
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.6, delay: index * 0.1 }
                  }
                : { 
                    className: "bg-white p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col",
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.6, delay: index * 0.1 }
                  };
              
              return (
                <CardWrapper key={index} {...cardProps} id={service.id}>
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-12 h-12 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <h3 className="text-[#0a1628] text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-[#0a1628]/60 text-sm font-sans leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-6 flex-grow flex flex-col">
                    <ul className="space-y-2 mb-auto">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-[#0a1628]/70 font-sans">
                          <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full shrink-0 mt-1.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {service.link && (
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-[#c9a84c] font-semibold text-sm hover:gap-3 transition-all">
                          <span>Visit FinSensor.ai</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Slider */}
      <ClientsSlider />

      {/* CTA */}
      <section className="bg-[#c9a84c] py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl font-bold mb-4">Need a Specific Service?</h2>
          <p className="text-white/90 font-sans mb-8 max-w-xl mx-auto">
            Talk to our experts and get a customized solution tailored to your exact requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0a1628] px-8 py-4 font-bold text-sm tracking-wide hover:bg-[#f8f5f0] transition-colors font-sans"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
