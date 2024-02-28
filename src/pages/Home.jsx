
// "Home" conté 

// 1. Secció de vídeo del títol
// 2. Data, lloc



const Home = () => {
    return (
    <div class="home-section" style={{marginBottom: "100px"}}>
      <div class="home-video-container">
        <video id="home-video" width="320" height="240" autoPlay="true" muted loop>
          <source src="/video_izan_cropped.mp4" type="video/mp4"/>
        </video>
      </div>
      <div class="home-info-container">
        <div className="row align-items-start">
          <div class="home-text col-6 radius-top">
            <p>10 i 11 de maig</p>
            <p>Universitat Politècnica de Catalunya</p>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Home;