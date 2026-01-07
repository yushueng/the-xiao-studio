"use client";

import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const navLinks = [
  { href: "/#home", label: "HOME" },
  { href: "/la-mia-storia", label: "ABOUT ME" },
  { href: "/#il-tuo-viaggio", label: "IL TUO VIAGGIO" },
  { href: "/#benefici", label: "BENEFICI" },
  { href: "/#contatti", label: "CONTATTAMI" },
];

const whatsappNumber = "3514858688";
const whatsappLink = `https://wa.me/39${whatsappNumber}`;
const instagramLink = "https://www.instagram.com/thexiaostudio/";

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
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-22 lg:px-8">
          {/* LOGO CLICKABLE */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Torna alla home The Xiao Studio">
            <img
              src="/thexiaostudio.png"
              alt="The Xiao Studio"
              className="h-30 w-auto sm:h-40"
            />
          </Link>

          {/* NAV DESKTOP */}
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

          {/* CTA DESKTOP -> WHATSAPP + INSTAGRAM */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              aria-label="The Xiao Studio su Instagram"
              className="p-4 transition-all hover:scale-110 hover:rotate-12">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3A3A3A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="border border-[#3A3A3A] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#3A3A3A] transition-all hover:bg-[#3A3A3A] hover:text-white">
              PARTI DA QUI
            </a>
          </div>

          {/* HAMBURGER */}
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

            {/* CTA MOBILE -> WHATSAPP + INSTAGRAM */}
            <div className="mt-8 space-y-4">
              {/* WHATSAPP BUTTON - CENTRED */}
              <div className="w-full flex justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="w-full max-w-[200px] rounded-lg bg-[#3A3A3A] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#8B7355]">
                  PARTI DA QUI
                </a>
              </div>

              {/* INSTAGRAM */}
              <div className="flex items-center justify-center pt-4 border-t border-[#3A3A3A]/20">
                <span className="text-xs text-[#3A3A3A]/60 tracking-[0.14em] uppercase">
                  Seguimi su
                </span>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  aria-label="The Xiao Studio su Instagram"
                  className="p-3 transition-all hover:scale-110 hover:rotate-12">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3A3A3A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
