import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import ItemCard from './ItemCard';


function Diapers ({setItemType, diapers, itemType, setSelectedItem, setSelectedPath}){

    const [search, getSearch] = useState("")
    const [sortBy, getSortBy] = useState("")

    useEffect(() => {
        setItemType("diapers")
    }, [])    
    const diapersDisplay = diapers               
        .filter((diaper) =>{
            return (
                diaper.name.toLowerCase().includes(search.toLowerCase()) || diaper.brand.toLowerCase().includes(search.toLowerCase()) 
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
            {diapersDisplay.map((diaper)=>{
                const uniqueKey = `${diaper.name}${diaper.id}`
                return(
                    <ItemCard 
                        setSelectedItem={setSelectedItem}
                        setSelectedPath={setSelectedPath}
                        key={uniqueKey}    
                        item={diaper}
                        itemType={itemType}
                     />  
                )
            })}
        </div>
    )
}

export default Diapers