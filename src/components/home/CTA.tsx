"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-[#c9a84c] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg font-sans mb-10 max-w-2xl mx-auto">
            Schedule a free consultation with our expert CAs today. Let us handle
            your finances while you focus on growing your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1628] px-8 py-4 font-bold text-sm tracking-wide hover:bg-[#f8f5f0] transition-colors font-sans"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
