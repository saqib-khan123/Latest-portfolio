// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './Components/Home';
import ContactUS from './Pages/ContactUS';



function App() {
  return (
    <>
      <BrowserRouter>
      
     
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="contact" element={<ContactUS/>}/>

      </Routes>

        
      </BrowserRouter>
    </>
  );
}

export default App;
