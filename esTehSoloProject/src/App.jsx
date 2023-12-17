import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import Menu from "./Pages/Menu";
import Manis from "./Pages/Detail/Manis";
import Kampoel from "./Pages/Detail/Kampoel";
import Tarik from "./Pages/Detail/Tarik";
import Susu from "./Pages/Detail/Susu";
import Milo from "./Pages/Detail/Milo";
import Coklat from "./Pages/Detail/Coklat";
import Blackcurrant from "./Pages/Detail/Blackcurrant";
import Matcha from "./Pages/Detail/Matcha";
import Jasmine from "./Pages/Detail/Jasmine";
import Lemon from "./Pages/Detail/Lemon";
import Lychee from "./Pages/Detail/Lychee";
import Privacy from "./Pages/Privacy";
import About from "./Pages/About";
import Tentangkamu from "./Pages/Detail/Tentangkamu";
import Kamudawet from "./Pages/Detail/Kamudawet";
import Yakamuboba from "./Pages/Detail/Yakamuboba";
import Estehsolo from "./Pages/Detail/Estehsolo";
import Nyoju from "./Pages/Detail/Nyoju";
import Tumbuhan from "./Pages/Detail/Tumbuhan";
import Tongtong from "./Pages/Detail/Tongtong";
import Franchise from "./Pages/Franchise";
import Aritkel from "./Pages/Artikel";
import Fea1 from "./Pages/Detail/Fea1";
import Fea2 from "./Pages/Detail/Fea2";
import Ar1 from "./Pages/Detail/Ar1";
import Ar2 from "./Pages/Detail/Ar2";
import Ar3 from "./Pages/Detail/Ar3";
import Artikel from "./Pages/Artikel";
import Ar4 from "./Pages/Detail/Ar4";
import Ar5 from "./Pages/Detail/Ar5";
import Ar6 from "./Pages/Detail/Ar6";
import Ar7 from "./Pages/Detail/Ar7";
import Ar8 from "./Pages/Detail/Ar8";
import Ar9 from "./Pages/Detail/Ar9";
import Ar10 from "./Pages/Detail/Ar10";
import Pr from "./Pages/Detail/Pr";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/estehmanis" element={<Manis />} />
        <Route path="/estehkampoel" element={<Kampoel />} />
        <Route path="/estehtarik" element={<Tarik />} />
        <Route path="/estehsusu" element={<Susu />} />
        <Route path="/estehmilo" element={<Milo />} />
        <Route path="/estehcoklat" element={<Coklat />} />
        <Route path="/estehblackcurrant" element={<Blackcurrant />} />
        <Route path="/estehmatcha" element={<Matcha />} />
        <Route path="/estehjasmine" element={<Jasmine />} />
        <Route path="/estehlemon" element={<Lemon />} />
        <Route path="/estehleci" element={<Lychee />} />
        <Route path="/tentangkami" element={<About />} />
        <Route path="/tentangkamu" element={<Tentangkamu />} />
        <Route path="/kamudawet" element={<Kamudawet />} />
        <Route path="/yakamuboba" element={<Yakamuboba />} />
        <Route path="/estehsolo" element={<Estehsolo />} />
        <Route path="/nyoju" element={<Nyoju />} />
        <Route path="/tumbuhan" element={<Tumbuhan />} />
        <Route path="/tongtong" element={<Tongtong />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/pressrelease" element={<Pr />} />
        <Route path="/feature1" element={<Fea1 />} />
        <Route path="/feature2" element={<Fea2 />} />
        <Route path="/artikel1" element={<Ar1 />} />
        <Route path="/artikel2" element={<Ar2 />} />
        <Route path="/artikel3" element={<Ar3 />} />
        <Route path="/artikel4" element={<Ar4 />} />
        <Route path="/artikel5" element={<Ar5 />} />
        <Route path="/artikel6" element={<Ar6 />} />
        <Route path="/artikel7" element={<Ar7 />} />
        <Route path="/artikel8" element={<Ar8 />} />
        <Route path="/artikel9" element={<Ar9 />} />
        <Route path="/artikel10" element={<Ar10 />} />
      </Routes>
    </Router>
  );
}

export default App;
