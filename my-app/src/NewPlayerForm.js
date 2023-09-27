import React,{useState} from "react";

function NewPlayerForm (props){
    const initialPlayer = {
        rank:"",
        name:"",
        points:"",
        tournaments:"",
        wins:"",
        losses:"",
        picture:""
        }
           
    const [inputValue,setInputValue] = useState(initialPlayer)
    
    const onValueChange = e => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
        }
    const submitForm = e => {
        e.preventDefault()
        props.addPlayer(inputValue)
        setInputValue(initialPlayer)
        fetch("http://localhost:3001/Players", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputValue),
          });
        
    }


    return(
        <div>
            <form onSubmit={submitForm}> 
                <input 
                    type ="text" 
                    name="rank" 
                    placeholder="Rank number"
                    value={inputValue.rank}
                    onChange={onValueChange} />
                <br/>    
                <input 
                    type ="text" 
                    name="name" 
                    placeholder="Name" 
                    onChange={onValueChange} 
                    value={inputValue.name}/>
                <br/> 
                <input 
                    type ="text"
                    name="points"
                    placeholder="Points"
                    value={inputValue.points}
                    onChange={onValueChange} />
                    
                <br/> 
                <input 
                    type ="text" 
                    name="tournaments" 
                    placeholder="Tournament number"
                    value={inputValue.tournaments}
                    onChange={onValueChange}/>
                 <br/> 
                <input
                    type ="text"
                    name="wins" 
                    placeholder="win total"
                    value={inputValue.wins}
                    onChange={onValueChange} />
                   <br/> 
                <input 
                    type ="text" 
                    name="losses" 
                    placeholder="loss total"
                    value={inputValue.losses}
                    onChange={onValueChange} />
                 <br/> 
                <input
                    type ="text" 
                    name="picture" 
                    placeholder="Image URL"
                    value={inputValue.picture}
                    onChange={onValueChange} />
                  <br/> 
                <input type ="submit"/>
            </form>
        </div>
    )
}

export default NewPlayerForm;