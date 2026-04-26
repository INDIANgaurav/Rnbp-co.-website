"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#c9a84c]/20 ${
        scrolled ? "bg-[#e8dcc8] shadow-sm py-3" : "bg-[#e8dcc8] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-[#c9a84c] font-bold text-xl tracking-widest">
              R N B P & Co.
            </span>
            <span className="text-[#0a1628]/60 text-xs tracking-wider font-sans">
              Chartered Accountants
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-300 ease-in-out text-sm tracking-wide font-sans font-medium relative ${
                  isActive(link.href)
                    ? "text-[#c9a84c] font-bold"
                    : "text-[#0a1628]/70 hover:text-[#c9a84c]"
                }`}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c9a84c] transition-all duration-300 ease-in-out ${
                    isActive(link.href) ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0a1628]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#0a1628]/10 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-300 ease-in-out font-sans text-sm ${
                    isActive(link.href)
                      ? "text-[#c9a84c] font-bold"
                      : "text-[#0a1628]/70 hover:text-[#c9a84c]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
