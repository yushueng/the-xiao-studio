export default function AdviceSection() {
  return (
    <section
      id="benefici"
      className="scroll-mt-30 lg:scroll-mt-50 w-full bg-[#F5F1ED] lg:py-10 lg:pb-15">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-[11px] tracking-[0.22em] text-[#8B7355] uppercase">
              Sessioni su misura
            </p>
            <h2 className="text-2xl font-semibold tracking-[0.12em] text-[#3A3A3A] sm:text-3xl uppercase">
              Sessioni su misura per ogni livello
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#3A3A3A]/85">
            Che tu sia alle prime armi o con anni di pratica alle spalle,
            troverai la lezione adatta a te. Ogni pratica è pensata per guidarti
            passo dopo passo, rispettando i tuoi tempi, il tuo corpo e le tue
            esigenze.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* CARD 1 */}
          <div className="flex h-[280px] lg:h-[320px] flex-col rounded-2xl bg-[#F3E8DE] p-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-center mb-6 flex-shrink-0">
              <img
                src="/yoga.svg"
                alt="Yoga ovunque, in ogni momento"
                className="h-14 w-16"
              />
            </div>
            <div className="flex-1 flex flex-col justify-end space-y-3">
              <h3 className="text-base font-semibold text-[#3A3A3A]">
                Yoga ovunque, in ogni momento
              </h3>
              <p className="text-sm leading-relaxed text-[#3A3A3A]/85">
                Crea il tuo momento di pace ovunque ti trovi: a casa, al parco o
                in viaggio, con pratiche adattabili al tuo spazio.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex h-[280px] lg:h-[320px] flex-col rounded-2xl bg-[#F3E8DE] p-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-center mb-6 flex-shrink-0">
              <img
                src="/yoga1.svg"
                alt="Pochi minuti, grandi benefici"
                className="h-14 w-auto"
              />
            </div>
            <div className="flex-1 flex flex-col justify-end space-y-3">
              <h3 className="text-base font-semibold text-[#3A3A3A]">
                Pochi minuti, grandi benefici
              </h3>
              <p className="text-sm leading-relaxed text-[#3A3A3A]/85">
                Solo 10 minuti possono cambiare il tuo umore e il tuo livello di
                energia, aiutandoti a ritrovare centratura nel quotidiano.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex h-[280px] lg:h-[320px] flex-col rounded-2xl bg-[#F3E8DE] p-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-center mb-6 flex-shrink-0">
              <img
                src="/yoga2.svg"
                alt="Forza, equilibrio e flessibilità"
                className="h-14 w-auto"
              />
            </div>
            <div className="flex-1 flex flex-col justify-end space-y-3">
              <h3 className="text-base font-semibold text-[#3A3A3A]">
                Forza, equilibrio e flessibilità
              </h3>
              <p className="text-sm leading-relaxed text-[#3A3A3A]/85">
                Sequenze create per potenziare i muscoli, migliorare
                l'elasticità e sostenere postura ed equilibrio nel tempo.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="flex h-[280px] lg:h-[320px] flex-col rounded-2xl bg-[#F3E8DE] p-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-center mb-6 flex-shrink-0">
              <img
                src="/yoga3.svg"
                alt="Insegnante esperta"
                className="h-14 w-auto"
              />
            </div>
            <div className="flex-1 flex flex-col justify-end space-y-3">
              <h3 className="text-base font-semibold text-[#3A3A3A]">
                Insegnante esperta e presente
              </h3>
              <p className="text-sm leading-relaxed text-[#3A3A3A]/85">
                Lezioni guidate da un'insegnante certificata, con esperienza in
                percorsi individuali e piccoli gruppi, sempre attenta alle tue
                esigenze.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
