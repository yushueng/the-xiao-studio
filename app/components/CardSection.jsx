export default function CardSection() {
  return (
    <section
      id="il-tuo-viaggio"
      className="scroll-mt-30 lg:scroll-mt-30 relative w-full overflow-x-hidden bg-[#F5F0EC] pb-4 lg:pb-10 ">
      {/* sfondo morbido */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F5F0EC]/40 via-[#F5F1ED] to-[#D9C7B4]/10" />

      {/* contenuto */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[13px] tracking-[0.22em] text-[#8B7355] uppercase">
            Cosa troverai
          </p>
          <h2 className="text-2xl font-semibold tracking-[0.12em] text-[#3A3A3A] sm:text-3xl uppercase">
            Inizia il tuo viaggio
          </h2>
          <p className="max-w-2xl text-md leading-relaxed text-[#3A3A3A]/80">
            Una selezione di percorsi pensati per accompagnarti nel movimento,
            nel respiro e nel rilassamento, qualunque sia il tuo punto di
            partenza.
          </p>
        </div>

        {/* CONTENITORE CARD */}
        <div className="relative z-10 flex w-full flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-center">
          {/* CARD 1 */}
          <div className="mt-12 h-full max-w-xs rounded-2xl bg-[#F3E8DE] shadow-[0_14px_35px_rgba(0,0,0,0.06)] md:my-20 lg:w-220">
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src="/yoga.jpg"
                alt="Pratica di yoga dinamico"
                className="h-60 w-full object-cover"
              />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="text-lg font-semibold text-[#3A3A3A]">Yoga</h3>
              <p className="text-sm leading-relaxed text-[#3A3A3A]/85">
                Flussi Vinyasa e pratiche ispirate ad Ashtanga e Hatha per
                lavorare su forza, equilibrio e consapevolezza del respiro.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="mt-8 h-full max-w-xs rounded-2xl bg-[#F3E8DE] shadow-[0_14px_35px_rgba(0,0,0,0.06)] md:mx-5 md:mt-28 lg:w-220">
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src="/meditazione.jpg"
                alt="Meditazione guidata"
                className="h-60 w-full object-cover"
              />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="text-lg font-semibold text-[#3A3A3A]">
                Meditazione &amp; Pranayama
              </h3>
              <p className="text-sm leading-relaxed text-[#3A3A3A]/85">
                Sessioni guidate per rallentare, osservare i pensieri e trovare
                uno spazio di calma nella tua routine quotidiana.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="mt-8 h-full max-w-xs rounded-2xl bg-[#F3E8DE] shadow-[0_14px_35px_rgba(0,0,0,0.06)] md:mt-40 lg:w-220">
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src="/relax.jpg"
                alt="Momento di rilassamento"
                className="h-60 w-full object-cover"
              />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="text-lg font-semibold text-[#3A3A3A]">
                Pilates Matwork
              </h3>
              <p className="text-sm leading-relaxed text-[#3A3A3A]/85">
                Pratiche dolci, Yin e rilassamento guidato per sciogliere
                tensioni, ritrovare leggerezza e riposare davvero.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="mt-8 h-full max-w-xs rounded-2xl bg-[#F3E8DE] shadow-[0_14px_35px_rgba(0,0,0,0.06)] md:ml-5 md:mt-32 lg:w-220">
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src="/stretching.jpg"
                alt="Allungamento e mobilità"
                className="h-60 w-full object-cover"
              />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="text-lg font-semibold text-[#3A3A3A]">
                Stretching &amp; flessibilità
              </h3>
              <p className="text-sm leading-relaxed text-[#3A3A3A]/85">
                Sequenze mirate per migliorare mobilità e postura, creare spazio
                nel corpo e sostenere le tue attività quotidiane.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
