import React from 'react';
import {useEffect, useState} from "react"
import Filter from './Filter';
import ItemCard from './ItemCard';

function Formula ({setItemType, formulas}){

    const [search, getSearch] = useState("")
    const [sortBy, getSortBy] = useState("")

    setItemType("formulas")

    const fomulaDisplay = formulas
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
            {fomulaDisplay.map(formula => {
                const uniqueKey = `${formula.name}${formula.id}`
                return(
                    <>
                        <ItemCard item={formula} key={uniqueKey}/>
                   </>
                    )
                })}
        </div>
    )
}

export default Formula