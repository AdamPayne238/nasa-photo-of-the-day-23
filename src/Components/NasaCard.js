import React from "react";
import styled from 'styled-components';

const CardContainer = styled.span`
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        img{
                            border-radius: 20px;
                        }
                        `;


const NasaCard = props => {
    return (

        <CardContainer>

        <div className="nasaCardContainer" key={props.id}>
        
        <h1>{props.title}</h1>

        <h2>{props.date}</h2>

       
        <img className="nasa-image" alt="Nasa Photo of the Day" src={props.url} />
        

        <p>{props.explanation}</p>

        <p>{props.copyright}</p>

        </div>

        </CardContainer>

    )
}

export default NasaCard;
