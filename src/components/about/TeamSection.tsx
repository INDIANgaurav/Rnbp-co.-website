"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { team } from "@/app/about/data";

export default function TeamSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            The Experts
          </span>
          <h2 className="text-[#0a1628] text-4xl font-bold mt-3 mb-4">
            Our Core Team
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#f8f5f0] p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-6 mb-6">
                {/* Avatar - photo or initials */}
                <div className="w-20 h-20 shrink-0 overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center">
                      <span className="text-[#c9a84c] text-2xl font-bold">
                        {member.name.split(" ")[0][0]}{member.name.split(" ")[1][0]}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-[#0a1628] font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-[#c9a84c] text-sm font-sans mb-3">{member.designation}</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#0a1628]/60 text-xs">
                      <Phone size={12} />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#0a1628]/60 text-xs">
                      <Mail size={12} />
                      <span>{member.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#0a1628]/10 pt-6">
                <div className="flex gap-4 mb-4">
                  <div>
                    <div className="text-[#c9a84c] text-xs font-semibold mb-1">Experience</div>
                    <div className="text-[#0a1628] font-bold">{member.experience}</div>
                  </div>
                  <div className="border-l border-[#0a1628]/10 pl-4">
                    <div className="text-[#c9a84c] text-xs font-semibold mb-1">Expertise</div>
                    <div className="text-[#0a1628] font-bold text-sm">{member.expertise}</div>
                  </div>
                </div>
                <p className="text-[#0a1628]/60 text-sm font-sans leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
