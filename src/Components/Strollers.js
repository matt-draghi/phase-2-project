import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import StrollersCard from './ItemCard';

function Strollers (){
    const [getStrollers, setGetStrollers] = useState([])

    const [search, getSearch] = useState("")
    const [sortBy, getSortBy] = useState("")

    useEffect(()=>{
      fetch(` http://localhost:4000/strollers`)
      .then(resp=>resp.json())
      .then(data => {
        setGetStrollers(data)
        console.log(data)
      })
    },[])

    
    const  stollerDisplay = getStrollers
    .filter((stroller) =>{
        return (
          stroller.name.toLowerCase().includes(search.toLowerCase()) || stroller.brand.toLowerCase().includes(search.toLowerCase()) 
        )
    })
    .sort((itemA, itemB) =>{
        if(sortBy === "price"){
            return itemB.price - itemA.price
        }else{
            return itemA.name.localeCompare(itemB.name)
        }
    })


    const stroller = stollerDisplay.map(stroller => {
        return (
        <StrollersCard item={stroller}key ={stroller.id}/>
        )
    })
    
    return (
        <div>
            <div>
                <Filter 
                search = {search}
                getSearch ={getSearch}
                getSortBy ={getSortBy}/>
            </div>
            <div>
                {stroller}
            </div>
            
        </div>
    )
}

export default Strollers

// test