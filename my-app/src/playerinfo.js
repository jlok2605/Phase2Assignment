


function Playerinfo (){
    return (
        fetch("http://localhost:3001/Players")
        .then (response => {return response.json()})
        .then (response => {return response}))
}


export default Playerinfo;