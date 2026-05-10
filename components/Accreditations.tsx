"use client";

import { Award, ShieldCheck, CheckCircle, FileBadge } from "lucide-react";

const certifications = [
  {
    name: "WHO-GMP Certified",
    description: "World Health Organization Good Manufacturing Practices",
    icon: ShieldCheck,
    image: "/images/accreditations/WHO-GMP Certified.png",
  },
  {
    name: "ISO 15378:2017",
    description: "Primary Packaging Materials for Medicinal Products",
    icon: Award,
    image: "/images/accreditations/ISO 15378-2017.jpeg",
  },
  {
    name: "FSSAI Approved",
    description: "Food Safety and Standards Authority of India",
    icon: CheckCircle,
    image: "/images/accreditations/FSSAI Approved .jpeg",
  },
  {
    name: "GLP Compliant",
    description: "Good Laboratory Practice Standards",
    icon: FileBadge,
    image: "/images/accreditations/GLP Compliant .jpeg",
  },
];

export default function Accreditations() {
  return (
    <section className="bg-white py-16 lg:py-24 font-sans border-t border-gray-100">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[16px] lg:text-[18px] font-medium text-[#0284C7] flex items-center justify-center tracking-wide mb-4">
            <span className="text-[18px] mr-3 leading-none relative -top-[1.5px] text-[#0284C7]/40">•</span>
            Our Accreditations
          </p>
          <h2 className="text-[#0A1931] text-[30px] lg:text-[36px] xl:text-[40px] leading-[1.2] font-medium tracking-tight">
            Commitment to Global Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-8 bg-[#F4F7FB] rounded-[2rem] border border-[#E2E8F0]/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Logo / Icon Container */}
              <div className="relative w-24 h-24 mb-6 rounded-full bg-white shadow-sm flex items-center justify-center border border-blue-50 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-16 h-16 object-contain z-10 bg-white"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <cert.icon className="w-10 h-10 text-[#0057D9]" strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#0A1931] text-center mb-2 tracking-tight">
                {cert.name}
              </h3>
              <p className="text-[13px] lg:text-[14px] text-[#64748B] text-center font-medium leading-snug px-2">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
