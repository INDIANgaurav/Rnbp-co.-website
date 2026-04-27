"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const offices = [
  {
    city: "Noida",
    address: "G-22, II Floor Sector-3, Noida, Uttar Pradesh – 201301",
    phone: "+91 95559 34205",
    email: "info@rnbp.in",
  },
  {
    city: "Greater Noida West",
    address: "505, Addela Mart, Gaur City-2, Greater Noida West, U.P – 201306",
    phone: "+91 955 593 4205",
    email: "info@rnbp.in",
  },
  {
    city: "New Delhi",
    address: "157, Sainik Vihar, Pitampura, Delhi – 110034",
    phone: "+91 98185 88733",
    email: "info@rnbp.in",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f1eb] text-[#0a1628]">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
        >
          {/* Column 1: Let's Discuss */}
          <div>
            <p className="text-[#c9a84c] text-xs font-sans font-bold uppercase tracking-wider mb-4">
              WANT TO GET ANY SUPPORT?
            </p>
            <h2 className="text-[#0a1628] font-black text-5xl leading-[1.1]">
              Let&apos;s<br />
              <span className="text-[#c9a84c]">Discuss!</span>
            </h2>
          </div>

          {/* Column 2: Main Pages */}
          <div>
            <h3 className="text-[#0a1628] font-bold text-lg mb-6">Main Pages</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Events", href: "/events" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#0a1628]/60 hover:text-[#c9a84c] text-sm font-sans transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-[#0a1628] font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Offshore Accounting", href: "/services" },
                { label: "Audit & Assurance", href: "/services" },
                { label: "GST Advisory", href: "/services" },
                { label: "Direct Taxation", href: "/services" },
                { label: "Management Consultancy", href: "/services" },
                { label: "Valuation Services", href: "/services" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#0a1628]/60 hover:text-[#c9a84c] text-sm font-sans transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="border-t border-[#0a1628]/10 pt-12 mb-12"
        >
          <div className="flex items-center gap-2 mb-8">
            <MapPin size={16} className="text-[#c9a84c]" />
            <p className="text-[#c9a84c] text-xs font-sans font-bold uppercase tracking-wider">
              Our Offices
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h4 className="text-[#0a1628] font-bold text-base">{office.city}</h4>
                <p className="text-[#0a1628]/60 text-sm font-sans leading-relaxed">
                  {office.address}
                </p>
                <div>
                  <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-wider font-sans mb-1">Phone</p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1.5 text-[#c9a84c] text-sm font-sans hover:text-[#b8974a] transition-colors"
                  >
                    <Phone size={12} />
                    {office.phone}
                  </a>
                </div>
                <div>
                  <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-wider font-sans mb-1">Email</p>
                  <a
                    href={`mailto:${office.email}`}
                    className="inline-flex items-center gap-1.5 text-[#c9a84c] text-sm font-sans hover:text-[#b8974a] transition-colors"
                  >
                    <Mail size={12} />
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Strip */}
      </div>

      <div className="bg-[#e8dcc8] relative overflow-hidden">
        {/* Big RNBP background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="text-[#c9a84c] font-black uppercase opacity-[0.12]"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            RNBP & Co.
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#0a1628]/60 text-sm font-sans">
            Copyright © {new Date().getFullYear()} R N B P & Co., All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { label: "LinkedIn", icon: "in", href: "#" },
              { label: "Facebook", icon: "f", href: "#" },
              { label: "Instagram", icon: "ig", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-9 h-9 rounded-full border border-[#0a1628]/30 flex items-center justify-center text-[#0a1628]/60 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 text-xs font-bold"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
