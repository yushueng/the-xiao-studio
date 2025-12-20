"use client";

export default function WhatsappInviteSection() {
  const whatsappNumber = "3332858687";
  const whatsappLink = `https://wa.me/39${whatsappNumber}`;

  return (
    <section
      id="contatti"
      className="scroll-mt-25 lg:scroll-mt-35 w-full bg-[#F5F1ED] pb-10 lg:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
        {/* IMMAGINE */}
        <div className="overflow-hidden rounded-3xl bg-[#E8E2DC] lg:flex-1">
          <img
            src="/thexiaostudio3.jpg"
            alt="Practice with The Xiao Studio"
            className="h-120 sm:h-56 lg:h-150 w-full object-cover"
          />
        </div>

        {/* TESTO + BOTTONE WHATSAPP */}
        <div className="flex flex-1 flex-col items-start gap-5">
          <p className="text-[11px] tracking-[0.22em] text-[#8B7355] uppercase">
            Ready to reconnect
          </p>

          <h2 className="text-2xl font-semibold tracking-[0.12em] text-[#3A3A3A] sm:text-3xl md:text-4xl uppercase">
            Pronta a ritrovarti
            <br className="hidden sm:block" /> sul tappetino?
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-[#3A3A3A]/85">
            Se senti che è il momento di rimetterti in movimento, scrivimi
            direttamente su WhatsApp. Insieme troveremo la pratica più adatta a
            te, ai tuoi tempi e alle tue esigenze.
          </p>

          <p className="text-xs uppercase tracking-[0.20em] text-[#8B7355]">
            Un messaggio, un nuovo inizio.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#3A3A3A] px-7 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition-all hover:bg-[#8B7355]">
            Scrivimi su WhatsApp
            <span className="text-sm">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
