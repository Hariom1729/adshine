"use client";

import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      {/* 
        ========================================
        NEW FULLSCREEN HERO (Reference Image Vibe) 
        ========================================
      */}
      <div className="relative w-full min-h-[100svh] md:h-[100svh] md:min-h-[800px] bg-black overflow-hidden flex items-center pt-20 md:pt-0">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background Image */}
          <Image 
            src="https://i.pinimg.com/1200x/0b/02/8b/0b028b6fb9948e8ed4185b795271591a.jpg" 
            alt="Healthcare Background" 
            fill
            quality={90}
            priority
            unoptimized
            className="hidden md:block object-cover origin-center"
          />
          {/* Mobile Background Image */}
          <Image 
            src="https://i.pinimg.com/736x/a5/ae/ee/a5aeeeef0327dec960e718f629e0131c.jpg" 
            alt="Healthcare Background Mobile" 
            fill
            quality={90}
            priority
            unoptimized
            className="block md:hidden object-cover origin-center"
          />
          {/* Premium Black Overlay to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
          {/* Subtle radial to focus light in center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex flex-col justify-center items-center text-center">
          <div className="inline-flex items-center gap-3 mb-6 lg:mb-8 w-fit border border-white/20 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#0057D9] animate-pulse"></span>
            <span className="text-white font-semibold tracking-widest drop-shadow-sm uppercase text-[10px] sm:text-xs">
             Adshine Pharmaceuticals
            </span>
          </div>
          
          <h1 className="text-[40px] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-5 md:mb-6 drop-shadow-md max-w-5xl mx-auto">
            Healthier Lives Begins With <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-white">Better Medicine</span>
          </h1>
          
          <p className="text-[15px] sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed drop-shadow px-4 md:px-0">
            Clinically proven, GMP-certified formulations trusted by specialists across India.
          </p>
          
          <div>
            <Link href="/products" className="inline-block bg-blue-500 hover:bg-blue-600 transition-colors text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-[15px] md:text-[16px] shadow-lg">
             Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* 
        ========================================
        4 CARDS ROW 
        ========================================
      */}
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-16 md:py-24 bg-white relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Card 1: Gynaecology */}
          <Link href="/products?tab=gynaec" className="relative h-[280px] rounded-[1.5rem] overflow-hidden group block shadow-md">
            <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt="Gynaecology Management" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/95 via-[#0A1931]/40 to-transparent"></div>
            <div className="absolute top-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all group-hover:bg-blue-600 group-hover:border-blue-600 shadow-sm cursor-pointer">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold text-2xl leading-tight mb-1">Gynaec Division</h3>
              <p className="text-white/80 font-medium text-sm leading-snug">Women's health & clinical care</p>
            </div>
          </Link>
          
          {/* Card 2: Orthology */}
          <Link href="/products?tab=ortho" className="relative h-[280px] rounded-[1.5rem] overflow-hidden group block shadow-md">
            <Image src="https://bqzsevmettslsygautrm.supabase.co/storage/v1/object/public/adshine/ortho.avif" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt="Ortho Management" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/95 via-[#0A1931]/40 to-transparent"></div>
            <div className="absolute top-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all group-hover:bg-blue-600 group-hover:border-blue-600 shadow-sm cursor-pointer">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold text-2xl leading-tight mb-1">Ortho Division</h3>
              <p className="text-white/80 font-medium text-sm leading-snug">Bone health & mobility support</p>
            </div>
          </Link>
          
          {/* Card 4: Physician */}
          <Link href="/products?tab=physician" className="relative h-[280px] rounded-[1.5rem] overflow-hidden group block shadow-md">
            <Image src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" alt="Physician Management" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/95 via-[#0A1931]/40 to-transparent"></div>
            <div className="absolute top-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all group-hover:bg-blue-600 group-hover:border-blue-600 shadow-sm cursor-pointer">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold text-2xl leading-tight mb-1">Physician </h3>
              <p className="text-white/80 font-medium text-sm leading-snug">Comprehensive family nutrition</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
