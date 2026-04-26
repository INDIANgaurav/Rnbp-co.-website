"use client";

import Image from "next/image";
import { keyTeamMembers } from "@/app/about/data";

export default function KeyTeamSection() {
  return (
    <section className="bg-[#f8f5f0] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            Our People
          </span>
          <h2 className="text-[#0a1628] text-4xl font-bold mt-3 mb-4">
            Key Team Members
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {keyTeamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-5 flex items-center gap-4 border border-[#0a1628]/10 hover:border-[#c9a84c]/40 hover:shadow-sm transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-14 h-14 shrink-0 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
                    <span className="text-[#c9a84c] text-lg font-bold">
                      {member.name.split(" ")[0][0]}
                      {member.name.split(" ")[1]?.[0] ?? ""}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="min-w-0">
                <h3 className="text-[#0a1628] font-bold text-sm leading-tight truncate">
                  {member.name}
                </h3>
                <p className="text-[#c9a84c] text-xs font-semibold font-sans mt-0.5">
                  {member.role}
                </p>
                <p className="text-[#0a1628]/50 text-xs font-sans mt-0.5 leading-tight">
                  {member.dept}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
