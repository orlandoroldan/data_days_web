import PropTypes from 'prop-types';


const Profile = ({ img, position, name }) => (

  <div className='team-member col-12 col-sm-6 col-md-4 col-xl-3'>
    <img className="team-member-image" src={img} />
    <div className='profile-content'>
        <h4 style={{fontSize:"15px", fontWeight:"600"}}>{name}</h4>
        <p style={{fontStyle:"italic"}}>{position}</p>
    </div>
  </div>

);
Profile.propTypes = {
  img: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


const QuiSom = () => {
    return (
    <div className='app-section'>

      <h1 className='titol-quisom'>QUI SOM? - AED</h1>
      <p>Som l&apos;Associació d&apos;Estudiants de Dades!</p>
      <p>Som l&apos;associació estudiantil del <a href='https://dse.upc.edu' class="link">grau en ciència i enginyeria de dades</a> de la <a href='https://upc.edu' class="link">UPC</a>. Treballem per a ajudar a millorar el grau, crear un vincle entre estudiants i alumni, organitzar activitats com la <a href='https://datathon.cat' class="link">Datathon FME</a>, compartir experiències de l&apos;alumnat i promoure l&apos;ecosistema de les dades català, entre moltes altres!</p>
      <img style={{width:"200px", marginLeft:"auto", marginRight:"auto", paddingTop:"10px"}} src="aed.webp"/>

      <h1 className='titol-quisom'>QUI SOM? - L'equip</h1>
      <div class="container">
          <div class="row">
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

            <Profile
              img='laia_foto.jpg'
              position='Jefa'
              name="Sílvia Fàbregas"
            />  

            <Profile
              img='laia_foto.jpg'
              position='Jefe'
              name="Arnau Biosca"
            />  

            <Profile
              img='laia_foto.jpg'
              position='Jefa'
              name="Noa Mediavilla"
            />
          </div>
      </div>
    </div>
    )
  };
  
  export default QuiSom;