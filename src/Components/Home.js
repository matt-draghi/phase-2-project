import React, {useEffect, useState} from 'react';
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import { NavLink } from 'react-router-dom';

function Home ({setItemType, featuredItems}){


    useEffect(() => {
        setItemType("home")
    }, [])
    
    
    const style = { 
        color: "black",
        textDecoration: "none",
        backgroundColor: "rgb(138, 227, 237)",
        width: "150px",
        height: "30px",
        borderRadius: ".8em",
        fontWeight: "500",
        margin: "auto",	
        
    }

    const containerStyle = {
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        width: "500px",
        gap: ".5em",
        alignContent: "center",
        justifyContent: "center",
        
    }

    const slideContainerStyle = {
        margin: "auto",
        padding: "60px"
    }
    
    
    return (
        <div>
                      
            <div className="slide-container" style={slideContainerStyle}>

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
            
            <div className="nav-container" style={containerStyle}>

                
                    <NavLink to="/strollers">
                        <img src={featuredItems[0]?.image} style={{width: "150px"}} alt="strollers" />
                    </NavLink>
            
                    <NavLink to="/diapers">
                        <img src={featuredItems[1]?.image} style={{width: "150px"}} alt="diapers"/>
                    </NavLink>
                
               
                    <NavLink to="/formula">
                        <img src={featuredItems[2]?.image} style={{width: "150px"}} alt="formula"/>
                    </NavLink>

                    <NavLink style={style} to="/strollers">
                        Strollers
                    </NavLink>
                    <NavLink style={style} to="/diapers">
                        Diapers
                    </NavLink>
                    <NavLink style={style} to="/formula">
                        Formula
                    </NavLink>
                
                
            </div>
            

        </div>
        

    )
}

export default Home