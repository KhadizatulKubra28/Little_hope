import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Volunteer from './components/Volunteer/Volunteer';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Donation from './components/Donation/donation';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/volunteer' element={<Volunteer />} />
          <Route path='/volunteer' element={<secondSectionContact />} />
          <Route path='/about' element={<About />} />
          <Route path='/donation' element={<Donation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;