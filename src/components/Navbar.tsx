"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || solid ? "navbar-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span
            className="text-[1.7rem] font-bold text-white tracking-tight leading-none"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            I DO
          </span>
          <span className="text-gold text-[1.7rem] font-bold leading-none">.</span>
          <span
            className="text-2xl text-white tracking-[0.15em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ENTERTAINMENT
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Services", href: "/#services" },
            { label: "Reviews", href: "/#reviews" },
            { label: "About", href: "/#about" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-white/80 hover:text-gold transition-colors duration-300 tracking-wide uppercase"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-primary bg-gold text-charcoal px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden navbar-glass mt-2 mx-4 rounded-2xl p-6 space-y-4">
          {[
            { label: "Services", href: "/#services" },
            { label: "Reviews", href: "/#reviews" },
            { label: "About", href: "/#about" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-white/80 hover:text-gold transition-colors text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="block btn-primary bg-gold text-charcoal px-6 py-3 rounded-full text-center font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
