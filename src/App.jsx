import { Routes, Route } from "react-router-dom";

import Agenda from "./pages/Agenda";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Layout from "./pages/Layout";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;