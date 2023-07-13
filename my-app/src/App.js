import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Players from "./Players"
import About from "./About"
import Home from "./home";
import "./NavBar.css"


function App() {
  return (
    <div>
      <NavBar/>
      <div>
  


        <BrowserRouter>
          <Routes>
            <Route path="/About" element={<About/>} />

            <Route path="/Players" element={<Players/>} />


            <Route exact path="/" element={<Home/>} />

          </Routes>
        </BrowserRouter>

      </div>
    </div>

  



  )}







export default App;
