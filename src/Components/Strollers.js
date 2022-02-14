import React from 'react';
import StrollersCard from './StrollersCard';


function Strollers ({itemCategories}){
    const stroller = itemCategories.strollers.map(stroller => {
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
                <p>{stroller}</p>
            </div>
            
        </div>
    )
}

export default Strollers

// test