import React from "react" ; 
// import "./NavBar.css"



function NavBar (){
    return (

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
         )
}

export default NavBar