import React from "react";
import "./players1.css"
import Playerinfo from "./playerinfo.js";





function Players (){
    Playerinfo().then(result => {console.log(result)})

    return (
    <div id = 'all'> 
        <h1>Top 10 mens singles players</h1>
        <span className = 'top5'>
            <div id = "VA" className = "pic" >
                <img src ={"/images/VA.jpg"}  alt = "Viktor Axelsen" className = "image"></img>
                <div className = "text">
                <h2></h2>
                </div>
            </div>

            <div id = "2" alt =" AG"  className = "pic">
                <img src = {"/images/2AG.jpg"} alt = "Anthony Ginting"></img>
                <div className = "text"></div>
            </div>

            <div id = "3" alt = "KN"  className = "pic">
                <img src = {"/images/3KN.jpg"} alt =  'Kodai Naraoka'></img>
                <div className = "text"></div>
            </div>

            <div id = "4" alt = "LKY"  className = "pic">
                <img src = {"/images/4LKY.jpg"} alt = "Kean Yew Loh" ></img>
                <div className = "text"></div>
            </div>

            <div id = "5" alt = "KV"  className = "pic">
                <img src = {"/images/5KV.jpg"} alt = "Kunlavut Vitidsarn" ></img>
                <div className = "text"></div>
            </div>
        </span>
        <span className = 'lower5'>
            <div id = "6" alt = "JC" className = "pic">
                <img src = {"/images/6JC.jpg"} alt = "Jonatan Christie"></img>
                <div className = "text"></div>
            </div>

            <div id = "7" alt = "TCC" className = "pic">
                <img src = {"/images/7TCC.jpg"} alt = "Tien Chen Chou"></img>
                <div className = "text"></div>
            </div>

            <div id = "8" alt = "HSP"  className = "pic">
                <img src = {"/images/8HSP.jpg"} alt = "H.S. Prannoy"></img>
                <div className = "text"></div>
            </div>

            <div id = "9" alt = "SYQ" className = "pic">
                <img src = {"/images/9SYQ.jpg"} alt = "Yu Qi Shi"></img>
                <div className = "text"></div>
            </div>

            <div id = "10" alt = 'LZJ' className = "pic">
                <img src = {"/images/LZJ.jpg"} alt = "Zii Jia Lee"></img>
                <div className = "text"></div>
            </div>
        </span>

</div>
    )
}


export default Players;