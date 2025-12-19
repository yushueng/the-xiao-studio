export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D9C7B4] bg-[#F5F1ED]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        {/* blocco logo + testo */}
        <div className="space-y-2 text-sm text-[#3A3A3A]/85">
          <p className="text-[11px] tracking-[0.22em] text-[#8B7355] uppercase">
            The Xiao Studio
          </p>
          <p>
            Uno spazio piccolo ma accogliente, dove praticare yoga, respirare e
            ritrovare equilibrio – online e in presenza.
          </p>
          <p className="text-xs text-[#3A3A3A]/70">
            &copy; {year} The Xiao Studio. Tutti i diritti riservati.
          </p>
        </div>

        {/* blocco link */}
        <div className="flex flex-col gap-6 text-sm text-[#3A3A3A]/85 sm:flex-row sm:items-center sm:gap-10">
          {/* link di navigazione legali */}
          <div className="flex flex-col gap-2 text-xs sm:flex-row sm:gap-4">
            <a
              href="/privacy"
              className="transition-colors hover:text-[#8B7355]">
              Privacy policy
            </a>
            <a href="/terms" className="transition-colors hover:text-[#8B7355]">
              Termini di servizio
            </a>
            <a
              href="mailto:info@thexiaostudio.com"
              className="transition-colors hover:text-[#8B7355]">
              info@thexiaostudio.com
            </a>
          </div>

          {/* social */}
          <div className="flex items-center gap-4 text-xs tracking-[0.16em] uppercase text-[#3A3A3A]">
            <span className="text-[11px] text-[#8B7355]">Seguimi</span>
            <a
              href="https://www.instagram.com/thexiaostudio"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#D1B9A3] px-3 py-1 transition-colors hover:bg-[#3A3A3A] hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
