import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {About} from "./MyComponents/About";
import {Product} from "./MyComponents/Product";
import {Compon1} from "./MyComponents/Compon1";
import {Compon2} from "./MyComponents/Compon2";
import {Compon3} from "./MyComponents/Compon3";
import {Compon4} from "./MyComponents/Compon4";
import {Compon5} from "./MyComponents/Compon5";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header  searchBar={false} />
      <Routes>
        <Route exact path="/" element={(
          <>
          <Product/>
          <Compon1/>
          <Compon2/>
          <Compon3/>
          <Compon4/>
          <Compon5/>
          </>
        )}/>
        <Route exact path="/about" element={(
          <>
          <About/>
          <Product/>
          <Compon1/>
          <Compon3/>
          <Compon2/>
          <Compon3/>
          </>
        )}/>
        <Route exact path="/product" element={(
          <>
          <Compon1/>
          <Compon2/>
          <Product/>
          <Compon3/>
          <Compon2/>
          <Compon1/>
          </>
        )}/>
        <Route exact path="/wallet" element={(
          <>
          <Compon1/>
          <About />
          <Compon4/>
          <Compon2/>
          <Product/>
          <Compon3/>
          <Compon2/>
          <Compon1/>
          </>
        )}/>
        <Route exact path="/pagew" element={(
          <>
          <Compon1/>
          <About />
          <Compon4/>
          <Compon2/>
          <Product/>
          <Compon3/>
          <Compon5/>
          <Compon1/>
          </>
        )}/>
        <Route exact path="/units" element={(
          <>
          <Compon1/>
          <About />
          <Compon4/>
          <Compon5/>
          <Compon3/>
          <Compon2/>
          <Product/>
          <Compon1/>
          </>
        )}/>
        <Route exact path="/egg" element={(
          <>
          <Compon1/>
          <About />
          <Compon4/>
          <Compon2/>
          <Compon5/>
          <Product/>
          <Compon3/>
          <Compon5/>
          <Compon1/>
          </>
        )}/>
      </Routes>        
      <Footer/>
    </Router>
    </>
  );
}

export default App;
