//MASTER!!!

import React from "react";

import NasaList from "./Components/NasaList";

import "./App.css";

import styled from 'styled-components';

import NavBar from './Components/NavBar';

import Header from './Components/Header';

import Footer from './Components/Footer';

const Container = styled.div`
                  max-width: 1100px;
                  margin: 0 auto;
                  text-align: center;
                  font-size: 2rem;
                  `;

function App() {
  return (


    <div className="App">

    <NavBar/>

    <Header/>

    <Container>
      <NasaList />
    </Container>

    <Footer/>
  </div>
  );
}

export default App;
