import React, { useState, useEffect } from 'react';
import "./players1.css"

function PlayerInfo(props) {
  const player = props.player

  
  return (
  <div>
  <div className = "pic" >
      <img src ={player.picture}  alt = {player.name}></img>
        <h3>Name: {player.name}</h3>
        <h3>Rank: {player.rank}</h3>
        <h3>Points: {player.points}</h3>
        <h3>Tournaments: {player.tournaments}</h3>
        <h3>Records:{player.record}</h3>
  </div>
  </div>

  
      
  );
}

export default PlayerInfo;

