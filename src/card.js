import React from "react";
import "./Card.css";
import robot from "./assets/images/robot face1.jpg";

const Card = ({name, email, username} ) => {
    return (
        <div className="khan"> 

            <img src= {robot} width="250rem" alt="Emperor"/>
            <div className="emperor">
                <h1>{name}</h1>
                <h1>{username}</h1>
               
    


            </div>

        </div>


    )
    }
export default Card;