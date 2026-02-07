import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/Layout/NavBar";
import Home from "./Home/Home";
import Footer from "./component/Layout/Footer";
import Who from "./WhoPage/Who";
import OurCenters from "./Centers/OurCenters";
import OurServices from "./Services/OurServices";
import Jobs from "./Jobs/Jobs";
import Activities from "./Activities/Activities";
import CheckOurs from "./Centers/CheckOurs";
import Social from "./Social/Social";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Who />} />
        <Route path="/centers" element={<OurCenters />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/events" element={<Activities />} />
        <Route path="/browse-centers" element={<CheckOurs />} />
        <Route path="/media" element={<Social />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
