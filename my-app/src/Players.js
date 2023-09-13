import React, {useState,useEffect} from "react";
import "./players1.css"
import PlayerInfo from "./playerinfo.js";
import NewPlayerForm from "./NewPlayerForm.js";




function Players () {

    const [players, setPlayers] = useState([]);

useEffect(()=>{
  fetch("http://localhost:3001/Players")
  .then(resp=> resp.json())
  .then((resp) => setPlayers(resp))
},[])
  
const addPlayer = (player) => {
      setPlayers((currentState)=> {
        return [...currentState, player]
        
    })
}


    return(
        <div>
        <NewPlayerForm addPlayer={addPlayer}/>
        <h1>Top 10 Men's single players</h1>
        <div id="players">
            {players.map(player=><PlayerInfo player={player}/>)}
        </div>
        </div>
        
        )
}


   
        
    



export default Players;