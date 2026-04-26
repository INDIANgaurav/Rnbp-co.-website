import { Metadata } from "next";
import Link from "next/link";
import { Award, Target, Eye, Users, ArrowRight } from "lucide-react";
import TeamSection from "@/components/about/TeamSection";
import IndustriesSection from "@/components/about/IndustriesSection";
import KeyTeamSection from "@/components/about/KeyTeamSection";

export const metadata: Metadata = {
  title: "About Us | R N B P & Co. Chartered Accountants",
  description:
    "Learn about R N B P & Co. – established in 2012, our team from Big 4 firms brings expertise in Audit, Tax, and Advisory services.",
};

const values = [
  {
    icon: Users,
    title: "Client First",
    description: "For us, our clients come first. We focus on creating professional relationships for years to come.",
  },
  {
    icon: Target,
    title: "People are Our Strength",
    description: "Our people are our strength. People care, growth and knowledge forms the basis of our organization.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description: "We work with integrity. Values are the most important requirement for professionals.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We ensure to provide quality services to our clients. Continued focus on knowledge growth is the key.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-[#f8f5f0] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="text-[#c9a84c] font-black uppercase opacity-[0.06]"
            style={{ fontSize: "clamp(4rem, 18vw, 16rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            ABOUT US
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            Who We Are
          </span>
          <h1 className="text-[#0a1628] text-5xl sm:text-6xl font-bold mt-3 mb-4">
            About Us
          </h1>
          <div className="w-12 h-0.5 bg-[#c9a84c] mb-6" />
          <p className="text-[#0a1628]/60 font-sans max-w-2xl leading-relaxed">
            A name you can trust! Over a decade of trusted financial expertise,
            built on integrity and a commitment to our clients&apos; success.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#f8f5f0] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
                Our Story
              </span>
              <h2 className="text-[#0a1628] text-4xl font-bold mt-3 mb-6">
                We, Our Team and Experience
              </h2>
              <div className="w-12 h-0.5 bg-[#c9a84c] mb-8" />
              <div className="space-y-4 text-[#0a1628]/70 font-sans leading-relaxed">
                <p>
                  <strong>R N B P &amp; Co. Chartered Accountants</strong> is an over a decade old
                  firm formed in 2012. RNBP is a peer reviewed firm.
                </p>
                <p>
                  We are engaged into Offshore Accounting, Audit &amp; Assurance services, Assistance 
                  in IPO process, Goods and Services Tax, Direct Taxation, Book-Keeping and Management Consultancy.
                </p>
                <p>
                  We have a team of seasoned professionals from Big 4 firms with sound regulatory
                  knowledge and strong business acumen.
                </p>
                <p>
                  Our resource pool consists of Chartered Accountants, MBAs, Company Secretaries,
                  and Financial Management experts with in-depth experience in providing 
                  multi-disciplinary services including Offshore Accounting, IPO process assistance, 
                  GST compliance, statutory audits under various GAAPs, Secretarial compliances, 
                  Business set up and Corporate Finance.
                </p>
                <p>
                  Our sector focus gives us a distinctive ability to implement tailored solutions. 
                  Our strategy involves implementing internal knowledge management systems to deliver 
                  performance-based, industry-tailored and technology-enabled business advisory services.
                </p>
              </div>
            </div>

            {/* Core Principles */}
            <div className="bg-[#f5f1eb] border border-[#c9a84c]/20 p-10">
              <h3 className="text-[#0a1628] text-2xl font-bold mb-8">Our Approach</h3>
              <div className="space-y-5">
                {[
                  { title: "Understanding the need of client", desc: "We deeply understand what our clients need and tailor our services accordingly." },
                  { title: "Confidentiality of client information", desc: "We maintain strict confidentiality and act as a trusted adviser." },
                  { title: "Assist clients to meet their targets", desc: "We help clients achieve their goals through the right business strategy." },
                  { title: "Leverage the expertise", desc: "We leverage the expertise of diversified professionals." },
                  { title: "Outstanding value", desc: "We deliver outstanding value to markets and clients." },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="text-[#c9a84c] font-bold mb-1">{item.title}</div>
                    <p className="text-[#0a1628]/60 text-sm font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
              How We Approach
            </span>
            <h2 className="text-[#0a1628] text-4xl font-bold mt-3 mb-4">Our Core Values</h2>
            <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mb-6" />
            <p className="text-[#0a1628] text-xl italic max-w-3xl mx-auto">
              &ldquo;Our Mission is to seamlessly deliver quality to add value to your processes&rdquo;
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-[#f8f5f0] hover:bg-[#c9a84c] group transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#c9a84c]/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-5 transition-colors">
                    <Icon size={24} className="text-[#c9a84c] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#0a1628] group-hover:text-white font-bold text-lg mb-3 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-[#0a1628]/60 group-hover:text-white/90 text-sm leading-relaxed font-sans transition-colors">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries - separate component */}
      <IndustriesSection />

      {/* Team - separate component */}
      <TeamSection />

      {/* Key Team Members */}
      <KeyTeamSection />

      {/* CTA */}
      <section className="bg-[#c9a84c] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-white/90 font-sans mb-8 max-w-xl mx-auto">
            Reach out to our team for a free consultation and discover how we can add value to your financial journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0a1628] px-8 py-4 font-bold text-sm tracking-wide hover:bg-[#f8f5f0] transition-colors font-sans"
          >
            Contact Us Today
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
