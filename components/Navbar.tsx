"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    if (isHome) {
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true); // non-home pages always look scrolled (solid)
    }
  }, [isHome]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "https://wa.me/919876543210", isExternal: true },
    { name: "Contact", href: "/contact" },
  ];

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${
          isTransparent 
            ? "bg-transparent border-transparent" 
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-2">
            <div className="flex flex-col items-center gap-0.5">
              <div className="relative overflow-hidden flex items-center h-16 sm:h-20">
                <img
                  src="/logo%20adshine.jpeg"
                  alt="Adshine Pharmaceuticals Logo"
                  className="h-full w-auto object-contain py-1"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-1.5 text-[14px] font-medium transition-colors px-3 py-1.5 rounded-md ${
                    pathname === link.href 
                      ? (isTransparent ? 'border border-white text-white' : 'border border-[#0057D9] text-[#0057D9]')
                      : isTransparent 
                        ? 'text-white/80 hover:text-white border border-transparent' 
                        : 'text-gray-500 hover:text-[#0A1931] border border-transparent'
                  }`}
                >
                  {link.name}
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-64 p-2 bg-white border border-gray-100 rounded-2xl shadow-2xl">
                      <div className="flex flex-col gap-1">
                        <Link href="/products?tab=gynaec" className="px-4 py-3 text-sm text-gray-700 hover:text-[#0057D9] hover:bg-blue-50/50 rounded-xl transition-colors font-medium">
                          Gynaec Management
                        </Link>
                        <Link href="/products?tab=ortho" className="px-4 py-3 text-sm text-gray-700 hover:text-[#0057D9] hover:bg-blue-50/50 rounded-xl transition-colors font-medium">
                          Ortho Management
                        </Link>
                        <Link href="/products?tab=physician" className="px-4 py-3 text-sm text-gray-700 hover:text-[#0057D9] hover:bg-blue-50/50 rounded-xl transition-colors font-medium">
                          Physician Management
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth/CTA Buttons */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <Link 
              href="mailto:adshinepharamaceutical@gmail.com" 
              className={`group flex items-center gap-2 h-[44px] px-6 rounded-full font-semibold transition-all duration-300 ${
                isTransparent 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Quick Enquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* spacer missing for home intentionally to allow bleeding behind navbar */}
      {!isHome && <div className="h-20" />}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-y-auto">
          <div className="flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className={`flex items-center justify-between px-4 py-4 text-lg font-semibold rounded-2xl transition-colors ${
                  pathname === link.href
                    ? 'text-[#0057D9] bg-blue-50 border border-[#0057D9]'
                    : 'text-gray-800 hover:text-[#0057D9] hover:bg-blue-50 border border-transparent'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-5 h-5 text-gray-400" />}
              </Link>
            ))}
            <div className="flex flex-col mt-8">
              <Link 
                href="mailto:adshinepharamaceutical@gmail.com" 
                className="flex items-center justify-center w-full h-14 rounded-full bg-[#B80004] text-white font-bold text-lg hover:bg-[#0047B3] transition-colors shadow-xl shadow-red-500/20"
              >
                Quick Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
