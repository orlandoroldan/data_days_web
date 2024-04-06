const Home = () => {
  return (
    <>
      <div className="logo-container">
        <video muted autoPlay="True" playsInline loop>
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        <img src='/logo.svg' alt="logo" />
      </div>
      <div className='content'>
        <h1>Data Days Barcelona</h1>
        <h2>Campus Nord, UPC</h2>
        <h2>11-12 de maig</h2>
        <br />
        <p>Dels creadors de la <a href='https://datathon.cat' target='_blank' rel='noopener'>Datathon FME</a>, Data Days Barcelona és una iniciativa innovadora,
          destinada a reunir entusiastes de la ciència i l&apos;enginyeria de les <b>dades</b> en una sèrie de conferències, tallers i activitats molt enriquidors.
          No només pretén ser una oportunitat per a fer comunitat i aprendre de persones enteses del sector, sinó que també aporta
          una perspectiva global del que suposa una carrera en la ciència i enginyeria de dades.
          <br></br><br></br>
          L&apos;acte tindrà lloc al Campus Nord de la UPC els dies 11 i 12 de maig de 2024.

          Hi haurà xerrades i activitats adaptats a diferents nivells per tal que tothom pugui participar i formar part de l&apos;experiència!
          Podeu venir tant si sou estudiants universitaris, de batxillerat, recent graduats o simplement si teniu curiositat!

          <br></br><br></br>

          Ens veiem el proper 11 de maig!
        </p>
        <section className="fullwidth">
          <div className="callout-with-image">
            <div>
              <img width="200px" src="aed.webp" alt="AED" />
            </div>
            <div>
              <h3>Qui som?</h3>
              <p>Som l&apos;associació estudiantil del <a href='https://dse.upc.edu/ca' target='_blank' rel='noopener'>grau en ciència i enginyeria de dades</a> de la <a href='https://upc.edu' target='_blank' rel='noopener'>UPC</a>. Treballem per a ajudar a millorar el grau, crear un vincle entre estudiants i alumni, organitzar activitats, compartir experiències de l&apos;alumnat i promoure l&apos;ecosistema de les dades català, entre moltes altres!</p>
              <br />
              <a href="https://aed.cat/" target="_blank" rel="noopener noreferrer">Més informació!</a>
            </div>
          </div>
        </section >
      </div >
      <div className="home-info-container">
        <div className="home-text">
          <div className='hidden-text'>
            <p>11-12 de maig</p>
            <p>Campus Nord, UPC</p>
          </div>
          <div className="sobresurt">
            <p>ON I QUAN</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;