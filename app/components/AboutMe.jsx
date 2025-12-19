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
    <section className="w-full bg-[#F5F1ED] pt-10 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
      {/* DECORAZIONE DIVISORIA STILE YOGA / NATURA */}
      <div className="mx-auto mb-10 flex max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-center gap-4 text-[#8B7355]">
          <span className="h-px flex-1 bg-[#D9C7B4]" />
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#F3E8DE]">
            {/* cactus minimal */}
            <svg
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#8B7355]"
              aria-hidden="true">
              {/* gambo centrale */}
              <path
                d="M20 7C18.5 7 17.3 8.2 17.3 9.7V24.5C17.3 26 18.5 27.2 20 27.2C21.5 27.2 22.7 26 22.7 24.5V9.7C22.7 8.2 21.5 7 20 7Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* braccio sinistro */}
              <path
                d="M14 13C12.7 13 11.7 14 11.7 15.3V18.8C11.7 20.1 12.7 21.1 14 21.1C15.3 21.1 16.3 20.1 16.3 18.8V15.3C16.3 14 15.3 13 14 13Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.3 16L17.3 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* braccio destro */}
              <path
                d="M26 13C27.3 13 28.3 14 28.3 15.3V19C28.3 20.3 27.3 21.3 26 21.3C24.7 21.3 23.7 20.3 23.7 19V15.3C23.7 14 24.7 13 26 13Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.7 16L22.7 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* base */}
              <path
                d="M14 30H26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 -z-10 rounded-full bg-[#E8C5AD]/50 blur-xl" />
          </div>
          <span className="h-px flex-1 bg-[#D9C7B4]" />
        </div>
      </div>

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
              src="/heroSection.jpeg"
              alt="Xiao in pratica yoga"
              className="relative z-10 h-[260px] w-full object-cover object-center sm:h-[320px] lg:h-[340px]"
            />
          </div>
        </div>

        {/* BLOCCO TESTO */}
        <div className="flex w-full items-center order-1 lg:order-2 lg:w-[48%]">
          <div className="w-full rounded-3xl bg-[#F3E8DE] px-6 py-8 shadow-[0_14px_35px_rgba(0,0,0,0.04)] sm:px-8 sm:py-10 lg:px-10">
            <p className="text-[11px] tracking-[0.22em] text-[#8B7355] uppercase">
              ABOUT YOUR INSTRUCTOR
            </p>

            <h2
              className={`${playfair.className} mt-3 text-2xl text-[#3A3A3A] sm:text-3xl`}>
              Xiao Ye
            </h2>

            <p className="mt-1 text-sm tracking-[0.16em] text-[#8B7355] uppercase">
              Founder of The Xiao Studio
            </p>

            <div className="mt-5 space-y-3 text-md leading-relaxed text-[#3A3A3A]/85">
              <p>
                <strong>Mi chiamo Xiao Ye e sono un’insegnante di yoga.</strong>
                <br />
                Mi chiamo Xiao Ye e sono un’insegnante di yoga. Nata e cresciuta
                a Milano, con origini cinesi, pratico yoga da oltre dieci anni.
                Quello che è iniziato come movimento fisico si è trasformato in
                uno stile di vita che unisce corpo, mente e spirito. <br /> Mi
                sono formata come insegnante con il 200h YTTC a Ubud, Bali e il
                300h YTTC a Rishikesh, India, specializzandomi in Vinyasa,
                Ashtanga e Hatha Yoga. Oggi insegno lezioni private e in piccoli
                gruppi con un approccio flessibile e personalizzato, creando
                pratiche che aiutano a ritrovare equilibrio, forza e
                consapevolezza, dentro e fuori dal tappetino.
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
