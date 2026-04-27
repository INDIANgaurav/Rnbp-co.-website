"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

interface TeamMemberProps {
  member: {
    name: string;
    designation: string;
    phone: string;
    email: string;
    experience: string;
    expertise: string;
    image: string;
    description: string;
  };
  index: number;
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 bg-white border-l-4 border-[#c9a84c] shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      {/* Image Section */}
      <div className="lg:w-80 shrink-0 relative overflow-hidden bg-gradient-to-br from-[#f8f5f0] to-[#e8dcc4]">
        <div className="relative h-80 lg:h-full">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
          {/* Overlay with name */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1628] to-transparent p-6">
            <h3 className="text-white text-2xl font-bold mb-1">{member.name}</h3>
            <p className="text-[#c9a84c] text-sm font-semibold tracking-wide">{member.designation}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-8 lg:p-10">
        {/* Experience & Expertise Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-4 py-1.5 bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold tracking-wide border border-[#c9a84c]/30">
            {member.experience} EXPERIENCE
          </span>
          <span className="px-4 py-1.5 bg-[#0a1628]/5 text-[#0a1628] text-xs font-semibold tracking-wide border border-[#0a1628]/10">
            {member.expertise}
          </span>
        </div>

        {/* Description */}
        <p className="text-[#0a1628]/70 leading-relaxed font-sans text-sm mb-6">
          {member.description}
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#0a1628]/10">
          <a
            href={`tel:${member.phone}`}
            className="flex items-center gap-2 text-[#0a1628]/60 hover:text-[#c9a84c] transition-colors text-sm group"
          >
            <div className="w-8 h-8 bg-[#c9a84c]/10 group-hover:bg-[#c9a84c] flex items-center justify-center transition-colors">
              <Phone size={14} className="text-[#c9a84c] group-hover:text-white" />
            </div>
            <span className="font-sans">{member.phone}</span>
          </a>
          <a
            href={`mailto:${member.email}`}
            className="flex items-center gap-2 text-[#0a1628]/60 hover:text-[#c9a84c] transition-colors text-sm group"
          >
            <div className="w-8 h-8 bg-[#c9a84c]/10 group-hover:bg-[#c9a84c] flex items-center justify-center transition-colors">
              <Mail size={14} className="text-[#c9a84c] group-hover:text-white" />
            </div>
            <span className="font-sans">{member.email}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
