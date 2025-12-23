"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function LaMiaStoriaPage() {
  return (
    <main className="min-h-screen bg-[#F5F1ED] px-4 py-16 sm:px-6 lg:px-8 lg:pt-30 pt-20">
      <section className="mx-auto flex max-w-5xl flex-col gap-12 lg:gap-16">
        {/* HEADER */}
        <header className="space-y-4 text-center">
          <p className="text-[11px] tracking-[0.22em] text-[#8B7355] uppercase">
            About me
          </p>
          <h1
            className={`${playfair.className} text-3xl text-[#3A3A3A] sm:text-4xl`}>
            La mia storia nello yoga
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#3A3A3A]/80">
            Un percorso iniziato come semplice movimento fisico e diventato,
            passo dopo passo, uno stile di vita che unisce mente, corpo e
            spirito.
          </p>
        </header>

        {/* ABOUT ME + FOTO */}
        <section className="grid gap-8 rounded-3xl bg-[#F3E8DE] p-6 shadow-[0_14px_35px_rgba(0,0,0,0.04)] sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:p-10">
          {/* TESTO CHI SONO - SEMPRE PRIMO */}
          <div className="space-y-4 text-sm leading-relaxed text-[#3A3A3A]/90 lg:order-1">
            <div className="order-1 lg:order-2 relative overflow-hidden rounded-2xl bg-white/60">
              <div className="block lg:hidden relative aspect-[4/5] w-full">
                <Image
                  src="/XiaoYeWu.jpg"
                  alt="Xiao Ye Wu - Insegnante di yoga"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-[11px] tracking-[0.22em] text-[#8B7355] uppercase">
              Chi sono
            </p>

            <p>
              Buongiorno, mi chiamo Xiao Ye e sono un&apos;insegnante di yoga.
              Sono una ragazza di origini cinesi, nata e cresciuta a Milano,
              Italia.
            </p>
            <p>
              Pratico yoga da circa dieci anni. Ho iniziato la mia pratica come
              puro esercizio fisico, inizialmente per la flessibilità. Con il
              passare del tempo mi sono immersa sempre di più in questo mondo e
              mi sono innamorata di uno stile di vita che collega mente, corpo e
              spirito.
            </p>
            <p>
              Sono sempre stata una persona attiva e curiosa, cresciuta in mezzo
              a fratelli e cugini e pronta a provare ogni tipo di attività
              fisica. Nel 2023 ho deciso di fare un viaggio lontano da casa: un
              viaggio lungo e profondo che ha cambiato la mia vita.
            </p>
          </div>

          {/* FOTO PROFILO - SECONDA SU DESKTOP, PRIMA SU MOBILE */}
          <div className="order-1 lg:order-2 relative overflow-hidden rounded-2xl bg-white/60">
            <div className="hidden lg:block relative aspect-[4/5] w-full">
              <Image
                src="/XiaoYeWu.jpg"
                alt="Xiao Ye Wu - Insegnante di yoga"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* LA MIA STORIA + APPROCCIO */}
        <section className="grid gap-8 rounded-3xl bg-white/60 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.04)] sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:p-10">
          <div className="space-y-4 text-sm leading-relaxed text-[#3A3A3A]/90">
            <p className="text-[11px] tracking-[0.22em] text-[#8B7355] uppercase">
              La mia storia
            </p>
            <p>
              Mi sono avvicinata allo yoga nel 2015, tramite video online e
              YouTube. Ho iniziato a praticare per migliorare la flessibilità,
              ma ben presto è diventato molto di più.
            </p>
            <p>
              La pratica e le community incontrate durante i miei viaggi hanno
              cambiato la mia vita e il modo in cui guardo il mondo. Oggi
              desidero condividere questa passione e le conoscenze che ho
              raccolto con chi è curiosa di conoscersi più a fondo.
            </p>
            <p>
              Insegnare yoga continua ad arricchirmi: imparo dalle esperienze
              delle mie studentesse e dalle persone con cui mi connetto ogni
              giorno. Lo yoga è diventato il mio lifestyle, dal modo in cui vivo
              la quotidianità a come affronto problemi, relazioni e scelte.
            </p>
            <p>
              Le esperienze che ho fatto mi hanno permesso di costruire fiducia
              in me stessa, dentro e fuori dal tappetino, e di vedere la pratica
              come un alleato costante nel percorso di crescita personale.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl bg-[#F3E8DE] p-5 text-sm leading-relaxed text-[#3A3A3A]/90">
            <p className="text-[11px] tracking-[0.22em] text-[#8B7355] uppercase">
              Il mio approccio
            </p>
            <p className="text-sm leading-relaxed text-[#3A3A3A]/90">
              Il mio approccio è flessibile e personalizzato, studiato in base
              alle singole esigenze. Credo che la pratica debba adattarsi alla
              persona, non il contrario.
            </p>
            <ul className="space-y-2 text-sm text-[#3A3A3A]/90">
              <li>• Percorsi personalizzati costruiti su obiettivi reali.</li>
              <li>• Se vuoi sentirti più forte e lavorare sui muscoli.</li>
              <li>• Se vuoi migliorare la flessibilità e la mobilità.</li>
              <li>• Se vuoi vivere con più serenità e presenza.</li>
              <li>• Se senti il bisogno di rilasciare tensione e stress.</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed text-[#3A3A3A]/90">
              L&apos;intenzione è offrirti una pratica che tu possa sentire
              davvero tua, uno spazio dove ritrovarti ogni volta che sali sul
              tappetino.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
