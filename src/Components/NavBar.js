import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`                 
                     display: inline;                       
                     font-family:    Arial, Helvetica, sans-serif;
                     font-size:      1.5em;
                     padding:        5px 20px;
                     a{
                        text-decoration: none;
                        color:          grey;
                        text-shadow:    none;
                        padding: 10px 20px;
                        &:hover{
                            color: blue;
                            text-shadow: 1px 1px hotpink;

                                `;

function NavBar(props){
    console.log(props);
    return(
        <div className="navBar">
            <NavContainer>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Nasa</a>
            </NavContainer>
        </div>
    );
}

export default NavBar;