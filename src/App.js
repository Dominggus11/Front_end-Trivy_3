import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import NavbarComp from './Component/Functional/NavbarComp'



function App () {
  return (
    <>
    <NavbarComp />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about"element={<About />} />
      <Route path="/contact"element={<Contact />} />
    </Routes>
    </>
    
  )
}

export default App;