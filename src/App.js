import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Players from "./Players"
import About from "./About"
import Home from "./home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/About" element = {<About/>}/>

          <Route path="/Players" element = {<Players/>}/> 
          

          <Route exact path="/" element = {<Home/>}/>

        </Routes>
      </BrowserRouter>
    </div>

  )






  //     <Home/> */



}

export default App;
