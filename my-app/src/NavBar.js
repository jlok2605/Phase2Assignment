import React from "react"
import {NavLink} from "react-router-dom"


const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar (){
    return (

        <nav Classname = "nav">
            <a href = '/' class = "site-title">Badminton</a>
            <ul>
                <li>
                    <a href = "/Players">Players</a>
                <li>
                    <a href = "/about">About</a>
                </li>

                </li>
            </ul>
          
         </nav>)
}

export default NavBar