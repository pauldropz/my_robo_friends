import React from "react";
import Card from "./Card.css";
import khan from "./assets/images/khan.jpg";

const Card = () => {
    return (
        <div className="khan"> 

            <img src= {khan} alt="Emperor"/>
            <div>
                <h1>Kotal Khan</h1>
                <p>KotalKhan@gmail.com</p>
            </div>

        </div>


    )
    }
export default Card;