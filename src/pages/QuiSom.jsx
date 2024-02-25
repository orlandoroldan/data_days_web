import PropTypes from 'prop-types';


const Profile = ({ img, position, name }) => (

  <div className='team-member'>
    <img className="team-member-image" src={img} />
    <div className='profile-content'>
        <h3>{name}</h3>
        <p>{position}</p>
    </div>
  </div>

);
Profile.propTypes = {
  img: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


const QuiSom = () => {
    return <div id='quisom-section' className='app-section'>
    <div id="aed-info">
      <h1 className='titol-quisom'>Qui som? - AED</h1>
      <p>Som l&apos;Associació d&apos;Estudiants de Dades!</p>
      <p>Som l&apos;associació estudiantil del <a href='https://dse.upc.edu' class="link">grau en ciència i enginyeria de dades</a> de la <a href='https://upc.edu' class="link">UPC</a>. Treballem per a ajudar a millorar el grau, crear un vincle entre estudiants i alumni, organitzar activitats com la <a href='https://datathon.cat' class="link">Datathon FME</a>, compartir experiències de l&apos;alumnat i promoure l&apos;ecosistema de les dades català, entre moltes altres!</p>
    </div>
    <div id="members-info">
      <h1 className='titol-quisom'>Qui som? - Organitzadors</h1>
      {/* Aquí posem els organitzadors, amb fotos i descripció. */}

      <Profile
        img='laia_foto.jpg'
        position='Jefa'
        name="Laia Mogas"
      />

      <Profile
        img='laia_foto.jpg'
        position='Jefe'
        name="Marc Gàllego"
      />
    </div>
    </div>;
  };
  
  export default QuiSom;