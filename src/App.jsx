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
import Contact from "./ContactUs/Contact";
import OurVision from "./vision/vision";
import Mission from "./ourMission/Mission";
import Values from "./values/Values";
import Goals from "./goals/Goals";
import Beneficiaries from "./beneficiaries/beneficiaries";
import Methodology from "./methodology/methodology";
import ServicesScope from "./Service-Scop/ServiceScope";
import QualityPolicy from "./quality-policy/QualityPolicy";
import Compliance from "./compliance/Compliance";
import Rights from "./rights/Rights";
import Privacy from "./privacy/Privacy";
import TeamWork from "./team/Team";
import WhyUs from "./why-us/WhyUs";
import FAQ from "./faq/FAQ";

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<OurVision />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/values" element={<Values />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/beneficiaries" element={<Beneficiaries />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/services-scope" element={<ServicesScope />} />
        <Route path="/quality-policy" element={<QualityPolicy />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/rights" element={<Rights />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/team" element={<TeamWork />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
