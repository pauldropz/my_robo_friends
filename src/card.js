import React from "react";
import "./Card.css";
import robot from "./assets/images/robot face1.jpg";

const Card = () => {
    return (
        <div className="khan"> 

            <img src= {robot} width="250rem" alt="Emperor"/>
            <div className="emperor">
                <h1>Kotal Khan</h1>
                <p>KotalKhan@gmail.com</p>
            </div>

        </div>


    )
    }
export default Card;