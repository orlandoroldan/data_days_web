import { Routes, Route } from "react-router-dom";

import Agenda from "./pages/Agenda";
import QuiSom from "./pages/QuiSom";
import Home from "./pages/Home";
import Presentacio from "./pages/Presentacio";
import Layout from "./pages/Layout";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="presentacio" element={<Presentacio />} />
        <Route path="quisom" element={<QuiSom />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;