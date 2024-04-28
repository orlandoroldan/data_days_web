import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className="app-section">
      <div id="FAQsection">
        <h2 className="titol-presentacio">
          Preguntes freqüents
        </h2>
        <div className="FAQsection">
          <h3>SOBRE L&apos;ESDEVENIMENT</h3>
          <div className='separator'>s</div>

          <div className="FAQquestion">
            A quina hora comença i acaba l&apos;esdeveniment?
          </div>
          <div className="FAQanswer">
            Dissabte, Data Days comença a les 10h i acaba a les 22h. Diumenge, comença a les 11.30h i acaba a les 19.30h.
          </div>
          <div className="FAQquestion">
            A quina hora és cada activitat?
          </div>
          <div className="FAQanswer">
            Pots consultar-ho a l&apos;apartat <Link to="/agenda">Agenda</Link> de la nostra web.
          </div>
          <div classname="FAQquestion">
            Quant dura cada conferència?
          </div>
          <div classname="FAQanswer">
            Cada conferència té una durada d'aproximadament una hora.
          </div>
          <div className="FAQquestion">
            Com puc venir a les diverses activitats?
          </div>
          <div className="FAQanswer">
            No cal reservar plaça, n&apos;hi ha prou amb estar inscrit a l&apos;esdeveniment. Les places s&apos;adjudicaran per ordre d&apos;arribada.
          </div>
          <div className="FAQquestion">
            Com m&apos;apunto a l&apos;esdeveniment?
          </div>
          <div className="FAQanswer">
            Pots apuntar-te a través del següent <a href="https://form.typeform.com/to/jvZTlP41" target="_blank" rel="noreferrer">formulari</a>. Tothom és benvingut, tant si ets estudiant com si no!
          </div>
          <div className="FAQquestion">
            Quin és el preu de l&apos;entrada?
          </div>
          <div className="FAQanswer">
            L&apos;entrada és completament gratuïta!
          </div>
          <div className="FAQquestion">
            Com puc arribar-hi?
          </div>
          <div className="FAQanswer">
            El transport públic és la millor opció per arribar al Campus Nord. Us deixem un <a href="https://maps.app.goo.gl/Ns7BG6ma1fzjLbbUA" target="_blank" rel="noreferrer">enllaç</a> amb la ubicació exacta.
          </div>
          <div className="FAQquestion">
            On puc menjar?
          </div>
          <div className="FAQanswer">
            Pots dur-te menjar de casa. El Campus Nord disposa de taules de pícnic, zona de gespa i multitud de bancs.
            També hi ha diversos locals de restauració a menys de 5 minuts del campus!
          </div>
        </div>
        <div className="FAQsection">
          <h3>PARTICIPANTS</h3>
          <div className='separator'>a</div>

          <div className="FAQquestion">
            Puc assistir només a una xerrada?
          </div>
          <div className="FAQanswer">
            Sí, és clar! Pots venir a totes les que vulguis!
          </div>
          <div className="FAQquestion">
            Fins a quin dia tinc per apuntar-me?
          </div>
          <div className='FAQanswer'>
            Les inscripcions romandran obertes fins que s&apos;assoleixi la capacitat esperada.
          </div>
          <div className="FAQquestion">
            Puc assistir-hi en línea?
          </div>
          <div className="FAQanswer">
            Malauradament, Data Days només tindrà lloc de forma presencial, i no és possible assistir-hi de forma
            remota.
          </div>
          <div className="FAQquestion">
            Què passa si finalment no puc assistir?
          </div>
          <div className="FAQanswer">
            Uns dies abans de l&apos;esdeveniment, enviarem a totes les persones inscrites un correu electrònic per confirmar assistència. Agrairem que ens ho facis saber aleshores,
            ja que permetrà que algú altre que potencialment s&apos;hagués quedat fora hi pugui assistir. També ens pots enviar un correu a <a href="mailto:hola@aed.cat">hola@aed.cat</a>.
          </div>
          <div className="FAQquestion">
            Hi haurà connexió a internet?
          </div>
          <div className="FAQanswer">
            Sí, us proporcionarem Wi-Fi gratuït!
          </div>
          <div className='FAQquestion'>
            No tinc gaire coneixement sobre el món de les dades. Em recomaneu venir?
          </div>
          <div className='FAQanswer'>
            És clar que sí! Els Data Days estan oberts a tothom. Farem xerrades i tallers de diversos nivells. Si no tens gaire coneixença sobre el món de les dades, pots optar per assistir als esdeveniments oberts a tothom (OpenToAll) o, fins i tot, a algun de més avançat (Advanced).
          </div>
          <div className='FAQquestion'>Tinc més dubtes, com els resolc?</div>
          <div className='FAQanswer'>Si tens encara més dubtes, pots contactar amb nosaltres a <a href="mailto:hola@aed.cat">hola@aed.cat</a>!</div>
        </div>


        <div className="FAQsection">
          <h3>VOLUNTARIS</h3>
          <div className='separator'>a</div>

          <div className="FAQquestion">
            Com puc apuntar-me com a persona voluntària?
          </div>
          <div className="FAQanswer">
            Si tens interès a donar un cop de mà i venir com a persona voluntària, contacta amb nosaltres a <a href="mailto:hola@aed.cat">hola@aed.cat</a>!
          </div>
          <div className="FAQquestion">
            Què implica ser voluntari?
          </div>
          <div className="FAQanswer">
            Com a voluntari, ens donaràs un cop de mà durant el cap de setmana dels Data Days. Si vols, també ajudar-nos a organitzar l&apos;esdeveniment.
          </div>
        </div>

        <div className="FAQsection">
          <h3>EMPRESES</h3>
          <div className='separator'>a</div>

          <div className="FAQquestion">
            M&apos;agradaria patrocinar l&apos;esdeveniment. Com ho puc fer?
          </div>
          <div className="FAQanswer">
            Si estàs interessat a patrocinar l&apos;esdeveniment, contacta amb nosaltres a <a href="mailto:sponsors@aed.cat">sponsors@aed.cat</a>!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
