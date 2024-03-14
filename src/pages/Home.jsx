
// "Home" conté 

// 1. Secció de vídeo del títol
// 2. Data, lloc

const Home = () => {
  return (
    <div className="home-section">
      <div className='cta-container'>
        <h1>BLA BLA BLA</h1>
      </div>
      <div className="logo-container">
        <video muted autoPlay="True" playsInline loop>
          <source src="/vid.mov" type="video/mp4" />
        </video>
        <img src='/logo.svg' alt="logo" />

      </div>
      <div className="home-info-container">
        <div className="row align-items-start">
          <div className="home-text">
            <div>
              <p>10 i 11 de maig</p>
              <p>Universitat Politècnica de Catalunya</p>
            </div>
            <div className="sobresurt">
              <p>ON I QUAN</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "fixed", zIndex: "1", backgroundColor: "rgba(255,255,255,0.8)", color: "black", width: "100%", textAlign: "center", paddingTop: "5px", paddingBottom: "5px", bottom: "0", fontSize: "11px" }}>
        Sohl-Dickstein, J. (2024). The boundary of neural network trainability is fractal. arXiv preprint arXiv:2402.06184.
      </div>
    </div >
  );
};

export default Home;