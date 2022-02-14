import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/strollers">Strollers</NavLink>
            <NavLink to="/diapers">Diapers</NavLink>
            <NavLink to="/formula">Formula</NavLink>
        </nav>
    )
}

export default Navbar