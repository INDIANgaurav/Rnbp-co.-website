"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HeartHandshake, TrendingUp, Users } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Client First",
    description:
      "For us, our clients come first. We focus on creating professional relationships for years to come. A satisfied client is our priority.",
  },
  {
    icon: CheckCircle2,
    title: "People are Our Strength",
    description:
      "Our people are our strength. People care, growth and knowledge forms the basis of our organization.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    description:
      "We work with integrity. Values are the most important requirement for professionals. We maintain confidentiality and act as trusted advisers.",
  },
  {
    icon: TrendingUp,
    title: "Quality",
    description:
      "We ensure to provide quality services to our clients. Continued focus on knowledge growth and understanding client's requirement is the key.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
              How We Approach
            </span>
            <h2 className="text-[#0a1628] text-4xl sm:text-5xl font-bold mt-3 mb-4">
              A Name You Can Trust!
            </h2>
            <div className="w-12 h-0.5 bg-[#c9a84c] mb-6" />
            <p className="text-[#0a1628]/60 font-sans leading-relaxed mb-8">
              We understand the need of clients and maintain confidentiality of client 
              information while acting as trusted advisers. We assist clients to meet 
              their targets through the right business strategy, leveraging the expertise 
              of diversified professionals to deliver outstanding value to markets and clients.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#c9a84c] pl-6 py-2">
              <p className="text-[#0a1628] text-lg italic leading-relaxed">
                "Our Mission is to seamlessly deliver quality to add value to your processes"
              </p>
              <cite className="text-[#0a1628]/50 text-sm font-sans mt-2 block not-italic">
                — R N B P & Co. Mission Statement
              </cite>
            </blockquote>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-[#f8f5f0] hover:bg-[#c9a84c] group transition-all duration-300 border border-transparent hover:border-[#c9a84c]"
                >
                  <Icon size={28} className="text-[#c9a84c] group-hover:text-white mb-4 transition-colors" />
                  <h3 className="text-[#0a1628] group-hover:text-white font-bold text-lg mb-2 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-[#0a1628]/60 group-hover:text-white/90 text-sm leading-relaxed font-sans transition-colors">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
