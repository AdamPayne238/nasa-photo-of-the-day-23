import React from "react";
import styled from 'styled-components';

const PhotoContainer = styled.span`
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        `;


const NasaCard = props => {
    return (
        <div className="nasaCardContainer" key={props.id}>
        
        <h1>{props.title}</h1>

        <h2>{props.date}</h2>

        <PhotoContainer>
        <img className="nasa-image" alt="Nasa Photo of the Day" src={props.url} />
        </PhotoContainer>

        <p>{props.explanation}</p>

        <p>{props.copyright}</p>

        </div>
    )
}

export default NasaCard;
