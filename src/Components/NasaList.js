import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

//use this "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo" boop!

function NasaList() {
    //Leave empty array because that is the data we are expecting
    //to get back. If we expect a string use " " if object use {} etc
    const [data, setData] = useState({});
  
    useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo")
        .then(response => {
            console.log(response.data)
          setData(response.data);
        })
        .catch(error => {
          console.log("the data was not returned", error);
        });
    }, {});

    return (

        <div className="nasaListContainer">
        <h2>Nasa Card Below this Text</h2>

        <NasaCard />

        </div>
    )


}


export default NasaList;