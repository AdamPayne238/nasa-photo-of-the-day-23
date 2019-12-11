import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    padding: none;
    width: 100%;
    background: black;
    color: #3B9D92;
    font-size: 2rem;
    &:hover{
        color: #42BDC4;
        text-shadow: 1px 1px hotpink;
    }
}
`;

function Header(props){
    console.log(props);
    return(
        <HeaderContainer className="header">
         <h1>Welcome to Nasa! Woo!</h1>
        </HeaderContainer>
    );
}

export default Header;