import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import ItemCard from './ItemCard';

function Diapers (){
    const [diapers, setDiapers] = useState([])

    const [search, getSearch] = useState("")
    const [sortBy, getSortBy] = useState("")

    useEffect(()=>{
        fetch(`http://localhost:4000/diapers`)
        .then(resp=>resp.json())
        .then(data => {
          setDiapers(data)
        })
      },[])
    
const diapersDisplay = diapers                // created a variable 
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
                return(
                    <>
                        <ItemCard 
                            key={diaper.id}    
                            item={diaper}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default Diapers