"use client";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function AboutMe() {
  return (
    <section className="w-full bg-[#F5F1ED] ">
      <div
        className="
          mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6
          lg:flex-row lg:items-stretch lg:gap-12 lg:px-8
        ">
        {/* BLOCCO IMMAGINE */}
        <div className="relative flex w-full items-center justify-center order-2 lg:order-1 lg:w-[52%]">
          <div
            className="
              relative w-full max-w-md overflow-hidden rounded-3xl
              bg-[#E8E2DC] shadow-[0_18px_40px_rgba(0,0,0,0.08)]
              sm:max-w-lg lg:max-w-md
            ">
            <div className="pointer-events-none absolute inset-y-0 right-[-25%] hidden w-[60%] rounded-l-[999px] bg-[#F5F1ED] lg:block" />
            <img
              src="/thexiaostudio2.jpg"
              alt="Xiao in pratica yoga"
              className="relative z-10 h-[260px] w-full object-cover object-center sm:h-[320px] lg:h-[340px]"
            />
          </div>
        </div>

        {/* BLOCCO TESTO */}
        <div className="flex w-full items-center order-1 lg:order-2 lg:w-[48%]">
          <div className="w-full rounded-3xl bg-[#F3E8DE] px-6 py-8 shadow-[0_14px_35px_rgba(0,0,0,0.04)] sm:px-8 sm:py-10 lg:px-10">
            <p className="text-[11px] tracking-[0.22em] text-[#8B7355] uppercase">
              LA TUA INSEGNANTE
            </p>

            <h2
              className={`${playfair.className} mt-3 text-2xl text-[#3A3A3A] sm:text-3xl`}>
              Xiao Ye
            </h2>

            <p className="mt-1 text-sm tracking-[0.16em] text-[#8B7355] uppercase">
              FOUNDER
            </p>

            <div className="mt-5 space-y-3 text-md leading-relaxed text-[#3A3A3A]/85">
              <p>
                <strong>Mi chiamo Xiao Ye e sono un’insegnante di yoga.</strong>
                <br />
                Nata e cresciuta a Milano, con origini cinesi, pratico yoga da
                oltre dieci anni. Quello che è iniziato come movimento fisico si
                è trasformato in uno stile di vita che unisce corpo, mente e
                spirito. <br /> Mi sono formata come insegnante con il 200h YTTC
                a Ubud, Bali e il 300h YTTC a Rishikesh, India, specializzandomi
                in Vinyasa, Ashtanga e Hatha Yoga. Oggi insegno lezioni private
                e in piccoli gruppi con un approccio flessibile e
                personalizzato, creando pratiche che aiutano a ritrovare
                equilibrio, forza e consapevolezza, dentro e fuori dal
                tappetino.
              </p>
            </div>

            {/* CTA "SCOPRI DI PIÙ" + TAGS */}
            <div className="mt-6 space-y-4">
              <Link
                href="/la-mia-storia"
                className="inline-flex flex-col text-[11px] font-medium uppercase tracking-[0.16em] text-[#3A3A3A]">
                <span>Scopri di più</span>
                <span className="mt-1 inline-flex h-[1px] w-16 overflow-hidden rounded-full bg-[#3A3A3A]/40">
                  <span className="inline-block h-full w-full origin-left bg-[#3A3A3A] animate-pulse" />
                </span>
              </Link>

              <div className="flex flex-wrap gap-3 text-[11px] text-[#3A3A3A]/80">
                <span className="rounded-full border border-[#D1B9A3] px-3 py-1">
                  Vinyasa • Ashtanga • Hatha • Yin
                </span>
                <span className="rounded-full border border-[#D1B9A3] px-3 py-1">
                  1:1 &amp; piccoli gruppi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
