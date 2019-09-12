import React from 'react';

function NavBar(props){
    console.log(props);
    return(
        <div className="navBar">
            <nav>
                <a href="#">App</a>
                <a href="#">AppTwo</a>
                <a href="#">Contact</a>
                <a href="#">Nasa</a>
            </nav>
        </div>
    );
}

export default NavBar;