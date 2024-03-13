import PropTypes from 'prop-types';



// Presentació
const Presentacio = () => {
    return (
      <div className="app-section">
        <div id="presentacio-text">
          <h1 className="titol-presentacio">
            Què són els Data Days?
          </h1>
          <p>

          Dels creadors de la Datathon FME, Data Days és una iniciativa innovadora organitzada per 
          l'Associació d'Estudiants de Dades de la UPC (AED), destinada 
          a reunir entusiastes de la Ciència i l'Enginyeria de les Dades 
          en una sèrie de conferències, tallers i activitats molt enriquidors.
          No només pretén ser una oportunitat per aprendre de persones enteses del sector, sinó que també aporta
          una perspectiva global del que suposa una carrera en la Ciència i Enginyeria de Dades.
          <br></br><br></br>
          L'acte tindrà lloc al Campus Nord de la UPC els dies 11 i 12 de maig de 2024. L'horari de l'esdeveniment és el següent.

          <br></br><br></br>
          INSERIR AQUÍ L'HORARI (si no posar missatge que l'horari estarà al web més endavant)
          <br></br><br></br>
          
          Aquest esdeveniment està enfocat a estudiants a molts nivells diferents, des de batxillerat o 
          estudiants de grau fins a estudiants de màster i recent graduats. Hi haurà xerrades i activitats adaptats
          a diferents nivells per tal que tothom pugui participar i formar part de l'experiència!
          
          <br></br><br></br>

          Si tens qualsevol dubte sobre l'esdeveniment, just a sota pots trobar la nostra pàgina de FAQs. Si encara no et resol
          el dubte en qüestió, no dubtis a contactar-nos!

          Ens veiem el proper 11 de maig!
          </p>
        </div>
        
        {/* <div className="container">
          <div className="row align-items-start">
          <div className="quest col-12 col-md-4">Quan?</div>
          <div className="quest col-12 col-md-4">On?</div>
          <div className="quest col-12 col-md-4">Qui?</div>
          </div>
        </div> */}


        <div id="FAQsection">
          <h1 className="titol-presentacio">
            Preguntes més freqüents (FAQs)
          </h1>
          <div class="FAQsection">
            <h3>SOBRE L'ESDEVENIMENT</h3>
            <div class="FAQquestion">
              A quina hora comença l'esdeveniment?
            </div>
            <div class="FAQanswer">
              El check-in estarà obert dissabte a partir de les XX.XXh. 
            </div>
            <div class="FAQquestion">
              On puc menjar?
            </div>
            <div class="FAQanswer">
              Prop del Campus Nord UPC, es troben ..., ....
            </div>
            

          </div>
          <div class="FAQsection">
            <h3>PARTICIPANTS</h3>
            <div class="FAQquestion">
              Puc assistir només a una xerrada?
            </div>
            <div class="FAQanswer">
              Sí, és clar! Pots venir a totes les que vulguis!
            </div>
            <div class="FAQquestion">
              Fins a quin dia tinc per apuntar-me?
            </div>
            <div>
              Les inscripcions romandran obertes fins que s'assoleixi la capacitat esperada.
            </div>
            <div class="FAQquestion">
              Es farà retransmissió on-line? Hi puc assistir on-line?
            </div>
            <div class="FAQanswer">
              Malauradament, Data Days només tindrà lloc de forma presencial, i no és possible assistir-hi de forma
              remota. 
            </div>
            <div class="FAQquestion">
              Què passa si finalment no puc assistir?
            </div>
            <div class="FAQanswer">
              Cinc dies abans de l'esdeveniment, enviarem a totes les persones inscrites un correu electrònic per confirmar assistència. Agrairem que ens ho facis saber aleshores,
              ja que permetrà que algú altre que potencialment s'hagués quedat fora hi pugui assistir.  
            </div>
          </div>
          <div class="FAQsection">
            <h3>VOLUNTARIS</h3>
            <div class="accordion accordion-flush">
              {/* <FAQ
              question="Quines tasques faria com a voluntari/voluntària?"
              answer="..."
              /> */}
            </div>
          </div>
          <div class="FAQsection">
            <h3>EMPRESES</h3>
          </div>
        </div>
      </div>
    )
  };
  
  export default Presentacio;