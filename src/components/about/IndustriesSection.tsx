"use client";

import { 
  Building2, 
  Car, 
  Landmark, 
  Factory, 
  Building, 
  Pill, 
  Fuel, 
  Hotel, 
  Truck, 
  GraduationCap, 
  Package, 
  Construction 
} from "lucide-react";
import { industries } from "@/app/about/data";

const industryIcons = [
  { name: "Real Estate", icon: Building2 },
  { name: "Automobile", icon: Car },
  { name: "Banking", icon: Landmark },
  { name: "Steel & Metals", icon: Factory },
  { name: "PSU", icon: Building },
  { name: "Pharma & Healthcare", icon: Pill },
  { name: "Oil & Gas", icon: Fuel },
  { name: "Hospitality", icon: Hotel },
  { name: "Logistics", icon: Truck },
  { name: "Education", icon: GraduationCap },
  { name: "Paper & Packaging", icon: Package },
  { name: "Infrastructure", icon: Construction },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#f8f5f0] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-sans font-semibold">
            Our Expertise
          </span>
          <h2 className="text-[#0a1628] text-4xl font-bold mt-3 mb-4">
            Industries We Served
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-[#0a1628]/60 font-sans max-w-3xl mx-auto leading-relaxed">
            In our multi-disciplinary services, we have served across various industries
            and diverse verticals, generating deep insights of multifarious businesses
            and differences in economic, social, political and regulatory environments.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {industryIcons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="bg-white p-8 text-center hover:bg-[#c9a84c] transition-all duration-300 group border border-[#0a1628]/10 hover:border-[#c9a84c] hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#c9a84c]/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Icon size={26} className="text-[#c9a84c] group-hover:text-white transition-colors" />
                </div>
                <div className="text-[#0a1628] group-hover:text-white font-bold text-sm transition-colors">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
