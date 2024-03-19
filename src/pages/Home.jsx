
// "Home" conté 

// 1. Secció de vídeo del títol
// 2. Data, lloc

const Home = () => {
  return (
    <>
      <div className="logo-container">
        <video muted autoPlay="True" playsInline loop>
          <source src="/vid.mov" type="video/mp4" />
        </video>
        <img src='/logo.svg' alt="logo" />
      </div>
      <div className='content'>
        <h1>Data Days Barcelona</h1>
        <h2>Campus Nord, UPC</h2>
        <h2>11-12 de maig</h2>
        <br />
        <p>Dels creadors de la Datathon FME, Data Days és una iniciativa innovadora organitzada per
          l&apos;Associació d&apos;Estudiants de Dades (AED), destinada
          a reunir entusiastes de la ciència i l&apos;enginyeria de les <b>dades</b> en una sèrie de conferències, tallers i activitats molt enriquidors.
          No només pretén ser una oportunitat per aprendre de persones enteses del sector, sinó que també aporta
          una perspectiva global del que suposa una carrera en la Ciència i Enginyeria de Dades.
          <br></br><br></br>
          L&apos;acte tindrà lloc al Campus Nord de la UPC els dies 11 i 12 de maig de 2024.

          Aquest esdeveniment està enfocat a estudiants a molts nivells diferents, des de batxillerat o
          estudiants de grau fins a estudiants de màster i recent graduats. Hi haurà xerrades i activitats adaptats
          a diferents nivells per tal que tothom pugui participar i formar part de l&apos;experiència!

          <br></br><br></br>

          Si tens qualsevol dubte sobre l&apos;esdeveniment, just a sota pots trobar la nostra pàgina de FAQs. Si encara no et resol
          el dubte en qüestió, no dubtis a contactar-nos!

          Ens veiem el proper 11 de maig!
        </p>
      </div>
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