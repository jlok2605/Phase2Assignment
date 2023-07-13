import React, {useState,useEffect} from "react";
import "./players1.css"
import PlayerInfo from "./playerinfo.js";




function Players () {

    const [players, setPlayers] = useState([]);

useEffect(()=>{
  fetch("http://localhost:3001/Players")
  .then(resp=> resp.json())
  .then((resp) => setPlayers(resp))
},[])
  


    return(

        <div id="players">
            {players.map(player=><PlayerInfo player={player}/>)}
        </div>
        
        )
}


   
        
    



export default Players;