"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Hero() {
  return (
    <div className="relative w-full bg-[#F5F1ED] text-[#3A3A3A] lg:pt-10">
      {/* HERO */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
        <section
          id="home"
          className="scroll-mt-44 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs tracking-[0.22em] text-[#8B7355] uppercase">
              ONLINE &amp; IN-PERSON YOGA STUDIO
            </p>
            <h1
              className={`${playfair.className} text-4xl leading-[1.02] text-[#3A3A3A] sm:text-5xl md:text-6xl`}>
              THE XIAO
              <br />
              STUDIO
            </h1>
            <p className="text-xs tracking-[0.2em] text-[#8B7355] uppercase">
              BY XIAO YE
            </p>

            <div className="space-y-4 text-md leading-relaxed text-[#3A3A3A]/85">
              <p className="leading-relaxed">
                <strong>
                  Regalati un momento per respirare, muoverti e ritrovarti.
                </strong>
                <br />
                Questo spazio yoga è il tuo rifugio, un invito a rallentare,
                ascoltare il corpo e ritrovare equilibrio, dentro e fuori dal
                tappetino.
                <br />
                Attraverso pratiche dinamiche e consapevoli, esplorerai
                movimenti fluidi che rafforzano il corpo, aumentano la
                flessibilità e nutrono il benessere.
                <br />
                Unisciti a me sul tappetino per approfondire la tua pratica e
                sentirti finalmente a casa.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#lessons"
                className="flex items-center gap-2 border border-[#3A3A3A] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#3A3A3A] transition-all hover:-translate-y-0.5 hover:bg-[#3A3A3A] hover:text-white">
                <span>Inizia qui</span>
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#3A3A3A] underline underline-offset-4">
                Conosci la tua insegnante
              </a>
            </div>
          </div>

          {/* Immagine hero */}
          <div className="relative flex justify-end">
            <div className="relative h-72 w-full max-w-xl overflow-hidden rounded-tl-[80px] rounded-br-[80px] bg-[#E8E2DC] shadow-[0_18px_40px_rgba(0,0,0,0.10)] sm:h-80 md:h-96">
              <img
                src="/heroSection.jpeg"
                alt="Yoga practice"
                className="h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F5F1ED]/25 via-transparent to-transparent" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
