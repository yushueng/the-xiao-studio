"use client";
import AnimatedText from "./AnimatedText";
import AnimatedCounter from "./AnimatedCounter";
import { useState, useEffect } from "react";

export default function NavbarHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen">
        {/* Immagine per desktop */}
        <img
          src="/hero2.jpg"
          alt="Hero desktop"
          className="hidden md:block w-full h-full object-cover relative"
        />
        {/* Immagine per mobile */}
        <img
          src="/mobilehero.jpg"
          alt="Hero mobile"
          className="block md:hidden w-full h-full object-cover relative"
        />
        <div className="absolute inset-0 bg-black opacity-45 md:opacity-40 z-10"></div>

        {/* NAVBAR */}
        <nav
          className={`fixed top-0 left-0 w-full flex justify-between px-10 md:px-20 py-10 z-60 h-20 items-center transition-colors duration-300 ${
            scrolled ? "bg-black bg-opacity-90" : "bg-transparent"
          }`}>
          <ul className="hidden md:flex space-x-6 items-center ">
            <li>
              <a
                href="#"
                className="text-white text-lg hover:underline hover:text-slate-300">
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg hover:underline hover:text-slate-300">
                CORSI
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-white text-lg hover:underline hover:text-slate-300">
                ABOUT ME
              </a>
            </li>
          </ul>

          {/* BOTTONE HAMBURGER */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu">
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
          </button>

          {/* LOGO */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none z-50">
            <img src="thexiaostudio.png" alt="logo" className="h-35 w-auto" />
          </div>
          <div className="hidden md:flex items-center text-black bg-white rounded-4xl px-7 py-1 hover:bg-yellow-200 hover:text-black cursor-pointer">
            <span>Contattami</span>
          </div>
        </nav>

        {menuOpen && (
          <>
            {/* Overlay per chiudere cliccando fuori */}
            <div
              className="fixed inset-0 bg-black opacity-50 z-30"
              onClick={() => setMenuOpen(false)}></div>

            {/* Menu slide-in */}
            <div className="fixed top-0 left-0 h-full bg-white opacity-95 z-40 flex flex-col items-center space-y-6 py-6 text-white w-96 transform transition-transform duration-300 ease-in-out translate-x-0">
              {/* Bottone chiudi */}
              <button
                className="self-end mr-4 mb-4 text-black text-3xl font-bold"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu">
                ×
              </button>

              <a
                href="#"
                className="text-black text-lg hover:underline"
                onClick={() => setMenuOpen(false)}>
                HOME
              </a>
              <a
                href="#"
                className="text-black text-lg hover:underline"
                onClick={() => setMenuOpen(false)}>
                CORSI
              </a>
              <a
                href="#"
                className=" text-black text-lg hover:underline"
                onClick={() => setMenuOpen(false)}>
                ABOUT ME
              </a>
              <div
                className="text-black bg-slate-300 rounded-4xl px-7 py-1 hover:bg-yellow-200 hover:text-black cursor-pointer"
                onClick={() => setMenuOpen(false)}>
                CONTATTAMI
              </div>
            </div>
          </>
        )}

        {/* HEADER DELLA HERO SECTION */}
        <header className="absolute inset-0 top-[180px] left-5 md:left-20 z-20">
          <h1 className="flex items-center">
            <AnimatedText
              text="Cerca la"
              className="text-white text-5xl md:mr-3 md:text-6xl"
            />
            <AnimatedText isLine={true} className="mr-4" />
            <AnimatedText
              text="Pace"
              className="text-white text-5xl md:text-6xl"
            />
          </h1>
          <AnimatedText
            text="Una posizione alla volta"
            className="text-white text-5xl md:text-6xl"
          />
          <div className="max-w-lg mt-5 ">
            <p className="text-slate-200 text-lg leading-relaxed pr-3 mt-7 md:mt-0">
              Scopri il tuo equilibrio interiore con il nostro spazio dedicato
              allo yoga. Unisciti a noi e inizia il tuo viaggio verso pace,
              forza e armonia.
            </p>
          </div>
          <div className=" flex justify-center w-40 text-black bg-white rounded-4xl mt-20 py-3 md:mt-10 hover:bg-yellow-200 hover:text-black transition-all duration-300 ease-in-out hover:scale-105 active:scale-120 active:shadow-inner cursor-pointer">
            SCOPRI DI PIÙ{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </header>

        {/* SEZIONE DATI HERO SECTION */}
        <div className=" w-full absolute bottom-20 left-1/2 transform -translate-x-1/2 md:left-20 md:transform-none md:-translate-x-0 z-30">
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col justify-center items-center border-r border-white pr-5 md:pr-10">
              <AnimatedCounter targetNumber={35} />
              <span className="text-slate-300 text-sm">Studenti</span>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-white pr-5 pl-5 md:pr-10 md:pl-10">
              <AnimatedCounter targetNumber={500} suffix="+" />
              <span className="text-slate-300 text-sm">Ore di Yoga</span>
            </div>
            <div className="flex flex-col justify-center items-center pl-5 md:pl-10">
              <AnimatedCounter targetNumber={95} suffix="%" />
              <span className="text-slate-300 text-sm">
                Studenti Soddisfatti
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
