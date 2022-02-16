import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import ItemCard from './ItemCard';


function Strollers ({setItemType, strollers, itemType, setSelectedItem, setSelectedPath}){

    const [search, getSearch] = useState("")
    const [sortBy, getSortBy] = useState("")

    useEffect(() => {
        setItemType("strollers")
    }, [])
    
   
    const  stollerDisplay = strollers
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
        const uniqueKey = `${stroller.name}${stroller.id}`
        return (
            <ItemCard 
                setSelectedPath={setSelectedPath}
                setSelectedItem={setSelectedItem}
                item={stroller} 
                key ={uniqueKey} 
                itemType={itemType}/>
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

