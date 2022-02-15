import React from 'react';
import ListItemFormula from './ListItemFormula';
import {useEffect, useState} from "react"
import Filter from './Filter';
import ItemCard from './ItemCard';

function Formula (){

    const [formulas, setFormulas] = useState([])

    const [search, getSearch] = useState("")
    const [sortBy, getSortBy] = useState("")

    useEffect(() => {
        fetch(`http://localhost:4000/formulas`)
        .then(resp => resp.json())
        .then(data => {
          setFormulas(data)
          console.log(data)
        })
      },[])

      const fomularDisplay = formulas
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
  
    // console.log(formulas)
    // formulas.map(item => console.log(item))

    return (
        <div>
            <div>
            <Filter 
                search = {search}
                getSearch ={getSearch}
                getSortBy ={getSortBy}/>
            </div>
            {fomularDisplay.map(item => {
                return(
                    <>
                        {/* {console.log(item)} */}
                        <ItemCard item={item} key={item.id} />
                   </>
                    )
                })}
            <p>Formula</p>
        </div>
    )
}

export default Formula