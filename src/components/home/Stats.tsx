"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "6", label: "Expert Partners" },
  { value: "12+", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="bg-[#e8dcc8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center border-r border-[#0a1628]/10 last:border-0 px-4"
            >
              <div className="text-[#c9a84c] text-4xl sm:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-[#0a1628]/60 text-sm tracking-wide font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
