import React from "react" ; 
import "./NavBar.css"



function NavBar () {
    return (
        <div>
        <nav>
            <a href = '/' className = "site-title">Badminton</a>
            <ul className = "list">
                <li>
                    <a href = "/Players" className = "tags" id = "players">Players</a>
                </li>
                <li>
                    <a href = "/about"  className = "tags" id = "about">About</a>
                </li>
            </ul>
        </nav>
        
        <nav class = "nav">
            <a href = '/' class = "site-title">Badminton</a>
            <ul class = "list">
                <li>
                    <a href = "/Players" class = "tags" id = "players">Players</a>
                <li>
                    <a href = "/about"  class = "tags" id = "about">About</a>
                </li>

                </li>
            </ul>

        </nav>
        </div>
        )

}

export default NavBar;