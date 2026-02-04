import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/Layout/NavBar";
import Home from "./Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;