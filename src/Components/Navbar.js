import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/strollers">Strollers</NavLink>
            <NavLink to="/diapers">Diapers</NavLink>
            <NavLink to="/formulas">Formula</NavLink>
        </div>
    )
}

export default Navbar