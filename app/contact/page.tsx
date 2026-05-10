"use client";

import { Mail, MapPin, Phone, Send, HeartPulse, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">

      {/* ── HERO ── */}
      <section className="relative bg-[#F8FAFC] overflow-hidden pt-32 lg:pt-40 pb-20 lg:pb-32 border-b border-[#E2E8F0]">
        {/* Subtle background gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#E0F2FE]/50 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none opacity-50" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 mb-8 w-fit border border-blue-200 bg-white px-5 py-2.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0057D9] animate-pulse"></span>
            <span className="text-blue-600 font-semibold tracking-widest uppercase text-[11px] lg:text-[12px]">
             Adshine Pharmaceuticals
            </span>
          </div>
          <h1 className="text-[46px] md:text-[64px] lg:text-[80px] font-medium text-[#0A1931] tracking-tight mb-8 leading-[1.05] drop-shadow-sm">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057D9] to-[#0284C7]">Touch.</span>
          </h1>
          <p className="text-[18px] lg:text-[22px] text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Please fill out the form below or reach out to us using the contact information provided.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="bg-white py-12 lg:py-16 mb-12 z-20">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Form Side */}
            <div className="bg-[#F8FAFC] rounded-[1.5rem] p-8 md:p-10 border border-[#E2E8F0] shadow-sm">
              <h2 className="text-[26px] lg:text-[30px] font-bold text-[#0A1931] tracking-tight mb-8">
                Send us a Message
              </h2>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[13px] font-bold text-[#0A1931]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3.5 text-[15px] text-[#0A1931] font-medium focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[13px] font-bold text-[#0A1931]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3.5 text-[15px] text-[#0A1931] font-medium focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[13px] font-bold text-[#0A1931]">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3.5 text-[15px] text-[#0A1931] font-medium focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all outline-none"
                    placeholder="Product Inquiry"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[13px] font-bold text-[#0A1931]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3.5 text-[15px] text-[#0A1931] font-medium focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all outline-none resize-none"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full h-[54px] rounded-xl bg-[#10B981] text-white font-bold text-[16px] transition-all hover:bg-[#059669] disabled:opacity-70 shadow-md flex justify-center items-center"
                  >
                    {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Submit Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Contact Info Side */}
            <div className="py-4 lg:py-8 lg:pl-4">
              <h2 className="text-[26px] lg:text-[30px] font-bold text-[#0A1931] tracking-tight mb-10">
                Get In Touch
              </h2>

              <div className="space-y-8 mb-12">
                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[1rem] bg-emerald-100 text-emerald-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0A1931] mb-1">Corporate Office</h3>
                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                      No. 123, Industrial Area,<br />
                      Mysuru - 570001, Karnataka, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[1rem] bg-sky-100 text-sky-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0A1931] mb-1">Phone Line</h3>
                    <p className="text-[14px] text-slate-500 font-medium">+91 123 456 7890</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[1rem] bg-purple-100 text-purple-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0A1931] mb-1">Email Support</h3>
                    <p className="text-[14px] text-slate-500 font-medium">info@adshinepharma.com</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white h-[54px] rounded-xl font-bold text-[16px] flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
