// app/cookie-policy/page.tsx

"use client";

export default function CookiePolicyPage() {
  return (
    <main
      id="cookie-policy"
      className="min-h-screen bg-[#F5F1ED] lg:mt-20 mt-15 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-[0.12em] text-[#3A3A3A] sm:text-3xl uppercase">
          Cookie Policy
        </h1>

        <p className="mt-4 text-sm text-[#3A3A3A]/80">
          La presente informativa descrive l’utilizzo dei cookie effettuato dal
          sito “The Xiao Studio” in conformità alla normativa italiana ed
          europea in materia di protezione dei dati personali (Direttiva
          ePrivacy, GDPR e provvedimenti del Garante per la protezione dei dati
          personali).
        </p>

        {/* 1. COSA SONO I COOKIE */}
        <section className="mt-8 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            1. Cosa sono i cookie
          </h2>
          <p>
            I cookie sono piccoli file di testo che i siti web visitati inviano
            al dispositivo dell’utente (computer, smartphone, tablet), dove
            vengono memorizzati per essere poi ritrasmessi agli stessi siti in
            occasione di visite successive. I cookie permettono al sito di
            funzionare correttamente e di raccogliere informazioni sul modo in
            cui l’utente interagisce con le pagine.
          </p>
        </section>

        {/* 2. TIPI DI COOKIE UTILIZZATI */}
        <section className="mt-8 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            2. Tipi di cookie utilizzati da questo sito
          </h2>

          <p className="font-semibold text-[#3A3A3A]">
            2.1 Cookie tecnici necessari
          </p>
          <p>
            Questo sito utilizza solo cookie tecnici strettamente necessari al
            funzionamento delle pagine e alla corretta erogazione del servizio
            (ad esempio cookie collegati alla sicurezza, al bilanciamento del
            carico o alla memorizzazione di semplici preferenze tecniche). Tali
            cookie non richiedono il consenso preventivo dell’utente e sono
            installati automaticamente al momento dell’accesso al sito.
          </p>

          <p className="font-semibold text-[#3A3A3A]">
            2.2 Cookie di profilazione e di terze parti
          </p>
          <p>
            Attualmente questo sito{" "}
            <strong className="font-semibold text-[#3A3A3A]">
              non utilizza cookie di profilazione
            </strong>{" "}
            finalizzati a tracciare il comportamento dell’utente per finalità di
            marketing, né installa direttamente cookie di terze parti per fini
            pubblicitari. Qualora in futuro venissero utilizzati cookie di
            questo tipo, l’utente ne sarà informato tramite apposito banner e
            gli verrà richiesto il consenso preventivo, secondo quanto previsto
            dalla normativa vigente.
          </p>
        </section>

        {/* 3. GESTIONE DEI COOKIE DAL BROWSER */}
        <section className="mt-8 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            3. Come gestire o disabilitare i cookie tramite browser
          </h2>
          <p>
            L’utente può gestire le preferenze relative ai cookie direttamente
            all’interno del proprio browser, ad esempio impedendo a terze parti
            di installarne o cancellando i cookie già installati. La
            disabilitazione di tutti i cookie potrebbe compromettere il corretto
            funzionamento di alcune sezioni del sito.
          </p>
          <p>
            Di seguito alcuni link alle pagine di gestione dei cookie dei
            browser più comuni:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              Chrome:{" "}
              <a
                href="https://support.google.com/chrome/answer/95647?hl=it"
                target="_blank"
                rel="noreferrer"
                className="underline">
                support.google.com/chrome/answer/95647
              </a>
            </li>
            <li>
              Firefox:{" "}
              <a
                href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie"
                target="_blank"
                rel="noreferrer"
                className="underline">
                support.mozilla.org
              </a>
            </li>
            <li>
              Safari:{" "}
              <a
                href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noreferrer"
                className="underline">
                support.apple.com
              </a>
            </li>
            <li>
              Edge:{" "}
              <a
                href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noreferrer"
                className="underline">
                support.microsoft.com
              </a>
            </li>
          </ul>
        </section>

        {/* 4. RAPPORTO CON LA PRIVACY POLICY */}
        <section className="mt-8 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            4. Rapporti con la Privacy Policy
          </h2>
          <p>
            Per ulteriori informazioni sul trattamento dei dati personali
            effettuato dal sito “The Xiao Studio” (compresi i diritti degli
            interessati, il titolare del trattamento e le modalità di contatto),
            si invita a consultare la{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* 5. AGGIORNAMENTI */}
        <section className="mt-8 mb-4 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            5. Aggiornamenti della presente Cookie Policy
          </h2>
          <p>
            Il titolare si riserva il diritto di modificare o aggiornare in
            qualsiasi momento la presente Cookie Policy. Le eventuali modifiche
            saranno pubblicate su questa pagina; si invita pertanto l’utente a
            consultarla periodicamente.
          </p>
        </section>
      </div>
    </main>
  );
}
