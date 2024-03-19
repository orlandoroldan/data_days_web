const Presentacio = () => {
  return (
    <div id="FAQsection">
      <h1 className="titol-presentacio">
        Preguntes més freqüents (FAQs)
      </h1>
      <div className="FAQsection">
        <h3>SOBRE L&apos;ESDEVENIMENT</h3>
        <div className="FAQquestion">
          A quina hora comença l&apos;esdeveniment?
        </div>
        <div className="FAQanswer">
          El check-in estarà obert dissabte a partir de les XX.XXh.
        </div>
        <div className="FAQquestion">
          On puc menjar?
        </div>
        <div className="FAQanswer">
          Prop del Campus Nord UPC, es troben ..., ....
        </div>


      </div>
      <div className="FAQsection">
        <h3>PARTICIPANTS</h3>
        <div className="FAQquestion">
          Puc assistir només a una xerrada?
        </div>
        <div className="FAQanswer">
          Sí, és clar! Pots venir a totes les que vulguis!
        </div>
        <div className="FAQquestion">
          Fins a quin dia tinc per apuntar-me?
        </div>
        <div>
          Les inscripcions romandran obertes fins que s&apos;assoleixi la capacitat esperada.
        </div>
        <div className="FAQquestion">
          Es farà retransmissió on-line? Hi puc assistir on-line?
        </div>
        <div className="FAQanswer">
          Malauradament, Data Days només tindrà lloc de forma presencial, i no és possible assistir-hi de forma
          remota.
        </div>
        <div className="FAQquestion">
          Què passa si finalment no puc assistir?
        </div>
        <div className="FAQanswer">
          Cinc dies abans de l&apos;esdeveniment, enviarem a totes les persones inscrites un correu electrònic per confirmar assistència. Agrairem que ens ho facis saber aleshores,
          ja que permetrà que algú altre que potencialment s&apos;hagués quedat fora hi pugui assistir.
        </div>
      </div>
      <div className="FAQsection">
        <h3>VOLUNTARIS</h3>
        <div className="accordion accordion-flush">
          {/* <FAQ
              question="Quines tasques faria com a voluntari/voluntària?"
              answer="..."
              /> */}
        </div>
      </div>
      <div className="FAQsection">
        <h3>EMPRESES</h3>
      </div>
    </div>
  );
};

export default Presentacio;