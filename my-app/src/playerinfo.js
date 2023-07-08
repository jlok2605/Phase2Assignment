import React, { useState, useEffect } from 'react';

function PlayerInfo(props) {
  const player = props.player

  
  return (
    <div>
      <ul>
        <li>{player.rank}</li>
        <li>{player.name}</li>
        <li>{player.tournaments}</li>
        <li>{player.points}</li>
        <li>{player.record}</li>
        
      </ul>
    </div> 
  )
}
export default PlayerInfo;
