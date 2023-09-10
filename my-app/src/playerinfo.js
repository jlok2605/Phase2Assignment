import "./players1.css"

function PlayerInfo(props) {
  const player = props.player

  
  return (
  <div className='container'>
    <img src ={player.picture}  alt = {player.name} key= {player.rank}></img>
      <div className='stats'>
        <h3 key="name">Name: {player.name}</h3>
        <h3 key="rank">Rank: {player.rank}</h3>
        <h3 key="points">Points: {player.points}</h3>
        <h3 key="tournaments">Tournaments: {player.tournaments}</h3>
        <h3 key="wins">Wins:{player.wins}</h3>
        <h3 key="losses">Losses:{player.losses}</h3>
      </div>
  </div>

  
      
  );
}

export default PlayerInfo;

