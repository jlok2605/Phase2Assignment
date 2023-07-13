import React from "react" ; 
import "./NavBar.css"



function NavBar () {
    return (
        <div>
        <nav className = "nav">
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
        </div>
        )

}

export default NavBar;