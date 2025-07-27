export default function AdviceSection() {
  return (
    <div className="relative h-400 w-full md:h-screen">
      {/* Immagine per desktop */}
      <img
        src="/advicesection.jpg"
        alt="Hero desktop"
        className="w-full h-full object-cover relative z-0"
      />

      <div className="absolute inset-0 bg-black opacity-50 md:opacity-50 z-10"></div>

      {/* SEZIONE HERO TESTO */}
      <div className="absolute inset-0 mt-15 md:mt-0 mx-8 md:top-15 md:left-10 z-40">
        <div>
          <h1 className="text-white text-4xl md:text-7xl">
            Sessioni su misura per <br className="hidden md:block" />
            ogni livello
          </h1>
        </div>
        <div className="max-w-xl md:max-w-2xl mt-7 z-30">
          <p className="text-gray-200 text-base md:text-lg z-20">
            Che tu sia alle prime armi o con anni di pratica alle spalle,
            troverai la lezione adatta a te. Ogni lezione è pensata per guidarti
            passo dopo passo, rispettando i tuoi tempi e le tue esigenze.{" "}
          </p>
        </div>
      </div>
      {/* CONTENITORE CARD */}

      <div className="w-full flex flex-col md:flex md:flex-row justify-center md:px-8 items-center gap-10 absolute bottom-15 z-30">
        {/* CARD 1 */}
        <div className="bg-white w-90 h-65 rounded-xl flex flex-col justify-between items-start  p-4">
          <img
            src="/yoga.svg"
            alt="Logo Yoga"
            className="w-auto mx-auto h-18"
          />
          <div>
            <h1 className="text-3xl md:text-2xl">
              Yoga ovunque, in ogni momento
            </h1>
            <p className="text-base md:text-sm text-gray-800 mt-2">
              Crea il tuo momento di pace, ovunque ti trovi: a casa, al parco o
              in viaggio.
            </p>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="bg-white w-90 h-65 rounded-xl flex flex-col justify-between items-start  p-4">
          <img
            src="/yoga1.svg"
            alt="Logo Yoga"
            className="w-auto mx-auto h-18"
          />
          <div>
            <h1 className="text-3xl md:text-2xl ">
              Pochi Minuti, Grandi Benefici
            </h1>
            <p className="text-base md:text-sm text-gray-800 mt-2">
              Solo 10 minuti possono cambiarti la giornata. Ritrova il tuo
              benessere.
            </p>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="bg-white w-90 h-65 rounded-xl flex flex-col justify-between items-start  p-4">
          <img
            src="/yoga2.svg"
            alt="Logo Yoga"
            className="w-auto mx-auto h-18"
          />
          <div>
            <h1 className="text-3xl md:text-2xl ">
              Forza, Equilibrio e Flessibilità
            </h1>
            <p className="text-base md:text-sm text-gray-800 mt-2">
              Sequenze pensate per potenziare i muscoli e migliorare
              l'elasticità
            </p>
          </div>
        </div>
        {/* CARD 4 */}
        <div className="bg-white w-90 h-65 rounded-xl flex flex-col justify-between items-start  p-4">
          <img
            src="/yoga3.svg"
            alt="Logo Yoga"
            className="w-auto mx-auto h-18"
          />
          <div>
            <h1 className="text-3xl md:text-2xl ">
              Insegnante Esperta con anni di Esperienza
            </h1>
            <p className="text-base md:text-sm text-gray-800 mt-2">
              Lezioni guidate da un'insegnante certificata, con esperienza e
              passione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
