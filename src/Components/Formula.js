import React from 'react';
import {useEffect, useState} from "react"
import Filter from './Filter';
import ItemCard from './ItemCard';

function Formula ({setItemType, formulas, itemType, setSelectedItem, setSelectedPath}){

    const [search, getSearch] = useState("")
    const [sortBy, getSortBy] = useState("")

    useEffect(() => {
        setItemType("formulas")
    }, [])

    const formulaDisplay = formulas
      .filter((formula) =>{
        return (
            formula.name.toLowerCase().includes(search.toLowerCase()) || formula.brand.toLowerCase().includes(search.toLowerCase()) 
        )
    })
    .sort((itemA, itemB) =>{
        if(sortBy === "price"){
            return itemB.price - itemA.price
        }else{
            return itemA.name.localeCompare(itemB.name)
        }
    })
  
    return (
        <div>
            <div>
            <Filter 
                search = {search}
                getSearch ={getSearch}
                getSortBy ={getSortBy}/>
            </div>
            {formulaDisplay.map(formula => {
                const uniqueKey = `${formula.name}${formula.id}`
                return(
                    <ItemCard 
                        setSelectedPath={setSelectedPath}
                        setSelectedItem={setSelectedItem} 
                        item={formula} 
                        key={uniqueKey} 
                        itemType={itemType}
                    />
                )
            })}
        </div>
    )
}

export default Formula