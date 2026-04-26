import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | R N B P & Co. Chartered Accountants",
  description:
    "Get in touch with R N B P & Co. for a free consultation. We are here to help with all your financial and compliance needs.",
};

const offices = [
  {
    city: "Noida",
    address: "G-22, II Floor Sector-3, Noida, Uttar Pradesh-201301",
    phone: "+91 95559 34205",
    email: "info@rnbp.in",
  },
  {
    city: "Greater Noida West",
    address: "505, Addela Mart, Gaur City -2, Greater Noida west, U. P - 201306",
    phone: "+91 955 593 4205",
    email: "info@rnbp.in",
  },
  {
    city: "New Delhi",
    address: "157, Sainik Vihar, Pitampura, Delhi - 110034",
    phone: "+91 98185 88733",
    email: "info@rnbp.in",
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 95559 34205", "+91 98185 88733"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@rnbp.in"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon – Sat: 9:30 AM – 6:30 PM", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-[#f8f5f0] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="text-[#c9a84c] font-black uppercase opacity-[0.06]"
            style={{ fontSize: "clamp(4rem, 18vw, 16rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            CONTACT
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            Reach Out
          </span>
          <h1 className="text-[#0a1628] text-5xl sm:text-6xl font-bold mt-3 mb-4">
            Contact Us
          </h1>
          <div className="w-12 h-0.5 bg-[#c9a84c] mb-6" />
          <p className="text-[#0a1628]/60 font-sans max-w-2xl leading-relaxed">
            Have a question or need expert financial advice? We&apos;re here to
            help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0a1628] text-3xl font-bold mb-4">
              Our Offices
            </h2>
            <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-[#f8f5f0] p-8 hover:bg-[#c9a84c] group transition-all duration-300 border border-[#0a1628]/10 hover:border-[#c9a84c]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={20} className="text-[#c9a84c] group-hover:text-white transition-colors" />
                  <h3 className="text-[#0a1628] group-hover:text-white font-bold text-lg transition-colors">
                    {office.city}
                  </h3>
                </div>
                <p className="text-[#0a1628]/70 group-hover:text-white/90 text-sm font-sans mb-4 transition-colors">
                  {office.address}
                </p>
                <div className="space-y-2 border-t border-[#0a1628]/10 group-hover:border-white/20 pt-4 transition-colors">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[#c9a84c] group-hover:text-white/70 transition-colors" />
                    <span className="text-[#0a1628]/60 group-hover:text-white/80 text-xs font-sans transition-colors">
                      {office.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[#c9a84c] group-hover:text-white/70 transition-colors" />
                    <span className="text-[#0a1628]/60 group-hover:text-white/80 text-xs font-sans transition-colors">
                      {office.email}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#f8f5f0] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-[#0a1628] text-3xl font-bold mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex gap-5">
                      <div className="w-12 h-12 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-[#c9a84c]" />
                      </div>
                      <div>
                        <h3 className="text-[#0a1628] font-bold text-sm tracking-wide mb-1">
                          {info.title}
                        </h3>
                        {info.lines.map((line, i) => (
                          <p key={i} className="text-[#0a1628]/60 text-sm font-sans">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-[#f5f1eb] border border-[#c9a84c]/20 p-8">
                <h3 className="text-[#0a1628] font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Established in 2012 - Over a decade of excellence",
                    "Team from Big 4 firms (EY, KPMG)",
                    "Peer reviewed firm",
                    "Multi-industry expertise",
                    "Comprehensive service portfolio",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#0a1628]/70 text-sm font-sans">
                      <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-[#0a1628] text-3xl font-bold mb-8">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
