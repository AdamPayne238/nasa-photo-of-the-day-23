import React from "react";

const NasaCard = props => {
    return (
        <div className="nasaCardContainer" key={props.id}>
        
        <h1>{props.title}</h1>

        <h2>{props.date}</h2>

        <img className="nasa-image" alt="random dog" src={props.url} />
        
        <p>{props.explanation}</p>

        <p>{props.copyright}</p>

        </div>
    )
}

export default NasaCard;
