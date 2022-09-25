import React from 'react';
import globe from "./Images/globe.png"


export default function Navbar(){
    return(
        <nav className="navMenu">
            <img className='globe' src={globe} alt="globe" />
            <h2>my travel journal</h2>
        </nav>
    )
}