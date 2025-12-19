"use client";

import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const navLinks = [
  { href: "/#home", label: "HOME" },
  { href: "/la-mia-storia", label: "ABOUT ME" },
  { href: "/#philosophy", label: "PHILOSOPHY" },
  { href: "/#benefits", label: "BENEFICI" },
  { href: "/#lessons", label: "LEZIONI" },
  { href: "/#contact", label: "CONTATTI" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300 ${
          scrolled
            ? "bg-[#F5F1ED]/95 backdrop-blur-sm border-[#3A3A3A]/10 shadow-sm"
            : "bg-transparent"
        }`}
        aria-label="Main navigation">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-20 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A3A3A] sm:h-12 sm:w-12">
              <span
                className={`${playfair.className} text-lg font-semibold text-[#3A3A3A]`}>
                TXS
              </span>
            </div>
            <span className="hidden text-xs tracking-[0.22em] text-[#3A3A3A] sm:inline-block">
              THE XIAO STUDIO
            </span>
          </div>

          <ul className="pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 items-center space-x-6 text-[11px] tracking-[0.14em] text-[#3A3A3A] md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="uppercase transition-colors hover:text-[#8B7355]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="/#contact"
              className="border border-[#3A3A3A] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#3A3A3A] transition-all hover:bg-[#3A3A3A] hover:text-white">
              Join me on the mat
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex h-10 w-10 flex-col items-center justify-center space-y-1.5 md:hidden"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}>
            <span
              className={`block h-0.5 w-6 bg-[#3A3A3A] transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#3A3A3A] transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#3A3A3A] transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}>
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-[#F5F1ED] shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}>
          <div className="flex h-full flex-col px-6 pb-6 pt-20">
            <nav className="flex-1 space-y-1 text-sm font-medium tracking-[0.16em] text-[#3A3A3A]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 uppercase transition-colors hover:bg-[#E8E2DC]">
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 w-full rounded-lg bg-[#3A3A3A] px-4 py-2.5 text-center text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#8B7355]">
              Join me on the mat
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
