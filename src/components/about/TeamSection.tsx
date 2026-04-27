"use client";

import { team } from "@/app/about/data";
import TeamMember from "./TeamMember";

export default function TeamSection() {
  return (
    <section className="bg-[#f8f5f0] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            Meet the Experts
          </span>
          <h2 className="text-[#0a1628] text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Our Core Team
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-[#0a1628]/60 max-w-2xl mx-auto font-sans leading-relaxed">
            Led by seasoned professionals with extensive experience from Big 4 firms and leading organizations.
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-8">
          {team.map((member, index) => (
            <TeamMember key={member.email} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
