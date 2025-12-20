// app/privacy-policy/page.tsx (App Router) oppure pages/privacy-policy.tsx

"use client";

export default function PrivacyPolicyPage() {
  return (
    <main
      id="privacy-policy"
      className="min-h-screen bg-[#F5F1ED] py-12 lg:mt-20 mt-15 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-[0.12em] text-[#3A3A3A] sm:text-3xl uppercase">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-[#3A3A3A]/80">
          La presente informativa è resa ai sensi del Regolamento (UE) 2016/679
          (“GDPR”) e della normativa italiana in materia di protezione dei dati
          personali. Si applica al sito web “The Xiao Studio” e descrive le
          modalità con cui vengono trattati i dati personali degli utenti che lo
          visitano.
        </p>

        {/* 1. TITOLARE DEL TRATTAMENTO */}
        <section className="mt-8 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            1. Titolare del trattamento
          </h2>
          <p>
            Il titolare del trattamento dei dati personali è{" "}
            <strong className="font-semibold text-[#3A3A3A]">Xiao Ye Wu</strong>
            , insegnante di yoga, con sede in Italia. Puoi contattare il
            titolare all’indirizzo email indicato nella sezione contatti del
            sito o tramite WhatsApp.
          </p>
        </section>

        {/* 2. TIPI DI DATI TRATTATI */}
        <section className="mt-8 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            2. Tipi di dati trattati
          </h2>

          <p className="font-semibold text-[#3A3A3A]">
            2.1 Dati di navigazione e log tecnici
          </p>
          <p>
            I sistemi informatici e le procedure software preposte al
            funzionamento di questo sito acquisiscono, nel corso del loro
            normale esercizio, alcuni dati personali la cui trasmissione è
            implicita nell’uso dei protocolli di comunicazione di Internet. Si
            tratta di informazioni che potrebbero includere, a titolo
            esemplificativo, indirizzo IP, tipo di browser, sistema operativo,
            orario della richiesta, pagina di provenienza e altre informazioni
            tecniche relative al dispositivo utilizzato per la navigazione. Tali
            dati sono utilizzati al solo fine di ricavare informazioni
            statistiche anonime sull’uso del sito, controllarne il corretto
            funzionamento e garantire la sicurezza delle infrastrutture.
          </p>

          <p className="font-semibold text-[#3A3A3A]">
            2.2 Dati forniti volontariamente tramite WhatsApp o altri canali
          </p>
          <p>
            Il sito non prevede moduli di contatto diretti. Eventuali dati
            personali (come nome, cognome, numero di telefono o altre
            informazioni che decidi di condividere) vengono forniti
            volontariamente dall’utente quando sceglie di contattare Xiao Ye Wu
            tramite WhatsApp o altri recapiti indicati sul sito. Tali dati
            saranno trattati esclusivamente per rispondere alle richieste
            ricevute e per la gestione di eventuali percorsi o lezioni di yoga
            concordati.
          </p>
        </section>

        {/* 3. FINALITÀ E BASE GIURIDICA */}
        <section className="mt-8 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            3. Finalità del trattamento e base giuridica
          </h2>
          <p>I dati personali sono trattati per le seguenti finalità:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              permettere la navigazione sul sito e garantire la sicurezza delle
              infrastrutture (legittimo interesse del titolare ex art. 6, par.
              1, lett. f GDPR);
            </li>
            <li>
              rispondere alle richieste di informazioni ricevute tramite
              WhatsApp o altri canali di contatto (esecuzione di misure
              precontrattuali o contrattuali richieste dall’interessato, art. 6,
              par. 1, lett. b GDPR);
            </li>
            <li>
              adempiere ad obblighi legali cui è soggetto il titolare, ove
              applicabili (art. 6, par. 1, lett. c GDPR).
            </li>
          </ul>
        </section>

        {/* 4. MODALITÀ DEL TRATTAMENTO */}
        <section className="mt-8 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            4. Modalità del trattamento e conservazione dei dati
          </h2>
          <p>
            I dati personali sono trattati con strumenti informatici e/o
            telematici, adottando misure tecniche e organizzative adeguate a
            garantire la sicurezza e la riservatezza delle informazioni, e sono
            conservati per il tempo strettamente necessario al conseguimento
            delle finalità indicate nella presente informativa, salvo maggiori
            termini previsti da obblighi di legge.
          </p>
        </section>

        {/* 5. COMUNICAZIONE DEI DATI */}
        <section className="mt-8 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            5. Ambito di comunicazione dei dati
          </h2>
          <p>
            I dati personali non sono oggetto di diffusione. Potranno essere
            comunicati a soggetti terzi che forniscono servizi di natura
            tecnica, informatica o organizzativa necessari al funzionamento del
            sito (ad esempio provider di hosting), i quali operano in qualità di
            responsabili del trattamento ai sensi dell’art. 28 GDPR, nonché ad
            autorità pubbliche e organismi competenti, ove ciò sia richiesto
            dalla legge o da un ordine dell’autorità.
          </p>
        </section>

        {/* 6. TRASFERIMENTI EXTRA UE (se non li hai puoi semplificare) */}
        <section className="mt-8 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            6. Trasferimento di dati verso Paesi extra UE
          </h2>
          <p>
            Ove alcuni fornitori di servizi informatici o di comunicazione
            utilizzati dal titolare (ad esempio strumenti di messaggistica o
            servizi di hosting) si trovino al di fuori dello Spazio Economico
            Europeo, il trasferimento dei dati personali avverrà nel rispetto
            degli articoli 44 e seguenti del GDPR, sulla base di decisioni di
            adeguatezza della Commissione europea o di garanzie adeguate (come
            clausole contrattuali standard).
          </p>
        </section>

        {/* 7. DIRITTI DELL'INTERESSATO */}
        <section className="mt-8 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            7. Diritti degli interessati
          </h2>
          <p>In qualità di interessato, hai il diritto di:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              ottenere conferma che sia o meno in corso un trattamento di dati
              personali che ti riguardano e, in tal caso, accedere ai dati
              stessi (diritto di accesso);
            </li>
            <li>
              chiedere la rettifica dei dati inesatti o l’integrazione di quelli
              incompleti (diritto di rettifica);
            </li>
            <li>
              richiedere la cancellazione dei dati nei casi previsti dall’art.
              17 GDPR (diritto all’oblio);
            </li>
            <li>
              ottenere la limitazione del trattamento nei casi previsti
              dall’art. 18 GDPR;
            </li>
            <li>
              opporti in qualsiasi momento al trattamento basato sul legittimo
              interesse (art. 21 GDPR);
            </li>
            <li>
              richiedere la portabilità dei dati, ove applicabile (art. 20
              GDPR).
            </li>
          </ul>
          <p>
            Per esercitare i tuoi diritti puoi contattare il titolare ai
            recapiti indicati sul sito (ad esempio tramite email o WhatsApp).
          </p>
          <p>
            Inoltre, hai il diritto di proporre reclamo all’Autorità Garante per
            la protezione dei dati personali, secondo le modalità indicate sul
            sito{" "}
            <a
              href="https://www.garanteprivacy.it"
              target="_blank"
              rel="noreferrer"
              className="underline">
              www.garanteprivacy.it
            </a>
            .
          </p>
        </section>

        {/* 8. AGGIORNAMENTI */}
        <section className="mt-8 mb-4 space-y-2 text-sm text-[#3A3A3A]/90">
          <h2 className="text-base font-semibold text-[#3A3A3A]">
            8. Aggiornamenti
          </h2>
          <p>
            Il titolare si riserva il diritto di modificare o aggiornare in
            qualsiasi momento la presente Privacy Policy. Le modifiche saranno
            pubblicate su questa pagina. Si invita pertanto l’utente a
            consultarla periodicamente.
          </p>
        </section>
      </div>
    </main>
  );
}
