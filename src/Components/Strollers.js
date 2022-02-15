import React, {useState, useEffect} from 'react';
import StrollersCard from './StrollersCard';

function Strollers (){
    const [getStrollers, setGetStrollers] = useState([])

    useEffect(()=>{
      fetch(` http://localhost:4000/strollers`)
      .then(resp=>resp.json())
      .then(data => {
        setGetStrollers(data)
        console.log(data)
      })
    },[])
    
    const stroller = getStrollers.map(stroller => {
        return (
        <StrollersCard stroller={stroller}key ={stroller.id}/>
        )
    })
    
    return (
        <div>
            <div className ="stroller-filter">
                <select>
                    <option value="price">price</option>
                    <option value="name">name</option>
                </select>
            </div>
            <div>
                {stroller}
            </div>
            
        </div>
    )
}

export default Strollers

// test