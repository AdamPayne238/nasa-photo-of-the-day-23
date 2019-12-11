import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    background: black;
    font-size: 2rem;
    color: black;
    p{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        display: inline;
        padding: 20px 20px;
        font-size: 1.75rem;
        color: #3B9D92;
    }
  
        &:hover{
        color: blue;
        text-shadow: 1px 1px hotpink;
    }
}

`;

function Footer(props){
    console.log(props);
    return(

<FooterContainer className="footer">
    <p className="pFooter">Privacy Policy</p>
    <p className="pFooter">© 2019 All Rights Reserved</p>
    <p className="pFooter">Terms And Conditions</p>
    </FooterContainer>
    );
}

export default Footer;