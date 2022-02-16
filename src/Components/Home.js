import React, {useEffect, useState} from 'react';
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import { NavLink } from 'react-router-dom';

function Home ({setItemType, featuredItems}){
    const [home, setHome] = useState([])

    useEffect(() => {
        setItemType("home")
    }, [])
    //TODO: add nice photos to db.json
    const imageArray = [
        "https://images.squarespace-cdn.com/content/v1/5570490fe4b072434a9da70b/1501112431054-HOHTX98ASD4MRP2JPRS5/1442326024894.jpeg?format=1000w",
        "https://www.gillespieapproach.com/wp-content/uploads/2019/05/we-are-the-happy-baby-people-gillespie-approach-craniosacral-fascial-therapy-770x405.jpg",
        "https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png"
    ]

    
    return (
        <div className="content-container">
                      
            <div className="slide-container">

                <Fade>
                    <div className="mySlides">
                        <img src={imageArray[0]} style={{width: "100%"}}/>
                    </div>

                    <div className="mySlides">
                        <img src={imageArray[1]} style={{width: "100%"}}/>
                    </div>

                    <div className="mySlides">
                        <img src={imageArray[2]} style={{width: "100%"}}/>
                    </div>
                </Fade>  

            </div>
            
            <div className="navlink-container">
                <NavLink to="/strollers">
                    Strollers
                    <img src={featuredItems[0]?.image} style={{width: "100px"}} />
                </NavLink>
                <NavLink to="/diapers">
                    Diapers
                     <img src={featuredItems[1]?.image} style={{width: "100px"}} />
                </NavLink>
                <NavLink to="/formulas">
                    Formula
                     <img src={featuredItems[2]?.image} style={{width: "100px"}} />
                </NavLink>
            </div>
        </div>
        

    )
}

export default Home