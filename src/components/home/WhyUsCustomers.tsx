"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const whyUsPoints = [
  {
    title: "A team that knows you",
    points: [
      "A team who knows your business",
      "Structured approach",
    ],
  },
  {
    title: "Practical & efficient approach",
    points: [
      "Optimal diagnostic approach with minimal efforts to transition from previous GAAP to Ind-AS",
      "Leverage the work done by Management and auditors",
      "Optimize the scope of work in order to enhance efficiency",
    ],
  },
  {
    title: "Value-add",
    points: [
      "Highlight the impact on business processes, IT systems and control environment",
      "Effective knowledge transfer and retention during and after the project",
      "Identify planning opportunities (if any) to improve the quality of financial statements",
      "Partners at RNBP have hands on experience on Ind AS Transition",
    ],
  },
];

const testimonials = [
  {
    text: "We would like to extend our sincere thanks and appreciation for your invaluable support and guidance throughout our Ind AS transition journey. Your expertise, timely insights, and client first approach played a pivotal role in ensuring a smooth and successful implementation. From initial assessment to final execution, including processes, documentation and aligning auditor, your partnership has made a real difference. It was a pleasure working with a team that shares our commitment to quality, precision, and compliance.",
    author: "Parminda Baghchi, CFO",
    company: "Compass India Group",
  },
  {
    text: "RNBP team has transformed our finance function by automating consolidation, eliminations, and Schedule III reporting, reducing effort by 60-70%. It has significantly improved accuracy, governance, and audit readiness while enabling real-time insights.",
    author: "Abul Khosla, CFO",
    company: "Park Hotels",
  },
  {
    text: "RNBP has streamlined our multi-entity consolidation process, delivering accurate standalone and consolidated statements with automated eliminations. It has significantly reduced manual effort while improving accuracy, compliance & governance.",
    author: "Sharad Kumar, Finance Controller",
    company: "Gaurson India",
  },
];

export default function WhyUsCustomers() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#0a1628] text-4xl sm:text-5xl font-bold mb-4">
            Why us? And what our customers say
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>

        {/* Banner */}
        <div className="bg-[#0a1628] text-white text-center py-6 mb-12 border-l-4 border-[#c9a84c]">
          <h3 className="text-xl sm:text-2xl font-bold tracking-wide">
            RNBP - Your natural partner through your Accounting change transition
          </h3>
        </div>

        {/* Why Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {whyUsPoints.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f8f5f0] p-6 border-l-4 border-[#c9a84c]"
            >
              <h4 className="text-[#0a1628] font-bold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#0a1628]/70 font-sans"
                  >
                    <span className="text-[#c9a84c] mt-1">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12 mt-8">
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            Client Testimonials
          </span>
          <h3 className="text-[#0a1628] text-3xl font-bold mt-3 mb-4">
            What Our Clients Say
          </h3>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#fffbeb] p-6 relative flex flex-col"
            >
              <Quote
                size={32}
                className="text-[#c9a84c] opacity-20 absolute top-4 right-4"
              />
              <p className="text-[#0a1628] text-sm leading-relaxed font-sans mb-auto relative z-10 pb-6">
                {testimonial.text}
              </p>
              <div className="border-t border-[#c9a84c]/30 pt-4 mt-auto">
                <p className="text-[#0a1628] font-bold text-sm">
                  {testimonial.author}
                </p>
                <p className="text-[#0a1628]/60 text-xs font-sans">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
