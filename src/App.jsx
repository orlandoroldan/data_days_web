import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

import Agenda from "./pages/Agenda"
import QuiSom from "./pages/QuiSom"
import Home from "./pages/Home"
import Presentacio from "./pages/Presentacio"
import Layout from "./pages/Layout"
import NoPage from "./pages/NoPage"

import "./App.css"


const Menu = () => (
  <div className="main" style={{position: "absolute", width:"100%", minHeight:"100%"
}}>

    <div className="App" style={{
        position:"absolute",
        width: "70%", 
        minHeight: "100%",
        backgroundColor: "#9FD5A2",
        marginLeft: "15%",
    }}> 
        <div className="menu">
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home />}  id="home"/>
              <Route path="presentacio" element={<Presentacio />} />
              <Route path="quisom" element={<QuiSom />} />
              <Route path="agenda" element={<Agenda />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>

);


function App() {
  return (
    <>
        <Menu />
    </>
  );
}

export default App;