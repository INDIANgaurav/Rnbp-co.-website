import { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Calculator,
  Briefcase,
  BookOpen,
  Globe,
  ArrowRight,
} from "lucide-react";
import ClientsSlider from "@/components/ClientsSlider";

export const metadata: Metadata = {
  title: "Services | R N B P & Co. Chartered Accountants",
  description:
    "Financial Reporting Software as a Service (SaaS) - Comprehensive services including Assurance, Advisory, Accounting/Book-keeping, and Management Consultancy.",
};

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
    ],
  },
  {
    title: "Financial Reporting Software as a service (SaaS)",
    items: [
      "FinSoEasy360 - Financial reconciliation & reporting",
      "LAMsoEasy360 - Complete lease accounting solution",
      "Real-Time Consolidation",
      "Customizable Reporting Templates",
      "Cloud-Based Data Security (AWS)",
      "Automated ROU Asset & Lease Liability Calculations",
    ],
    link: "https://finsensor.ai/",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Assurance",
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
    description: "Strategic management consultancy and CFO services for business growth.",
    features: [
      "Virtual CFO",
      "Finance outsourcing",
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
    description: "Advanced cloud-based financial reporting and lease accounting solutions.",
    features: [
      "FinSoEasy360 - Seamless financial reconciliation and reporting automation",
      "LAMsoEasy360 - Complete lease accounting solution from calculation to recognition",
      "Real-Time Consolidation across units, subsidiaries, and joint ventures",
      "Customizable Reporting Templates for statutory requirements",
      "Segment-Wise Reporting with single click financial analysis",
      "Centralized Data Management with integrity and security",
      "Cloud-Based Data Security powered by AWS",
      "Collaborative Workflows with role-based access and audit trails",
      "Leasemaster Data Management for key lease terms and disclosures",
      "Automated ROU Asset & Lease Liability Calculations",
      "Interest and Amortisation Engine with periodic calculations",
      "Journal Entries and ERP Integration (FinSoEasy360 or any ERP)",
      "Disclosure and Reporting Suite with Ind AS 116 disclosures",
      "Lease Lifecycle Tracking from identification to termination",
    ],
    link: "https://finsensor.ai/",
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {offshoreServices.map((s, i) => {
              const CardWrapper = s.link ? 'a' : 'div';
              const cardProps = s.link 
                ? { href: s.link, target: "_blank", rel: "noopener noreferrer", className: "bg-[#f8f5f0] p-6 border border-[#0a1628]/10 hover:border-[#c9a84c] hover:shadow-lg transition-all duration-300 cursor-pointer block" }
                : { className: "bg-[#f8f5f0] p-6 border border-[#0a1628]/10" };
              
              return (
                <CardWrapper key={i} {...cardProps}>
                  <h3 className="text-[#0a1628] font-bold mb-3 text-base">{s.title}</h3>
                  <ul className="space-y-1.5">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[#0a1628]/60 font-sans">
                        <span className="w-1 h-1 bg-[#c9a84c] rounded-full shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {s.link && (
                    <div className="mt-4 flex items-center gap-1 text-[#c9a84c] text-xs font-semibold">
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
      <section className="bg-[#f8f5f0] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              const CardWrapper = service.link ? 'a' : 'div';
              const cardProps = service.link 
                ? { href: service.link, target: "_blank", rel: "noopener noreferrer", className: "bg-white p-8 hover:shadow-lg hover:border-[#c9a84c] border border-transparent transition-all duration-300 cursor-pointer block" }
                : { className: "bg-white p-8 hover:shadow-lg transition-shadow duration-300" };
              
              return (
                <CardWrapper key={index} {...cardProps}>
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-12 h-12 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <h3 className="text-[#0a1628] text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-[#0a1628]/60 text-sm font-sans leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-6">
                    <ul className="space-y-2">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
