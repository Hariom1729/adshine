import Image from "next/image";
export default function FounderMessage() {
  return (
    <section className="bg-white font-sans">
      <div className="w-full max-w-[1600px] mx-auto px-3 md:px-4 lg:px-6 mb-8">
        <div className="bg-[#F4F7FB] rounded-[2.5rem] rounded-tl-[0] rounded-tr-[0] py-16 lg:py-24 px-8 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 xl:gap-20 items-center">
          
          {/* Left — Photo with smooth zoom effect */}
          <div className="relative rounded-[2.5rem] overflow-hidden h-[300px] lg:h-[360px] xl:h-[420px] group shadow-[0_20px_40px_-15px_rgba(10,25,49,0.15)] bg-[#0A1931]">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
              alt="Founder of Adshine Pharmaceuticals"
              fill
              unoptimized
              className="object-cover object-center"
            />
            {/* Bottom gradient for name plate */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-[#0A1931]/30 to-transparent transition-opacity duration-700 opacity-90 group-hover:opacity-100" />

            {/* Name plate */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
              <p className="text-white font-medium text-[20px] lg:text-[22px] tracking-tight mb-1 drop-shadow-md">
                Adshine Pharmaceuticals
              </p>
              <p className="text-white/70 text-[14px] lg:text-[15px] font-light drop-shadow-sm">
                Founder & Managing Director
              </p>
            </div>
          </div>

          {/* Right — Quote & Details */}
          <div className="flex flex-col justify-center py-4 lg:pl-6">
            <div className="flex">
              <span className="text-[#0057D9] text-[64px] lg:text-[72px] font-serif leading-none h-[40px] flex items-end">
                &ldquo;
              </span>
            </div>

            <blockquote className="text-[#0A1931] text-[20px] lg:text-[24px] xl:text-[28px] leading-[1.45] font-medium tracking-tight mb-6 pr-4">
              Our commitment is simple — to put clinically proven, GMP-certified medicine
              in the hands of every doctor and patient who needs it. We are not just building
              products; we are building trust.
            </blockquote>

            <p className="text-[#64748B] font-medium leading-[1.6] mb-10 text-[15px] lg:text-[16px] max-w-2xl">
              Science drives us, but the belief that every life deserves better healthcare is
              what keeps us moving forward — one prescription at a time.
            </p>

            <div className="w-full h-[1px] bg-[#E2E8F0] mb-10" />

            <div className="flex flex-col gap-4">
              {[
                "Physician trust and prescription confidence",
                "Transparent composition — no compromises on purity",
                "Pan-India reach across 500+ healthcare professionals",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0057D9]/10 shrink-0">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#0057D9]" />
                  </div>
                  <p className="text-[14px] lg:text-[15px] text-[#334155] font-medium leading-snug">{point}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
