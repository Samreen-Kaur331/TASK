import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from "./Footer/Footer.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
 
  return (
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> 
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
