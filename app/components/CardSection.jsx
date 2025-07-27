export default function CardSection() {
  return (
    <div className="relative w-full h-auto pb-20 overflow-x-hidden ">
      {/* Background con opacità */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-white to-orange-200 opacity-40"></div>

      {/* Contenuto sopra */}
      <div>
        <div className="w-auto pt-15 flex flex-col gap-6 items-center justify-center">
          <p className="text-xl">Cosa Troverai</p>
          <h1 className="relative text-black text-6xl z-10 mx-auto font-semibold text-center">
            Inizia il tuo Viaggio
          </h1>
          <p className="max-w-md md:max-w-2xl text-center p-5 md: text-slate-700 z-30">
            Esplora la nostra vasta gamma di programmi pensati per nutrire corpo
            e mente. <br className="md:hidden" />
            Dalle sessioni di yoga rigeneranti alle pratiche di meditazione
            profonda, fino ai percorsi guidati per ogni livello
          </p>
          <button
            type="button"
            className=" w-40 p-3 rounded-3xl bg-green-900 text-white z-30">
            Vedi i Percorsi
          </button>
        </div>

        {/* CONTENITORE CARD */}
        <div className="flex flex-col items-center md:flex md:flex-row h-auto w-full justify-center relative z-30">
          {/* CARD 1 */}
          <div className="max-w-xs h-100 rounded-xl mt-20 overflow-hidden shadow-lg bg-slate-100 md:my-20">
            {/* Immagine con bordi arrotondati solo sopra */}
            <div className="overflow-hidden rounded-t-lg relative">
              <img
                src="/yoga.jpg"
                alt="Descrizione"
                className="w-full object-cover h-60"
              />
            </div>

            {/* Testo sotto */}
            <div className="p-4">
              <h2 className="text-xl text-black font-semibold mb-2 z-30">
                Yoga
              </h2>
              <p className="text-black text-base">
                Descrizione o contenuto della card che spiega qualcosa di
                interessante.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="max-w-xs h-100 mt-10 rounded-xl overflow-hidden shadow-lg bg-slate-100 md:mx-5 md:mt-30">
            {/* Immagine con bordi arrotondati solo sopra */}
            <div className="overflow-hidden rounded-t-lg relative">
              <img
                src="/meditazione.jpg"
                alt="Descrizione"
                className="w-full object-cover h-60"
              />
            </div>

            {/* Testo sotto */}
            <div className="p-4">
              <h2 className="text-xl text-black font-semibold mb-2 z-30">
                Meditazione
              </h2>
              <p className="text-black text-base">
                Descrizione o contenuto della card che spiega qualcosa di
                interessante.
              </p>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="max-w-xs h-100 mt-10 rounded-xl overflow-hidden shadow-lg bg-slate-100  md:mt-40">
            {/* Immagine con bordi arrotondati solo sopra */}
            <div className="overflow-hidden rounded-t-lg relative">
              <img
                src="/relax.jpg"
                alt="Descrizione"
                className="w-full object-cover h-60"
              />
            </div>

            {/* Testo sotto */}
            <div className="p-4">
              <h2 className="text-xl text-black font-semibold mb-2 z-30">
                Relax
              </h2>
              <p className="text-black text-base">
                Descrizione o contenuto della card che spiega qualcosa di
                interessante.
              </p>
            </div>
          </div>
          {/* CARD 4 */}
          <div className="max-w-xs h-100 mt-10 rounded-xl overflow-hidden shadow-lg bg-slate-100 md:ml-5 md:mt-25">
            {/* Immagine con bordi arrotondati solo sopra */}
            <div className="overflow-hidden rounded-t-lg relative">
              <img
                src="/stretching.jpg"
                alt="Descrizione"
                className="w-full object-cover h-60"
              />
            </div>

            {/* Testo sotto */}
            <div className="p-4">
              <h2 className="text-xl text-black font-semibold mb-2 z-30">
                Stretching e Flessibilità
              </h2>
              <p className="text-black text-base">
                Descrizione o contenuto della card che spiega qualcosa di
                interessante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
