import { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  BarChart2,
  Building2,
  Calculator,
  Briefcase,
  BookOpen,
  Globe,
  PieChart,
  ArrowRight,
} from "lucide-react";
import ClientsSlider from "@/components/ClientsSlider";

export const metadata: Metadata = {
  title: "Services | R N B P & Co. Chartered Accountants",
  description:
    "Comprehensive CA services including Offshore Accounting, Audit & Assurance, GST, Direct Tax, Accounting, Management Consultancy, and Valuation Services.",
};

const offshoreServices = [
  {
    title: "Book-Keeping",
    items: [
      "Reconciliations – payments received, interest income, tax payments",
      "Salaries & wages, vendor payments, investments, petty cash",
      "Supported ERPs: SAP, Microsoft Dynamics, Oracle ERP, QuickBooks, Sage",
    ],
  },
  {
    title: "Accounts Payable",
    items: [
      "Offshore outsourced AP management services across the globe",
      "Invoice processing and vendor payment management",
      "AP reconciliation and reporting",
    ],
  },
  {
    title: "Accounts Receivable",
    items: [
      "Accelerated cash flow management",
      "Enhanced customer service and reduced administrative burden",
      "Offshore outsourced AR management services across the globe",
    ],
  },
  {
    title: "Reconciliation of Accounts",
    items: [
      "Verification against independent third-party reports",
      "Minimizes overdrafts and improves financial accuracy",
      "Strengthens bookkeeping controls",
    ],
  },
  {
    title: "Invoicing",
    items: [
      "Invoice creation automation",
      "Compliance adherence",
      "Timely invoice delivery",
    ],
  },
  {
    title: "MIS Reporting",
    items: [
      "Reports, Dashboards, Data Visualizations",
      "Departments: Finance, Marketing, Operations, HR",
      "Specialized software tools",
    ],
  },
  {
    title: "Payroll Processing",
    items: [
      "Attendance tracking from biometrics",
      "Statutory compliances",
      "Employee salary access portal & leave application module",
    ],
  },
];

const services = [
  {
    icon: Calculator,
    title: "Accounting / Book-Keeping & Process Automation",
    description: "Complete accounting outsourcing and process automation services.",
    features: [
      "Complete Accounting Outsourcing",
      "Ind AS / IFRS / US GAAP Conversion / Implementation",
      "Account Reconciliations",
      "Setting Chart of Accounts",
      "Preparation of Fixed Asset Register",
      "Preparation of Financial Statements",
      "Audit Support",
      "Monthly PL, BS, CF & FF for MIS",
      "PF&A Activities Automation",
      "Preparation of financial statements and its automation",
    ],
  },
  {
    icon: BarChart2,
    title: "GST Audit and Compliance",
    description: "Complete GST audit, compliance and advisory services.",
    features: [
      "GST Audit",
      "Advising / Assisting Companies on preparing the detailed list of records / documents that needs to be filed with the Government under GST regime",
      "Providing checklist of information / details required for the purpose of preparing the GST Audit report",
      "Review of information / documents collated as per the requirements of GST law",
      "Preparing the reconciliation statement in the prescribed format of the disclosures made in the GST returns and the audited financial statements (as per the state wise financial statement)",
      "Preparing the GST Audit report and the positions internally adopted by the companies and aligning the same with the GST law",
      "Assistance in HSN and rate finalization",
      "Valuations of Supplies",
      "Monthly return finalization and filing with Authority",
    ],
  },
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
      "Internal Financial Control management testing",
      "Corporate Governance Compliance",
    ],
  },
  {
    icon: Briefcase,
    title: "Management Consultancy",
    description: "Strategic management consultancy and CFO services for business growth.",
    features: [
      "Virtual CFO",
      "Finance outsourcing",
      "Preparation of financial information to be included in DRHP / RHP / Prospectus",
      "Preparation of Restated Financial Statements as per SEBI requirements",
      "Bank reconciliation",
      "Processing of Monthly Payroll",
      "Compliance of Provident Fund, ESI and Gratuity",
      "Verification of Investment Proof and other deduction claimed by Employee",
      "Computation of TDS on Salary of Employee",
      "Maintenance of Payroll Master",
      "Full and Final Settlement",
      "Technical Accounting Advisory in various GAAPs (IFRS / IND AS / US GAAP)",
      "Internal Financial Control management testing formulation",
    ],
  },
  {
    icon: PieChart,
    title: "Valuation",
    description: "Professional business and asset valuation services for various purposes.",
    features: [
      "Business valuation for transaction, restructuring, or investment purposes",
      "Valuation under regulatory requirements (Income Tax Act, FEMA, Companies Act)",
      "Valuation for financial reporting under Ind AS",
      "Valuation of intangible assets, goodwill, and brand",
      "Purchase price allocation and impairment testing support",
      "Fair value determination",
    ],
  },
  {
    icon: FileText,
    title: "Direct Tax",
    description: "Comprehensive direct taxation services for individuals and corporates.",
    features: [
      "Corporate and Individual Tax Advisory",
      "Advisory on Withholding Tax (TDS / TCS)",
      "International Taxation Advisory",
      "Transfer Pricing Advisory",
      "Representation before Tax Authorities / Litigation",
      "Tax Planning & Optimization",
      "ITR Filing for all categories",
      "Income Tax Notices & Appeals",
    ],
  },
];

const whyOffshore = [
  { title: "Workforce Skill & Proficiency", desc: "India's highly skilled workforce with strong English communication." },
  { title: "Time Zone Advantages", desc: "Enables near 24-hour work cycles for US, Canada & Europe clients." },
  { title: "Technical Assistance", desc: "Advanced ERP support and infrastructure." },
  { title: "Legal & Compliance Efficiency", desc: "Professionals versed in US GAAP, IFRS, and international regulations." },
  { title: "Operational & Financial Efficiency", desc: "Reduced hiring/management costs and operational risks." },
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
            RNBP is poised to deliver exceptional financial solutions to clients across borders 
            and industries, leveraging its global network of skilled professionals.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
            {offshoreServices.map((s, i) => (
              <div key={i} className="bg-[#f8f5f0] p-6 border border-[#0a1628]/10">
                <h3 className="text-[#0a1628] font-bold mb-3 text-base">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#0a1628]/60 font-sans">
                      <span className="w-1 h-1 bg-[#c9a84c] rounded-full shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why Offshore */}
          <div className="bg-[#f8f5f0] p-8 border border-[#c9a84c]/20">
            <h3 className="text-[#0a1628] text-xl font-bold mb-6">Why Businesses Should Consider RNBP for Offshore Accounting</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {whyOffshore.map((w, i) => (
                <div key={i} className="text-center p-4">
                  <div className="w-8 h-8 bg-[#c9a84c]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#c9a84c] font-bold text-sm">{i + 1}</span>
                  </div>
                  <h4 className="text-[#0a1628] font-bold text-sm mb-1">{w.title}</h4>
                  <p className="text-[#0a1628]/55 text-xs font-sans">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Grid */}
      <section className="bg-[#f8f5f0] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
              Our Other Services
            </span>
            <h2 className="text-[#0a1628] text-4xl font-bold mt-3 mb-4">
              Comprehensive Service Portfolio
            </h2>
            <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 hover:shadow-lg transition-shadow duration-300">
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
                  </div>
                </div>
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
