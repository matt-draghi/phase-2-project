import React, {useEffect, useState} from 'react';
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import { NavLink } from 'react-router-dom';

function Home ({setItemType, featuredItems}){

    useEffect(() => {
        setItemType("home")
    }, [])
    
    
    
    
    
    return (
        <div className="home-content-container">
                      
            <div className="slide-container">

                <Fade>
                    <div className="slides">
                        <img src={featuredItems[3]?.image} />
                    </div>

                    <div className="slides">
                        <img src={featuredItems[4]?.image} />

                    </div>

                    <div className="slides">
                        <img src={featuredItems[5]?.image} />
                    </div>
                </Fade>  

            </div>
            
            <div className="nav-container-icons" >

                
                    <NavLink to="/strollers">
                        <img src={featuredItems[0]?.image} style={{width: "150px"}} alt="strollers" />
                    </NavLink>
            
                    <NavLink to="/diapers">
                        <img src={featuredItems[1]?.image} style={{width: "150px"}} alt="diapers"/>
                    </NavLink>
                
               
                    <NavLink to="/formulas">
                        <img src={featuredItems[2]?.image} style={{width: "150px"}} alt="formula"/>
                    </NavLink>

                    <NavLink className="home-buttons" to="/strollers">
                        Strollers
                    </NavLink>
                    <NavLink className="home-buttons" to="/diapers">
                        Diapers
                    </NavLink>
                    <NavLink className="home-buttons" to="/formulas">
                        Formula
                    </NavLink>
                
            </div>
            

        </div>
        

    )
}

export default Home