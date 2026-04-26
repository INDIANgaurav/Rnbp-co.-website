"use client";

import { Shield, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

// Simple reusable animation helper
function fromLeft(delay: number) {
  return {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  };
}

function fromRight(delay: number) {
  return {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#f8f5f0] flex items-center overflow-hidden">
      {/* Decorative background circles - Nangia style */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#f8f5f0] to-[#e8dcc8] rounded-full blur-3xl opacity-40 -translate-y-1/3 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#c9a84c]/10 to-transparent rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/4 z-0" />

      {/* Background Text - positioned at top like other pages */}
      <div className="absolute top-15 left-0 right-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-[1]">
        <span
          className="text-[#c9a84c] font-black uppercase opacity-[0.2]"
          style={{ fontSize: "clamp(4rem, 12vw, 16rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
        >
          RNBP 
        </span>
      </div>
      
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c9a84c 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 pt-36 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div 
              {...fromLeft(0)} 
              className="inline-flex items-center gap-2 bg-white border border-[#c9a84c]/30 px-4 py-2 mb-6 shadow-sm"
            >
              <Award size={14} className="text-[#c9a84c]" />
              <span className="text-[#0a1628] text-xs tracking-wider uppercase font-sans font-medium">
                Peer Reviewed Firm | Established 2012
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              {...fromLeft(0.15)} 
              className="text-[#0a1628] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 tracking-tight"
            >
              R N B P <span className="text-[#c9a84c]">&</span> Co.
            </motion.h1>

            <motion.h2 
              {...fromLeft(0.25)} 
              className="text-[#0a1628]/70 text-xl sm:text-2xl font-light mb-8"
            >
              Chartered Accountants
            </motion.h2>

            <motion.div {...fromLeft(0.3)} className="w-20 h-[3px] bg-[#c9a84c] mb-8" />

            <motion.p 
              {...fromLeft(0.4)} 
              className="text-[#0a1628]/75 text-lg leading-relaxed mb-10 font-sans max-w-xl"
            >
              Over a decade old firm established in 2012. We deliver outstanding value through 
              Offshore Accounting, Audit &amp; Assurance, IPO Assistance, GST, Direct Taxation, 
              and Management Consultancy. Our team of seasoned professionals brings sound 
              regulatory knowledge and strong business acumen.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div {...fromLeft(0.5)} className="flex flex-wrap gap-8 pt-4">
              {[
                { icon: Shield, text: "Established 2012" },
                { icon: Award, text: "Peer Reviewed Firm" },
                { icon: Users, text: "Expert Partners" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-[#0a1628]/70 text-sm font-sans font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT CONTENT - Image placeholder with overlay */}
          <motion.div 
            {...fromRight(0.2)}
            className="hidden lg:block relative"
          >
            {/* Decorative frame */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#c9a84c]/20 rounded-lg" />
            
            {/* Main content box */}
            <div className="relative bg-gradient-to-br from-[#f8f5f0] to-white border border-[#0a1628]/10 rounded-lg p-10 shadow-xl">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: "12+", label: "Years of Excellence" },
                  { value: "6", label: "Expert Partners" },
                  { value: "12+", label: "Industries Served" },
                  { value: "2012", label: "Established" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-[#c9a84c] text-4xl font-bold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[#0a1628]/60 text-xs font-sans tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent mb-8" />

              {/* Mission Statement */}
              <div className="relative">
                <div className="absolute -left-2 top-0 text-[#c9a84c] text-6xl font-serif leading-none opacity-20">"</div>
                <p className="text-[#0a1628]/80 text-base leading-relaxed font-sans italic pl-6">
                  Our Mission is to seamlessly deliver quality to add value to your processes.
                </p>
                <div className="mt-4 text-[#0a1628]/50 text-sm font-sans text-right">
                  — R N B P & Co.
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#c9a84c] rounded-full opacity-10 blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
