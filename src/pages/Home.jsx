
// "Home" conté 

// 1. Secció de vídeo del títol
// 2. Data, lloc



const Home = () => {
    return (
    <div class="home-section" style={{marginBottom: "100px"}}>
      <div class="home-video-container">
        <video width="320" height="240" id="home-video" muted autoPlay="True" playsinline loop>
          <source src="/video_izan_cropped.mp4" type="video/mp4"/>
        </video>
      </div>
      <div class="home-info-container">
        <div className="row align-items-start">
          <div class="home-text">
            <div>
              <p>10 i 11 de maig</p>
              <p>Universitat Politècnica de Catalunya</p>
            </div>
            <div class="sobresurt">
              <p>ON I QUAN</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;