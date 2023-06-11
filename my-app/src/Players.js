import React from "react";
import "./players1.css"




function Players (){
    return (
    <div id = 'all'> 
        <h1>Top 10 mens singles players</h1>
        <span class = 'top5'>
            <div id = "VA" class = "pic" >
                <img src ={"/images/VA.jpg"}  alt = "Viktor Axelsen" class = "image"></img>
                <div class = "text">
                    <h2>Viktor Axelsen</h2>
                </div>
            </div>

            <div id = "2" alt =" AG"  class = "pic">
                <img src = {"/images/2AG.jpg"} alt = "Anthony Ginting"></img>
                <div class = "text"></div>
            </div>

            <div id = "3" alt = "KN"  class = "pic">
                <img src = {"/images/3KN.jpg"} alt =  'Kodai Naraoka'></img>
                <div class = "text"></div>
            </div>

            <div id = "4" alt = "LKY"  class = "pic">
                <img src = {"/images/4LKY.jpg"} alt = "Kean Yew Loh" ></img>
                <div class = "text"></div>
            </div>

            <div id = "5" alt = "KV"  class = "pic">
                <img src = {"/images/5KV.jpg"} alt = "Kunlavut Vitidsarn" ></img>
                <div class = "text"></div>
            </div>
        </span>
        <span class = 'lower5'>
            <div id = "6" alt = "JC" class = "pic">
                <img src = {"/images/6JC.jpg"} alt = "Jonatan Christie"></img>
                <div class = "text"></div>
            </div>

            <div id = "7" alt = "TCC" class = "pic">
                <img src = {"/images/7TCC.jpg"} alt = "Tien Chen Chou"></img>
                <div class = "text"></div>
            </div>

            <div id = "8" alt = "HSP"  class = "pic">
                <img src = {"/images/8HSP.jpg"} alt = "H.S. Prannoy"></img>
                <div class = "text"></div>
            </div>

            <div id = "9" alt = "SYQ" class = "pic">
                <img src = {"/images/9SYQ.jpg"} alt = "Yu Qi Shi"></img>
                <div class = "text"></div>
            </div>

            <div id = "10" alt = 'LZJ' class = "pic">
                <img src = {"/images/LZJ.jpg"} alt = "Zii Jia Lee"></img>
                <div class = "text"></div>
            </div>
        </span>

</div>
    )
}

export default Players;