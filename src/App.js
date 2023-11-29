import React from "react"
import './App.css';
import Dubbing from './Dubbing';
import Home from './home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();


  return (
    <div>

        <Routes location={location} key = {location.pathname}>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/services" element={<Dubbing/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="*" element={<Home/>} />
        </Routes>


    </div>
  )
}

export default App;
